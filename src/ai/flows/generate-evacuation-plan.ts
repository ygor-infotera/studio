// src/ai/flows/generate-evacuation-plan.ts
'use server';

/**
 * @fileOverview Generates a personalized evacuation plan based on current location and disaster type.
 *
 * - generateEvacuationPlan - A function that generates an evacuation plan.
 * - GenerateEvacuationPlanInput - The input type for the generateEvacuationPlan function.
 * - GenerateEvacuationPlanOutput - The return type for the generateEvacuationPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEvacuationPlanInputSchema = z.object({
  location: z
    .string()
    .describe(
      'The current location of the user. This should be as specific as possible, including street address, city, and state.'
    ),
  disasterType: z
    .string()
    .describe(
      'The type of natural disaster occurring, such as flood, earthquake, fire, or hurricane.'
    ),
});
export type GenerateEvacuationPlanInput = z.infer<typeof GenerateEvacuationPlanInputSchema>;

const GenerateEvacuationPlanOutputSchema = z.object({
  evacuationPlan: z.string().describe('A detailed evacuation plan for the user.'),
});
export type GenerateEvacuationPlanOutput = z.infer<typeof GenerateEvacuationPlanOutputSchema>;

export async function generateEvacuationPlan(
  input: GenerateEvacuationPlanInput
): Promise<GenerateEvacuationPlanOutput> {
  return generateEvacuationPlanFlow(input);
}

const generateEvacuationPlanPrompt = ai.definePrompt({
  name: 'generateEvacuationPlanPrompt',
  input: {schema: GenerateEvacuationPlanInputSchema},
  output: {schema: GenerateEvacuationPlanOutputSchema},
  prompt: `You are an expert in disaster preparedness and evacuation planning.

  Based on the user's current location and the type of natural disaster occurring,
  generate a personalized evacuation plan that includes the following:

  - The nearest safe evacuation route.
  - The location of nearby shelters and resources.
  - A list of essential items to bring.
  - Important safety precautions to take during the evacuation.

  Current Location: {{{location}}}
  Disaster Type: {{{disasterType}}}
  `,
});

const generateEvacuationPlanFlow = ai.defineFlow(
  {
    name: 'generateEvacuationPlanFlow',
    inputSchema: GenerateEvacuationPlanInputSchema,
    outputSchema: GenerateEvacuationPlanOutputSchema,
  },
  async input => {
    const {output} = await generateEvacuationPlanPrompt(input);
    return output!;
  }
);
