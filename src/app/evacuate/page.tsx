import EvacuationForm from "@/components/evacuation-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generateEvacuationPlan, type GenerateEvacuationPlanInput, type GenerateEvacuationPlanOutput } from "@/ai/flows/generate-evacuation-plan";
import { unstable_noStore as noStore } from 'next/cache';


async function handleGeneratePlan(input: GenerateEvacuationPlanInput): Promise<GenerateEvacuationPlanOutput | { error: string }> {
  "use server";
  noStore(); // Opt out of caching for this server action
  try {
    const result = await generateEvacuationPlan(input);
    return result;
  } catch (e) {
    console.error("Error generating evacuation plan:", e);
    // Check if e is an instance of Error to safely access e.message
    const errorMessage = e instanceof Error ? e.message : "Ocorreu um erro desconhecido.";
    return { error: `Falha ao comunicar com o serviço de IA: ${errorMessage}` };
  }
}

export default function EvacuatePage() {
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold font-headline text-primary">Plano de Evacuação Personalizado (IA)</CardTitle>
          <CardDescription className="mt-2 text-md">
            Em situações de emergência, um plano claro pode salvar vidas.
            Forneça sua localização e o tipo de desastre para gerar um plano de evacuação.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EvacuationForm generatePlanAction={handleGeneratePlan} />
        </CardContent>
      </Card>
    </div>
  );
}
