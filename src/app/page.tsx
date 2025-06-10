import FeatureCard from "@/components/feature-card";
import { Siren, Megaphone, Waypoints, Home, LifeBuoy } from "lucide-react";

const features = [
  {
    title: "Alertas em Tempo Real",
    description: "Veja os últimos alertas de eventos climáticos extremos na sua região.",
    href: "/alerts",
    Icon: Siren,
    iconColor: "text-accent-foreground dark:text-accent", // Using accent for high visibility alerts
  },
  {
    title: "Reportar Evento",
    description: "Contribua reportando eventos e condições locais para ajudar a comunidade.",
    href: "/report",
    Icon: Megaphone,
  },
  {
    title: "Plano de Evacuação IA",
    description: "Gere um plano de evacuação personalizado com base na sua localização e tipo de evento.",
    href: "/evacuate",
    Icon: Waypoints,
  },
  {
    title: "Localizador de Abrigos",
    description: "Encontre abrigos próximos com direções e recursos disponíveis.",
    href: "/shelters",
    Icon: Home,
  },
  {
    title: "Guias de Emergência",
    description: "Acesse guias básicos de primeiros socorros e resposta a emergências.",
    href: "/guidelines",
    Icon: LifeBuoy,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8 bg-card rounded-lg shadow-md">
        <h1 className="text-4xl font-bold font-headline text-primary">Bem-vindo ao AlertaNatura</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Sua plataforma para se manter informado e preparado para eventos naturais extremos.
          Explore nossos recursos para proteger você e sua comunidade.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold font-headline mb-6 text-center">Nossos Recursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>
    </div>
  );
}
