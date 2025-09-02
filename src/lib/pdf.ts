

'use client';
import jsPDF from 'jspdf';
import type { Pose } from '@/types';
import { toast } from '@/hooks/use-toast';

type NameDisplay = 'es' | 'en' | 'both';

const getDisplayName = (pose: Pose, displayMode: NameDisplay): string => {
    const parts = pose.nombre.split('\n');
    const esName = parts[0];
    const enName = parts[1] || '';
    switch (displayMode) {
      case 'en': return enName.replace(/[()]/g, '') || esName;
      case 'es': return esName;
      default: return pose.nombre;
    }
};

const getAcroLevelTitle = (level: number) => {
    switch (level) {
        case 1: return "Nivel 1: Introducción";
        case 2: return "Nivel 2: Básico";
        case 2.5: return "Transiciones";
        case 3: return "Nivel 3: Transiciones";
        case 4: return "Nivel 4: Intermedio";
        case 5: return "Nivel 5: Washing Machines";
        case 6: return "Nivel 6: Icarian Básico";
        case 7: return "Nivel 7: Icarian Intermedio";
        case 8: return "Nivel 8: Standing Básico";
        case 9: return "Nivel 9: Standing Intermedio";
        case 10: return "Nivel 10: Standing Avanzado";
        case 11: return "Posturas Terapéuticas";
        default: return `Nivel ${level}`;
    }
};

const addImageToPdf = async (doc: jsPDF, url: string, x: number, y: number, width: number, height: number): Promise<boolean> => {
    try {
        // Use the proxy to fetch the image
        const proxyUrl = `/api/image-proxy?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        if (!response.ok) {
            console.error(`Failed to fetch image via proxy: ${url}, status: ${response.status}`);
            return false;
        }
        const blob = await response.blob();
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onload = () => {
                const dataUrl = reader.result as string;
                try {
                    // Determine image format from blob type
                    const format = (blob.type.split('/')[1] || 'jpeg').toUpperCase();
                    doc.addImage(dataUrl, format, x, y, width, height);
                    resolve(true);
                } catch (e) {
                    console.error(`jsPDF error adding image: ${url}`, e);
                    reject(e);
                }
            };
            reader.onerror = (error) => {
                console.error(`FileReader error for image: ${url}`, error);
                reject(error);
            };
            reader.readAsDataURL(blob);
        });
    } catch (e) {
        console.error(`Network or CORS error for image: ${url}`, e);
        return false;
    }
}


export async function exportPoseToPdf(pose: Pose) {
    const doc = new jsPDF({
        orientation: 'p',
        unit: 'pt',
        format: 'a4'
    });

    await exportPoseToPdfPage(doc, pose, 40);

    const safeFilename = pose.nombre.split('\n')[0].replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`${safeFilename}_guide.pdf`);
}

export async function exportRouteToPdf(poses: Pose[], title: string, nameDisplay: NameDisplay) {
    const doc = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' });

    // Title page
    doc.setFontSize(32);
    doc.text(title, doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() / 2, { align: 'center' });

    for (const pose of poses) {
        doc.addPage();
        await exportPoseToPdfPage(doc, pose, 40);
    }
    
    const safeFilename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`${safeFilename}_detailed.pdf`);
}


async function exportPoseToPdfPage(doc: jsPDF, pose: Pose, initialY: number) {
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40;
    const maxLineWidth = pageWidth - margin * 2;
    let y = initialY;

    // Title
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    const titleLines = doc.splitTextToSize(pose.nombre.split('\n').join(' / '), maxLineWidth);
    doc.text(titleLines, margin, y);
    y += (titleLines.length * 24);

    // Level Badge
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Nivel ${pose.nivel}`, pageWidth - margin, y - (titleLines.length * 24), { align: 'right' });
    y += 20;

    // Image
    if (pose.url_imagen) {
        const imgWidth = 300;
        const imgHeight = 200;
        const imgX = (pageWidth - imgWidth) / 2;
        const added = await addImageToPdf(doc, pose.url_imagen, imgX, y, imgWidth, imgHeight);
        if (added) {
            y += imgHeight + 20;
        } else {
             doc.setFontSize(10);
             doc.setFont('helvetica', 'italic');
             doc.text('(Error al cargar la imagen)', imgX + imgWidth / 2, y + imgHeight / 2, { align: 'center' });
             y += imgHeight + 20;
        }
    }
    
    // Description
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Descripción', margin, y);
    y += 20;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const descriptionLines = doc.splitTextToSize(pose.descripcion, maxLineWidth);
    doc.text(descriptionLines, margin, y);
    y += (descriptionLines.length * 10) + 10;
    if (pose.narrativa_detallada) {
        const narrativeLines = doc.splitTextToSize(pose.narrativa_detallada.replace(/\*\*/g, ''), maxLineWidth);
        doc.text(narrativeLines, margin, y);
        y += (narrativeLines.length * 10) + 20;
    }

    const checkPageEnd = (neededHeight = 20) => {
        if (y > doc.internal.pageSize.getHeight() - margin - neededHeight) {
            doc.addPage();
            y = margin;
        }
    };

    const isAcroPose = pose.type !== 'Thai-Massage';
    if (isAcroPose) {
        // Muscles
        if (pose.musculos) {
            checkPageEnd(50);
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text('Músculos', margin, y);
            y += 20;
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            if (pose.musculos.base.length > 0) {
                checkPageEnd();
                doc.setFont('helvetica', 'bold');
                doc.text('Base:', margin, y);
                y += 12;
                doc.setFont('helvetica', 'normal');
                pose.musculos.base.forEach(item => {
                    checkPageEnd();
                    doc.text(`• ${item}`, margin + 10, y);
                    y += 12;
                });
            }
            if (pose.musculos.volador.length > 0) {
                checkPageEnd();
                doc.setFont('helvetica', 'bold');
                doc.text('Volador:', margin, y);
                y += 12;
                doc.setFont('helvetica', 'normal');
                pose.musculos.volador.forEach(item => {
                    checkPageEnd();
                    doc.text(`• ${item}`, margin + 10, y);
                    y += 12;
                });
            }
            y += 10;
        }

        // Calibration
        if (pose.calibracion) {
            checkPageEnd(50);
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text('Calibración', margin, y);
            y += 20;
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            ['base', 'volador', 'observador'].forEach(role => {
                const items = pose.calibracion?.[role as keyof typeof pose.calibracion];
                if (items && items.length > 0) {
                    checkPageEnd();
                    doc.setFont('helvetica', 'bold');
                    doc.text(`${role.charAt(0).toUpperCase() + role.slice(1)}:`, margin, y);
                    y += 12;
                    doc.setFont('helvetica', 'normal');
                    items.forEach(item => {
                        checkPageEnd();
                        doc.text(`• ${item}`, margin + 10, y);
                        y += 12;
                    });
                }
            });
        }
    }
}

