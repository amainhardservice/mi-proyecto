'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import type { Pose, PoseWithImage, Concept } from '@/types';
import { useAppContext } from '@/contexts/AppContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Binary, Video, Image as ImageIcon, FileDown, Loader2, Tags, ArrowRight, ArrowLeft, FlipHorizontal, Workflow, Map, Plus, List, ChevronDown, Bot, Copy, Share2 } from 'lucide-react';
import { cn, getYouTubeEmbedUrl } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from './ui/button';
import { exportPoseToPdf, exportPrerequisitesToPdf } from '@/lib/pdf';
import { toast } from '@/hooks/use-toast';
import DetailedDescription from './DetailedDescription';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

type PoseDetailDialogProps = {
  pose: PoseWithImage | null;
  allPoses: Pose[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  concepts: Concept[];
};

const getDisplayName = (pose: Pose, displayMode: 'es' | 'en' | 'both'): string => {
    if (!pose || !pose.nombre) return '';
    const parts = pose.nombre.split('\n');
    const esName = parts[0];
    const enName = parts.length > 1 ? parts[1].replace(/[()]/g, '') : esName;
    
    switch (displayMode) {
      case 'en': 
        return enName || esName;
      case 'es': 
        return esName;
      case 'both':
        if (enName && enName !== esName) {
          return `${esName} / ${enName}`;
        }
        return esName;
      default:
        return esName;
    }
};


function MediaCarouselItem({
  type,
  src,
  alt,
}: {
  type: 'image' | 'video';
  src: string;
  alt: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped((prev) => !prev);
  };

  if (type === 'video') {
    const embedUrl = getYouTubeEmbedUrl(src);
    if (!embedUrl) return null;
    return (
      <CarouselItem>
        <div className="p-1">
          <Card>
            <CardContent className="relative aspect-video flex items-center justify-center p-0 overflow-hidden rounded-lg">
              <iframe
                className="w-full h-full"
                src={embedUrl}
                title={alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    );
  }

  // type === 'image'
  return (
    <CarouselItem>
      <div className="p-1">
        <Card>
          <CardContent className="relative aspect-video flex items-center justify-center p-0 overflow-hidden rounded-lg group">
            <Image
              src={src}
              alt={alt}
              fill
              className={cn(
                'object-cover transition-transform duration-300',
                isFlipped && 'transform -scale-x-100'
              )}
              data-ai-hint="acroyoga pose"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
              onClick={toggleFlip}
            >
              <FlipHorizontal className="h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}


function MediaCarousel({ images, videos, altPrefix }: { images: string[], videos: string[], altPrefix: string }) {
  if (images.length === 0 && videos.length === 0) {
    return (
        <div className="text-center text-muted-foreground p-4">
            <Binary size={48} className="mx-auto mb-2" />
            <p>No hay contenido visual disponible.</p>
        </div>
    );
  }

  const mediaItems = [
    ...videos.map((url, i) => ({ type: 'video' as const, src: url, id: `video-${i}` })),
    ...images.map((url, i) => ({ type: 'image' as const, src: url, id: `image-${i}` })),
  ];


  return (
    <Carousel className="w-full">
      <CarouselContent>
        {mediaItems.map((item, index) => (
           <MediaCarouselItem 
                key={item.id}
                type={item.type}
                src={item.src}
                alt={`${altPrefix} ${item.type} ${index + 1}`}
           />
        ))}
      </CarouselContent>
      {mediaItems.length > 1 && (
        <>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
        </>
      )}
    </Carousel>
  );
}

const ConnectedTransitions = ({ pose, allPoses, nameDisplay, onSelectTransition }: { pose: Pose, allPoses: Pose[], nameDisplay: 'es' | 'en' | 'both', onSelectTransition: (pose: Pose) => void }) => {
    const transitions = allPoses.filter(p => p.type === 'Transition' || p.type === 'Flow');

    const outgoing = transitions.filter(t => t.originPoses?.includes(pose.id));
    const incoming = transitions.filter(t => t.destinationPoses?.includes(pose.id));

    if (outgoing.length === 0 && incoming.length === 0) return null;

    return (
        <section className="mt-6">
            <h3 className="font-semibold text-xl text-primary mb-4">Transiciones Conectadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold flex items-center gap-2 mb-2">
                        <ArrowRight className="h-4 w-4 text-accent" />
                        De Salida
                    </h4>
                    {outgoing.length > 0 ? (
                        <div className="space-y-2">
                            {outgoing.map(t => (
                                <Button key={t.id} variant="secondary" className="w-full justify-start" onClick={() => onSelectTransition(t)}>
                                    {getDisplayName(t, nameDisplay)}
                                </Button>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-muted-foreground">No hay transiciones de salida definidas.</p>
                    )}
                </div>
                <div>
                     <h4 className="font-semibold flex items-center gap-2 mb-2">
                        <ArrowLeft className="h-4 w-4 text-primary" />
                        De Llegada
                    </h4>
                    {incoming.length > 0 ? (
                         <div className="space-y-2">
                            {incoming.map(t => (
                                <Button key={t.id} variant="outline" className="w-full justify-start" onClick={() => onSelectTransition(t)}>
                                    {getDisplayName(t, nameDisplay)}
                                </Button>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-muted-foreground">No hay transiciones de llegada definidas.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

const PrerequisitesSection = ({ pose, allPoses, nameDisplay, onSelectPrerequisite }: { pose: Pose, allPoses: Pose[], nameDisplay: 'es' | 'en' | 'both', onSelectPrerequisite: (pose: Pose) => void }) => {
    if (!pose.prerequisites || pose.prerequisites.length === 0) return null;

    const prereqPoses = pose.prerequisites
        .map(id => allPoses.find(p => p.id === id))
        .filter((p): p is Pose => !!p);

    if (prereqPoses.length === 0) return null;

    return (
        <section className="mt-6">
            <h3 className="font-semibold text-xl text-primary mb-4">Prerrequisitos</h3>
            <div className="flex flex-wrap gap-2">
                {prereqPoses.map(prereq => (
                    <Button key={prereq.id} variant="outline" size="sm" onClick={() => onSelectPrerequisite(prereq)}>
                        {getDisplayName(prereq, nameDisplay)}
                    </Button>
                ))}
            </div>
        </section>
    );
};


export function PoseDetailDialog({
  pose,
  allPoses,
  open,
  onOpenChange,
  concepts,
}: PoseDetailDialogProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [selectedConnectedPose, setSelectedConnectedPose] = useState<PoseWithImage | null>(null);
  const [isPromptDialogOpen, setIsPromptDialogOpen] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const { nameDisplay, addToSequence, addWithPrerequisites, addDirectPrerequisites } = useAppContext();

  useEffect(() => {
    if (!open) {
      setSelectedConnectedPose(null);
      setIsPromptDialogOpen(false);
    }
  }, [open]);
  
  if (!pose) return null;

  const handleExport = async (type: 'pose' | 'prereqs') => {
    if (!pose) return;
    setIsExporting(true);
    try {
        if (type === 'prereqs') {
            await exportPrerequisitesToPdf(pose, allPoses, nameDisplay);
        } else {
            await exportPoseToPdf(pose, nameDisplay);
        }
    } catch(error) {
        console.error("Error exporting PDF:", error);
        toast({ title: 'Error de Exportación', description: 'Hubo un problema al generar el PDF. Por favor, inténtalo de nuevo.', variant: 'destructive' });
    } finally {
        setIsExporting(false);
    }
  };

  const handleSelectConnectedPose = (connectedPose: Pose) => {
      setSelectedConnectedPose(connectedPose as PoseWithImage);
  }

  const handleGeneratePrompt = () => {
    const prereqPoses = pose.prerequisites
      .map(id => allPoses.find(p => p.id === id))
      .filter((p): p is Pose => !!p);
    
    const prereqNames = prereqPoses.length > 0 ? prereqPoses.map(p => getDisplayName(p, 'en')).join(', ') : 'None';
    
    const poseName = ['Transition', 'Flow', 'Washing Machine'].includes(pose.type)
        ? pose.nombre.replace(/\n/g, ' → ')
        : getDisplayName(pose, 'en');

    const promptText = `
Eres un experto entrenador de Acroyoga de clase mundial. Tu tarea es crear un plan de entrenamiento completo, progresivo y seguro para alcanzar la postura objetivo: "${poseName}".

**INFORMACIÓN DE LA POSTURA (GUION DE PRUEBA):**
*   **Postura Objetivo:** ${poseName}
*   **Nivel:** ${pose.nivel}
*   **Prerrequisitos Sugeridos:** ${prereqNames}
*   **Descripción:** ${pose.descripcion}

**TU MISIÓN:**
Genera un plan de entrenamiento dividido en dos secciones principales: **1. Acondicionamiento Individual** y **2. Progresión en Pareja**.

**FORMATO DE SALIDA (MUY IMPORTANTE - INSTRUCCIÓN ESTRICTA):**
Debes presentar CADA ejercicio o postura del plan en un formato específico compatible con nuestro constructor de secuencias. **Debes priorizar el uso de los nombres en INGLÉS para cada ejercicio o postura.** No debe haber texto explicativo fuera de este formato. Si sugieres un ejercicio de transición, debes expresarlo como "Origen → Destino".
Existen tres formatos posibles por línea, separados por '::':

1.  **Formato por Tiempo:** \`Nombre del Ejercicio en Inglés :: segundos\`
    *   Ejemplo: \`Front Bird :: 30\`

2.  **Formato por Repeticiones:** \`Nombre del Ejercicio en Inglés :: cantidad :: segs/repetición\`
    *   Ejemplo: \`Bodyweight Squats :: 15 :: 3\`

3.  **Formato con Notas (opcional):** Las notas SIEMPRE deben ir al final, después de los números, precedidas por '::'.
    *   Ejemplo con tiempo y nota: \`Twisting Seated Stretch :: 30 :: (15s por lado)\`
    *   Ejemplo con repeticiones y nota: \`Side Plank Hip Lifts :: 24 :: 2 :: (12 por lado)\`

**SECCIONES DEL PLAN:**

**1. Plan de Acondicionamiento Individual:**
Ejercicios que una persona puede hacer sola para desarrollar la fuerza, flexibilidad, equilibrio y conciencia corporal necesarios.

**2. Plan de Progresión en Pareja:**
Ejercicios y posturas para practicar con un compañero que construyan de manera segura hacia la postura objetivo. Incluye posturas de calentamiento, calibraciones, progresiones y la postura final.

**INSTRUCCIÓN CRÍTICA DE EXPERTO:**
La información proporcionada arriba es un "guion de prueba". Como experto, si detectas que la lista de prerrequisitos es incompleta, que la descripción es ambigua o que existe una progresión más segura y efectiva, **confía en tu instinto y conocimiento**. Tienes la autonomía para modificar, añadir o reordenar los pasos para crear el mejor plan de entrenamiento posible. Tu objetivo es la seguridad y la eficacia, incluso si eso significa contradecir ligeramente el guion inicial.
`.trim();

    setGeneratedPrompt(promptText);
    setIsPromptDialogOpen(true);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt).then(() => {
        toast({ title: "¡Prompt Copiado!", description: "El prompt ha sido copiado al portapapeles." });
    }, (err) => {
        toast({ title: "Error al Copiar", description: "No se pudo copiar el prompt.", variant: "destructive" });
        console.error('Could not copy text: ', err);
    });
  };

  const isAcroPose = pose.type !== 'Thai-Massage';
  const isStaticPose = !['Transition', 'Flow', 'Washing Machine'].includes(pose.type);
    
  const allImages = [pose.url_imagen, ...(pose.gallery_images || [])].filter(Boolean) as string[];
  const allVideos = [pose.url_video, ...(pose.gallery_videos || [])].filter(Boolean) as string[];

  const MainDialogContent = (
    <DialogContent className="sm:max-w-4xl max-h-[90vh] flex flex-col">
      <DialogHeader>
        <div className="flex justify-between items-start">
          <div className="flex-grow">
            <DialogTitle className="text-3xl font-headline text-primary">
              {getDisplayName(pose, nameDisplay)}
            </DialogTitle>
          </div>
          <Badge variant="secondary" className="bg-accent text-accent-foreground text-sm shrink-0 ml-4">
            Nivel {pose.nivel}
          </Badge>
        </div>
         {pose.tags && pose.tags.length > 0 && (
              <div className="flex items-center gap-2 pt-2 flex-wrap">
                  <Tags className="h-4 w-4 text-muted-foreground" />
                  {pose.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs font-normal">{tag}</Badge>
                  ))}
              </div>
          )}
      </DialogHeader>
      
      <DialogFooter className="flex-wrap items-center gap-2 pt-2 sm:justify-start">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" disabled={isExporting}>
                    {isExporting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileDown className="mr-2 h-4 w-4" />}
                    Exportar PDF
                    <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => handleExport('pose')}>
                <FileDown className="mr-2 h-4 w-4" />
                <span>Imprimir Postura Actual</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('prereqs')}>
                <Share2 className="mr-2 h-4 w-4" />
                <span>Imprimir Ruta de Prerrequisitos</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleGeneratePrompt} 
            aria-label="Generate AI Prompt"
          >
            <Bot className="mr-2 h-4 w-4" />
            Generar Prompt para IA
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Workflow className="mr-2 h-4 w-4" />
                Añadir a Secuencia
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => addToSequence(pose)}>
                <Plus className="mr-2 h-4 w-4" />
                <span>Añadir Postura Actual</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => addDirectPrerequisites(pose)}>
                <List className="mr-2 h-4 w-4" />
                <span>Añadir Prerrequisitos Directos</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => addWithPrerequisites(pose)}>
                <Map className="mr-2 h-4 w-4" />
                <span>Crear Ruta Completa</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
      </DialogFooter>

      <div className="flex-1 overflow-y-auto pr-4 -mr-6">
         <div className="space-y-6">
            <section 
              className="relative w-full rounded-lg bg-muted/50 flex items-center justify-center"
            >
              <MediaCarousel 
                  images={allImages}
                  videos={allVideos}
                  altPrefix={pose.id}
               />
            </section>

            <Tabs defaultValue="description" className="w-full">
               <TabsList className={cn("grid w-full", isAcroPose ? "grid-cols-3" : "grid-cols-1")}>
                <TabsTrigger value="description">Descripción</TabsTrigger>
                {isAcroPose && <TabsTrigger value="muscles">Músculos</TabsTrigger>}
                {isAcroPose && <TabsTrigger value="calibration">Calibración</TabsTrigger>}
              </TabsList>
              <TabsContent value="description" className="mt-4 text-base text-foreground/90">
                 <div className="italic text-muted-foreground mb-4">{pose.descripcion}</div>
                 <DetailedDescription content={pose.narrativa_detallada} concepts={concepts} poses={allPoses} />
                 <PrerequisitesSection 
                    pose={pose} 
                    allPoses={allPoses} 
                    nameDisplay={nameDisplay}
                    onSelectPrerequisite={handleSelectConnectedPose} 
                 />
              </TabsContent>
               {isAcroPose && (
                  <>
                      <TabsContent value="muscles" className="mt-4">
                          <div className="space-y-4">
                          {pose.musculos?.base && pose.musculos.base.length > 0 && (
                              <div>
                                  <h4 className="font-semibold text-primary">Base:</h4>
                                  <ul className="list-disc list-inside text-muted-foreground">
                                  {pose.musculos.base.map((m, i) => <li key={i}>{m}</li>)}
                                  </ul>
                              </div>
                          )}
                          {pose.musculos?.volador && pose.musculos.volador.length > 0 && (
                              <div>
                                  <h4 className="font-semibold text-primary">Volador:</h4>
                                  <ul className="list-disc list-inside text-muted-foreground">
                                  {pose.musculos.volador.map((m, i) => <li key={i}>{m}</li>)}
                                  </ul>
                              </div>
                          )}
                          </div>
                      </TabsContent>
                      <TabsContent value="calibration" className="mt-4">
                      <div className="space-y-4">
                          {pose.calibracion?.base && pose.calibracion.base.length > 0 && (
                              <div>
                              <h4 className="font-semibold text-primary">Base:</h4>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                  {pose.calibracion.base.map((c, i) => <li key={i}>{c}</li>)}
                              </ul>
                              </div>
                          )}
                          {pose.calibracion?.volador && pose.calibracion.volador.length > 0 && (
                              <div>
                              <h4 className="font-semibold text-primary">Volador:</h4>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                  {pose.calibracion.volador.map((c, i) => <li key={i}>{c}</li>)}
                              </ul>
                              </div>
                          )}
                          {pose.calibracion?.observador && pose.calibracion.observador.length > 0 && (
                              <div>
                              <h4 className="font-semibold text-primary">Observador:</h4>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                  {pose.calibracion.observador.map((c, i) => <li key={i}>{c}</li>)}
                              </ul>
                              </div>
                          )}
                      </div>
                      </TabsContent>
                  </>
              )}
            </Tabs>
            {isStaticPose && (
                <ConnectedTransitions 
                    pose={pose}
                    allPoses={allPoses}
                    nameDisplay={nameDisplay}
                    onSelectTransition={handleSelectConnectedPose}
                />
            )}
         </div>
      </div>
    </DialogContent>
  );

  return (
    <>
      <Dialog open={open && !selectedConnectedPose && !isPromptDialogOpen} onOpenChange={onOpenChange}>
        {MainDialogContent}
      </Dialog>
      
      <Dialog open={isPromptDialogOpen} onOpenChange={setIsPromptDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Prompt para IA Generativa</DialogTitle>
            <DialogDescription>
              Copia este prompt y pégalo en tu IA de texto favorita (como Gemini, ChatGPT, etc.) para generar un plan de entrenamiento personalizado.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="ai-prompt">Prompt Generado</Label>
              <Textarea
                id="ai-prompt"
                readOnly
                value={generatedPrompt}
                className="min-h-[300px] text-xs bg-muted"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleCopyPrompt}>
                <Copy className="mr-2 h-4 w-4" />
                Copiar Prompt
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* This is a nested dialog for showing transition details */}
      <PoseDetailDialog
        pose={selectedConnectedPose}
        allPoses={allPoses}
        open={!!selectedConnectedPose}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setSelectedConnectedPose(null);
          }
        }}
        concepts={concepts}
      />
    </>
  );
}
