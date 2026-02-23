# TimeTravel Agency - Webapp Interactive

Webapp fictive d'agence de voyage temporel, realisee pour le projet final Ynov.

## Membres du groupe

- Robin Thiriet
- Thomas Fauroux

## Stack technique

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Motion (animations)
- Chatbot IA via API Mistral (avec fallback local)

## Features implementees

- Landing page immersive (hero + animations)
- Galerie de 3 destinations (Paris 1889, Cretace -65M, Florence 1504)
- Pages detaillees par destination
- Chatbot "Chronos" en bas a droite
  - Reponses locales si aucune cle API
  - Reponses IA via Mistral si `MISTRAL_API_KEY` configuree
- Quiz de recommandation personnalisee (4 questions)
- Formulaire de reservation avec validation + estimation de prix
- Interface responsive mobile/desktop

## Outils IA utilises

- V0 / assistant IA pour generation et iteration UI
- Mistral AI (`mistral-small-latest`) pour le chatbot (optionnel, selon cle API)

## Installation locale

```bash
git clone <url-du-repo>
cd v0-time-travel-agency
npm install
npm run dev
```

## Variables d'environnement (optionnel)

Creer un fichier `.env.local`:

```env
MISTRAL_API_KEY=your_key_here
MISTRAL_MODEL=mistral-small-latest
```

Sans ces variables, le chatbot fonctionne en mode mock (local).

## Assets (photos / videos)

- Images destinations: `public/images/`
- Video hero (optionnelle): `public/videos/hero.mp4` (a integrer si vous voulez un fond video)

## Deploiement

- Vercel recommande (`import project` puis deploy)
- Alternative: Netlify / Render

## Livrables Moodle

- URL publique de la webapp
- Lien repo GitHub (ou export du code)
- Ce README complete avec les noms des 4 membres

## Licence

Projet pedagogique Ynov.
