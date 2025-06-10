import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, MapPin, Package, Users, Phone, ExternalLink } from "lucide-react";

export interface ShelterData {
  id: string;
  name: string;
  address: string;
  capacity?: number;
  resources: string[];
  contact?: string;
  mapsLink?: string;
}

export default function ShelterItem({ shelter }: { shelter: ShelterData }) {
  return (
    <Card className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-md">
            <Home className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg font-headline">{shelter.name}</CardTitle>
            <CardDescription className="text-xs flex items-center gap-1 mt-1">
              <MapPin size={14} /> {shelter.address}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-3 pt-0 pb-3">
        {shelter.capacity && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users size={16} /> Capacidade: {shelter.capacity} pessoas
          </div>
        )}
        {shelter.contact && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone size={16} /> Contato: {shelter.contact}
          </div>
        )}
        <div>
          <h4 className="text-sm font-semibold mb-1 flex items-center gap-1.5">
            <Package size={16} /> Recursos Disponíveis:
          </h4>
          {shelter.resources.length > 0 ? (
            <ul className="list-disc list-inside pl-1 text-sm space-y-0.5">
              {shelter.resources.map((resource, index) => (
                <li key={index} className="text-foreground/90">{resource}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">Nenhum recurso listado.</p>
          )}
        </div>
      </CardContent>
      {shelter.mapsLink && (
        <CardFooter className="pt-0">
          <Button asChild variant="outline" className="w-full">
            <a href={shelter.mapsLink} target="_blank" rel="noopener noreferrer">
              Ver no Mapa <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
