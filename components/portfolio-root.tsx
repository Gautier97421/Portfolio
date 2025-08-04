// app/page.tsx

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
  ExternalLink, ChevronLeft, ChevronRight, Eye, FileText, Languages
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CustomCursor from "@/components/custom-cursor"
import { projects } from "@/lib/project" 
import {translations } from "@/lib/traduction"
import { useLanguage } from "@/lib/use_language"
import { useSearchParams } from "next/navigation"

const allGalleryImages = projects
  .flatMap(p => p.gallery)
  .filter(img => img && !img.includes("placeholder"))
  .sort(() => 0.5 - Math.random());

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); 
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: containerRef })
  const [language, setLanguage] = useLanguage()
  const searchParams = useSearchParams()

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] as string;
  }

  const nbrprojets = projects.length

  const sections = [
    { id: "hero", title: t("home") },
    { id: "about", title: t("about") },
    { id: "skills", title: t("skills") },
    { id: "projects", title: t("projects") },
    { id: "contact", title: t("contact") },
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
  const allowedLangs = ["fr", "en", "de"] as const;

  const toggleLanguage = () => {
    const next = language === "fr" ? "en" : language === "en" ? "de" : "fr"
    localStorage.setItem("language", next)
    setLanguage(next)
  }
  useEffect(() => {
    const langParam = searchParams.get("lang");
    if (langParam && allowedLangs.includes(langParam as typeof allowedLangs[number])) {
      if (langParam !== language) {
        setLanguage(langParam as typeof allowedLangs[number]);
        localStorage.setItem("language", langParam);
      }
    }
  }, [searchParams, language, setLanguage]);

  // 2eme solutions
  // useEffect(() => {
  //   const langParam = searchParams.get("lang");
  //   const storedLang = localStorage.getItem("language");

  //   // 1. Si l'URL contient une langue valide
  //   if (langParam && allowedLangs.includes(langParam as typeof allowedLangs[number])) {
  //     if (langParam !== language) {
  //       setLanguage(langParam as typeof allowedLangs[number]);
  //       localStorage.setItem("language", langParam);
  //     }
  //     return;
  //   }

  //   // 2. Sinon, si localStorage contient une langue valide
  //   if (storedLang && allowedLangs.includes(storedLang as typeof allowedLangs[number])) {
  //     if (storedLang !== language) {
  //       setLanguage(storedLang as typeof allowedLangs[number]);
  //     }
  //     return;
  //   }

  //   // 3. Sinon, on force "fr"
  //   setLanguage("fr");
  //   localStorage.setItem("language", "fr");
  // }, [searchParams, language, setLanguage]);

  const isMobile = useIsMobile();

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".skills-scroll-zone") || target.closest(".projects-scroll-zone")) {
        return;
      }
      const isTrackpadScroll = Math.abs(e.deltaY) < 5;

      if (isTrackpadScroll) {

        return;
      }

      if (containerRef.current) {
        e.preventDefault();
        const container = containerRef.current;
        const sectionWidth = container.scrollWidth / sections.length;
        const currentScrollLeft = container.scrollLeft;
        let currentSection = Math.round(currentScrollLeft / sectionWidth);
        if (e.deltaY > 0) {
          currentSection = Math.min(currentSection + 1, sections.length - 1);
        } else {
          currentSection = Math.max(currentSection - 1, 0);
        }
        const targetScrollLeft = currentSection * sectionWidth;
        container.scrollTo({
          left: targetScrollLeft,
          behavior: "smooth",
        });

        setCurrentSection(currentSection);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [sections.length, currentSection]);



  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-x-hidden overflow-y-auto relative">
      {/* Curseur personnalisé */}
      {!isMobile && <CustomCursor />}


      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 max-w-full">
        <div className="flex items-center justify-between gap-y-4">
          {/* Groupe à gauche : Portfolio + langue */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent text-2xl sm:text-4xl"
            >
              {t("portfolioTitle")}
            </motion.div>

            {!isMobile &&
              <motion.button
                onClick={toggleLanguage}
                  className={`nav-button px-3 flex gap-2 py-2 rounded-2xl font-medium transition-all border border-transparent ${
                    currentSection === -1
                      ? "active bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                      : "text-gray-300 hover:text-white border-gray-600"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-section="language"
              >
                <Languages className="h-4 w-4" />
                <span className="text-sm">{t("switchLanguage")}</span>
              </motion.button>
            }
          </div>

          {/* Groupe à droite : les boutons de navigation */}
            <div className="flex gap-4">
              {!isMobile && sections.map((section, index) => (
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
                  <span className="text-sm sm:text-base">{section.title}</span>
                </motion.button>
              ))}
            </div>
            {isMobile &&
              <div className="flex gap-4">
              
                <motion.button
                  onClick={toggleLanguage}
                    className={`nav-button px-3 flex gap-2 py-2 rounded-2xl font-medium transition-all border border-transparent mr-4 ${
                      currentSection === -1
                        ? "active bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                        : "text-gray-300 hover:text-white border-gray-600"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-section="language"
                >
                  <Languages className="h-4 w-4" />
                  <span className="text-sm">{t("switchLanguage")}</span>
                </motion.button>  
            </div>
    }
        </div>
      </nav>

      {/* 3D Background professionnel avec gestion d'erreur */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 10] }}
          onCreated={({ gl }) => {
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
          if (newSection !== currentSection) {
            setCurrentSection(newSection)
          }
        }}
      >
        {/* Hero Section */}
        <HeroSection t={t} />

        {/* About Section */}
        <AboutSection nbrprojets={nbrprojets} t={t} />

        {/* Skills Section */}
        <SkillsSection t={t} />

        {/* Projects Section */}
        <ProjectsSection t={t} language={language} />

        {/* Contact Section */}
        <ContactSection t={t} />
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

function HeroSection({ t }: { t: (key: string) => string }) {
  const name = t("name")
  const isMobile = useIsMobile();
  const [displayedName, setDisplayedName] = useState("")
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [isCursorVisible, setIsCursorVisible] = useState(true)
  const [showGrid, setShowGrid] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < name.length) {
        setDisplayedName(name.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(interval)
        setShowSubtitle(true)
        setTimeout(() => setShowGrid(true), 500)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [name])

  useEffect(() => {
    const blink = setInterval(() => {
      setIsCursorVisible(prev => !prev)
    }, 500)
    return () => clearInterval(blink)
  }, [])
  const x = isMobile ? 50 : 250
  return (
  <section
    className="min-w-full h-full flex items-center justify-center relative overflow-hidden"
    data-section="hero"
  >
    {/* Grille professionnelle */}
    {showGrid && (
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
          {[...Array(36)].map((_, i) => (
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

    <div className="text-center z-10 relative px-4">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-6xl sm:text-6xl md:text-9xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-slate-300 bg-clip-text text-transparent relative"
      >
        {displayedName}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          |
        </motion.span>
      </motion.h1>

      <AnimatePresence>
        {showSubtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p className="text-xl sm:text-lg md:text-3xl mb-4 sm:mb-8 text-slate-300">
              {t("subtitle")}
            </motion.p>
            {/* Ligne professionnelle */}
            <motion.div
              className="w-20 sm:w-50 md:w-50 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: x }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </section>
);

}

function AboutSection({ nbrprojets, t }: { nbrprojets: number; t: (key: string) => string }) {
  const [activeTab, setActiveTab] = useState(0)
  const isMobile = useIsMobile();
  const tabs = [
    {
      title: t("expertise"),
      content: t("expertiseContent"),
    },
    {
      title: t("approach"),
      content: t("approachContent"),
    },
    {
      title: t("objectives"),
      content: t("objectivesContent"),
    },
  ]


  return (
    <section
      className="min-w-full h-full flex items-center justify-center p-12"
      data-section="about"
    >
      <div className="max-w-[50rem] xl:max-w-[100rem] w-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 sm:gap-2 md:gap-4 lg:gap-4 items-center mx-auto"
        >
          <div className="max-w-sm sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-3xl 2xl:max-w-6xl w-full">
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-0 md:mb-4 lg:mb-4 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent leading-snug pb-4">
              {t("aboutTitle")}
            </h2>

            {/* Tabs Navigation avec animation */}
            <div className="flex gap-2 mb-2 md:gap-4 md:mb-8">
              {tabs.map((tab, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`text-xs md:text-xl about-button
                    h-8 md:h-auto
                    min-w-[70px]
                    px-4 md:px-6
                    py-2 md:py-3
                    flex items-center justify-center
                    rounded-2xl font-semibold transition-all text-center ${
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
              className="text-xs md:text-xl text-slate-300 leading-relaxed mb-4 md:mb-8"
            >
              {tabs[activeTab].content}
            </motion.div>

            {/* Stats avec animation violette */}
            <div className="grid grid-cols-3 gap-4 md:gap-10 mb-4 md:mb-0">
              {[
                { number: nbrprojets, label: t("projects") },
                { number: "4+", label: t("years") },
                { number: "100%", label: t("Motivation") },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="flex flex-col stat-button text-center items-center justify-center p-4 bg-slate-800/50 rounded-lg border border-blue-500/30 backdrop-blur-sm"
                  data-section="about"
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-md md:text-2xl">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full max-w-8xl mx-auto" 
          >

            <div className="w-full max-w-xs sm:max-w-sm md:max-w-3xl lg:max-w-7xl xl:max-w-3xl h-48 sm:h-64 md:h-80 lg:h-[500px] xl:h-[600px] bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-2xl backdrop-blur-sm border border-blue-500/20 relative overflow-hidden group interactive-element mx-auto">              
              <div className="absolute inset-2">
                {/* Images dynamiques avec animation */}
                {allGalleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 rounded-xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      scale: [0.8, 1, 1, 0.8],
                      rotateY: [90, 0, 0, -90],
                      z: [0, 50, 50, 0],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      delay: index * 10,
                      ease: "easeInOut",
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-indigo-900/40 rounded-xl" />
                  </motion.div>
                ))}
              </div>
              
                {/* Particules flottantes autour */}
                {!isMobile && [...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400/70 rounded-full"
                    animate={{
                      x: [Math.cos((i * 30 * Math.PI) / 180) * 120, Math.cos(((i * 30 + 180) * Math.PI) / 180) * 290],
                      y: [Math.sin((i * 30 * Math.PI) / 180) * 120, Math.sin(((i * 30 + 180) * Math.PI) / 180) * 290],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                      duration: 4 + i * 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              {/* Effet de brillance qui traverse */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  repeatDelay: 2,
                }}
                style={{
                  transform: "skewX(-20deg)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillsSection({ t }: { t: (key: string) => string }) {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const isMobile = useIsMobile();
  const skills = [
    { 
      name: "Unity", 
      level: 80, 
      icon: <Code className="h-6 w-6" />, 
      color: "from-red-400 to-red-600", 
      description: t("UnityS") 
    },
    { 
      name: "Databases", 
      level: 80, 
      icon: <Server className="h-6 w-6" />, 
      color: "from-orange-400 to-orange-600", 
      description: t("DatabaseS")
    },
    { 
      name: "TypeScript", 
      level: 72, 
      icon: <Zap className="h-6 w-6" />, 
      color: "from-indigo-400 to-indigo-600", 
      description: t("TypeSCriptS")
    },
    { 
      name: "Document Processing", 
      level: 85, 
      icon: <Database className="h-6 w-6" />, 
      color: "from-blue-500 to-blue-700", 
      description: t("ProcessingS")
    },
    { 
      name: "React", 
      level: 75, 
      icon: <Code className="h-6 w-6" />, 
      color: "from-blue-400 to-blue-600", 
      description: t("ReactS")
    },
    { 
      name: "Node.js", 
      level: 90, 
      icon: <Globe className="h-6 w-6" />, 
      color: "from-green-400 to-green-600", 
      description: t("NodeS")
    },
    { 
      name: "NLP", 
      level: 80, 
      icon: <Palette className="h-6 w-6" />, 
      color: "from-slate-400 to-slate-600", 
      description: t("NLPS")
    },
    { 
      name: "Docker", 
      level: 68, 
      icon: <Code className="h-6 w-6" />, 
      color: "from-red-400 to-red-600", 
      description: t("DockerS")
    },
    { 
      name: "RAG", 
      level: 82, 
      icon: <Code className="h-6 w-6" />, 
      color: "from-purple-400 to-purple-600", 
      description: t("RAGS")
    },
    { 
      name: "CI/CD", 
      level: 70, 
      icon: <Code className="h-6 w-6" />, 
      color: "from-yellow-400 to-yellow-600", 
      description: t("CICDS")
    },
    { 
      name: "Python", 
      level: 68, 
      icon: <Code className="h-6 w-6" />, 
      color: "from-teal-400 to-teal-600", 
      description: t("PythonS")
    },
    { 
      name: "Deep Learning", 
      level: 65, 
      icon: <Code className="h-6 w-6" />, 
      color: "from-pink-400 to-pink-600", 
      description: t("DeepS") 
    },
    { 
      name: "Three.js / React Three Fiber", 
      level: 85, 
      icon: <Code className="h-6 w-6" />, 
      color: "from-cyan-400 to-cyan-600", 
      description: t("ThreeS") 
    },
    { 
      name: "GitHub", 
      level: 90, 
      icon: <Code className="h-6 w-6" />, 
      color: "from-gray-600 to-gray-800", 
      description: t("GitS")
    },
    { 
      name: "UI/UX Design", 
      level: 80, 
      icon: <Palette className="h-6 w-6" />, 
      color: "from-pink-500 to-pink-700", 
      description: t("UIS")
    },
  ]

  const skillsPerPage = isMobile ? 2 : 4;
  const totalSkillPages = Math.ceil(skills.length / skillsPerPage);

  // visibleSkills prend la "page" courante
  const visibleSkills = skills.slice(
    currentSkillIndex * skillsPerPage, 
    currentSkillIndex * skillsPerPage + skillsPerPage
  );
  

  return (
    <section
      className="min-w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-14"
      data-section="skills"
    >
      <div className="w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent leading-snug pb-4"
        >
          {t("skillsTitle")}
        </motion.h2>
        <div className="w-full max-w-7xl mx-auto border-2 border-indigo-500/20 rounded-2xl p-4 md:p-8 bg-slate-800/20 backdrop-blur-sm relative">
        {/* Flèche gauche */}
        {currentSkillIndex > 0 && (
          <button
            onClick={() => setCurrentSkillIndex((prev) => Math.max(prev - 1, 0))}
            className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 z-10 md:bg-slate-700/60 md:hover:bg-slate-700 lg:bg-slate-700/60 lg:hover:bg-slate-700 p-2 rounded-full"

          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        )}
        {/* Flèche droite */}
        {currentSkillIndex < totalSkillPages - 1 && (
          <button
            onClick={() => setCurrentSkillIndex((prev) => Math.min(prev + 1, totalSkillPages - 1))}
            className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 z-10 md:bg-slate-700/60 md:hover:bg-slate-700 lg:bg-slate-700/60 lg:hover:bg-slate-700 p-2 rounded-full"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        )}

        {/* Zone de scroll délimitée pour les compétences */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-8 px-4 md:px-19">
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
                    <CardContent className="p-2">
                      <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
                        <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>{skill.icon}</div>
                        <h3 className="text-lg md:text-2xl font-bold text-white">{skill.name}</h3>
                      </div>
                      {skill.description && (
                        <p className="text-slate-300 text-xs md:text-sm mb-4 md:mb-7 ml-1 line-clamp-2">{skill.description}</p>
                      )}
                      <div className="relative">
                        <div className="w-full bg-slate-700 rounded-full h-2 md:h-3">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5 }}
                            className={`h-2 md:h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                          />
                        </div>
                        <span className="absolute right-0 -top-4 md:-top-8 text-blue-400 font-bold text-xs md:text-base">{skill.level}%</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Indicateurs de pagination pour les compétences (si plus de 4) */}
          {skills.length > 4 && (
            <div className="flex justify-center gap-1 md:gap-2 mt-4 md:mt-8">
              {[...Array(totalSkillPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSkillIndex(index)}
                  className={`h-1 md:h-2 rounded-full transition-all duration-300 ${
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

function ProjectsSection({ t, language, }: {
  t: (key: string) => string
  language: "fr" | "en" | "de"}) {
  const router = useRouter()
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const projectsScrollRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile();


  const projectsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage)
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
    router.push(`/projet/${projectId}?lang=${language}`)
  }

  return (
    <section
      className="min-w-full h-full flex items-center justify-center p-4 pt-12 md:p-12 md:pt-20"
      data-section="projects"
    >
      <div className="w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent leading-snug pb-4"
        >
          {t("projectsTitle")}
        </motion.h2>

        <div
          className="w-full max-w-7xl mx-auto border-2 border-indigo-500/20 rounded-2xl p-4 md:p-8 min-h-[400px] bg-slate-800/20 backdrop-blur-sm relative"
        >
          {/* Flèche gauche */}
          {currentProjectIndex > 0 && (
            <button
              onClick={() => setCurrentProjectIndex((prev) => Math.max(prev - 1, 0))}
              className="absolute -left-2 md:-left-14 top-1/2 -translate-y-1/2 z-10 md:bg-slate-700/60 md:hover:bg-slate-700 lg:bg-slate-700/60 lg:hover:bg-slate-700 p-2 rounded-full"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          )}

          {/* Flèche droite */}
          {currentProjectIndex < totalPages - 1 && (
            <button
              onClick={() => setCurrentProjectIndex((prev) => Math.min(prev + 1, totalPages - 1))}
              className="absolute -right-2 md:-right-14 top-1/2 -translate-y-1/2 z-10 md:bg-slate-700/60 md:hover:bg-slate-700 lg:bg-slate-700/60 lg:hover:bg-slate-700 p-2 rounded-full"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
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
              className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
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
                  <Card className="flex flex-col bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all overflow-hidden group h-full cursor-pointer min-h-[300px] sm:min-h-[420px]">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.gallery[0] || "/placeholder.svg"}
                        className="w-full h-30 sm:h-30 md:h-40 lg:h-40 object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>

                    <CardContent className="flex flex-col flex-1 justify-between p-4 md:p-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-slate-300 mb-3 text-sm">{project.subtitle}</p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-full text-xs md:text-sm text-blue-400 border border-blue-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bouton fixé à une distance précise du bas */}
                      <div className="mt-auto pt-2 md:pt-4">
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 group">
                          <span className="flex items-center justify-center gap-2">
                            {project.year}
                            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Button>
                      </div>
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
                  className={`h-1 md:h-2 rounded-full transition-all duration-300 ${
                    currentProjectIndex === index
                      ? "bg-indigo-400 w-4 md:w-8"
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

function ContactSection({ t }: { t: (key: string) => string }) {
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
      href: "https://github.com/gautierhoarau",
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
          viewport={{ once: true, amount: 0.5 }}
          className="text-6xl sm:text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent"
        >
          {t("contactTitle")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-300 mb-12"
        >
          {t("contactSubtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base md:text-2xl flex flex-wrap justify-center gap-6"
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
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="relative flex justify-center mt-12"
        >
          <motion.button
            onClick={() => window.open(t("downloadCV"), "_blank")}
            className="group relative overflow-hidden bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 text-white px-12 py-6 rounded-xl font-semibold text-lg shadow-2xl hover:border-blue-500/50 transition-all duration-500"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            data-section="contact"
          >
            {/* Grille de fond subtile */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 grid-rows-4 h-full w-full">
                {[...Array(32)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="border border-blue-400/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Effet de scan horizontal */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Coins technologiques */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-blue-400/60"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-blue-400/60"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-blue-400/60"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-blue-400/60"></div>

            {/* Contenu principal */}
            <div className="relative z-10 flex items-center justify-center gap-4">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="relative">
                  <FileText className="h-6 w-6 text-blue-400" />
                  <motion.div
                    className="absolute inset-0 bg-blue-400/20 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </div>
                <span className="text-slate-200 group-hover:text-white transition-colors">{t("cv")}</span>
              </motion.div>

              <motion.div
                className="w-px h-8 bg-gradient-to-b from-transparent via-slate-600 to-transparent"
                animate={{
                  scaleY: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />

              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-slate-400 group-hover:text-blue-400 transition-colors text-sm font-mono">
                  {t("preview")}
                </span>
                <div className="relative">
                  <Eye className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  <motion.div
                    className="absolute -inset-1 border border-blue-400/40 rounded"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Indicateurs de statut */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-blue-400/60"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Effet de glow au hover */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))",
                  "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))",
                  "linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          </motion.button>

          {/* Éléments décoratifs autour du bouton */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/80 rounded-full"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: [0, Math.cos((i * 90 * Math.PI) / 180) * 100],
                y: [0, Math.sin((i * 90 * Math.PI) / 180) * 100],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Lignes de connexion subtiles */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-transparent to-blue-400/40"
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 1,
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

