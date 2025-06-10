import GuidelineItem, { type GuidelineData } from "@/components/guideline-item";
import { Accordion } from "@/components/ui/accordion";
import { FirstAidKit, Home, ShieldCheck,Zap, Waves, Flame, Activity, Mountain, Wind, ThermometerSun } from "lucide-react";

const placeholderGuidelines: GuidelineData[] = [
  {
    id: "g1",
    title: "Kit de Emergência Básico",
    Icon: FirstAidKit,
    content: [
      "Tenha sempre um kit com: água potável (pelo menos 3 litros por pessoa), alimentos não perecíveis para 3 dias, lanterna com pilhas extras, rádio a pilhas, kit de primeiros socorros, medicamentos essenciais, apito, máscara contra poeira.",
      "Inclua também: cópias de documentos importantes (identidade, certidões) em saco plástico, dinheiro em espécie, agasalhos, cobertor leve, mapa da região e um carregador de celular portátil.",
    ],
  },
  {
    id: "g2",
    title: "Segurança em Casa Durante Tempestades",
    Icon: Home,
    content: [
      "Afaste-se de janelas e portas de vidro. Desligue aparelhos eletrônicos da tomada para evitar danos por raios.",
      "Evite tomar banho ou usar água encanada durante tempestades com raios.",
      "Se houver risco de inundação, desligue a chave geral de energia e feche o registro de água e gás.",
      "Mantenha-se informado pelas autoridades e siga as orientações de evacuação, se necessário.",
    ],
  },
  {
    id: "g3",
    title: "O que fazer em caso de Enchente",
    Icon: Waves,
    content: [
      "Se estiver em área de risco, evacue imediatamente para um local seguro e elevado.",
      "Não tente atravessar áreas alagadas a pé ou de carro. A força da água pode ser enganosa.",
      "Evite contato com a água da enchente, pois pode estar contaminada.",
      "Após a enchente, limpe e desinfete tudo que teve contato com a água antes de reutilizar.",
    ],
  },
  {
    id: "g4",
    title: "Prevenção e Ação em Incêndios",
    Icon: Flame,
    content: [
      "Tenha detectores de fumaça em casa e teste-os regularmente. Não sobrecarregue tomadas.",
      "Em caso de incêndio, saia imediatamente. Use as escadas, nunca o elevador.",
      "Se houver fumaça, rasteje para sair, pois o ar perto do chão é mais limpo.",
      "Tenha um plano de fuga com a família e um ponto de encontro fora de casa.",
    ],
  },
  {
    id: "g5",
    title: "Durante um Terremoto",
    Icon: Activity,
    content: [
      "Mantenha a calma. Se estiver dentro de casa, proteja-se debaixo de uma mesa resistente ou junto a uma parede interna.",
      "Afaste-se de janelas, espelhos, estantes e objetos que possam cair.",
      "Se estiver ao ar livre, afaste-se de edifícios, postes e fios elétricos.",
      "Após o tremor principal, esteja preparado para réplicas. Verifique se há feridos e não use fósforos ou isqueiros até verificar se há vazamento de gás.",
    ],
  },
];


export default function GuidelinesPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold font-headline text-primary">Guias de Emergência</h1>
        <p className="mt-2 text-md text-foreground/80">
          Informações essenciais para saber como agir em diversas situações de emergência.
        </p>
      </section>

      <Card className="shadow-lg">
        <CardContent className="p-0 md:p-2">
          {placeholderGuidelines.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {placeholderGuidelines.map((guideline, index) => (
                <GuidelineItem key={guideline.id} guideline={guideline} value={`item-${index}`} />
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-10 px-4">
              <ShieldCheck className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-4 text-lg text-muted-foreground">Nenhum guia disponível no momento.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

