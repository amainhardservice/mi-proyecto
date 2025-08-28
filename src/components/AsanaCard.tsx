import type { Asana } from '@/types';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type AsanaCardProps = {
  asana: Asana;
};

export function AsanaCard({ asana }: AsanaCardProps) {
  return (
    <AccordionItem value={asana.id}>
      <AccordionTrigger className="text-lg hover:no-underline text-left">
        <div className="flex flex-col items-start">
            <span>{asana.nombre_sans}</span>
            <span className="text-sm font-normal text-muted-foreground">{asana.nombre_es}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-base text-muted-foreground whitespace-pre-wrap">
        {asana.descripcion}
      </AccordionContent>
    </AccordionItem>
  );
}
