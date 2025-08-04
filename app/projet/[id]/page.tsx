// app/projet/[id]/page.tsx

"use client"

import { useEffect, useState, useMemo  } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Github, Globe, ChevronLeft, ChevronRight, ExternalLink, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CustomCursor from "@/components/custom-cursor"
import { projects } from "@/lib/project" 
import {translations } from "@/lib/traduction"
import { useLanguage } from "@/lib/use_language"
import { getProjects } from "@/lib/project"
import SimpleCursorDot from "@/components/simple-cursor"

interface PageProps {
  params: { id: string };
}

export default function ProjectPage({ params }: PageProps) {
  const router = useRouter()
  const [imgIndex, setImgIndex] = useState(0)
  const [language, setLanguage] = useLanguage()
  const [isMobile, setIsMobile] = useState(false)
  const [otherProjects, setOtherProjects] = useState<(typeof projects)>([])
  const [customCursorEnabled, setCustomCursorEnabled] = useState(true)
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] as string;
  }


  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])
  
  const translatedProjects = useMemo(() => getProjects(language), [language]);
  const project = useMemo(() => translatedProjects.find((p) => p.id === params.id), [translatedProjects, params.id]);


  useEffect(() => {
    const fetchData = async () => {
      const { id } = await params;
      const found = projects.find((p) => p.id === id);
      if (!found) {
        router.push("/")
      }
    };
    fetchData();
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    document.body.style.height = "auto";
    document.documentElement.style.height = "auto";
    return () => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.documentElement.style.height = "100%";
    };
  }, [params.id, router]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])
  useEffect(() => {
    const savedCursorPreference = localStorage.getItem("customCursorEnabled")
    if (savedCursorPreference !== null) {
      setCustomCursorEnabled(JSON.parse(savedCursorPreference))
    }
  }, [])

  useEffect(() => {
    if (project) {
      const filteredProjects = translatedProjects.filter((p) => p.id !== project.id);
      const numberOfProjectsToShow = isMobile ? 1 : 3;
      setOtherProjects(filteredProjects.slice(0, numberOfProjectsToShow));
    }
  }, [language, project, isMobile, translatedProjects]);


  const toggleLanguage = () => {
    const next = language === "fr" ? "en" : language === "en" ? "de" : "fr"
    localStorage.setItem("language", next)
    setLanguage(next)
  }

  const goToProjectDetail = (projectId: string) => {
    console.log(`Navigating to project: ${projectId}`);
    router.push(`/projet/${projectId}?lang=${language}`)
  }

  if (!project) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white cursor-none" data-page="project">
      {!isMobile && (
        customCursorEnabled ? (
            <CustomCursor />
        ) : (
            <SimpleCursorDot />
        )
      )}
      {/* Sticky header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Button
                variant="ghost"
                onClick={() => router.back()
}
                className="rounded-xl text-slate-200 hover:text-blue-400 nav-button"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t("back")}
              </Button>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                {project.title}
              </h1>
            </div>
            <div className="flex justify-end">
              <motion.button
                onClick={toggleLanguage}
                className="nav-button flex gap-2 px-3 py-2 rounded-2xl font-medium transition-all border border-transparent text-gray-300 hover:text-white border-gray-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Languages className="h-4 w-4" />
                <span className="text-sm">{t("switchLanguage")}</span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>


      {/* HERO  */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-center">
        {/* Image de fond avec animation */}
        <motion.img
          key={imgIndex}
          src={project.gallery[imgIndex] || "/placeholder.svg"}
          alt={String(project.title)}
          className="absolute inset-0 w-full h-full object-cover bg-slate-900/20"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* soft gradient overlay */}
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent pointer-events-none" />

        {/* Technologies overlay - en bas à gauche de l'image */}
        <div className="absolute bottom-6 left-6 z-20">
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-green-300 text-xs md:text-sm lg:text-sm border border-green-500/40 shadow-lg"
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
        {!isMobile && project.gallery.length > 1 && (
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
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent leading-snug pb-2">
              {project.subtitle}
            </h2>
            <p className="text-sm md:text-xl lg:text-xl leading-relaxed text-slate-300">{project.description}</p>
            <ul className="text-xs md:text-lg lg:text-lg space-y-2 ml-4 list-disc list-inside text-slate-400">
              {project.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {project.links.site && (
              <div className="flex gap-4 ">
                <Button
                  variant="outline"
                  onClick={() => window.open("https://easy-ia.vercel.app/", "_blank")}
                  className="rounded-xl shadow-sm border-blue-500/40 text-blue-400 hover:bg-blue-500/10 project-button px-6 py-4 text-lg flex items-center"
                >
                  <Globe className="w-8 h-8 mr-2" /> Website
                </Button>
              </div>
            )}
          </div>
          

          {/* right – quick facts + fonctionnalités */}
          <div className="space-y-6">
            {/* Informations du projet */}
            <Card className="bg-slate-800/50 border-blue-500/20 rounded-2xl border backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">{t("info")}</h3>
                <Fact label={t("date")} value={project.year} />
                <Fact label={t("duree")} value={project.duration} />
                <Fact label={t("statut")} value={String(project.status)} />
                <Fact label={t("team")} value={project.team} />
              </CardContent>
            </Card>

            {/* Fonctionnalités */}
            <Card className="bg-slate-800/50 border-purple-500/20 rounded-2xl border backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-4">{t("fonctionnalites")}</h3>
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

        {/* Autres projets */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-semibold text-white">{t("otherProjects")}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((otherProject, i) => (
              <motion.div
                key={otherProject.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="relative group cursor-pointer rounded-2xl project-button"
                onClick={() => goToProjectDetail(otherProject.id)}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all overflow-hidden h-full min-h-[320px] flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={otherProject.gallery?.[0] || "/placeholder.svg"}
                      alt={String(otherProject.title)}
                      className="w-full h-56 object-cover transition-transform group-hover:scale-110"
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
          className="text-center pt-0 md:pt-10 lg:pt-10"
        >
          <Button
            onClick={() => router.push("/")}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl hover:from-blue-600 hover:to-indigo-700 px-6 md:px-8 lg:px-8 py-3 text-lg project-button"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t("backP")}
          </Button>
        </motion.div>
      </main>
    </div>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="font-medium text-slate-400">{label}</span>
      <span className="text-slate-200">{value}</span>
    </div>
  )
}
