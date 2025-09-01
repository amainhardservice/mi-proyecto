'use client';

import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import { FileDown, Loader2 } from 'lucide-react';

interface ContentExporterProps {
  elementId: string;
  title: string;
}

const ContentExporter: React.FC<ContentExporterProps> = ({ elementId, title }) => {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPdf = async () => {
    const contentElement = document.getElementById(elementId);
    if (!contentElement) {
      console.error('Element to export not found!');
      return;
    }

    setIsExporting(true);

    try {
      // Temporarily remove the export button from the content to export
      const exportButton = contentElement.querySelector('[data-export-button]');
      if (exportButton) {
        (exportButton as HTMLElement).style.display = 'none';
      }

      const canvas = await html2canvas(contentElement, {
        scale: 2, // Increase scale for better resolution
        useCORS: true,
        backgroundColor: null, // Use transparent background
        onclone: (document) => {
            // This runs in the cloned document before rendering
            const clonedElement = document.getElementById(elementId);
            if(clonedElement) {
                const button = clonedElement.querySelector('[data-export-button]');
                if (button) {
                   (button as HTMLElement).style.display = 'none';
                }
            }
        }
      });
      
      // Restore the button after canvas is created
       if (exportButton) {
        (exportButton as HTMLElement).style.display = '';
      }


      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'pt',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
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

      pdf.addImage(imgData, 'PNG', x, y, newWidth, newHeight);
      
      const safeFilename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      pdf.save(`${safeFilename}_guide.pdf`);

    } catch (error) {
      console.error('Error exporting PDF:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button 
      data-export-button
      variant="outline" 
      size="sm" 
      onClick={exportToPdf} 
      disabled={isExporting}
      aria-label="Export to PDF"
    >
      {isExporting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileDown className="mr-2 h-4 w-4" />}
      Exportar PDF
    </Button>
  );
};

export default ContentExporter;

    