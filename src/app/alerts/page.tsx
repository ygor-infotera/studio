import AlertItem, { type AlertData } from "@/components/alert-item";
import { CloudRain, Flame, Activity, Mountain, ThermometerSun, Wind, AlertCircle } from "lucide-react";

const placeholderAlerts: AlertData[] = [
  {
    id: "1",
    type: "Enchente",
    severity: "Alta",
    location: "Rua das Palmeiras, Bairro Boa Vista",
    description: "Inundação severa devido a chuvas intensas. Evite a área.",
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
    Icon: CloudRain,
  },
  {
    id: "2",
    type: "Incêndio",
    severity: "Média",
    location: "Parque Nacional da Serra",
    description: "Foco de incêndio florestal detectado. Bombeiros atuando.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    Icon: Flame,
  },
  {
    id: "3",
    type: "Ventos Fortes",
    severity: "Média",
    location: "Orla Marítima Central",
    description: "Rajadas de vento de até 80km/h. Risco de queda de árvores.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    Icon: Wind,
  },
  {
    id: "4",
    type: "Calor Extremo",
    severity: "Baixa",
    location: "Toda a Região Metropolitana",
    description: "Ondas de calor com temperaturas acima de 38°C. Hidrate-se.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    Icon: ThermometerSun,
  },
  {
    id: "5",
    type: "Deslizamento",
    severity: "Alta",
    location: "Morro da Esperança",
    description: "Risco iminente de deslizamento de terra devido à saturação do solo.",
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 mins ago
    Icon: Mountain,
  },
];


export default function AlertsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold font-headline text-primary">Alertas em Tempo Real</h1>
        <p className="mt-2 text-md text-foreground/80">
          Mantenha-se atualizado sobre os últimos eventos na sua região.
        </p>
      </section>

      {placeholderAlerts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderAlerts.map((alert) => (
            <AlertItem key={alert.id} alert={alert} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground" />
          <p className="mt-4 text-lg text-muted-foreground">Nenhum alerta ativo no momento.</p>
        </div>
      )}
    </div>
  );
}
