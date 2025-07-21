"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment, Sphere, Box, Plane } from "@react-three/drei"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { Group } from 'three'
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Zap,
  Globe,
  Database,
  Smartphone,
  Server,
  ExternalLink, ChevronLeft, ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CustomCursor from "@/components/custom-cursor"

const projects = [
  {
    id: "sensibilisation-ia",
    title: "Sensibilisation à l'IA",
    description: "Site de sensibilisation à l'intelligence artificielle avec des ressources éducatives",
    tech: ["React", "Three.js", "Node.js", "PostgreSQL", ],
    image: "/Screen_EasyIA.png",
    link: "https://example.com",
    date: "06/2025",
    fullDescription:
      "Une plateforme e-commerce révolutionnaire qui permet aux utilisateurs de visualiser les produits en 3D avant l'achat. Les clients peuvent faire pivoter les objets, zoomer et même les placer virtuellement dans leur espace grâce à la réalité augmentée.",
    features: ["Visualisation 3D", "Réalité augmentée", "Panier d'achat", "Paiement sécurisé"],
    screenshots: [
      "/placeholder.svg?height=600&width=800&text=Screenshot+1",
      "/placeholder.svg?height=600&width=800&text=Screenshot+2",
    ],
  },
  {
    id: "dashboard-analytics",
    title: "Dashboard Analytics",
    description: "Interface d'analyse de données avec graphiques interactifs et temps réel",
    tech: ["Vue.js", "D3.js", "Python"],
    image: "/placeholder.svg?height=300&width=400&text=Dashboard+Analytics",
    link: "https://example.com",
    date: "2023",
    fullDescription:
      "Un tableau de bord analytique puissant qui transforme les données brutes en insights visuels. Avec des graphiques interactifs et des mises à jour en temps réel, les utilisateurs peuvent prendre des décisions éclairées rapidement.",
    features: ["Graphiques interactifs", "Données en temps réel", "Filtres avancés", "Exportation de rapports"],
    screenshots: [
      "/placeholder.svg?height=600&width=800&text=Dashboard+View",
      "/placeholder.svg?height=600&width=800&text=Analytics+Charts",
    ],
  },
  {
    id: "app-mobile-ar",
    title: "App Mobile AR",
    description: "Application mobile de réalité augmentée pour l'e-commerce",
    tech: ["React Native", "ARKit", "Firebase"],
    image: "/placeholder.svg?height=300&width=400&text=App+Mobile+AR",
    link: "https://example.com",
    date: "2023",
    fullDescription:
      "Une application mobile innovante qui utilise la réalité augmentée pour permettre aux utilisateurs de visualiser des produits dans leur environnement réel avant l'achat. Compatible avec iOS et Android.",
    features: ["Placement virtuel", "Mesures précises", "Catalogue de produits", "Partage social"],
    screenshots: [
      "/placeholder.svg?height=600&width=800&text=AR+View",
      "/placeholder.svg?height=600&width=800&text=Product+Catalog",
    ],
  },
  {
    id: "site-web-creatif",
    title: "Site Web Créatif",
    description: "Site web avec animations avancées et design moderne",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    image: "/placeholder.svg?height=300&width=400&text=Site+Web+Créatif",
    link: "https://example.com",
    date: "2022",
    fullDescription:
      "Un site web à la pointe de la technologie avec des animations fluides et un design moderne. L'expérience utilisateur a été soigneusement conçue pour captiver les visiteurs et les inciter à l'action.",
    features: ["Animations avancées", "Design responsive", "Performance optimisée", "SEO avancé"],
    screenshots: [
      "/placeholder.svg?height=600&width=800&text=Homepage",
      "/placeholder.svg?height=600&width=800&text=Portfolio+Section",
    ],
  },
  {
    id: "app-fitness",
    title: "App Fitness",
    description: "Application de fitness avec suivi personnalisé",
    tech: ["React Native", "Firebase", "HealthKit"],
    image: "/placeholder.svg?height=300&width=400&text=App+Fitness",
    link: "https://example.com",
    date: "2022",
    fullDescription: "Application complète de fitness avec programmes personnalisés",
    features: ["Suivi d'activité", "Programmes personnalisés", "Statistiques", "Communauté"],
    screenshots: ["/placeholder.svg?height=600&width=800&text=Fitness+App"],
  },
  {
    id: "plateforme-learning",
    title: "Plateforme E-Learning",
    description: "Plateforme d'apprentissage en ligne interactive",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    image: "/placeholder.svg?height=300&width=400&text=E-Learning",
    link: "https://example.com",
    date: "2021",
    fullDescription: "Plateforme complète d'apprentissage avec cours interactifs",
    features: ["Cours vidéo", "Quiz interactifs", "Certificats", "Progression"],
    screenshots: ["/placeholder.svg?height=600&width=800&text=Learning+Platform"],
  },
]

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: containerRef })
  const nbrprojets = projects.length

  const sections = [
    { id: "hero", title: "Accueil" },
    { id: "about", title: "À propos" },
    { id: "skills", title: "Compétences" },
    { id: "projects", title: "Projets" },
    { id: "contact", title: "Contact" },
  ]

  const scrollToSection = (index: number) => {
    if (containerRef.current) {
      const sectionWidth = containerRef.current.scrollWidth / sections.length
      containerRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: "smooth",
      })
    }
  }

  // Gestion du défilement horizontal avec la molette de la souris - Sensibilité augmentée
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Vérifier si on est dans une zone de scroll spécifique
      const target = e.target as HTMLElement
      if (target.closest(".skills-scroll-zone") || target.closest(".projects-scroll-zone")) {
        return // Laisser le scroll local gérer
      }

      if (containerRef.current) {
        e.preventDefault()
        // Augmentation de la sensibilité x3
        containerRef.current.scrollLeft += e.deltaY * 3

        // Mise à jour de la section active
        const scrollLeft = containerRef.current.scrollLeft
        const sectionWidth = containerRef.current.scrollWidth / sections.length
        const newSection = Math.round(scrollLeft / sectionWidth)
        setCurrentSection(newSection)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel)
      }
    }
  }, [sections.length])

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden relative">
      {/* Curseur personnalisé */}
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.div>
          <div className="flex gap-4">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(index)}
                className={`nav-button px-4 py-2 rounded-2xl font-medium transition-all border border-transparent ${
                  currentSection === index
                    ? "active bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                    : "text-gray-300 hover:text-white border-gray-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-section={section.id}
              >
                <span>{section.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* 3D Background professionnel avec gestion d'erreur */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 10] }}
          onCreated={({ gl }) => {
            // Gestion des erreurs WebGL
            gl.domElement.addEventListener("webglcontextlost", (e) => {
              e.preventDefault()
              console.warn("WebGL context lost, attempting to restore...")
            })

            gl.domElement.addEventListener("webglcontextrestored", () => {
              console.log("WebGL context restored")
            })
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: false,
          }}
        >
          <Environment preset="city" />
          <ProfessionalBackground />
          <SubtleParticles />
        </Canvas>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="flex h-full overflow-x-auto overflow-y-hidden scroll-smooth z-10 relative"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={(e) => {
          const scrollLeft = e.currentTarget.scrollLeft
          const sectionWidth = e.currentTarget.scrollWidth / sections.length
          const newSection = Math.round(scrollLeft / sectionWidth)
          setCurrentSection(newSection)
        }}
      >
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection nbrprojets={nbrprojets} />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  )
}

// Arrière-plan 3D professionnel optimisé
function ProfessionalBackground() {
  return (
    <>
      {/* Formes géométriques subtiles - Réduites pour les performances */}
      <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Box args={[1.5, 1.5, 1.5]} position={[-8, 3, -10]}>
          <meshStandardMaterial color="#1e293b" transparent opacity={0.3} wireframe />
        </Box>
      </Float>

      <Float speed={0.3} rotationIntensity={0.1} floatIntensity={0.3}>
        <Sphere args={[1, 16, 16]} position={[8, -3, -12]}>
          <meshStandardMaterial color="#334155" transparent opacity={0.2} />
        </Sphere>
      </Float>

      <Float speed={0.4} rotationIntensity={0.15} floatIntensity={0.4}>
        <Box args={[0.8, 2, 0.8]} position={[5, 4, -8]}>
          <meshStandardMaterial color="#475569" transparent opacity={0.25} wireframe />
        </Box>
      </Float>

      {/* Plans géométriques en arrière-plan */}
      <Plane args={[20, 20]} position={[0, 0, -20]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="#0f172a" transparent opacity={0.1} />
      </Plane>
    </>
  )
}

// Particules optimisées
function SubtleParticles() {
  const mesh = useRef<Group>(null)

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.02
    }
  })

  // Réduction du nombre de particules pour les performances
  const particles = Array.from({ length: 25 }, (_, i) => (
    <mesh key={i} position={[(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20 - 10]}>
      <sphereGeometry args={[0.01]} />
      <meshBasicMaterial color="#94a3b8" opacity={0.6} transparent />
    </mesh>
  ))

  return <group ref={mesh}>{particles}</group>
}

function HeroSection() {
  const name = "Gautier Hoarau"
  const [displayedName, setDisplayedName] = useState("")
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showGrid, setShowGrid] = useState(false)

  // Animation lettre par lettre améliorée
  useEffect(() => {
    let currentIndex = 0
    const timer = setInterval(() => {
      if (currentIndex < name.length) {
        setDisplayedName(name.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(timer)
        setShowSubtitle(true)
        setTimeout(() => setShowGrid(true), 500)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [name])

  return (
    <section
      className="min-w-full h-full flex items-center justify-center relative overflow-hidden"
      data-section="hero"
    >
      {/* Grille professionnelle */}
      {showGrid && (
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {[...Array(96)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.005 }}
                className="border border-slate-700/30"
              />
            ))}
          </div>
        </div>
      )}

      <div className="text-center z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-slate-300 bg-clip-text text-transparent relative"
        >
          {displayedName}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            className="text-blue-400"
          >
            |
          </motion.span>
        </motion.h1>

        <AnimatePresence>
          {showSubtitle && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.p className="text-2xl mb-8 text-slate-300">
                Ingénieur informatique spécialisé dans l'Intelligence Artificielle
              </motion.p>

              {/* Ligne professionnelle */}
              <motion.div
                className="w-40 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"
                initial={{ width: 0 }}
                animate={{ width: 160 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function AboutSection({ nbrprojets }: { nbrprojets: number }) {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: "Expertise",
      content:
        "Développeur Full-Stack avec plus de 5 ans d'expérience dans la conception et le développement d'applications web modernes. Spécialisé dans les technologies JavaScript/TypeScript, avec une expertise approfondie en React, Node.js et architectures cloud.",
    },
    {
      title: "Approche",
      content:
        "Mon approche se concentre sur la création de solutions robustes, scalables et maintenables. Je privilégie les bonnes pratiques de développement, l'architecture clean code et l'optimisation des performances pour garantir des applications de qualité professionnelle.",
    },
    {
      title: "Objectifs",
      content:
        "Contribuer à des projets innovants en apportant mon expertise technique et ma vision stratégique. Mon objectif est d'accompagner les entreprises dans leur transformation digitale en développant des solutions sur mesure qui répondent à leurs enjeux métier.",
    },
  ]

  return (
    <section
      className="min-w-full h-full flex items-center justify-center p-12"
      data-section="about"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
              À propos
            </h2>

            {/* Tabs Navigation avec animation */}
            <div className="flex gap-4 mb-8">
              {tabs.map((tab, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`about-button px-6 py-3 rounded-2xl font-semibold transition-all ${
                    activeTab === index
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-section="about"
                >
                  {tab.title}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-slate-300 leading-relaxed mb-8"
            >
              {tabs[activeTab].content}
            </motion.div>

            {/* Stats avec animation violette */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: nbrprojets, label: "Projets" },
                { number: "5+", label: "Années" },
                { number: "100%", label: "Motivation" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="stat-button text-center p-4 bg-slate-800/50 rounded-lg border border-blue-500/30 backdrop-blur-sm"
                  data-section="about"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-slate-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div
              className="w-96 h-96 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-500/20 relative overflow-hidden group"
              data-section="about"
            >
              <motion.div
                className="text-8xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                💼
              </motion.div>

              {/* Éléments géométriques professionnels */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-blue-400/60 rounded-sm"
                  animate={{
                    x: [0, Math.cos((i * 90 * Math.PI) / 180) * 80],
                    y: [0, Math.sin((i * 90 * Math.PI) / 180) * 80],
                    rotate: 360,
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 1,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)

  const skills = [
    { name: "Unity", level: 80, icon: <Code className="h-6 w-6" />, color: "from-red-400 to-red-600", description: "C# – Mécanique 3D, UI Canvas" },
    { name: "React", level: 95, icon: <Code className="h-6 w-6" />, color: "from-blue-400 to-blue-600", description: "React, Tailwind, Shadcn/UI" },
    { name: "TypeScript", level: 92, icon: <Zap className="h-6 w-6" />, color: "from-indigo-400 to-indigo-600", description: "C# – Mécanique 3D, UI Canvas" },
    { name: "Node.js", level: 90, icon: <Globe className="h-6 w-6" />, color: "from-green-400 to-green-600", description: "C# – Mécanique 3D, UI Canvas" },
    { name: "NLP", level: 88, icon: <Palette className="h-6 w-6" />, color: "from-slate-400 to-slate-600", description: "RAG, Résumés, Recherche sémantique" },
    { name: "Traitement de fichiers", level: 85, icon: <Database className="h-6 w-6" />, color: "from-blue-500 to-blue-700", description: "PDF → texte, chunking, normalisation" },
    { name: "React Native", level: 82, icon: <Smartphone className="h-6 w-6" />, color: "from-indigo-500 to-indigo-700", description: "C# – Mécanique 3D, UI Canvas" },
    { name: "BDD", level: 80, icon: <Server className="h-6 w-6" />, color: "from-orange-400 to-orange-600", description: "PostgreSQL, Supabase, pgvector" },
    { name: "Docker", level: 78, icon: <Code className="h-6 w-6" />, color: "from-gray-400 to-gray-600", description: "C# – Mécanique 3D, UI Canvas" },
    { name: "RAG", level: 75, icon: <Code className="h-6 w-6" />, color: "from-purple-400 to-purple-600", description: "Recherche augmentée par IA locale" },
    { name: "CI/CD", level: 70, icon: <Code className="h-6 w-6" />, color: "from-yellow-400 to-yellow-600", description: "C# – Mécanique 3D, UI Canvas" },
    { name: "Python", level: 68, icon: <Code className="h-6 w-6" />, color: "from-teal-400 to-teal-600", description: "FastAPI, NLP, scraping, PPO" },
    { name: "Deep Learning", level: 65, icon: <Code className="h-6 w-6" />, color: "from-pink-400 to-pink-600", description: "C# – Mécanique 3D, UI Canvas" },
  ]

  // Gestion du scroll pour les compétences - Zone délimitée
  const skillsPerPage = 2
  const totalSkillPages = Math.ceil(skills.length / skillsPerPage)

  // Obtenir les 4 compétences actuelles à afficher
  const visibleSkills = skills.length <= 4 ? skills : skills.slice(currentSkillIndex, currentSkillIndex + 4)

  return (
    <section
      className="min-w-full h-full flex items-center justify-center p-12"
      data-section="skills"
    >
      <div className="w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-center mb-14 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent"
        >
          Compétences
        </motion.h2>
        <div
          className="w-full max-w-7xl mx-auto border-2 border-indigo-500/20 rounded-2xl p-8 bg-slate-800/20 backdrop-blur-sm relative"
        >
        {/* Flèche gauche */}
        {currentSkillIndex > 0 && (
          <button
            onClick={() => setCurrentSkillIndex((prev) => Math.max(prev - 1, 0))}
            className="absolute -left-14 top-1/2 -translate-y-1/2 z-10 bg-slate-700/60 hover:bg-slate-700 p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Flèche droite */}
        {currentSkillIndex < totalSkillPages - 1 && (
          <button
            onClick={() => setCurrentSkillIndex((prev) => Math.min(prev + 1, totalSkillPages - 1))}
            className="absolute -right-14 top-1/2 -translate-y-1/2 z-10 bg-slate-700/60 hover:bg-slate-700 p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Zone de scroll délimitée pour les compétences */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-19">
            <AnimatePresence mode="wait">
              {visibleSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${currentSkillIndex + index}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotate: -2 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  exit={{ opacity: 0, x: index % 2 === 0 ? 100 : -100, rotate: 2 }}
                  transition={{ duration: 1.2 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="skill-button"
                  data-section="skills"
                >
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-blue-500/50 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>{skill.icon}</div>
                        <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                      </div>
                      {skill.description && (
                        <p className="text-slate-300 text-sm mb-4 ml-1">{skill.description}</p>
                      )}
                      <div className="relative">
                        <div className="w-full bg-slate-700 rounded-full h-3">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5 }}
                            className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                          />
                        </div>
                        <span className="absolute right-0 -top-8 text-blue-400 font-bold">{skill.level}%</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Indicateurs de pagination pour les compétences (si plus de 4) */}
          {skills.length > 4 && (
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(totalSkillPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSkillIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSkillIndex === index
                      ? "bg-blue-400 w-8"
                      : "bg-slate-600 hover:bg-slate-500 w-2"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const router = useRouter()
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const projectsScrollRef = useRef<HTMLDivElement>(null)
 



  const projectsPerPage = 3
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  // Gestion du scroll pour les projets - Zone délimitée
  useEffect(() => {
    const handleProjectsWheel = (e: WheelEvent) => {
      if (projects.length <= projectsPerPage) return

      e.preventDefault()
      e.stopPropagation()

      if (e.deltaY > 0) {
        // Scroll vers le bas - prochaine page
        setCurrentProjectIndex((prev) => (prev + 1) % totalPages)
      } else {
        // Scroll vers le haut - page précédente
        setCurrentProjectIndex((prev) => (prev - 1 + totalPages) % totalPages)
      }
    }

    const projectsScrollArea = projectsScrollRef.current
    if (projectsScrollArea) {
      projectsScrollArea.addEventListener("wheel", handleProjectsWheel, { passive: false })
    }

    return () => {
      if (projectsScrollArea) {
        projectsScrollArea.removeEventListener("wheel", handleProjectsWheel)
      }
    }
  }, [projects.length, projectsPerPage, totalPages])

  const getCurrentProjects = () => {
    const start = currentProjectIndex * projectsPerPage
    return projects.slice(start, start + projectsPerPage)
  }

  // Fonction pour naviguer vers la page de détail du projet
  const goToProjectDetail = (projectId: string) => {
    router.push(`/projet/${projectId}`)
  }

  return (
    <section
      className="min-w-full h-full flex items-center justify-center p-12 pt-20"
      data-section="projects"
    >
      <div className="w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent"
        >
          Projets
        </motion.h2>

        <div
          className="w-full max-w-7xl mx-auto border-2 border-indigo-500/20 rounded-2xl p-8 min-h-[480px] bg-slate-800/20 backdrop-blur-sm relative"
        >
          {/* Flèche gauche */}
          {currentProjectIndex > 0 && (
            <button
              onClick={() => setCurrentProjectIndex((prev) => Math.max(prev - 1, 0))}
              className="absolute -left-14 top-1/2 -translate-y-1/2 z-10 bg-slate-700/60 hover:bg-slate-700 p-2 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Flèche droite */}
          {currentProjectIndex < totalPages - 1 && (
            <button
              onClick={() => setCurrentProjectIndex((prev) => Math.min(prev + 1, totalPages - 1))}
              className="absolute -right-14 top-1/2 -translate-y-1/2 z-10 bg-slate-700/60 hover:bg-slate-700 p-2 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
          {/* Projets avec nouvelle animation rose/magenta */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProjectIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {getCurrentProjects().map((project, index) => (
                <motion.div
                  key={`${currentProjectIndex}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 100,
                    rotate: index * 2 - 2,
                  }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 1.8, delay: index * 0.3 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: index % 2 === 0 ? 1 : -1,
                    transition: { duration: 0.3 },
                  }}
                  className="project-button cursor-fill"
                  onClick={() => goToProjectDetail(project.id)}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = ((e.clientX - rect.left) / rect.width) * 100
                    const y = ((e.clientY - rect.top) / rect.height) * 100
                    e.currentTarget.style.setProperty("--mouse-x", `${x}%`)
                    e.currentTarget.style.setProperty("--mouse-y", `${y}%`)
                  }}
                  data-section="projects"
                >
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all overflow-hidden group h-full cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-32 object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-slate-300 mb-4 text-sm">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-full text-sm text-blue-400 border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 group">
                        <span className="flex items-center justify-center gap-2">
                          {project.date}
                          <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Indicateurs de pagination animés */}
          {projects.length > projectsPerPage && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentProjectIndex === index
                      ? "bg-indigo-400 w-8"
                      : "bg-slate-600 hover:bg-slate-500 w-2"
                  }`}
                  data-section="projects"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const contacts = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      color: "from-blue-500 to-blue-700",
      href: "mailto:gautier.hoarau97421@gmail.com"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      color: "from-slate-500 to-slate-700",
      href: "https://github.com/gautierhoarau", // ← remplace par ton GitHub
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      color: "from-indigo-500 to-indigo-700",
      href: "https://www.linkedin.com/in/gautier-hoarau-666b9524a"
    },
  ]

  return (
    <section
      className="min-w-full h-full flex items-center justify-center p-12"
      data-section="contact"
    >
      <div className="max-w-4xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-slate-300 mb-12"
        >
          Discutons de votre prochain projet ensemble
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, rotate: -180, scale: 0 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.2, type: "spring" }}
              whileHover={{ y: -10, scale: 1.05 }}
              data-section="contact"
            >
              <Button
                size="lg"
                className={`bg-gradient-to-r ${contact.color} transition-all duration-300 p-4 px-6 rounded-full flex items-center gap-2 text-white`}
              >
                {contact.icon}
                <span>{contact.label}</span>
              </Button>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

