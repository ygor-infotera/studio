import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AlertData {
  id: string;
  type: "Enchente" | "Incêndio" | "Terremoto" | "Deslizamento" | "Calor Extremo" | "Ventos Fortes" | "Outro";
  severity: "Alta" | "Média" | "Baixa";
  location: string;
  description: string;
  timestamp: string;
  Icon: LucideIcon;
}

const severityMap: Record<AlertData["severity"], string> = {
  Alta: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  Média: "bg-accent text-accent-foreground hover:bg-accent/90",
  Baixa: "bg-primary/80 text-primary-foreground hover:bg-primary/70",
};

export default function AlertItem({ alert }: { alert: AlertData }) {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <alert.Icon className={cn("h-7 w-7", 
              alert.severity === "Alta" ? "text-destructive" : 
              alert.severity === "Média" ? "text-accent-foreground dark:text-accent" : "text-primary"
            )} />
            <CardTitle className="text-lg font-headline">{alert.type}</CardTitle>
          </div>
          <Badge className={cn("text-xs", severityMap[alert.severity])}>{alert.severity}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <CardDescription className="text-sm text-foreground/80">
          <span className="font-semibold">Localização:</span> {alert.location}
        </CardDescription>
        <p className="text-sm text-foreground">{alert.description}</p>
        <p className="text-xs text-muted-foreground pt-2 border-t mt-2">
          Reportado em: {new Date(alert.timestamp).toLocaleString()}
        </p>
      </CardContent>
    </Card>
  );
}
