export interface Destination {
  slug: string;
  title: string;
  era: string;
  tagline: string;
  description: string;
  image: string;
  video: string;
  activities: string[];
  tips: string[];
}

export const destinations: Destination[] = [
  {
    slug: "paris-1889",
    title: "Paris 1889",
    era: "Exposition Universelle",
    tagline: "Assistez a l'inauguration de la Tour Eiffel",
    description:
      "Plongez au coeur de la Belle Epoque parisienne lors de l'Exposition Universelle de 1889. Decouvrez la Tour Eiffel fraichement erigee, flanez dans les pavillons du monde entier et vivez l'effervescence culturelle d'un Paris en pleine revolution industrielle. Les lumieres de la Ville Lumiere n'ont jamais autant brille.",
    image: "/images/paris-1889.jpg",
    video: "/videos/paris.mp4",
    activities: [
      "Visite guidee de la Tour Eiffel en avant-premiere",
      "Diner au Cafe de la Paix avec les artistes impressionnistes",
      "Promenade en fiacre sur les Champs-Elysees",
      "Atelier de peinture avec les maitres de Montmartre",
      "Spectacle au Moulin Rouge originel",
    ],
    tips: [
      "Portez des vetements d'epoque pour vous fondre dans la foule",
      "Le franc-or est la monnaie en vigueur - nous fournissons un kit de change",
      "Evitez de mentionner les evenements futurs aux locaux",
      "Le cholera est encore present - prenez les vaccins recommandes",
      "Reservation obligatoire 48h avant le depart temporel",
    ],
  },
  {
    slug: "cretace-65m",
    title: "Cretace -65M",
    era: "Ere des Dinosaures",
    tagline: "Marchez parmi les geants du Mesozoique",
    description:
      "Remontez 65 millions d'annees dans le passe pour decouvrir la Terre a l'epoque du Cretace superieur. Observez les Tyrannosaurus Rex, les Triceratops et les Pteranodons dans leur habitat naturel. Une experience unique au sein d'ecosystemes luxuriants ou la nature regnait en maitre absolu, juste avant le grand impact.",
    image: "/images/cretace-65m.jpg",
    video: "/videos/cretace.mp4",
    activities: [
      "Safari photo aupres des Tyrannosaurus Rex",
      "Survol en module protege des plaines du Cretace",
      "Collecte de fossiles dans les lits de riviere anciens",
      "Observation nocturne des Pteranodons en vol",
      "Exploration des forets de fougeres geantes",
    ],
    tips: [
      "Le bouclier protecteur est obligatoire en tout temps",
      "Ne nourrissez JAMAIS les dinosaures",
      "La temperature moyenne est de 34 degres - hydratez-vous",
      "Restez dans la zone securisee delimitee par les balises",
      "Depart impose 24h avant l'impact de l'asteroide",
    ],
  },
  {
    slug: "florence-1504",
    title: "Florence 1504",
    era: "Renaissance Italienne",
    tagline: "Contemplez le David de Michel-Ange devoile",
    description:
      "Voyagez dans la Florence de la Renaissance, berceau de l'art et de la pensee humaniste. Assistez au devoilement du David de Michel-Ange sur la Piazza della Signoria, visitez l'atelier de Leonard de Vinci et decouvrez les intrigues politiques des Medicis. Une immersion totale dans l'age d'or de la civilisation occidentale.",
    image: "/images/florence-1504.jpg",
    video: "/videos/florence.mp4",
    activities: [
      "Ceremonie de devoilement du David de Michel-Ange",
      "Visite privee de l'atelier de Leonard de Vinci",
      "Banquet au Palazzo Medici avec Lorenzo le Magnifique",
      "Cours de fresque avec les apprentis de Raphael",
      "Promenade sur le Ponte Vecchio au coucher du soleil",
    ],
    tips: [
      "L'italien florentin du XVIe siecle est recommande - traducteur fourni",
      "Le florin d'or est la monnaie locale - kit de change inclus",
      "Les femmes doivent porter des vetements couvrants selon les usages",
      "Evitez les querelles entre factions politiques",
      "Les appareils electroniques doivent rester dissimules",
    ],
  },
];
