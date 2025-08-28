'use client';

import { useState } from 'react';
import jsPDF from 'jspdf';
import { Button } from '@/components/ui/button';
import { FileDown, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GlossaryExporterProps {
  title: string;
  content: string;
  isGlobal?: boolean;
}

const GlossaryExporter: React.FC<GlossaryExporterProps> = ({ title, content, isGlobal = false }) => {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPdf = () => {
    setIsExporting(true);

    const doc = new jsPDF({
        orientation: 'p',
        unit: 'pt',
        format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40;
    const maxLineWidth = pageWidth - margin * 2;

    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin, margin);
    
    let y = margin + 40; // Increased space after main title

    const lines = content.split('\n');

    lines.forEach(line => {
      if (y > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        y = margin;
      }
      
      const isCategoryTitle = !line.startsWith('**') && !line.startsWith('  ') && line.trim().length > 0;
      const isConceptTitle = line.startsWith('**') && line.endsWith('**');
      
      if (isCategoryTitle) {
        y += 10; // Add space before a new category
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        const splitTitle = doc.splitTextToSize(line, maxLineWidth);
        doc.text(splitTitle, margin, y);
        y += (splitTitle.length * 14) + 8;
      } else if (isConceptTitle) {
        y += 5; // Add a bit of space before a concept
        const titleText = line.substring(2, line.length - 2);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        const splitTitle = doc.splitTextToSize(titleText, maxLineWidth);
        doc.text(splitTitle, margin, y);
        y += (splitTitle.length * 12) + 6;
      } else {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        const splitText = doc.splitTextToSize(line, maxLineWidth);
        doc.text(splitText, margin, y);
        y += (splitText.length * 10) + 4;
      }
    });

    const safeFilename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`${safeFilename}_glossary.pdf`);
    
    setIsExporting(false);
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
