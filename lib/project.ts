import { translations } from "@/lib/traduction"

export const getProjects  = (language: "fr" | "en") => {
  const t = (key: keyof typeof translations.fr) => translations[language][key]
  return [
  {
    id: "EasyIA",
    title: t("easyiaT"),
    subtitle: t("easyiaSubt"),
    description: t("easyiaDesc"),
    tech: ["React + TypeScript", "Supabase", "Node.js", "CSS"],
    year: "06/2025",
    duration: "1" + t("mois"),
    team: "1" + t("dev"),
    status: t("easyiaS"),
    links: {
      site: "https://easy-ia.vercel.app/",
    },
    bullets:  t("easyiaB") as string[],
    features: t("easyiaF") as string[],
    gallery: [
      "/Screen_EasyIA_1.png",
      "/Screen_EasyIA_2.png",
      "/Screen_EasyIA_3.png",
    ],
  },
  {
    id: "ReTexte",
    title: t("retexteT"),
    subtitle: t("retexteSubt"),
    description: t("retexteDesc"),
    tech: ["React + TypeScript", "CSS", "Ollama", "Python + FastAPI"],
    year: "06/2025",
    duration: "1" + t("week"),
    team: "1" + t("dev"),
    status: t("retexteS"),
    links: {
      site: "",
    },
    bullets: t("retexteB") as string[],
    features: t("retexteF") as string[],
    gallery: [
      "/retexte_1.png",
      "/retexte_2.png",
      "/retexte_3.png",
    ],
  },
  {
    id: "ReuniDocs",
    title: t("reunidocsT"),
    subtitle: t("reunidocsSubt"),
    description: t("reunidocsDesc"),
    tech: ["React + TypeScript", "RAG", "PostgreSQL", "SentenceTransformers", "Ollama", "Python + FastAPI", "PDFMiner / PyMuPDF", "Cron Jobs"],
    year: "07/2025",
    duration: "3" + t("mois"),
    team: "1" + t("dev"),
    status: t("reunidocsS"),
    links: {
      site: "",
    },
    bullets: t("reunidocsB") as string[],
    features: t("reunidocsF") as string[],
    gallery: [
      "/reunidocs_1.png",
      "/reunidocs_2.png",
      "/reunidocs_3.png",
    ],
  },
  {
    id: "NewNews",
    title: t("newnewsT"),
    subtitle: t("newnewsSubt"),
    description: t("newnewsDesc"),
    tech: ["SupaBase", "Python Scraper", "Ollama", "Cron Jobs", "React + TypeScript", "FastAPI"],
    year: "07/2025",
    duration: "3" + t("mois"),
    team: "1" + t("dev"),
    status: t("newnewsS"),
    links: {
      site: "",
    },
    bullets: t("newnewsB") as string[],
    features: t("newnewsF") as string[],
    gallery: [
      "/newnews_1.png",
      "/newnews_2.png",
      "/newnews_3.png",
    ],
  },
  {
    id: "Rubik’s Cube Solver",
    title: t("rubiksT"),
    subtitle: t("rubiksSubt"),
    description: t("rubiksDesc"),
    tech: ["React + TypeScript", "Three.js", "Algorithme", "Unity"],
    year: "2024-2025",
    duration: "4" + t("mois"),
    team: "6"+ t("dev"),
    status: t("rubiksS"),
    links: {
      site: "",
    },
    bullets: t("rubiksB") as string[],
    features: t("rubiksF") as string[],
    gallery: [
      "/Screen_EasyIA_1.png",
      "",
      "",
    ],
  },
  {
    id: "WhiskersLabyrinth",
    title: t("whiskersT"),
    subtitle: t("whiskersSubt"),
    description: t("whiskersDesc"),
    tech: ["Unity", "Vite", "C#"],
    year: "2024",
    duration: "6" + t("mois"),
    team: "4" + t("dev"),
    status: t("whiskersS"),
    links: {
      site: "",
    },
    bullets: t("whiskersB") as string[],
    features: t("whiskersF") as string[],
    gallery: [
      "",
      "",
      "",
    ],
  },
  {
    id: "Organisateur de planning Fit Evo",
    title: t("fitevoT"),
    subtitle: t("fitevoSubt"),
    description: t("fitevoDesc"),
    tech: ["React + TypeScript", "Supabase ", "CSS", "Calendrier dynamique", "Graphique de progression"],
    year: "08/2025",
    duration: "2" + t("weeks"),
    team: "1" + t("dev"),
    status: t("fitevoS"),
    links: {
      site: "",
    },
    bullets: t("fitevoB") as string[],
    features: t("fitevoF") as string[],
    gallery: [
      "",
      "",
      "",
    ],
  },
  {
    id: "Projet VR",
    title: "Projet VR",
    subtitle: "Un projet de jeu en réalité virtuelle immersif dans un vaisseau spatial.",
    description:
      "C'est un jeu en réalité virtuelle immersif dans lequel le joueur prend les commandes d’un vaisseau spatial alimenté par un carburant… biologique. Pour continuer son périple interstellaire, le joueur doit produire ce bio-carburant en cultivant et transformant des tomates dans l’environnement du vaisseau. Cette mécanique originale mêle gestion de ressources, interactions physiques et gameplay ludique autour de l’écologie spatiale. Mais l’aventure ne s’arrête pas là. Régulièrement, des alertes de pluie de météorites viennent perturber le calme du voyage. Le joueur doit alors réagir rapidement : esquiver les projectiles, manœuvrer son vaisseau, activer les boucliers ou encore réparer les dégâts éventuels en temps réel. Ces séquences dynamiques ajoutent une tension dramatique et un défi sensoriel captivant. Grâce à une immersion VR poussée, le jeu combine exploration, gestion et action, le tout dans un univers semi-cartoon original où la survie dépend autant de l’agilité que de la stratégie.",
    tech: ["Unity + XR Interaction Toolkit", "C#", "VR", "3D Modelling"],
    year: "02/2025-04/2025",
    duration: "3 mois",
    team: "4 développeurs",
    status: "Finalisé",
    links: {
      site: "",
    },
    bullets: [
        
    ],
    features: [
      "Système de production de bio-carburant à base de tomates en VR",
      "Récolte, mixage et distribution du carburant dans le vaisseau",
      "Mécanique de déplacement spatial selon le carburant produit",
      "Séquences d’alerte météorite avec esquives VR en temps réel",
      "Réactions physiques du cockpit (dégâts, alertes visuelles, faim)",
      "Univers graphique original entre cartoon et SF rétro",

    ],
    gallery: [
      "VR_project_1.png",
      "VR_project_2.png",
      "VR_project_3.png",
    ],
  },
  ]
  
}

export const projects = getProjects("en")

