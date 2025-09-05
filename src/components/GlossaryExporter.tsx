
'use client';

import { useState } from 'react';
import jsPDF from 'jspdf';
import { Button } from '@/components/ui/button';
import { FileDown, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

interface GlossaryExporterProps {
  title: string;
  content: string;
  isGlobal?: boolean;
}

const GlossaryExporter: React.FC<GlossaryExporterProps> = ({ title, content, isGlobal = false }) => {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPdf = async () => {
    setIsExporting(true);
    try {
      const doc = new jsPDF({
          orientation: 'p',
          unit: 'pt',
          format: 'a4'
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 40;
      const maxLineWidth = pageWidth - margin * 2;
      let y = margin;

      const checkPageEnd = (neededHeight: number) => {
        if (y + neededHeight > pageHeight - margin) {
          doc.addPage();
          y = margin;
        }
      };

      // Main Title
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      const titleLines = doc.splitTextToSize(title, maxLineWidth);
      checkPageEnd(titleLines.length * 20 + 20);
      doc.text(titleLines, margin, y);
      y += (titleLines.length * 20) + 20;

      const sections = content.split('\n\n');

      sections.forEach(section => {
        if (!section.trim()) return;

        const lines = section.split('\n');
        const firstLine = lines[0];

        if (firstLine.startsWith('**') && firstLine.endsWith('**')) { // Concept/Modifier
          const conceptTitle = firstLine.substring(2, firstLine.length - 2);
          const conceptDesc = lines.slice(1).join('\n');
          
          checkPageEnd(15);
          y += 5; // Space before concept
          doc.setFontSize(12);
          doc.setFont('helvetica', 'bold');
          const conceptTitleLines = doc.splitTextToSize(conceptTitle, maxLineWidth);
          checkPageEnd(conceptTitleLines.length * 12 + 12);
          doc.text(conceptTitleLines, margin, y);
          y += (conceptTitleLines.length * 12) + 6;

          doc.setFontSize(10);
          doc.setFont('helvetica', 'normal');
          const conceptDescLines = doc.splitTextToSize(conceptDesc, maxLineWidth);
          checkPageEnd(conceptDescLines.length * 10 + 10);
          doc.text(conceptDescLines, margin, y);
          y += (conceptDescLines.length * 10) + 10;

        } else { // Category title
          checkPageEnd(20);
          y += 10; // Space before category
          doc.setFontSize(14);
          doc.setFont('helvetica', 'bold');
          const categoryLines = doc.splitTextToSize(firstLine, maxLineWidth);
          checkPageEnd(categoryLines.length * 14 + 14);
          doc.text(categoryLines, margin, y);
          y += (categoryLines.length * 14) + 8;
        }
      });
      
      const safeFilename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      doc.save(`${safeFilename}_glossary.pdf`);
    } catch (error) {
      console.error("Error exporting glossary to PDF:", error);
      toast({ title: 'Error de Exportación', description: 'Hubo un problema al generar el PDF del glosario.', variant: 'destructive' });
    } finally {
      setIsExporting(false);
    }
  };
  
  if (isGlobal) {
     return (
        <Button 
          onClick={exportToPdf} 
          disabled={isExporting}
          variant="outline"
          size="sm"
          className="w-full"
        >
          {isExporting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileDown className="mr-2 h-4 w-4" />}
          Exportar todo a PDF
        </Button>
      );
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={exportToPdf} 
      disabled={isExporting}
      aria-label="Export to PDF"
    >
      {isExporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}
    </Button>
  );
};

export default GlossaryExporter;
