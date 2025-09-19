import { Database } from "lucide-react";

export const translations = {
  fr: {
    // Navigation
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",

    // Hero Section
    portfolioTitle: "Portfolio",
    name: "Gautier Hoarau",
    subtitle: "Ingénieur informatique spécialisé dans l'Intelligence Artificielle",
    cursorEnabled: "Animation activé",
    cursorDisabled: "Animation désactivé",

    // About Section
    Motivation: "Motivation",
    aboutTitle: "À propos",
    expertise: "Parcours",
    approach: "Approche",
    objectives: "Objectifs",
    expertiseContent:
        "Étudiant en dernière année d’Ingénierie en Intelligence Artificielle à JUNIA, je conçois depuis plusieurs années des projets innovants combinant web, IA et environnements 3D. Mon parcours est marqué par des expériences riches : stage à la CASUD (création de plateformes web, sensibilisation à l’IA), applications immersives en React Three Fiber, outils de transcription et de recherche intelligente de documents, et bien d’autres projets liés à l’innovation numérique.",
    approachContent:
        "Je conçois mes projets avec une approche centrée sur l’expérience utilisateur, l’autonomie, la clarté et la performance. J’aime concevoir des interfaces fluides, visuelles et personnalisables, où chaque interaction est pensée. Mon processus de création allie organisation, logique et expressivité, en combinant design, technique et impact.",
    objectivesContent:
        "Mon objectif est de continuer à créer des outils utiles, créatifs et intelligents. J’ai développé des sites pour la CASUD, des plateformes 3D interactives, des projets IA, des applications de veille ou de transcription, toujours avec la volonté d’innover. Ce que j’aime profondément dans ce métier, c’est qu’il est infiniment modulable : chaque idée peut devenir réalité. L’interface, les animations, les interactions… tout peut être modelé pour créer quelque chose d’unique, sur mesure, à l’image du projet ou de l’utilisateur.",
    projectsCount: "Projets",
    yearsCount: "Années",
    engagementCount: "Engagement",
    portfolioText: "Portfolio",
    completedProjects: "Projets Réalisés",

    // Skills Section
    skillsTitle: "Compétences",
    UnityS: "C#, 3D mechanics, UI Canvas, Animation, Shader programming, Physics",
    DatabaseS: "PostgreSQL, Supabase, SQL, embeddings, modélisation des données",
    TypeSCriptS: "Type-safe JavaScript, interfaces, generics, tooling",
    ReactS: "React.js, Tailwind CSS,  UI basée sur les composants, gestion d'état, hooks",
    DockerS: "Containerisation, création d’images, déploiement, docker-compose, pipelines  CI/CD",
    NodeS: "JavaScript côté serveur, API REST, applications temps réel, architecture backend",
    PythonS: "FastAPI, bibliothèques NLP (spaCy, transformers), web scraping, PPO",
    ProcessingS: "Analyse de PDF, extraction de texte, découpage, normalization, indexation",
    RAGS: "Génération augmentée, modèles IA locaux, recherche vectorielle, récupération contextuelle",
    NLPS: "Traitement du langage naturel, RAG, résumé automatique, recherche sémantique, transformers",
    CICDS: "Intégration et déploiement continus, GitHub Actions, automatisation, tests",
    DeepS: "Réseaux de neurones, PyTorch, TensorFlow, computer vision, entraînement de modèles",
    GitS: "Gestion de versions, branches, pull requests, workflows collaboratifs",
    ThreeS: "Rendu 3D, WebGL, animations,  graphismes interactifs, shaders",
    UIS: "Design centré utilisateur, prototypage, wireframing, Figma",

    // Projects Section
    projectsTitle: "Projets",
    years: "Années",
    mois: "Mois",
    weeks: "Semaines",
    week: "Semaine",
    jours: "Jours",
    dev: "Développeur",
    easyiaT: "EasyIA",
    easyiaSubt: "Plateforme d'apprentissage de l'Intelligence Artificielle",
    easyiaDesc:
      "EasyIA est une plateforme web que j’ai développée dans le cadre d’un stage pour accompagner une collectivité dans la découverte, la compréhension et l’usage des outils d’intelligence artificielle (IA). Elle propose un accès centralisé à des ressources pédagogiques, des outils concrets et des cas d’usage adaptés aux services de la collectivité. L’objectif principal était de démystifier l’IA, de favoriser son adoption responsable et de répondre aux besoins spécifiques identifiés auprès des agents.",
    easyiaS: "Finalisé et mis en ligne",
    easyiaB: ["Cours vidéo youtube vérifiés",
        "Cours écrits",
        "Utilisations interactives",
        "Suivi de progression",
        "Mobile responsive"
    ],
    easyiaF: [
      "Systeme de connexion sécurisé",
      "Espace personnel avec suivi des progrès",
      "Accès à des cours et démonstrations interactives",
      "Interface admin avancée",
      "Responsive design pensé pour desktop, tablette, et téléphone",
      "Cas d’usages concrets par métier (RH, communication, etc.)"
    ],
    retexteT: "ReTexte",
    retexteSubt: "Un outil de transcription audio sécurisé, local et automatisé, pensé pour les professionnels et les administrations.",
    retexteDesc:
      "ReTexte est une plateforme web permettant la transcription automatique et sécurisée de fichiers audio (réunions, interviews, conférences, etc.) en texte structuré. Basé sur Whisper en local, il respecte la confidentialité des données et offre une interface simple pour importer, transcrire, relire et copier les transcriptions. L’outil est pensé pour les administrations et les entreprises souhaitant gagner du temps sur la prise de notes ou le compte-rendu.",
    retexteS: "Finalisé et mis en local",
    retexteB: [
        "Données en temps réel"
    ],
    retexteF: [
      "Transcription automatique d’audios et vidéos (MP3, MP4, etc.)",
      "Export du texte formaté",
      "Mode hors-ligne (fonctionne 100% localement)",
      "Interface simple, responsive, intuitive et détaillée",
      "Retranscription en temps réel et téléchargeable",
    ],
    reunidocsT: "ReuniDocs",
    reunidocsSubt: "Une plateforme intelligente pour interroger, explorer et résumer des documents PDF volumineux, sans connexion externe.",
    reunidocsDesc:
      "ReuniDocs est un outil de consultation et de recherche intelligente dans des documents PDF très lourds, souvent utilisés dans les collectivités (ex. comptes-rendus de réunions, budgets, PLU, etc.). L'utilisateur peut poser des questions en langage naturel et obtenir des réponses pertinentes avec des extraits de documents à l’appui. Le système fonctionne entièrement hors ligne",
    reunidocsS: "Finalisé et mis en local",
    reunidocsB: [

    ],
    reunidocsF: [
      "Import et traitement automatique de docs volumineux (PDF, DOCX, TXT)",
      "Découpage intelligent en chunks avec conservation du contexte",
      "Recherche mixte mots-clés + sémantique",
      "Résumés automatiques basé sur l'IA",
      "Chatbot local intégré avec réponse basée sur le contexte du document",
      "Interface pour recherche, visualisation, ajout et suppression des documents",
      "100% local, sécurisé et rapide",
      "Nettoyage automatique des documents et chat session",
    ],
    newnewsT: "NewNews",
    newnewsSubt: "Un système de veille automatique qui récupère et résume les actualités par IA selon des thématiques personnalisées.",
    newnewsDesc:
      "NewNews permet de suivre automatiquement des sources d’actualité, de récupérer les articles récents et de les résumer par IA pour une lecture rapide. Destiné aux agents ou élus, il facilite la veille thématique, la préparation de rapports ou la diffusion interne. L'outil est pensé pour s’adapter à des thématiques personnalisées et peut être utilisé en local.",
    newnewsS: "Finalisé et mis en local",
    newnewsB: [

    ],
    newnewsF: [
      "Scraping intelligent de sites de presse, collectivités, marchés publics",
      "Regroupement automatique des actus par thématique",
      "Résumés synthétiques des actualités",
      "Recherche par importance et domaine",
      "Veille multi-niveaux",
    ],
    rubiksT: "Rubik’s Cube Solver",
    rubiksSubt: "Un simulateur 3D de Rubik’s Cube capable de résoudre n’importe quelle configuration",
    rubiksDesc:
      "Ce projet simule la résolution d’un Rubik’s Cube en utilisant une intelligence artificielle (algorithme A* ou BFS/IDA*) pour déterminer les mouvements optimaux. Il inclut une interface visuelle pour voir le cube en 3D, comprendre les étapes de résolution, et même proposer des mélanges à résoudre.",
    rubiksS: "Finalisé",
    rubiksB: [

    ],
    rubiksF: [
      "Modélisation 3D interactive du Rubik’s Cube",
      "Interface intuitive pour manipuler le cube",
      "Résolution automatique avec affichage étape par étape (par rapport au 'Nombre de Dieu')",
      "Possibilité d’entrer une configuration manuelle",
      "Zoom, rotation libre et rendu fluide",
    ],
    whiskersT: "WhiskersLabyrinth",
    whiskersSubt: "Un jeu immersif d’exploration de labyrinthe en 3D temps réel avec génération procédurale et navigation fluide.",
    whiskersDesc:
      "Labyrinth 3D est un jeu développé en WebGL (React Three Fiber) où le joueur (jouant un chat) doit explorer un labyrinthe généré procéduralement, tout en évitant les souris présentes dans celui-ci. Il a été conçu pour expérimenter la navigation 3D, les interactions en temps réel, et les effets visuels dynamiques.",
    whiskersS: "Finalisé",
    whiskersB: [

    ],
    whiskersF: [
      "Déplacement libre sur un plateau 3D",
      "Contrôle fluide du joueur avec transitions animées",
      "Terrain généré de manière stylisée et procédurale",
      "Interaction possible avec objets et PNJ",
      "Système de quêtes",
    ],
    fitevoT: "Organisateur de planning Fit Evo",
    fitevoSubt: "Un outil de gestion de tâches, de planning, d’événements pour les équipes, avec notifications et suivi des progrès en temps réel.",
    fitevoDesc: "Organisateur est un outil de gestion de projets et de collaboration pour les équipes. Il permet de planifier des tâches, de suivre les progrès et de recevoir des notifications en temps réel. L'application est conçue pour améliorer la productivité et la communication au sein des équipes.",
    fitevoS: "En cours de développement",
    fitevoB: [

    ],
    fitevoF: [
        "Gestion de tâches avec suivi",
        "Planification d’événements et de réunions",
        "Notifications (mail / in-app) en temps réel pour les mises à jour et suivis",
        "Calendrier dynamique pour visualiser les tâches et événements",
        "Interface utilisateur/admin intuitive, responsive et adaptative pour les nouveaux besoins",
        "Connection sécurisée et localisée",
    ],

    // Contact Section
    contactTitle: "Contact",
    contactSubtitle: "N'hésitez pas à me contacter pour plus d'informations",
    downloadCV: "/CV_en.pdf",
    cv: "Curriculum Vitae",
    preview: "Preview",

    //Projets Section
    back: "Retour",
    info: "Informations",
    date: "Date",
    duree: "Durée",
    statut: "Statut",
    team: "Équipe",
    fonctionnalites: "Fonctionnalités",
    otherProjects: "Autres Projets",
    backP: "Retour au portfolio",

    // Language
    language: "Français",
    switchLanguage: "English",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",

    // Hero Section
    portfolioTitle: "Portfolio",
    name: "Gautier Hoarau",
    subtitle: "Computer Engineer specialized in Artificial Intelligence",
    cursorEnabled: "Animation enabled",
    cursorDisabled: "Animation disabled",

    // About Section
    Motivation: "Motivation",
    aboutTitle: "About",
    expertise: "Expertise",
    approach: "Approach",
    objectives: "Objectives",
    expertiseContent:
    "As a 4th-year Artificial Intelligence engineering student at JUNIA, I have been involved for several years in concrete projects combining web, AI, and 3D. My background includes rich experiences: an internship at CASUD (creating web platforms, raising AI awareness), immersive applications using React Three Fiber, transcription tools, intelligent document search, and many other projects related to digital innovation.",
    approachContent:
    "I design my projects with a user-centered approach focused on autonomy, clarity, and performance. I enjoy creating smooth, visual, and customizable interfaces where every interaction is thoughtfully crafted. My creative process combines organization, logic, and expressiveness by blending design, technology, and impact.",
    objectivesContent:
    "My goal is to continue building useful, creative, and intelligent tools. I have developed sites for CASUD, interactive 3D platforms, AI projects, monitoring or transcription applications, always driven by a desire to innovate. What I love most about this profession is its infinite flexibility: every idea can become reality. The interface, animations, interactions... everything can be shaped to create something unique and tailor-made, reflecting the project or user.",
    projectsCount: "Projects",
    yearsCount: "Years",
    engagementCount: "Commitment",
    portfolioText: "Portfolio",
    completedProjects: "Completed Projects",


    // Skills Section
    skillsTitle: "Skills",
    UnityS: "C#, 3D mechanics, UI Canvas, Animation, Shader programming, Physics",
    DatabaseS: "PostgreSQL, Supabase, SQL, embeddings, data modeling",
    TypeSCriptS: "Type-safe JavaScript, interfaces, generics, tooling",
    ReactS: "React.js, Tailwind CSS, component-based UI, state management, hooks",
    DockerS: "Containerization, image creation, deployment, docker-compose, CI/CD pipelines",
    NodeS: "Server-side JS, REST APIs, Express.js, real-time apps, backend architecture",
    PythonS: "FastAPI, NLP libraries (spaCy, transformers), web scraping, PPO (RL)",
    ProcessingS: "PDF parsing, text extraction, chunking, normalization, indexing",
    RAGS: "Retrieval-Augmented Generation, local AI models, vector search, context retrieval",
    NLPS: "Natural Language Processing, RAG, text summarization, semantic search, transformers",
    CICDS: "Continuous Integration & Deployment, GitHub Actions, automation, testing",
    DeepS: "Neural networks, PyTorch, TensorFlow, computer vision, model training",
    GitS: "Version control, branching, pull requests, collaboration workflows",
    ThreeS: "3D rendering, WebGL, animations, interactive graphics, shaders",
    UIS: "User-centered design, prototyping, wireframing, Figma",

    // Projects Section
    projectsTitle: "Projects",
    years: "Years",
    mois: "Months",
    weeks: "Weeks",
    week: "Week",
    jours: "Days",
    dev: "Developer",
    easyiaT: "EasyIA",
    easyiaSubt: "Artificial Intelligence Learning Platform",
    easyiaDesc:
    "EasyIA is a web platform I developed as part of an internship to support a local authority in discovering, understanding, and using artificial intelligence (AI) tools. It offers centralized access to educational resources, practical tools, and use cases tailored to public service needs. The main goal was to demystify AI, encourage its responsible adoption, and meet the specific needs identified by public agents.",
    easyiaS: "Finalized and deployed online",
    easyiaB: [
    "Verified YouTube video courses",
    "Written lessons",
    "Interactive usage tools",
    "Progress tracking",
    "Mobile responsive",
    ],
    easyiaF: [
    "Secure login system",
    "Personal dashboard with progress tracking",
    "Access to interactive courses and demos",
    "Advanced admin interface",
    "Responsive design for desktop, tablet, and mobile",
    "Concrete use cases by department (HR, communication, etc.)",
    ],

    retexteT: "ReTexte",
    retexteSubt: "A secure, local, and automated audio transcription tool for professionals and administrations.",
    retexteDesc:
    "ReTexte is a web platform that enables automatic and secure transcription of audio files (meetings, interviews, conferences, etc.) into structured text. Based on Whisper and running locally, it ensures data privacy and offers a simple interface to import, transcribe, proofread, and copy transcriptions. It is designed for administrations and companies looking to save time on note-taking or meeting summaries.",
    retexteS: "Finalized and deployed locally",
    retexteB: [
    "Real-time data processing"
    ],
    retexteF: [
    "Automatic transcription of audio and video files (MP3, MP4, etc.)",
    "Formatted text export",
    "Offline mode (100% local)",
    "Simple, responsive, and detailed interface",
    "Live transcription and downloadable output",
    ],

    reunidocsT: "ReuniDocs",
    reunidocsSubt: "An intelligent platform to query, explore, and summarize large PDF documents without external connection.",
    reunidocsDesc:
    "ReuniDocs is a tool for consulting and intelligently searching large PDF documents, commonly used in local governments (e.g. meeting reports, budgets, urban plans, etc.). Users can ask natural language questions and receive relevant answers supported by document excerpts. The system works fully offline.",
    reunidocsS: "Finalized and deployed locally",
    reunidocsB: [],
    reunidocsF: [
    "Automatic import and processing of large documents (PDF, DOCX, TXT)",
    "Smart chunking while keeping context",
    "Hybrid keyword and semantic search",
    "Automatic AI-powered summaries",
    "Local chatbot with document-aware responses",
    "Interface for searching, viewing, adding, and deleting documents",
    "100% local, secure, and fast",
    "Automatic document cleanup and session reset",
    ],

    newnewsT: "NewNews",
    newnewsSubt: "An automatic monitoring system that fetches and summarizes news by AI based on custom topics.",
    newnewsDesc:
    "NewNews automatically tracks news sources, retrieves recent articles, and summarizes them using AI for quick reading. Aimed at public agents or elected officials, it simplifies topic-based monitoring, report preparation, or internal distribution. The tool supports customizable themes and can run locally.",
    newnewsS: "Finalized and deployed locally",
    newnewsB: [],
    newnewsF: [
    "Smart scraping from press, government, and public procurement sites",
    "Automatic grouping of news by topic",
    "AI-based news summaries",
    "Search by relevance and domain",
    "Multi-level monitoring system",
    ],

    rubiksT: "Rubik’s Cube Solver",
    rubiksSubt: "A 3D Rubik’s Cube simulator capable of solving any configuration",
    rubiksDesc:
    "This project simulates solving a Rubik’s Cube using artificial intelligence (A*, BFS/IDA*) to determine optimal moves. It includes a visual interface to view the cube in 3D, understand the solving steps, and even input custom scrambles.",
    rubiksS: "Finalized",
    rubiksB: [],
    rubiksF: [
    "Interactive 3D Rubik’s Cube modeling",
    "Intuitive interface for cube manipulation",
    "Automatic solving with step-by-step display (God’s Number logic)",
    "Manual configuration input",
    "Smooth rendering with zoom and rotation",
    ],

    whiskersT: "WhiskersLabyrinth",
    whiskersSubt: "An immersive 3D maze exploration game with procedural generation and smooth navigation.",
    whiskersDesc:
    "Labyrinth 3D is a game developed in WebGL (React Three Fiber) where the player (as a cat) explores a procedurally generated maze while avoiding mice. It was designed to experiment with 3D navigation, real-time interactions, and dynamic visual effects.",
    whiskersS: "Finalized",
    whiskersB: [],
    whiskersF: [
    "Free movement on a 3D map",
    "Smooth player controls with animated transitions",
    "Stylized and procedurally generated terrain",
    "Interactions with objects and NPCs",
    "Quest system",
    ],

    fitevoT: "Fit Evo Scheduler",
    fitevoSubt: "A task, schedule, and event management tool for teams with real-time tracking and notifications.",
    fitevoDesc:
    "Fit Evo Organizer is a project and collaboration management tool for teams. It enables task planning, progress tracking, and real-time notifications. The application is designed to boost productivity and internal communication.",
    fitevoS: "In development",
    fitevoB: [],
    fitevoF: [
    "Task management with progress tracking",
    "Event and meeting scheduling",
    "Real-time notifications (email / in-app)",
    "Dynamic calendar for visualizing tasks and events",
    "Intuitive, responsive user/admin interface adaptable to new needs",
    "Secure and localized connection",
    ],


    // Contact Section
    contactTitle: "Contact",
    contactSubtitle: "Feel free to contact me for more information",
    downloadCV: "/CV_en.pdf",
    cv: "Curriculum Vitae",
    preview: "Preview",

    // Projects Section
    back: "Back",
    info: "Information",
    date: "Date",
    duree: "Duration",
    statut: "Status",
    team: "Team",
    fonctionnalites: "Features",
    otherProjects: "Other Projects",
    backP: "Back to portfolio",

    // Language
    language: "English",
    switchLanguage: "Deutsch",
  },
  de: {
    // Navigation
    home: "Accueil",
    about: "Über mich",
    skills: "Fähigkeiten",
    projects: "Projekte",
    contact: "Kontakt",

    // Hero Section
    portfolioTitle: "Portfolio",
    name: "Gautier Hoarau",
    subtitle: "Informatikingenieur spezialisiert auf künstliche Intelligenz",
    cursorEnabled: "Animation aktiviert",
    cursorDisabled: "Animation deaktiviert",

    // About Section
    Motivation: "Motivation",
    aboutTitle: "Über mich",
    expertise: "Werdegang",
    approach: "Ansatz",
    objectives: "Ziele",
    expertiseContent:
      "Ingenieur für künstliche Intelligenz im 4. Studienjahr an JUNIA. Ich bin seit mehreren Jahren in konkreten Projekten aktiv, die Webentwicklung, KI und 3D kombinieren. Mein Weg ist geprägt von reichen Erfahrungen: Praktikum bei der CASUD (Webplattformen, KI-Sensibilisierung), immersive React Three Fiber-Anwendungen, Transkriptions- und Dokumentensuchtools, und weitere innovative Projekte.",
    approachContent:
      "Ich entwerfe Projekte mit einem benutzerzentrierten Ansatz, fokussiert auf Autonomie, Klarheit und Leistung. Ich mag flüssige, visuelle und anpassbare Schnittstellen, bei denen jede Interaktion durchdacht ist. Mein kreativer Prozess kombiniert Organisation, Logik und Ausdruck durch Design, Technik und Wirkung.",
    objectivesContent:
      "Mein Ziel ist es, weiterhin nützliche, kreative und intelligente Tools zu entwickeln. Ich habe Webseiten für die CASUD entwickelt, interaktive 3D-Plattformen, KI-Projekte, Transkriptions- und Monitoring-Tools – immer mit Innovationsgeist. Was ich an diesem Beruf liebe: Jede Idee kann Realität werden. Interfaces, Animationen, Interaktionen – alles ist formbar für ein maßgeschneidertes Erlebnis.",
    projectsCount: "Projekte",
    yearsCount: "Jahre",
    engagementCount: "Engagement",
    portfolioText: "Portfolio",
    completedProjects: "Abgeschlossene Projekte",

    // Skills Section
    skillsTitle: "Fähigkeiten",
    UnityS: "C#, 3D-Mechanik, UI-Canvas, Animation, Shader-Programmierung, Physik" ,
    DatabaseS: "PostgreSQL, Supabase, SQL, Embeddings, Datenmodellierung",
    TypeSCriptS: "Typsicheres JavaScript, Interfaces, Generics, Tooling",
    ReactS: "React.js, Tailwind CSS, komponentenbasierte UI, State Management, Hooks",
    DockerS: "Containerisierung, Image-Erstellung, Deployment, docker-compose, CI/CD-Pipelines",
    NodeS: "Serverseitiges JavaScript, REST-APIs, Echtzeitanwendungen, Backend-Architektur",
    PythonS: "FastAPI, NLP-Bibliotheken (spaCy, transformers), Web-Scraping, PPO",
    ProcessingS: "PDF-Analyse, Textextraktion, Chunking, Normalisierung, Indexierung",
    RAGS: "Augmented Generation, lokale KI-Modelle, Vektorsuche, kontextuelle Abfrage",
    NLPS: "Sprachverarbeitung, RAG, automatische Zusammenfassungen, semantische Suche, Transformer",
    CICDS: "Kontinuierliche Integration & Deployment, GitHub Actions, Automatisierung, Tests",
    DeepS: "Neuronale Netze, PyTorch, TensorFlow, Computer Vision, Modelltraining",
    GitS: "Versionskontrolle, Branches, Pull Requests, kollaborative Workflows",
    ThreeS: "3D-Rendering, WebGL, Animationen, interaktive Grafiken, Shader",
    UIS: "Nutzerzentriertes Design, Prototyping, Wireframing, Figma",

    // Projects Section
    projectsTitle: "Projekte",
    years: "Jahre",
    mois: "Monate",
    weeks: "Wochen",
    week: "Woche",
    jours: "Tage",
    dev: "Entwickler",
    easyiaT: "EasyIA",
    easyiaSubt: "Lernplattform für künstliche Intelligenz",
    easyiaDesc:
      "EasyIA ist eine Webplattform, die ich im Rahmen eines Praktikums entwickelt habe, um eine Verwaltungseinheit bei der Entdeckung und Nutzung von KI-Tools zu unterstützen. Die Plattform bietet zentralen Zugriff auf Lernressourcen, praktische Tools und an die Dienste angepasste Anwendungsfälle. Ziel ist es, KI verständlich zu machen und eine verantwortungsvolle Nutzung zu fördern.",
    easyiaS: "Abgeschlossen und veröffentlicht",
    easyiaB: [
      "Verifizierte YouTube-Videokurse",
      "Schriftliche Kurse",
      "Interaktive Anwendungen",
      "Fortschrittsverfolgung",
      "Responsive Design"
    ],
    easyiaF: [
      "Sicheres Login-System",
      "Persönlicher Bereich mit Fortschrittsanzeige",
      "Zugriff auf Kurse und interaktive Demos",
      "Erweiterte Admin-Oberfläche",
      "Responsive Design für Desktop, Tablet und Handy",
      "Konkrete Anwendungsfälle nach Beruf (HR, Kommunikation usw.)"
    ],
    retexteT: "ReTexte",
    retexteSubt: "Sicheres, lokales und automatisiertes Transkriptions-Tool für Fachleute und Verwaltungen.",
    retexteDesc:
      "ReTexte ist eine Webplattform zur automatischen und sicheren Transkription von Audiodateien (Meetings, Interviews, Konferenzen) in strukturierten Text. Basierend auf Whisper lokal, respektiert es die Datensicherheit und bietet eine einfache Oberfläche zum Importieren, Transkribieren, Korrigieren und Kopieren der Transkripte.",
    retexteS: "Abgeschlossen und lokal installiert",
    retexteB: [
      "Echtzeit-Daten"
    ],
    retexteF: [
      "Automatische Transkription von Audio- und Videodateien (MP3, MP4, etc.)",
      "Export als formatierter Text",
      "Offline-Modus (100% lokal)",
      "Einfache, responsive, intuitive Oberfläche",
      "Echtzeit-Transkription mit Download-Funktion"
    ],
    reunidocsT: "ReuniDocs",
    reunidocsSubt: "Intelligente Plattform zur Analyse und Zusammenfassung großer PDF-Dokumente ohne externe Verbindung.",
    reunidocsDesc:
      "ReuniDocs ist ein Tool zur intelligenten Durchsuchung und Konsultation schwerer PDFs, die oft von Verwaltungen genutzt werden (z. B. Protokolle, Haushaltspläne, Raumordnungspläne). Nutzer können in natürlicher Sprache fragen und erhalten relevante Antworten mit unterstützenden Textausschnitten – komplett offline.",
    reunidocsS: "Abgeschlossen und lokal installiert",
    reunidocsB: [],
    reunidocsF: [
      "Import und automatische Verarbeitung großer Dokumente (PDF, DOCX, TXT)",
      "Intelligente Chunk-Erstellung mit Kontextbezug",
      "Kombination aus Keyword- und semantischer Suche",
      "Automatische Zusammenfassungen durch KI",
      "Lokaler Chatbot mit kontextbasierten Antworten",
      "Oberfläche zum Durchsuchen, Anzeigen, Hinzufügen und Löschen von Dokumenten",
      "100% lokal, sicher und schnell",
      "Automatische Bereinigung von Dokumenten und Chatsessions"
    ],
    newnewsT: "NewNews",
    newnewsSubt: "Automatisches Monitoring-System, das Nachrichten nach Themen sammelt und per KI zusammenfasst.",
    newnewsDesc:
      "NewNews verfolgt automatisch Nachrichtenquellen, sammelt aktuelle Artikel und fasst sie per KI zusammen. Für Angestellte oder Gewählte gedacht, unterstützt es thematische Recherchen, Berichte oder interne Verbreitung. Das Tool passt sich an Themen an und funktioniert auch lokal.",
    newnewsS: "Abgeschlossen und lokal installiert",
    newnewsB: [],
    newnewsF: [
      "Intelligentes Scraping von Presse- und Verwaltungswebseiten",
      "Automatische Gruppierung nach Themen",
      "Kurze Zusammenfassungen der Nachrichten",
      "Recherche nach Relevanz und Bereich",
      "Multi-Level-Monitoring"
    ],
    rubiksT: "Rubik’s Cube Solver",
    rubiksSubt: "3D-Simulator zur Lösung jeder Rubik’s-Würfel-Konfiguration",
    rubiksDesc:
      "Dieses Projekt simuliert die Lösung eines Rubik’s Cube mithilfe künstlicher Intelligenz (A*- oder IDA*/BFS-Algorithmus), um optimale Züge zu berechnen. Es bietet eine 3D-Oberfläche zur Visualisierung der Schritte und erlaubt manuelles Eingeben von Mischungen.",
    rubiksS: "Abgeschlossen",
    rubiksB: [],
    rubiksF: [
      "Interaktive 3D-Modellierung des Rubik’s Cube",
      "Intuitive Schnittstelle zur Würfelmanipulation",
      "Automatische Lösung mit Schritt-für-Schritt-Anzeige",
      "Manuelle Konfiguration möglich",
      "Zoom, freie Rotation und flüssiges Rendering"
    ],
    whiskersT: "WhiskersLabyrinth",
    whiskersSubt: "Immersives 3D-Labyrinthspiel mit prozeduraler Generierung und flüssiger Navigation.",
    whiskersDesc:
      "Labyrinth 3D ist ein in WebGL entwickeltes Spiel (React Three Fiber), bei dem der Spieler (als Katze) ein generiertes Labyrinth erkundet und Mäusen ausweicht. Es wurde entworfen zur Erprobung von 3D-Navigation, Echtzeitinteraktion und visuellen Effekten.",
    whiskersS: "Abgeschlossen",
    whiskersB: [],
    whiskersF: [
      "Freie Bewegung auf einer 3D-Fläche",
      "Flüssige Spielersteuerung mit animierten Übergängen",
      "Stilisiertes, prozedural generiertes Terrain",
      "Interaktion mit Objekten und NPCs",
      "Quest-System"
    ],
    fitevoT: "Fit Evo Planer",
    fitevoSubt: "Tool für Aufgabenmanagement, Planung und Teamverfolgung mit Benachrichtigungen in Echtzeit.",
    fitevoDesc:
      "Organisateur ist ein Projekt- und Kollaborationstool für Teams. Es ermöglicht Aufgabenplanung, Fortschrittsverfolgung und Echtzeitbenachrichtigungen. Ziel ist es, Produktivität und Kommunikation im Team zu verbessern.",
    fitevoS: "In Entwicklung",
    fitevoB: [],
    fitevoF: [
      "Aufgabenverwaltung mit Fortschrittsanzeige",
      "Planung von Events und Meetings",
      "Echtzeitbenachrichtigungen (E-Mail / In-App)",
      "Dynamischer Kalender für Aufgaben und Events",
      "Intuitive, responsive Admin-/User-Oberfläche",
      "Sicher und lokalisiert verbunden"
    ],

    // Contact Section
    contactTitle: "Kontakt",
    contactSubtitle: "Kontaktieren Sie mich gerne für weitere Informationen",
    downloadCV: "/CV_en.pdf",
    cv : "Lebenslauf",
    preview: "Vorschau",

    //Projets Section
    back: "Zurück",
    info: "Informationen",
    date: "Datum",
    duree: "Dauer",
    statut: "Status",
    team: "Team",
    fonctionnalites: "Funktionen",
    otherProjects: "Weitere Projekte",
    backP: "Zurück zum Portfolio",

    // Language
    language: "Deutsch",
    switchLanguage: "Français",
  }

  
}