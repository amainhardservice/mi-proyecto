

'use client';
import jsPDF from 'jspdf';
import type { Pose, SequenceItem } from '@/types';
import { toast } from '@/hooks/use-toast';
import { allPosesData, allConceptsData } from '@/lib/firestore-client';

type NameDisplay = 'es' | 'en' | 'both';

const getDisplayName = (pose: Pose, displayMode: NameDisplay): string => {
    const parts = pose.nombre.split('\n');
    const esName = parts[0];
    const enName = parts[1] || '';
    switch (displayMode) {
      case 'en': return enName.replace(/[()]/g, '') || esName;
      case 'es': return esName;
      default: return pose.nombre.replace('\n', ' / ');
    }
};

const getAcroLevelTitle = (level: number) => {
    switch (level) {
        case 1: return "Nivel 1: Introducción";
        case 2: return "Nivel 2: Básico";
        case 3: return "Nivel 3: Transiciones";
        case 4: return "Nivel 4: Intermedio";
        case 5: return "Nivel 5: Washing Machines";
        case 6: return "Nivel 6: Icarian Básico";
        case 7: return "Nivel 7: Icarian Intermedio";
        case 8: return "Nivel 8: Whips Básicos";
        case 9: return "Nivel 9: Whips Intermedios";
        case 10: return "Nivel 10: Whips Avanzados";
        case 11: return "Nivel 11: Standing Básico";
        case 12: return "Nivel 12: Standing Intermedio";
        case 13: return "Nivel 13: Standing Avanzado";
        case 14: return "Posturas Terapéuticas";
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

const allPosesById = allPosesData.reduce((acc, p) => {
    acc[p.id] = p;
    return acc;
}, {} as Record<string, Pose>);

const processTextForPdf = (text: string, nameDisplay: NameDisplay): string => {
    if (!text) return '';
    return text.replace(/\*\*(pose:([a-zA-Z0-9-]+))\*\*/g, (match, p1, poseId) => {
        const pose = allPosesById[poseId];
        return pose ? getDisplayName(pose, nameDisplay) : poseId;
    }).replace(/\*\*/g, ''); // Remove any remaining asterisks
};


export async function exportPoseToPdf(pose: Pose, nameDisplay: NameDisplay) {
    const doc = new jsPDF({
        orientation: 'p',
        unit: 'pt',
        format: 'a4'
    });

    await exportPoseToPdfPage(doc, pose, 40, nameDisplay);

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
        await exportPoseToPdfPage(doc, pose, 40, nameDisplay);
    }
    
    const safeFilename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`${safeFilename}_detailed.pdf`);
}


async function exportPoseToPdfPage(doc: jsPDF, pose: Pose, initialY: number, nameDisplay: NameDisplay) {
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40;
    const maxLineWidth = pageWidth - margin * 2;
    let y = initialY;

    // Title
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    const titleText = getDisplayName(pose, nameDisplay === 'both' ? 'es' : nameDisplay) + (nameDisplay === 'both' ? ` / ${getDisplayName(pose, 'en')}` : '');
    const titleLines = doc.splitTextToSize(titleText, maxLineWidth);
    doc.text(titleLines, margin, y);
    y += (titleLines.length * 24);

    // Level Badge
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const levelTitle = pose.type === 'Therapeutic' ? 'Vuelo Terapéutico' : getAcroLevelTitle(pose.nivel);
    doc.text(levelTitle, pageWidth - margin, y - (titleLines.length * 24), { align: 'right' });
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
    const processedDescription = processTextForPdf(pose.descripcion, nameDisplay);
    const descriptionLines = doc.splitTextToSize(processedDescription, maxLineWidth);
    doc.text(descriptionLines, margin, y);
    y += (descriptionLines.length * 10) + 10;
    
    if (pose.narrativa_detallada) {
        const processedNarrative = processTextForPdf(pose.narrativa_detallada, nameDisplay);
        const narrativeLines = doc.splitTextToSize(processedNarrative, maxLineWidth);
        doc.text(narrativeLines, margin, y);
        y += (narrativeLines.length * 10) + 20;
    }

    const checkPageEnd = (neededHeight = 20) => {
        if (y > doc.internal.pageSize.getHeight() - margin - neededHeight) {
            doc.addPage();
            y = margin;
        }
    };

    const isAcroPose = pose.type !== 'Thai-Massage' && pose.type !== 'Therapeutic';
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
                        const itemLines = doc.splitTextToSize(`• ${item}`, maxLineWidth - 10);
                        checkPageEnd(itemLines.length * 12);
                        doc.text(itemLines, margin + 10, y);
                        y += (itemLines.length * 12);
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

export async function exportSequenceToPdf(sequence: SequenceItem[], title: string) {
    const doc = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40;
    const maxLineWidth = pageWidth - margin * 2;
    let y = margin;

    const checkPageEnd = (neededHeight = 20) => {
        if (y + neededHeight > doc.internal.pageSize.getHeight() - margin) {
            doc.addPage();
            y = margin;
        }
    };
    
    // Title Page
    doc.setFontSize(32);
    doc.setFont('helvetica', 'bold');
    doc.text(title, pageWidth / 2, doc.internal.pageSize.getHeight() / 2, { align: 'center' });

    doc.addPage();
    y = margin;

    // Sequence content
    for (const [index, item] of sequence.entries()) {
        checkPageEnd(80); // Check if there's enough space for a new item header
        
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, y, pageWidth - margin, y); // Separator line
        y += 20;

        // Item number, title and type
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        const itemTitle = 'nombre' in item ? item.nombre.split('\n')[0] : ('nombre_sans' in item ? item.nombre_sans : item.titulo);
        doc.text(`${index + 1}. ${itemTitle}`, margin, y);
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(item.itemType, pageWidth - margin, y, { align: 'right' });
        y += 25;

        // Image for poses
        if (item.itemType === 'pose' && 'url_imagen' in item && item.url_imagen) {
            const imgWidth = 225;
            const imgHeight = 150;
            const imgX = (pageWidth - imgWidth) / 2;
            checkPageEnd(imgHeight + 20);
            const added = await addImageToPdf(doc, item.url_imagen, imgX, y, imgWidth, imgHeight);
            if (added) {
                y += imgHeight + 20;
            }
        }

        // Description
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('Descripción:', margin, y);
        y += 15;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        const descriptionLines = doc.splitTextToSize(item.descripcion, maxLineWidth);
        checkPageEnd(descriptionLines.length * 12);
        doc.text(descriptionLines, margin, y);
        y += (descriptionLines.length * 12) + 10;
        
        // Notes
        if (item.notes) {
            checkPageEnd(30);
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text('Notas Personales:', margin, y);
            y += 15;
            doc.setFontSize(10);
            doc.setFont('helvetica', 'italic');
            const notesLines = doc.splitTextToSize(item.notes, maxLineWidth);
            checkPageEnd(notesLines.length * 12);
            doc.text(notesLines, margin, y);
            y += (notesLines.length * 12) + 10;
        }

        y += 10; // Extra space between items
    }
    
    const safeFilename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`${safeFilename}_sequence.pdf`);
}
