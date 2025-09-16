
'use client';

import { useState } from 'react';
import jsPDF from 'jspdf';
import { Button } from '@/components/ui/button';
import { FileDown, Loader2 } from 'lucide-react';
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
          // Re-add header on new page if it's a multi-page global export
          if (isGlobal) {
            doc.setFontSize(20);
            doc.setFont('helvetica', 'bold');
            doc.text(title, margin, y);
            y += 30;
          }
        }
      };

      // Main Title
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      const titleLines = doc.splitTextToSize(title, maxLineWidth);
      checkPageEnd(titleLines.length * 20 + 20);
      doc.text(titleLines, margin, y);
      y += (titleLines.length * 20) + 30;

      const entries = content.split('\n\n').filter(Boolean);

      for (const entry of entries) {
        // Check if it's a category title (doesn't start with **)
        if (!entry.startsWith('**')) {
          checkPageEnd(40);
          doc.setFontSize(14);
          doc.setFont('helvetica', 'bold');
          const categoryLines = doc.splitTextToSize(entry, maxLineWidth);
          doc.text(categoryLines, margin, y);
          y += (categoryLines.length * 14) + 15;
          continue;
        }

        // It's a concept block (title + description)
        const parts = entry.split('**');
        if (parts.length < 3) continue;

        // The title is between the first and second '**'
        const conceptTitleRaw = parts[1].trim();
        // The description is everything after the second '**'
        const conceptDescription = parts.slice(2).join('**').trim();

        // Process title to combine Spanish and English parts
        const conceptTitle = conceptTitleRaw.replace(/\n/g, ' ');

        const titleHeight = doc.getTextDimensions(conceptTitle, {maxWidth: maxLineWidth}).h;
        const descHeight = doc.getTextDimensions(conceptDescription, {maxWidth: maxLineWidth}).h;
        checkPageEnd(titleHeight + descHeight + 25);

        // Draw concept title
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        const conceptTitleLines = doc.splitTextToSize(conceptTitle, maxLineWidth);
        doc.text(conceptTitleLines, margin, y);
        y += (conceptTitleLines.length * 12) + 6;

        // Draw concept description
        if (conceptDescription) {
          doc.setFontSize(10);
          doc.setFont('helvetica', 'normal');
          const conceptDescLines = doc.splitTextToSize(conceptDescription, maxLineWidth);
          doc.text(conceptDescLines, margin, y);
          y += (conceptDescLines.length * 10) + 15;
        } else {
            y += 15;
        }
      }

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
