'use client';

import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import { FileDown, Loader2 } from 'lucide-react';
import type { Pose } from '@/types';

interface RouteExporterProps {
  elementId: string;
  title: string;
  posesToExport: string[];
  allPoses: Pose[];
  separateTrees?: boolean;
  buttonText?: string;
}

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
      getAllPrerequisites(pId, allPosesMap).forEach(subP => prereqs.add(subP));
    });
    return Array.from(prereqs);
  };


  const exportToPdf = async () => {
    const contentElement = document.getElementById(elementId);
    if (!contentElement) {
      console.error('Element to export not found!');
      return;
    }

    setIsExporting(true);

    const allPoseNodes = Array.from(contentElement.querySelectorAll('[data-pose-id]')) as HTMLElement[];
    const exportButton = contentElement.querySelector('[data-export-button]');

    // Hide the export button itself
    if (exportButton) {
      (exportButton as HTMLElement).style.display = 'none';
    }

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
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = imgWidth / imgHeight;
            let newWidth = pdfWidth;
            let newHeight = newWidth / ratio;

            if (newHeight > pdfHeight) {
                newHeight = pdfHeight;
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
                const prereqs = getAllPrerequisites(poseId, allPosesById);
                const nodesToKeep = [poseId, ...prereqs];
                
                const nodesToHide = allPoseNodes.filter(node => !nodesToKeep.includes(node.dataset.poseId || ''));
                nodesToHide.forEach(node => node.style.visibility = 'hidden');
                
                const canvas = await html2canvas(contentElement, { scale: 2, useCORS: true, backgroundColor: null });
                addImageToPdf(canvas);
                
                nodesToHide.forEach(node => node.style.visibility = 'visible');
            }
        } else {
            const nodesToHide = allPoseNodes.filter(node => !posesToExport.includes(node.dataset.poseId || ''));
            nodesToHide.forEach(node => node.style.visibility = 'hidden');

            const canvas = await html2canvas(contentElement, { scale: 2, useCORS: true, backgroundColor: null });
            addImageToPdf(canvas);

            nodesToHide.forEach(node => node.style.visibility = 'visible');
        }

        const safeFilename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        pdf.save(`${safeFilename}.pdf`);

    } catch (error) {
        console.error('Error exporting PDF:', error);
    } finally {
      // Restore visibility of all nodes
      allPoseNodes.forEach(node => node.style.visibility = 'visible');
       if (exportButton) {
        (exportButton as HTMLElement).style.display = '';
      }
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
