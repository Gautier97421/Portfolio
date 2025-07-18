"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Github, Globe, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CustomCursor from "@/components/custom-cursor"

/* -------------------------------------------------------------------------- */
/*                                PROJECT DATA                                */
/*    In a real app you would fetch this, but we hard-code it for the demo.   */
/* -------------------------------------------------------------------------- */
const projects = [
  {
    id: "sensibilisation-ia",
    title: "EasyIA",
    subtitle: "Plateforme d'apprentissage de l'Intelligence Artificielle",
    description:
      "EasyIA est une plateforme web que j’ai développée dans le cadre d’un stage pour accompagner une collectivité dans la découverte, la compréhension et l’usage des outils d’intelligence artificielle (IA). Elle propose un accès centralisé à des ressources pédagogiques, des outils concrets et des cas d’usage adaptés aux services de la collectivité. L’objectif principal était de démystifier l’IA, de favoriser son adoption responsable et de répondre aux besoins spécifiques identifiés auprès des agents.",
    tech: ["React", "CSS", "Node.js", "TypeScript", "Supabase"],
    year: "2025",
    duration: "1 mois",
    status: "Finalisé et mis en ligne",
    hero: "/Screen_EasyIA_1.png",
    links: {
      site: "https://easyia.onrender.com/",
    },
    bullets: [

    ],
    features: [
      "Systeme de connexion sécurisé",
      "Suivi des progressions",
      "Ressources pédagogiques",
      "Interface admin avancée",
    ],
    metrics: [
      { label: "Conversion", value: "+40%", color: "text-green-400" },
      { label: "Retours", value: "-60%", color: "text-blue-400" },
      { label: "Satisfaction", value: "4.8 / 5", color: "text-purple-400" },
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
    subtitle: "Interface d'analyse de données",
    description:
      "Un tableau de bord analytique puissant qui transforme les données brutes en insights visuels. Avec des graphiques interactifs et des mises à jour en temps réel, les utilisateurs peuvent prendre des décisions éclairées rapidement. Le système traite des millions de points de données et les présente de manière intuitive.",
    tech: ["Vue.js", "D3.js", "Python", "PostgreSQL", "Redis"],
    year: "2023",
    duration: "4 mois",
    team: "3 développeurs",
    status: "En production",
    hero: "/",
    links: {
      site: "https://easyia.onrender.com/",
    },
    bullets: ["Graphiques interactifs D3.js", "Données en temps réel", "Filtres avancés", "Exportation de rapports"],
    features: [
      "Graphiques D3.js interactifs",
      "WebSocket temps réel",
      "Filtres dynamiques",
      "Export PDF/Excel",
      "Alertes personnalisées",
      "API de données",
    ],
    metrics: [
      { label: "Performance", value: "+50%", color: "text-green-400" },
      { label: "Temps d'analyse", value: "-50%", color: "text-blue-400" },
      { label: "Utilisateurs", value: "10k+", color: "text-purple-400" },
    ],
    gallery: [
      "/retexte_1.jpg",
      "/retexte_2.jpg",
      "/retexte_3.jpg",
    ],
  },
  {
    id: "app-mobile-ar",
    title: "App Mobile AR",
    subtitle: "Application de réalité augmentée",
    description:
      "Une application mobile innovante qui utilise la réalité augmentée pour permettre aux utilisateurs de visualiser des produits dans leur environnement réel avant l'achat. Compatible avec iOS et Android, l'app utilise les dernières technologies AR pour offrir une expérience immersive.",
    tech: ["React Native", "ARKit", "Firebase", "ARCore", "Unity"],
    year: "2023",
    duration: "5 mois",
    team: "3 développeurs",
    status: "En production",
    hero: "/Screen_AR_1.png",
    links: {
      site: "https://easyia.onrender.com/",
    },
    bullets: ["Placement virtuel", "Mesures précises", "Catalogue de produits", "Partage social"],
    features: [
      "ARKit/ARCore natif",
      "Détection de surfaces",
      "Mesures automatiques",
      "Partage social",
      "Mode hors ligne",
      "Push notifications",
    ],
    metrics: [
      { label: "Téléchargements", value: "100k+", color: "text-green-400" },
      { label: "Note", value: "4.8/5", color: "text-blue-400" },
      { label: "Rétention", value: "85%", color: "text-purple-400" },
    ],
    gallery: [
      "/retexte_1.jpg",
      "/placeholder.svg?height=600&width=800&text=Product+Catalog",
      "/placeholder.svg?height=600&width=800&text=Social+Features",
    ],
  },
  {
    id: "site-web-creatif",
    title: "Site Web Créatif",
    subtitle: "Site avec animations avancées",
    description:
      "Un site web à la pointe de la technologie avec des animations fluides et un design moderne. L'expérience utilisateur a été soigneusement conçue pour captiver les visiteurs et les inciter à l'action. Chaque interaction est pensée pour créer une expérience mémorable.",
    tech: ["Next.js", "Framer Motion", "Tailwind", "GSAP", "TypeScript"],
    year: "2022",
    duration: "3 mois",
    team: "2 développeurs",
    status: "En production",
    hero: "/placeholder.svg?height=500&width=1200&text=Creative+Site+Hero",
    links: {
      site: "https://easyia.onrender.com/",
    },
    bullets: ["Animations avancées", "Design responsive", "Performance optimisée", "SEO avancé"],
    features: [
      "Animations GSAP/Framer",
      "Design responsive",
      "Performance 98/100",
      "SEO optimisé",
      "PWA ready",
      "Analytics intégrées",
    ],
    metrics: [
      { label: "Lighthouse", value: "98/100", color: "text-green-400" },
      { label: "Chargement", value: "<2s", color: "text-blue-400" },
      { label: "Conversion", value: "+35%", color: "text-purple-400" },
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Homepage",
      "/placeholder.svg?height=600&width=800&text=Portfolio+Section",
      "/placeholder.svg?height=600&width=800&text=Contact+Form",
    ],
  },
  {
    id: "app-fitness",
    title: "App Fitness",
    subtitle: "Application de fitness personnalisée",
    description:
      "Une application de fitness complète qui permet aux utilisateurs de suivre leurs activités physiques, de créer des programmes d'entraînement personnalisés et de visualiser leurs progrès. Intégrée avec les capteurs de santé des smartphones, elle offre une expérience utilisateur fluide et motivante.",
    tech: ["React Native", "Firebase", "HealthKit", "Google Fit", "ML Kit"],
    year: "2022",
    duration: "4 mois",
    team: "3 développeurs",
    status: "En production",
    hero: "/placeholder.svg?height=500&width=1200&text=Fitness+App+Hero",
    links: {
      site: "https://easyia.onrender.com/",
    },
    bullets: ["Suivi d'activité", "Programmes personnalisés", "Statistiques détaillées", "Communauté d'entraide"],
    features: [
      "Suivi GPS intégré",
      "HealthKit/Google Fit",
      "IA personnalisée",
      "Communauté sociale",
      "Défis gamifiés",
      "Coach virtuel",
    ],
    metrics: [
      { label: "Rétention", value: "+65%", color: "text-green-400" },
      { label: "Utilisateurs actifs", value: "50k+", color: "text-blue-400" },
      { label: "Satisfaction", value: "4.7/5", color: "text-purple-400" },
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Fitness+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Workout+Tracker",
      "/placeholder.svg?height=600&width=800&text=Progress+Charts",
    ],
  },
  {
    id: "plateforme-learning",
    title: "Plateforme E-Learning",
    subtitle: "Plateforme d'apprentissage interactive",
    description:
      "Une plateforme d'apprentissage en ligne moderne qui permet aux formateurs de créer des cours interactifs et aux étudiants de suivre leur progression. Avec des fonctionnalités comme les quiz en temps réel, les certificats automatisés et le suivi de progression, elle transforme l'expérience d'apprentissage à distance.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "WebRTC", "Socket.io"],
    year: "2021",
    duration: "6 mois",
    team: "5 développeurs",
    status: "En production",
    hero: "/placeholder.svg?height=500&width=1200&text=E-Learning+Hero",
    links: {
      site: "https://easyia.onrender.com/",
    },
    bullets: ["Cours vidéo HD", "Quiz interactifs", "Certificats automatisés", "Suivi de progression"],
    features: [
      "Streaming vidéo HD",
      "Quiz temps réel",
      "Certificats PDF",
      "Visioconférence",
      "Forum intégré",
      "Mobile responsive",
    ],
    metrics: [
      { label: "Étudiants", value: "10k+", color: "text-green-400" },
      { label: "Complétion", value: "78%", color: "text-blue-400" },
      { label: "Satisfaction", value: "4.9/5", color: "text-purple-400" },
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Course+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Interactive+Quiz",
      "/placeholder.svg?height=600&width=800&text=Certificate+Generator",
    ],
  },
]

interface PageProps {
  params: { id: string }
}

/* -------------------------------------------------------------------------- */
/*                                  THE PAGE                                  */
/* -------------------------------------------------------------------------- */
export default function ProjectPage({ params }: PageProps) {
  const router = useRouter()
  const [project, setProject] = useState<(typeof projects)[0] | null>(null)
  const [imgIndex, setImgIndex] = useState(0)

  /* ------------------------- load / redirect on error ------------------------ */
  useEffect(() => {
    const found = projects.find((p) => p.id === params.id)
    if (!found) router.push("/")
    else setProject(found!)

    // Forcer le scroll sur cette page
    document.body.style.overflow = "auto"
    document.documentElement.style.overflow = "auto"
    document.body.style.height = "auto"
    document.documentElement.style.height = "auto"

    return () => {
      // Restaurer les styles originaux quand on quitte la page
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
      document.body.style.height = "100%"
      document.documentElement.style.height = "100%"
    }
  }, [params.id, router])

  if (!project) return null

  // Obtenir les autres projets pour la section "Autres projets"
  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 3)

  /* -------------------------------------------------------------------------- */
  /*                                    JSX                                     */
  /* -------------------------------------------------------------------------- */
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white" data-page="project">
      <CustomCursor />

      {/* Sticky header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="rounded-xl text-slate-200 hover:text-blue-400 nav-button"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </Button>

          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
            {project.title}
          </h1>

          <div className="flex gap-3 ">
            {project.links.site && (
              <Button
                variant="outline"
                onClick={() => window.open("https://easyia.onrender.com/", "_blank")}
                className="rounded-xl shadow-sm border-blue-500/40 text-blue-400 hover:bg-blue-500/10 project-button"
              >
                <Globe className="w-4 h-4 mr-2" /> Site
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* HERO  */}
      <section className="relative h-[55vh] overflow-hidden flex items-center justify-center">
        {/* Image de fond avec animation */}
        <motion.img
          key={imgIndex}
          src={project.gallery[imgIndex]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-contain bg-slate-900/20"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent pointer-events-none" />

        {/* Technologies overlay - en bas à gauche de l'image */}
        <div className="absolute bottom-6 left-6 z-20">
          <div className="flex flex-wrap gap-2 max-w-md">
            {project.tech.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-green-300 text-sm border border-green-500/40 shadow-lg"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        

        {/* Flèches de navigation */}
        {project.gallery.length > 1 && (
          <>
            <Button
              variant="ghost"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/70 hover:bg-slate-900/90 rounded-full p-2 text-white border border-slate-600 z-20"
              onClick={() => setImgIndex((i) => (i === 0 ? project.gallery.length - 1 : i - 1))}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/70 hover:bg-slate-900/90 rounded-full p-2 text-white border border-slate-600 z-20"
              onClick={() => setImgIndex((i) => (i + 1) % project.gallery.length)}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </>
        )}

        {/* Dots indicator */}
        {project.gallery.length > 1 && (
          <div className="absolute bottom-6 right-6 flex gap-2 z-20">
            {project.gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setImgIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  imgIndex === index ? "bg-blue-400" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* CONTENT - Maintenant scrollable */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* Overview & infos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-3 gap-8 "
        >
          {/* left – description */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
              {project.subtitle}
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">{project.description}</p>
            <ul className="space-y-2 ml-4 list-disc list-inside text-slate-400">
              {project.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          {/* right – quick facts + fonctionnalités */}
          <div className="space-y-6">
            {/* Informations du projet */}
            <Card className="bg-slate-800/50 border-blue-500/20 rounded-2xl border backdrop-blur-sm interactive-element">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Informations</h3>
                <Fact label="Année" value={project.year} />
                <Fact label="Durée" value={project.duration} />
                <Fact label="Statut" value={project.status} />
              </CardContent>
            </Card>

            {/* Fonctionnalités */}
            <Card className="bg-slate-800/50 border-purple-500/20 rounded-2xl border backdrop-blur-sm interactive-element">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-4">Fonctionnalités</h3>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-slate-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Autres projets (remplace la galerie) */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-semibold text-white">Autres projets</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((otherProject, i) => (
              <motion.div
                key={otherProject.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="relative group cursor-pointer rounded-2xl interactive-element project-button"
                onClick={() => router.push(`/projet/${otherProject.id}`)}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all overflow-hidden h-full min-h-[320px] flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={otherProject.gallery[0] || "/retexte_1.png"}
                      alt={otherProject.title}
                      className="w-full h-56 object-cover transition-transform group-hover:scale-110" // ↖️ augmentée ici
                      
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  {/* Contenu */}
                  <CardContent className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{otherProject.title}</h4>
                      <p className="text-slate-400 text-sm mb-3 line-clamp-3">{otherProject.subtitle}</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-blue-400 text-sm">{otherProject.year}</span>
                      <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>


        {/* Back to portfolio button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center pt-12"
        >
          <Button
            onClick={() => router.push("/")}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl hover:from-blue-600 hover:to-indigo-700 px-8 py-3 text-lg project-button"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour au portfolio
          </Button>
        </motion.div>
      </main>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                             SMALL REUSABLE PARTS                            */
/* -------------------------------------------------------------------------- */

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="font-medium text-slate-400">{label}</span>
      <span className="text-slate-200">{value}</span>
    </div>
  )
}
