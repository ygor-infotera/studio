import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { LucideIcon } from "lucide-react";

export interface GuidelineData {
  id: string;
  title: string;
  Icon: LucideIcon;
  content: string[]; // Array of paragraphs
}

export default function GuidelineItem({ guideline, value }: { guideline: GuidelineData, value: string }) {
  return (
    <AccordionItem value={value} className="border-b border-border last:border-b-0">
      <AccordionTrigger className="py-4 text-left hover:no-underline">
        <div className="flex items-center gap-3">
          <guideline.Icon className="h-6 w-6 text-primary flex-shrink-0" />
          <span className="text-md font-medium font-headline">{guideline.title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 pb-4 pl-12 pr-4">
        <div className="space-y-2 text-sm text-foreground/90">
          {guideline.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