export async function exportVisualTreeToPdf(poses: Pose[], nameDisplay: NameDisplay, title: string) {
    const doc = new jsPDF({ orientation: 'l', unit: 'pt', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 30;
    let y = margin;
    let x = margin;

    // Main Title
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text(title, pageWidth / 2, y, { align: 'center' });
    y += 40;

    const posesByLevel = poses.reduce((acc, pose) => {
        const level = pose.nivel;
        if (!acc[level]) acc[level] = [];
        acc[level].push(pose);
        return acc;
    }, {} as Record<number, Pose[]>);

    const sortedLevels = Object.keys(posesByLevel).map(Number).sort((a, b) => a - b);
    
    const columnWidth = 180;
    const cardHeight = 120;
    const cardWidth = 150;
    const imgHeight = 80;

    for (const level of sortedLevels) {
        if (x + columnWidth > pageWidth - margin) {
            doc.addPage();
            x = margin;
            y = margin + 40; // Reset y for new page, leaving space for title
            doc.setFontSize(24);
            doc.setFont('helvetica', 'bold');
            doc.text(title, pageWidth / 2, margin, { align: 'center' });
        }
        
        let currentY = y;
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(getAcroLevelTitle(level), x, currentY);
        currentY += 20;

        for (const pose of posesByLevel[level]) {
            if (currentY + cardHeight > pageHeight - margin) {
                x += columnWidth;
                currentY = y;
                if (x + columnWidth > pageWidth - margin) {
                    doc.addPage();
                    x = margin;
                    currentY = margin + 40;
                    doc.setFontSize(24);
                    doc.setFont('helvetica', 'bold');
                    doc.text(title, pageWidth / 2, margin, { align: 'center' });
                }
                 doc.setFontSize(14);
                 doc.setFont('helvetica', 'bold');
                 doc.text(getAcroLevelTitle(level), x, currentY);
                 currentY += 20;
            }
            
            // Draw card content
            const cardX = x;
            const cardY = currentY;

            // Add image
            if (pose.url_imagen) {
                 const added = await addImageToPdf(doc, pose.url_imagen, cardX, cardY, cardWidth, imgHeight);
                 if (!added) {
                    doc.setFontSize(8);
                    doc.setFont('helvetica', 'italic');
                    doc.text('(imagen no disponible)', cardX + cardWidth/2, cardY + imgHeight/2, { align: 'center' });
                 }
            } else {
                 doc.setFontSize(8);
                 doc.setFont('helvetica', 'italic');
                 doc.text('(sin imagen)', cardX + cardWidth/2, cardY + imgHeight/2, { align: 'center' });
            }

            // Add pose name
            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            const poseName = getDisplayName(pose, nameDisplay);
            const nameLines = doc.splitTextToSize(poseName, cardWidth);
            doc.text(nameLines, cardX, cardY + imgHeight + 10);
            
            currentY += cardHeight;
        }

        x += columnWidth;
        if (x + columnWidth > pageWidth - margin) {
             if (sortedLevels.indexOf(level) < sortedLevels.length - 1) {
                doc.addPage();
                x = margin;
                y = margin + 40;
                doc.setFontSize(24);
                doc.setFont('helvetica', 'bold');
                doc.text(title, pageWidth / 2, margin, { align: 'center' });
            }
        }
    }

    const safeFilename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`${safeFilename}_visual.pdf`);
}
