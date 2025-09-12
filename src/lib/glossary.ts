import { allConceptsData, allAsanasData, allModifiersData } from '@/lib/data/glossary';
import type { Concept, Asana, PoseModifier } from '@/types';

// This function now only handles the logic for creating the full glossary text content.
// The data fetching/grouping logic has been moved to MainContent.tsx to break the circular dependency.

export const getFullAcroGlossaryContent = (modifiers: PoseModifier[], acroConceptsByCategory: Record<string, Concept[]>, acroCategoryOrder: string[]) => {
  let content = 'Glosario Completo de Acroyoga\n\n';
  content += 'Modificadores de Postura\n\n';
  modifiers.forEach(modifier => {
    content += `**${modifier.titulo}**\n${modifier.descripcion}\n\n`;
  });
  acroCategoryOrder.forEach(category => {
    if (acroConceptsByCategory[category]) {
      content += `${category}\n\n`;
      acroConceptsByCategory[category].forEach(concept => {
        content += `**${concept.titulo}**\n${concept.descripcion}\n\n`;
      });
    }
  });
  return content;
};

export const getFullThaiGlossaryContent = (thaiConceptsByCategory: Record<string, Concept[]>, thaiCategoryOrder: string[]) => {
  let content = 'Glosario Completo de Masaje Tailandés\n\n';
  thaiCategoryOrder.forEach(category => {
    if (thaiConceptsByCategory[category]) {
      content += `${category}\n\n`;
      thaiConceptsByCategory[category].forEach(concept => {
        content += `**${concept.titulo}**\n${concept.descripcion}\n\n`;
      });
    }
  });
  return content;
};

export const getFullYogaGlossaryContent = (asanas: Asana[], yogaConceptsByCategory: Record<string, Concept[]>, yogaCategoryOrder: string[]) => {
  let content = 'Glosario Completo de Yoga\n\n';
  yogaCategoryOrder.forEach(category => {
    if (yogaConceptsByCategory[category]) {
      content += `${category}\n\n`;
      yogaConceptsByCategory[category].forEach(concept => {
        content += `**${concept.titulo}**\n${concept.descripcion}\n\n`;
      });
    }
  });
  content += 'Glosario de Asanas\n\n';
  asanas.forEach(asana => {
    content += `**${asana.nombre_sans} (${asana.nombre_es})**\n${asana.descripcion}\n\n`;
  });
  return content;
};
