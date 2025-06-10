import ShelterItem, { type ShelterData } from "@/components/shelter-item";
import { AlertCircle } from "lucide-react";

const placeholderShelters: ShelterData[] = [
  {
    id: "s1",
    name: "Abrigo Municipal Central",
    address: "Av. da Esperança, 100, Centro",
    capacity: 200,
    resources: ["Água potável", "Alimentação básica", "Colchões", "Primeiros socorros"],
    contact: "(XX) 1234-5678",
    mapsLink: "https://maps.google.com/?q=Av.+da+Esperança,+100,+Centro",
  },
  {
    id: "s2",
    name: "Escola Estadual Solidariedade",
    address: "Rua da Paz, 550, Bairro Novo Mundo",
    capacity: 150,
    resources: ["Banheiros", "Área coberta", "Apoio psicológico"],
    contact: "(XX) 9876-5432",
    mapsLink: "https://maps.google.com/?q=Rua+da+Paz,+550,+Bairro+Novo+Mundo",
  },
  {
    id: "s3",
    name: "Ginásio Poliesportivo Acolher",
    address: "Praça dos Esportes, S/N, Vila Olímpia",
    capacity: 300,
    resources: ["Água", "Alimentos não perecíveis", "Kits de higiene", "Espaço para animais de estimação pequenos"],
    mapsLink: "https://maps.google.com/?q=Praça+dos+Esportes,+Vila+Olímpia",
  },
  {
    id: "s4",
    name: "Igreja Comunidade Unida",
    address: "Travessa da Fé, 30, Jardim das Flores",
    capacity: 80,
    resources: ["Alojamento simples", "Refeições quentes", "Roupas"],
    contact: "(XX) 3333-4444",
  },
];

export default function SheltersPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold font-headline text-primary">Localizador de Abrigos</h1>
        <p className="mt-2 text-md text-foreground/80">
          Encontre abrigos temporários próximos em caso de emergência.
        </p>
      </section>

      {placeholderShelters.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderShelters.map((shelter) => (
            <ShelterItem key={shelter.id} shelter={shelter} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground" />
          <p className="mt-4 text-lg text-muted-foreground">Nenhum abrigo listado no momento.</p>
          <p className="text-sm text-muted-foreground">Verifique novamente mais tarde ou contate as autoridades locais.</p>
        </div>
      )}
    </div>
  );
}
