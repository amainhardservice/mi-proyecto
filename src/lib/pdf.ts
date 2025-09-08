
'use client';
import jsPDF from 'jspdf';
import type { Pose, SequenceItem } from '@/types';
import { toast } from '@/hooks/use-toast';
import { allPosesData } from '@/lib/firestore-client';

type NameDisplay = 'es' | 'en' | 'both';

const getAcroLevelTitle = (level: number) => {
    switch (level) {
        case 0: return "Nivel 0: Vuelo Terapéutico";
        case 1: return "Nivel 1: Introducción";
        case 2: return "Nivel 2: Básico";
        case 3: return "Nivel 3: Transiciones";
        case 4: return "Nivel 4: Flow 1 – Básico";
        case 5: return "Nivel 5: Intermedio";
        case 6: return "Nivel 6: Flow 2 – Intermedio";
        case 7: return "Nivel 7: Washing Machines";
        case 8: return "Nivel 8: Flow 3 – Avanzado";
        case 9: return "Nivel 9: Icarian Básico";
        case 10: return "Nivel 10: Icarian Intermedio";
        case 11: return "Nivel 11: Whips Básicos";
        case 12: return "Nivel 12: Whips Intermedios";
        case 13: return "Nivel 13: Whips Avanzados";
        case 14: return "Nivel 14: Standing Básico";
        case 15: return "Nivel 15: Standing Intermedio";
        case 16: return "Nivel 16: Standing Avanzado";
        default: return `Nivel ${level}`;
    }
};

const getDisplayName = (item: Pose | SequenceItem, displayMode: NameDisplay): string => {
    let name: string;

    if ('nombre' in item) { // Pose
        name = item.nombre;
    } else { // Concept, Asana, Modifier, Exercise
        name = item.titulo;
    }
    
    if ('nombre_sans' in item) { // Asana
        const { nombre_sans, nombre_es } = item;
        switch (displayMode) {
            case 'en': return nombre_sans;
            case 'es': return nombre_es;
            case 'both': return `${nombre_es} / ${nombre_sans}`;
            default: return `${nombre_es} / ${nombre_sans}`;
        }
    }

    const parts = name.split('\n');
    const esName = parts[0];
    const enName = parts.length > 1 && parts[1] ? parts[1].replace(/[()]/g, '') : '';

    switch (displayMode) {
        case 'en':
            return enName || esName;
        case 'es':
            return esName;
        case 'both':
            if (enName) {
                return `${esName} / ${enName}`;
            }
            return esName;
        default:
            return parts.join(' / ');
    }
};

