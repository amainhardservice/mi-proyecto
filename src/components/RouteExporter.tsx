'use client';

import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import { FileDown, Loader2 } from 'lucide-react';
import type { Pose } from '@/types';
import { createRoot } from 'react-dom/client';
import PoseExplorer from './PoseExplorer';
import { Card, CardContent } from './ui/card';

interface RouteExporterProps {
  elementId: string;
  title: string;
  posesToExport: string[];
  allPoses: Pose[];
  separateTrees?: boolean;
  buttonText?: string;
}

const addPoseContentToPdf = (doc: jsPDF, pose: Pose, allPoses: Record<string, Pose>) => {
    const margin = 40;
    const pageWidth = doc.internal.pageSize.getWidth();
    const maxLineWidth = pageWidth - margin * 2;
    let y = margin;

    const addText = (text: string, size: number, style: 'normal' | 'bold' | 'italic', spaceBefore = 0, spaceAfter = 0) => {
        if (!text) return;

        const lines = doc.splitTextToSize(text, maxLineWidth);
        const textHeight = lines.length * size * 1.2 + spaceBefore + spaceAfter;

        if (y + textHeight > doc.internal.pageSize.getHeight() - margin) {
            doc.addPage();
            y = margin;
        }

        y += spaceBefore;
        doc.setFontSize(size);
        doc.setFont('helvetica', style);
        doc.text(lines, margin, y);
        y += (lines.length * size * 1.2) + spaceAfter;
    };
    
    doc.addPage();
    addText(pose.nombre.replace('\n', ' '), 20, 'bold', 0, 10);
    addText(pose.descripcion, 12, 'italic', 0, 15);

    if (pose.narrativa_detallada) {
        addText('Narrativa Detallada', 14, 'bold', 5, 5);
        // Replace markdown-like bold with a marker for splitting, then clean it up.
        const narrativeText = pose.narrativa_detallada.replace(/\*\*(.*?)\*\*/g, '$1').replace(/^\s*[\r\n]/gm, '');
        addText(narrativeText, 10, 'normal');
    }
    
    const addList = (title: string, items: string[] | undefined) => {
      if(items && items.length > 0) {
        y += 10;
        addText(title, 11, 'bold', 0, 2);
        items.forEach(item => addText(`- ${item}`, 10, 'normal'));
      }
    }

    if (pose.musculos) {
        y += 10;
        addText('Músculos Involucrados', 14, 'bold', 5, 5);
        addList('Base:', pose.musculos.base);
        addList('Volador:', pose.musculos.volador);
    }
    
    if(pose.calibracion) {
        y += 10;
        addText('Puntos de Calibración', 14, 'bold', 5, 5);
        addList('Base:', pose.calibracion.base);
        addList('Volador:', pose.calibracion.volador);
        addList('Observador:', pose.calibracion.observador);
    }
};


const RouteExporter: React.FC<RouteExporterProps> = ({ 
    elementId, 
    title, 
    posesToExport,
    allPoses,
    separateTrees = false,
    buttonText = "Imprimir Selección" 
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const allPosesById = allPoses.reduce((acc, pose) => {
      acc[pose.id] = pose;
      return acc;
  }, {} as Record<string, Pose>);

  const getAllPrerequisites = (poseId: string, allPosesMap: Record<string, Pose>): string[] => {
    const pose = allPosesMap[poseId];
    if (!pose || !pose.prerequisites || pose.prerequisites.length === 0) {
      return [];
    }
    const prereqs = new Set<string>(pose.prerequisites);
    pose.prerequisites.forEach(pId => {
      if (allPosesMap[pId]) { // Check if prerequisite exists
          getAllPrerequisites(pId, allPosesMap).forEach(subP => prereqs.add(subP));
      }
    });
    return Array.from(prereqs);
  };


  const exportToPdf = async () => {
    const originalContentElement = document.getElementById(elementId);
    if (!originalContentElement) {
      console.error('Element to export not found!');
      return;
    }

    setIsExporting(true);

    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.width = `${originalContentElement.offsetWidth}px`;
    document.body.appendChild(tempContainer);
    
    const root = createRoot(tempContainer);

    try {
        const pdf = new jsPDF({
            orientation: 'p',
            unit: 'pt',
            format: 'a4',
        });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        let isFirstPage = true;

        const addImageToPdf = (canvas: HTMLCanvasElement) => {
            const imgData = canvas.toDataURL('image/png', 0.9);
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = imgWidth / imgHeight;
            
            let newWidth = pdfWidth - 40;
            let newHeight = newWidth / ratio;

            if (newHeight > pdfHeight - 40) {
                newHeight = pdfHeight - 40;
                newWidth = newHeight * ratio;
            }
            
            const x = (pdfWidth - newWidth) / 2;
            const y = (pdfHeight - newHeight) / 2;
            
            if (!isFirstPage) {
                pdf.addPage();
            }
            pdf.addImage(imgData, 'PNG', x, y, newWidth, newHeight);
            isFirstPage = false;
        };
        
        if (separateTrees) {
            for (const poseId of posesToExport) {
                const currentPose = allPosesById[poseId];
                if (!currentPose) continue;

                const prereqs = getAllPrerequisites(poseId, allPosesById);
                const nodesToShow = [poseId, ...prereqs];
                
                const TreeComponent = (
                     <Card>
                        <CardContent className="p-4">
                           <PoseExplorer
                              poses={allPoses.filter(p => nodesToShow.includes(p.id))}
                              allPoses={allPoses}
                              concepts={[]}
                              highlightedPoseIds={nodesToShow}
                            />
                        </CardContent>
                     </Card>
                );
                
                await new Promise<void>(resolve => {
                    root.render(TreeComponent);
                    setTimeout(async () => {
                       const canvas = await html2canvas(tempContainer, { scale: 2, useCORS: true, backgroundColor: null });
                       addImageToPdf(canvas);
                       addPoseContentToPdf(pdf, currentPose, allPosesById);
                       resolve();
                    }, 500);
                });
            }
        } else {
            const nodesToShow = [...new Set(posesToExport.flatMap(id => [id, ...getAllPrerequisites(id, allPosesById)]))];
            const TreeComponent = (
                 <Card>
                    <CardContent className="p-4">
                       <PoseExplorer
                          poses={allPoses.filter(p => nodesToShow.includes(p.id))}
                          allPoses={allPoses}
                          concepts={[]}
                          highlightedPoseIds={posesToExport}
                        />
                    </CardContent>
                 </Card>
            );
             await new Promise<void>(resolve => {
                root.render(TreeComponent);
                setTimeout(async () => {
                   const canvas = await html2canvas(tempContainer, { scale: 2, useCORS: true, backgroundColor: null });
                   addImageToPdf(canvas);
                   resolve();
                }, 500);
            });
        }

        const safeFilename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        pdf.save(`${safeFilename}.pdf`);

    } catch (error) {
        console.error('Error exporting PDF:', error);
    } finally {
        root.unmount();
        document.body.removeChild(tempContainer);
        setIsExporting(false);
    }
  };

  return (
    <Button 
      data-export-button
      variant="default" 
      size="sm" 
      onClick={exportToPdf} 
      disabled={isExporting}
      aria-label="Export Selection to PDF"
    >
      {isExporting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileDown className="mr-2 h-4 w-4" />}
      {buttonText}
    </Button>
  );
};

export default RouteExporter;
