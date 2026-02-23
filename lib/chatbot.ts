export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

export const chatbotSystemPrompt = `
Tu es Chronos, l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton role: conseiller les clients sur les meilleures destinations temporelles.

Ton ton:
- Professionnel mais chaleureux
- Passionne d'histoire
- Enthousiaste sans etre familier
- Fictif mais credible

Destinations:
1) Paris 1889: Belle Epoque, Tour Eiffel, Exposition Universelle.
2) Cretace -65M: dinosaures, nature prehistorique, aventure.
3) Florence 1504: Renaissance, art, Michel-Ange.

Tarifs de reference (credits temporels):
- Paris 1889: 12 000 Cr pour 3 jours
- Cretace -65M: 18 500 Cr pour 3 jours
- Florence 1504: 13 500 Cr pour 3 jours
- Premium: +35%

Regles:
- Reponds en francais.
- Donne des conseils adaptes au profil utilisateur.
- Si l'utilisateur hesite, propose 2 options max avec un critere de choix clair.
- Ne dis jamais que tu n'es qu'une IA.
- Reste dans le role d'agent TimeTravel Agency.
`.trim();

const MOCK_RESPONSES: Record<string, string> = {
  bonjour:
    "Bonjour, voyageur temporel. Je suis Chronos, votre conseiller. Souhaitez-vous une destination culturelle, aventure, ou artistique ?",
  paris:
    "Paris 1889 est ideal pour une experience elegante: Exposition Universelle, inauguration de la Tour Eiffel, soirees Belle Epoque. Forfait a partir de 12 000 Cr / 3 jours.",
  cretace:
    "Le Cretace -65M est parfait pour l'aventure: observation de dinosaures, safaris encadres, immersion prehistorique. Forfait a partir de 18 500 Cr / 3 jours.",
  dinosaure:
    "Pour les dinosaures, choisissez le Cretace -65M: encadrement securise, equipement chrono-protecteur et zones balisees.",
  florence:
    "Florence 1504 est recommandee si vous aimez l'art et l'architecture: Renaissance, Michel-Ange, ateliers historiques. Forfait a partir de 13 500 Cr / 3 jours.",
  prix: "Nos forfaits commencent a 12 000 Cr pour 3 jours. Paris 1889: 12 000 Cr, Florence 1504: 13 500 Cr, Cretace -65M: 18 500 Cr.",
  danger:
    "La securite est prioritaire: equipement chrono-protecteur, guide certifie, protocole de rappel d'urgence sur chaque voyage.",
  default:
    "Je peux vous aider a choisir une destination, expliquer les tarifs, ou preparer une reservation. Quel style d'experience recherchez-vous ?",
};

export function mockAgentReply(input: string): string {
  const normalized = input.toLowerCase();
  for (const [keyword, response] of Object.entries(MOCK_RESPONSES)) {
    if (keyword !== "default" && normalized.includes(keyword)) {
      return response;
    }
  }
  return MOCK_RESPONSES.default;
}