const addImageToPdf = async (doc: jsPDF, url: string, x: number, y: number, width: number, height: number): Promise<boolean> => {
    try {
        const proxyUrl = `/api/image-proxy?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        if (!response.ok) {
            console.error(`Failed to fetch image via proxy: ${url}, status: ${response.status}`);
            return false;
        }
        const blob = await response.blob();
        const reader = new FileReader();
        return new Promise((resolve) => {
            reader.onload = () => {
                const dataUrl = reader.result as string;
                try {
                    const format = (blob.type.split('/')[1] || 'jpeg').toUpperCase();
                    doc.addImage(dataUrl, format, x, y, width, height);
                    resolve(true);
                } catch (e) {
                    console.error(`jsPDF error adding image: ${url}`, e);
                    resolve(false);
                }
            };
            reader.onerror = () => {
                console.error(`FileReader error for image: ${url}`);
                resolve(false);
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


async function exportPoseToPdfPage(doc: jsPDF, pose: Pose, initialY: number, nameDisplay: NameDisplay) {
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40;
    let y = initialY;
    
    doc.setFont('helvetica', 'normal');

    const checkPageEnd = (neededHeight = 20) => {
        if (y + neededHeight > doc.internal.pageSize.getHeight() - margin) {
            doc.addPage();
            y = margin;
            doc.setFont('helvetica', 'normal');
        }
    };
    
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    
    const titleText = pose.nombre.replace(/\n/g, ' / ').replace(/→/g, '>');

    const titleLines = doc.splitTextToSize(titleText, pageWidth - margin * 2);
    checkPageEnd(titleLines.length * 14 + 20);
    doc.text(titleLines, margin, y);
    y += (titleLines.length * 14) + 10;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    const levelTitle = pose.type === 'Therapeutic' ? 'Vuelo Terapéutico' : (pose.type === 'Transition' || pose.type === 'Icarian' || pose.type === 'Flow' ? `${getAcroLevelTitle(pose.nivel)}` : getAcroLevelTitle(pose.nivel));
    const levelTextWidth = doc.getTextWidth(levelTitle) + 20;
    
    checkPageEnd(30);
    y += 10;
    
    doc.setFillColor(230, 230, 230);
    doc.roundedRect(pageWidth - margin - levelTextWidth, y - 12, levelTextWidth, 16, 3, 3, 'F');
    doc.text(levelTitle, pageWidth - margin, y, { align: 'right' });
    y += 20;
    
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, y, pageWidth - margin, y);
    y += 20;
    
    if (pose.url_imagen) {
        const imgWidth = 300;
        const imgHeight = 200;
        const imgX = (pageWidth - imgWidth) / 2;
        checkPageEnd(imgHeight + 20);
        const added = await addImageToPdf(doc, pose.url_imagen, imgX, y, imgWidth, imgHeight);
        y += (added ? imgHeight : 20) + 20;
    }

    const addSection = (title: string, content: string | string[], isList: boolean = false) => {
        checkPageEnd(40);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(title, margin, y);
        y += 20;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);

        if (isList && Array.isArray(content)) {
            content.forEach(item => {
                const itemLines = doc.splitTextToSize(`• ${item}`, pageWidth - margin * 2 - 10);
                checkPageEnd(itemLines.length * 12 + 2);
                doc.text(itemLines, margin + 10, y);
                y += (itemLines.length * 10) + 4;
            });
        } else if (typeof content === 'string') {
            const processedText = content.replace(/\*\*(pose:([a-zA-Z0-9-]+?))\*\*|\*\*(.*?)\*\*/g, (match, p1, poseId, boldText) => {
                if (poseId) {
                    const foundPose = allPosesById[poseId];
                    return foundPose ? getDisplayName(foundPose, 'es') : poseId;
                }
                return boldText || match;
            }).replace(/→/g, '>');
            const lines = doc.splitTextToSize(processedText, pageWidth - margin * 2);
            checkPageEnd(lines.length * 12);
            doc.text(lines, margin, y);
            y += (lines.length * 10) + 4;
        }
        y += 15;
    };
    
    if (pose.descripcion) {
        addSection('Descripción', pose.descripcion);
    }
    
    if (pose.narrativa_detallada) {
        addSection('Narrativa Detallada', pose.narrativa_detallada);
    }

    const isAcroPose = pose.type !== 'Thai-Massage' && pose.type !== 'Therapeutic';
    if (isAcroPose && pose.musculos) {
        checkPageEnd(50);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Músculos', margin, y);
        y += 20;

        if (pose.musculos.base.length > 0) {
            addSection('Base:', pose.musculos.base, true);
        }
        if (pose.musculos.volador.length > 0) {
            addSection('Volador:', pose.musculos.volador, true);
        }
        y += 5;
    }

    if (isAcroPose && pose.calibracion) {
        checkPageEnd(50);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Calibración', margin, y);
        y += 20;

        if (pose.calibracion.base.length > 0) {
            addSection('Base:', pose.calibracion.base, true);
        }
        if (pose.calibracion.volador.length > 0) {
            addSection('Volador:', pose.calibracion.volador, true);
        }
        if (pose.calibracion.observador.length > 0) {
            addSection('Observador:', pose.calibracion.observador, true);
        }
    }
}


export async function exportPoseToPdf(pose: Pose, nameDisplay: NameDisplay) {
    const doc = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' });
    await exportPoseToPdfPage(doc, pose, 40, nameDisplay);
    const safeFilename = pose.nombre.split('\n')[0].replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`${safeFilename}_guide.pdf`);
}

export async function exportRouteToPdf(poses: Pose[], title: string, nameDisplay: NameDisplay) {
    const doc = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' });
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(32);
    doc.text(title, doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() / 2, { align: 'center' });
    
    for (const pose of poses) {
        doc.addPage();
        await exportPoseToPdfPage(doc, pose, 40, nameDisplay);
    }
    
    const safeFilename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`${safeFilename}_detailed.pdf`);
}

export async function exportVisualTreeToPdf(poses: Pose[], nameDisplay: NameDisplay, title: string) {
    const doc = new jsPDF({ orientation: 'l', unit: 'pt', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 30;

    doc.setFont('helvetica', 'normal');

    const drawHeader = () => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(24);
        doc.text(title, pageWidth / 2, margin, { align: 'center' });
    };

    drawHeader();

    const posesByLevel = poses.reduce((acc, pose) => {
        const level = pose.nivel;
        if (!acc[level]) acc[level] = [];
        acc[level].push(pose);
        return acc;
    }, {} as Record<number, Pose[]>);

    const sortedLevels = Object.keys(posesByLevel).map(Number).sort((a, b) => a - b);
    
    const columnWidth = 180;
    const cardWidth = 150;
    const imgHeight = 80;
    const verticalGap = 20;
    const titleLineHeight = 14;
    const textLineHeight = 10;

    let x = margin;
    let y = margin + titleLineHeight + 20;

    for (const level of sortedLevels) {
        if (x + columnWidth > pageWidth - margin) {
            doc.addPage();
            drawHeader();
            x = margin;
            y = margin + titleLineHeight + 20;
        }

        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(getAcroLevelTitle(level), x, y);
        let currentY = y + titleLineHeight + 10;

        for (const pose of posesByLevel[level]) {
            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            const poseName = getDisplayName(pose, nameDisplay).replace(/→/g, '>');
            const nameLines = doc.splitTextToSize(poseName, cardWidth);
            const textHeight = nameLines.length * textLineHeight;
            const cardHeight = imgHeight + textHeight + verticalGap;

            if (currentY + cardHeight > pageHeight - margin) {
                x += columnWidth;
                currentY = y + titleLineHeight + 10;

                if (x + columnWidth > pageWidth - margin) {
                    doc.addPage();
                    drawHeader();
                    x = margin;
                    currentY = margin + titleLineHeight + 20;
                }
                
                doc.setFontSize(14);
                doc.setFont('helvetica', 'bold');
                doc.text(getAcroLevelTitle(level), x, y);
                currentY = y + titleLineHeight + 10;
            }
            
            const cardX = x;
            const cardY = currentY;

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

            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            let textY = cardY + imgHeight + textLineHeight;
            
            nameLines.forEach((line: string) => {
                const textWidth = doc.getStringUnitWidth(line) * doc.getFontSize() / doc.internal.scaleFactor;
                const centeredX = cardX + (cardWidth - textWidth) / 2;
                doc.text(line, centeredX, textY);
                textY += textLineHeight;
            });
            
            currentY += cardHeight;
        }

        x += columnWidth;
    }

    const safeFilename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`${safeFilename}_visual.pdf`);
}

export async function exportSequenceToPdf(sequence: SequenceItem[], title: string) {
    const doc = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40;
    let y = margin;
    
    doc.setFont('helvetica', 'normal');

    const checkPageEnd = (neededHeight = 20) => {
        if (y + neededHeight > doc.internal.pageSize.getHeight() - margin) {
            doc.addPage();
            y = margin;
        }
    };
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(32);
    doc.text(title, pageWidth / 2, doc.internal.pageSize.getHeight() / 2, { align: 'center' });

    doc.addPage();
    y = margin;

    for (const [index, item] of sequence.entries()) {
        checkPageEnd(80);
        
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, y, pageWidth - margin, y);
        y += 20;

        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        let itemTitleText: string;
        if (item.itemType === 'pose') {
            itemTitleText = item.nombre.replace(/\n/g, ' / ').replace(/→/g, '>');
        } else if (item.itemType === 'asana') {
            itemTitleText = item.nombre_sans;
        } else {
            itemTitleText = item.titulo.split('\n')[0];
        }

        const itemTitleLines = doc.splitTextToSize(`${index + 1}. ${itemTitleText}`, pageWidth - margin * 2 - 50);
        doc.text(itemTitleLines, margin, y);
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(item.itemType, pageWidth - margin, y, { align: 'right' });
        y += (itemTitleLines.length * 16) + 10;

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

        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('Descripción:', margin, y);
        y += 15;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        const descriptionLines = doc.splitTextToSize(item.descripcion, pageWidth - margin * 2);
        checkPageEnd(descriptionLines.length * 12);
        doc.text(descriptionLines, margin, y);
        y += (descriptionLines.length * 12) + 10;
        
        if (item.notes) {
            checkPageEnd(30);
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text('Notas Personales:', margin, y);
            y += 15;
            doc.setFontSize(10);
            doc.setFont('helvetica', 'italic');
            const notesLines = doc.splitTextToSize(item.notes, pageWidth - margin * 2);
            checkPageEnd(notesLines.length * 12);
            doc.text(notesLines, margin, y);
            y += (notesLines.length * 12) + 10;
        }

        y += 10;
    }
    
    const safeFilename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`${safeFilename}_sequence.pdf`);
}
