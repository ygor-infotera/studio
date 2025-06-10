"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, AlertTriangle, CheckCircle2 } from "lucide-react";
import { useState, useTransition } from "react";
import type { GenerateEvacuationPlanInput, GenerateEvacuationPlanOutput } from "@/ai/flows/generate-evacuation-plan";

const evacuationFormSchema = z.object({
  location: z.string().min(5, { message: "Localização deve ter pelo menos 5 caracteres." }),
  disasterType: z.string({ required_error: "Por favor, selecione o tipo de desastre." }),
});

type EvacuationFormValues = z.infer<typeof evacuationFormSchema>;

const disasterTypes = [
  "Enchente",
  "Incêndio",
  "Terremoto",
  "Furacão",
  "Deslizamento",
  "Tsunami",
  "Onda de Calor Severa",
  "Nevasca Intensa",
  "Outro (especificar na descrição se possível)",
];

interface EvacuationFormProps {
  generatePlanAction: (input: GenerateEvacuationPlanInput) => Promise<GenerateEvacuationPlanOutput | { error: string }>;
}

export default function EvacuationForm({ generatePlanAction }: EvacuationFormProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [evacuationPlan, setEvacuationPlan] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<EvacuationFormValues>({
    resolver: zodResolver(evacuationFormSchema),
    defaultValues: {
      location: "",
    },
  });

  async function onSubmit(data: EvacuationFormValues) {
    startTransition(async () => {
      setEvacuationPlan(null);
      setError(null);
      const result = await generatePlanAction(data);
      if ("error" in result) {
        setError(result.error);
        toast({
          title: "Erro ao Gerar Plano",
          description: result.error,
          variant: "destructive",
        });
      } else {
        setEvacuationPlan(result.evacuationPlan);
        toast({
          title: "Plano de Evacuação Gerado!",
          description: "Seu plano personalizado está pronto.",
          variant: "default",
        });
      }
    });
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sua Localização Atual</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Rua das Acácias 123, Bairro Flores, Cidade Alegre - UF" {...field} />
                </FormControl>
                <FormDescription>
                  Forneça o endereço mais preciso possível.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="disasterType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Desastre</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de desastre" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {disasterTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Gerando Plano...
              </>
            ) : (
              "Gerar Plano de Evacuação"
            )}
          </Button>
        </form>
      </Form>

      {isPending && (
        <div className="text-center py-6">
          <Loader2 className="mx-auto h-10 w-10 animate-spin text-primary" />
          <p className="mt-3 text-lg font-medium">Aguarde, estamos preparando seu plano...</p>
          <p className="text-sm text-muted-foreground">Isso pode levar alguns instantes.</p>
        </div>
      )}

      {error && !isPending && (
        <Card className="border-destructive bg-destructive/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <CardTitle className="text-destructive">Falha ao Gerar Plano</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {evacuationPlan && !isPending && !error && (
        <Card className="border-green-500 bg-green-500/10 shadow-lg">
          <CardHeader>
             <div className="flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                <CardTitle className="text-green-700 dark:text-green-500">Seu Plano de Evacuação Personalizado</CardTitle>
             </div>
            <CardDescription>Siga estas instruções cuidadosamente para sua segurança.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap rounded-md border bg-background p-4">
              {evacuationPlan}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
