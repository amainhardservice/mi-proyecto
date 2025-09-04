
import type { Asana } from '@/types';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getYouTubeEmbedUrl } from '@/lib/utils';

type AsanaCardProps = {
  asana: Asana;
};

export function AsanaCard({ asana }: AsanaCardProps) {
  const embedUrl = asana.url_video ? getYouTubeEmbedUrl(asana.url_video) : null;

  return (
    <AccordionItem value={asana.id}>
      <AccordionTrigger className="text-lg hover:no-underline text-left">
        <div className="flex flex-col items-start">
            <span>{asana.nombre_sans}</span>
            <span className="text-sm font-normal text-muted-foreground">{asana.nombre_es}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-4">
        <p className="text-base text-muted-foreground whitespace-pre-wrap">
          {asana.descripcion}
        </p>
        {embedUrl && (
           <div className="relative aspect-video rounded-md overflow-hidden">
             <iframe
                src={embedUrl}
                title={`Video de ${asana.nombre_es}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
           </div>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}
