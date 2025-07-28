export const projects = [
  {
    id: "EasyIA",
    title: "EasyIA",
    subtitle: "Plateforme d'apprentissage de l'Intelligence Artificielle",
    description:
      "EasyIA est une plateforme web que j’ai développée dans le cadre d’un stage pour accompagner une collectivité dans la découverte, la compréhension et l’usage des outils d’intelligence artificielle (IA). Elle propose un accès centralisé à des ressources pédagogiques, des outils concrets et des cas d’usage adaptés aux services de la collectivité. L’objectif principal était de démystifier l’IA, de favoriser son adoption responsable et de répondre aux besoins spécifiques identifiés auprès des agents.",
    tech: ["React + TypeScript", "Supabase", "Node.js", "CSS"],
    year: "06/2025",
    duration: "1 mois",
    team: "1 développeurs",
    status: "Finalisé et mis en ligne",
    links: {
      site: "https://easy-ia.vercel.app/",
    },
    bullets: [
        "Cours vidéo youtube vérifiés",
        "Cours écrits",
        "Utilisations interactives",
        "Suivi de progression",
        "Mobile responsive"
    ],
    features: [
      "Systeme de connexion sécurisé",
      "Espace personnel avec suivi des progrès",
      "Accès à des cours et démonstrations interactives",
      "Interface admin avancée",
      "Responsive design pensé pour desktop, tablette, et téléphone",
      "Cas d’usages concrets par métier (RH, communication, etc.)"
    ],
    gallery: [
      "/Screen_EasyIA_1.png",
      "/Screen_EasyIA_2.png",
      "/Screen_EasyIA_3.png",
    ],
  },
  {
    id: "ReTexte",
    title: "ReTexte",
    subtitle: "Un outil de transcription audio sécurisé, local et automatisé, pensé pour les professionnels et les administrations.",
    description:
      "ReTexte est une plateforme web permettant la transcription automatique et sécurisée de fichiers audio (réunions, interviews, conférences, etc.) en texte structuré. Basé sur Whisper en local, il respecte la confidentialité des données et offre une interface simple pour importer, transcrire, relire et copier les transcriptions. L’outil est pensé pour les administrations et les entreprises souhaitant gagner du temps sur la prise de notes ou le compte-rendu.",
    tech: ["React + TypeScript", "CSS", "Ollama", "Python + FastAPI"],
    year: "06/2025",
    duration: "1 semaines",
    team: "1 développeurs",
    status: "Finalisé et mis en local",
    links: {
      site: "",
    },
    bullets: [
        "Données en temps réel"
    ],
    features: [
      "Transcription automatique d’audios et vidéos (MP3, MP4, etc.)",
      "Export du texte formaté",
      "Mode hors-ligne (fonctionne 100% localement)",
      "Interface simple, responsive, intuitive et détaillée",
      "Retranscription en temps réel et téléchargeable",
    ],
    gallery: [
      "/retexte_1.png",
      "/retexte_2.png",
      "/retexte_3.png",
    ],
  },
  {
    id: "ReuniDocs",
    title: "ReuniDocs",
    subtitle: "Une plateforme intelligente pour interroger, explorer et résumer des documents PDF volumineux, sans connexion externe.",
    description:
      "ReuniDocs est un outil de consultation et de recherche intelligente dans des documents PDF très lourds, souvent utilisés dans les collectivités (ex. comptes-rendus de réunions, budgets, PLU, etc.). L'utilisateur peut poser des questions en langage naturel et obtenir des réponses pertinentes avec des extraits de documents à l’appui. Le système fonctionne entièrement hors ligne",
    tech: ["React + TypeScript", "RAG", "PostgreSQL", "SentenceTransformers", "Ollama", "Python + FastAPI", "PDFMiner / PyMuPDF", "Cron Jobs"],
    year: "07/2025",
    duration: "3 mois",
    team: "1 développeurs",
    status: "Finalisé et mis en local",
    links: {
      site: "",
    },
    bullets: [

    ],
    features: [
      "Import et traitement automatique de docs volumineux (PDF, DOCX, TXT)",
      "Découpage intelligent en chunks avec conservation du contexte",
      "Recherche mixte mots-clés + sémantique",
      "Résumés automatiques basé sur l'IA",
      "Chatbot local intégré avec réponse basée sur le contexte du document",
      "Interface pour recherche, visualisation, ajout et suppression des documents",
      "100% local, sécurisé et rapide",
      "Nettoyage automatique des documents et chat session",
    ],
    gallery: [
      "/Screen_EasyIA_1.png",
      "/placeholder.svg?height=600&width=800&text=Product+Catalog",
      "/placeholder.svg?height=600&width=800&text=Social+Features",
    ],
  },
  {
    id: "NewNews",
    title: "NewNews",
    subtitle: "Un système de veille automatique qui récupère et résume les actualités par IA selon des thématiques personnalisées.",
    description:
      "NewNews permet de suivre automatiquement des sources d’actualité, de récupérer les articles récents et de les résumer par IA pour une lecture rapide. Destiné aux agents ou élus, il facilite la veille thématique, la préparation de rapports ou la diffusion interne. L'outil est pensé pour s’adapter à des thématiques personnalisées et peut être utilisé en local.",
    tech: ["SupaBase", "Python Scraper", "Ollama", "Cron Jobs", "React + TypeScript", "FastAPI"],
    year: "07/2025",
    duration: "3 mois",
    team: "1 développeurs",
    status: "Finalisé et mis en local",
    links: {
      site: "",
    },
    bullets: [
        
    ],
    features: [
      "Scraping intelligent de sites de presse, collectivités, marchés publics",
      "Regroupement automatique des actus par thématique",
      "Résumés synthétiques des actualités",
      "Recherche par importance et domaine",
      "Veille multi-niveaux",
    ],
    gallery: [
      "/Screen_EasyIA_1.png",
      "/placeholder.svg?height=600&width=800&text=Portfolio+Section",
      "/placeholder.svg?height=600&width=800&text=Contact+Form",
    ],
  },
  {
    id: "Rubik’s Cube Solver",
    title: "Rubik’s Cube Solver",
    subtitle: "Un simulateur 3D de Rubik’s Cube capable de résoudre n’importe quelle configuration grâce à une IA optimisée.",
    description:
      "Ce projet simule la résolution d’un Rubik’s Cube en utilisant une intelligence artificielle (algorithme A* ou BFS/IDA*) pour déterminer les mouvements optimaux. Il inclut une interface visuelle pour voir le cube en 3D, comprendre les étapes de résolution, et même proposer des mélanges à résoudre.",
    tech: ["React + TypeScript", "Three.js", "Algorithme", "Unity"],
    year: "2024-2025",
    duration: "4 mois",
    team: "6 développeurs",
    status: "Finalisé",
    links: {
      site: "",
    },
    bullets: [
        
    ],
    features: [
      "Modélisation 3D interactive du Rubik’s Cube",
      "Interface intuitive pour manipuler le cube",
      "Résolution automatique avec affichage étape par étape (par rapport au 'Nombre de Dieu')",
      "Possibilité d’entrer une configuration manuelle",
      "Zoom, rotation libre et rendu fluide",
    ],
    gallery: [
      "/Screen_EasyIA_1.png",
      "/placeholder.svg?height=600&width=800&text=Workout+Tracker",
      "/placeholder.svg?height=600&width=800&text=Progress+Charts",
    ],
  },
  {
    id: "WhiskersLabyrinth",
    title: "WhiskersLabyrinth",
    subtitle: "Un jeu immersif d’exploration de labyrinthe en 3D temps réel avec génération procédurale et navigation fluide.",
    description:
      "Labyrinth 3D est un jeu développé en WebGL (React Three Fiber) où le joueur explore un labyrinthe généré procéduralement dans un environnement immersif. Il a été conçu pour expérimenter la navigation 3D, les interactions en temps réel, et les effets visuels dynamiques.",
    tech: ["Unity", "Vite", "C#"],
    year: "2024",
    duration: "6 mois",
    team: "4 développeurs",
    status: "En production",
    links: {
      site: "",
    },
    bullets: [
        
    ],
    features: [
      "Déplacement libre sur un plateau 3D",
      "Contrôle fluide du joueur avec transitions animées",
      "Terrain généré de manière stylisée et procédurale",
      "Interaction possible avec objets et PNJ",
      "Système de quêtes",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Course+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Interactive+Quiz",
      "/placeholder.svg?height=600&width=800&text=Certificate+Generator",
    ],
  },
  {
    id: "Organisateur de planning Fit Evo",
    title: "Organisateur de planning Fit Evo",
    subtitle: "Un outil de gestion de tâches, de planning, d’événements pour les équipes, avec notifications et suivi des progrès en temps réel.",
    description:
      "Organisateur est un outil de gestion de projets et de collaboration pour les équipes. Il permet de planifier des tâches, de suivre les progrès et de recevoir des notifications en temps réel. L'application est conçue pour améliorer la productivité et la communication au sein des équipes.",
    tech: ["React + TypeScript", "Supabase ", "CSS", "Calendrier dynamique", "Graphique de progression"],
    year: "08/2025",
    duration: "1 mois",
    team: "1 développeurs",
    status: "En cours de développement",
    links: {
      site: "",
    },
    bullets: [

    ],
    features: [
        "Gestion de tâches avec suivi",
        "Planification d’événements et de réunions",
        "Notifications (mail / in-app) en temps réel pour les mises à jour et suivis",
        "Calendrier dynamique pour visualiser les tâches et événements",
        "Interface utilisateur/admin intuitive, responsive et adaptative pour les nouveaux besoins",
        "Connection sécurisée et localisée",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Course+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Product+Catalog",
      "/placeholder.svg?height=600&width=800&text=Social+Features",
    ],
  },
]