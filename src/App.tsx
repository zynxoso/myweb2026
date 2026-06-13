import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Award,
  Briefcase,
  Code2,
  FileText,
  Globe,
  Youtube,
  Cpu,
  Terminal,
  Layers,
  Zap,
  Star,
  Package,
  Server,
  Hexagon,
  Menu,
  X,
  Moon,
  Sun,
  LayoutGrid,
  MapPin,
  Columns,
  List
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DATA = {
  name: "Jan Harry I. Madrona",
  title: "Content Creator | System Developer | AI Developer",
  location: "Philippines",
  phone: "0977 625 5563",
  email: "Janharrymadrona1000@gmail.com",
  objective: "A creative and technical professional specializing in developing digital systems and high-impact content. Expert in Laravel, AI automation, and full-stack development, focused on building efficient, scalable solutions that bridge technology and creativity.",
  skills: {
    technical: [
      { name: "Laravel", level: 40, icon: <Zap className="w-3 h-3" /> },
      { name: "Django", level: 10, icon: <Layers className="w-3 h-3" /> },
      { name: "Python", level: 30, icon: <Terminal className="w-3 h-3" /> },
      { name: "React", level: 20, icon: <Code2 className="w-3 h-3" /> },
      { name: "Databases", level: 20, icon: <Briefcase className="w-3 h-3" /> },
      { name: "Web Dev", level: 60, icon: <Globe className="w-3 h-3" /> },
      { name: "Tailwind", level: 80, icon: <Code2 className="w-3 h-3" /> },
      { name: "Automation", level: 80, icon: <Cpu className="w-3 h-3" /> }
    ],
    soft: ["Public Speaking", "Creative Direction", "Technical Writing", "Brand Strategy"]
  },
  projects: [
    {
      name: "AIRA (AI Reports Automation)",
      role: "Lead AI Developer | Intern Project",
      desc: "AIRA-LOGIX is a high-performance Laravel 12 application utilizing a React 19 frontend via Inertia.js 2.0. It is designed for ICT departments to digitize service request workflows, extract structured data from diverse inputs (photos, docs, sheets) using Google Gemini AI, and generate comprehensive analytical reports.",
      icon: <Cpu className="w-5 h-5" />,
      url: "https://github.com/zynxoso/CLSU_AIRA-LOGIX",
      tags: ["Laravel 12", "React 19", "Gemini AI", "Inertia 2"]
    },
    {
      name: "Viral Content",
      role: "Content Automation Project",
      desc: "End-to-end content automation toolkit covering research, scripting, batch asset generation, and publishing workflows. Focuses on rapid iteration, consistent branding, and measurable engagement across platforms.",
      icon: <Youtube className="w-5 h-5" />,
      url: "https://github.com/zynxoso/viralcontent",
      tags: ["Python", "Automation", "Youtube API", "Asset Gen"]
    },
    {
      name: "Budget Planner",
      role: "Personal Finance Tool",
      desc: "Personal finance tracker that organizes income, expenses, and savings goals into clear monthly views. Emphasizes simple categories, quick summaries, and actionable insights for better spending control.",
      icon: <Briefcase className="w-5 h-5" />,
      url: "https://github.com/zynxoso/BudgetPlanner",
      tags: ["React", "Tailwind CSS", "Finance", "Local Storage"]
    },
    {
      name: "Scholarship Portal",
      role: "Lead Developer",
      desc: "Architected a comprehensive scholarship management platform for CLSU, streamlining digital application workflows and data integrity.",
      icon: <Terminal className="w-5 h-5" />,
      url: "https://clsu-erdt.com/",
      tags: ["PHP", "MySQL", "CLSU", "Workflow"]
    },
    {
      name: "Barangay System",
      role: "Lead Developer",
      desc: "Engineered a centralized information management system for local governance, digitizing legacy records into a high-performance database.",
      icon: <Layers className="w-5 h-5" />,
      url: "https://github.com/zynxoso/BARANGAY-MANAGEMENT-SYSTEM-ACCESS",
      tags: ["Access DB", "Local Gov", "System Dev"]
    },
  ],
  education: [
    { school: "CLSU", period: "In View", level: "BS IT" },
    { school: "Galvan HS", period: "Class of 2021", level: "Senior High Graduate" },
  ],
  achievements: [
    { title: "IT Startup Winner", category: "1st Place (IoT Hardware)", icon: <Star className="w-4 h-4" /> },
    { title: "IRCITE Champion", category: "Video Editing", icon: <Youtube className="w-4 h-4" /> },
    { title: "TOPCIT Certified", category: "High Merit Participant", icon: <FileText className="w-4 h-4" /> },
    { title: "CS50 AI with Python", category: "HarvardX Certified", icon: <Cpu className="w-4 h-4" /> },
    { title: "Data Visualization", category: "Kaggle Professional", icon: <Globe className="w-4 h-4" /> },
    { title: "Pandas for Data Science", category: "Kaggle Advanced", icon: <Terminal className="w-4 h-4" /> },
    { title: "IT Specialist (Web)", category: "Pearson VUE Certified", icon: <Code2 className="w-4 h-4" /> },
    { title: "TOPCIT IT Competency", category: "IITP International", icon: <FileText className="w-4 h-4" /> }
  ],
  laravelStack: [
    { name: "Composer", desc: "The PHP package manager required for Laravel dependency management. (v1.8 MB)", url: "/laravel installers/Composer-Setup.exe", icon: <Package className="w-5 h-5" />, label: "Download" },
    { name: "Web Server: Apache (XAMPP)", desc: "Local development server environment containing PHP and Apache.", url: "https://www.apachefriends.org/download.html", icon: <Server className="w-5 h-5" />, label: "Links" },
    { name: "Node.js", desc: "A JavaScript runtime built on Chrome's V8 JavaScript engine. (v24.13.0)", url: "/laravel installers/node-v24.13.0-x64.msi", icon: <Hexagon className="w-5 h-5" />, label: "Download" }
  ],
  links: [
    { name: "GitHub", desc: "Open-source repositories, AI automation, and system code.", url: "https://github.com/zynxoso", icon: <Github className="w-4 h-4" /> },
    { name: "LinkedIn", desc: "Professional updates, career network, and collaborations.", url: "https://www.linkedin.com/in/jan-harry-madrona-212108402", icon: <Linkedin className="w-4 h-4" /> },
    { name: "TikTok", desc: "Tech content creation, Laravel automation, and short developer clips.", url: "https://www.tiktok.com/@zynxoso82?_r=1&_t=ZS-93m74k6DkZg", icon: <Youtube className="w-4 h-4" /> },
    { name: "Instagram", desc: "Behind-the-scenes projects and visual updates.", url: "#", icon: <Globe className="w-4 h-4" /> },
    { name: "Latest Vid", desc: "Featured technical outline and video guide.", url: "#", icon: <Youtube className="w-4 h-4" /> }
  ],
  digitalProducts: [
    { 
      name: "Laravel Developer Playbook", 
      desc: "Comprehensive developer handbook covering design patterns, database architecture, testing workflows, and deployment setups.", 
      tag: "PLAYBOOK",
      url: "https://www.notion.so/313b98734365800ab923f2f3ff22062d?v=313b98734365804bb69c000cf0323e78&source=copy_link", 
      icon: <FileText className="w-4 h-4" /> 
    },
    { 
      name: "SMS Laravel Tutorial", 
      desc: "Step-by-step implementation guide for building SMS notification queues and gateway integrations in Laravel.", 
      tag: "TUTORIAL",
      url: "https://www.notion.so/313b98734365803f8906db614451dacc?v=313b98734365804bb69c000cf0323e78&source=copy_link", 
      icon: <FileText className="w-4 h-4" /> 
    }
  ],
  resume: "/RESUME_LATEST2026.pdf",
  gallery: [
    { 
      title: "Internship Certificate of Completion", 
      category: "Achievement", 
      img: "/gallery/cert_of_completion_intern.jpg",
      desc: "Official certificate issued by Central Luzon State University's Municipal Information Systems Office for successfully completing the 480-hour IT internship requirement.",
      date: "Jan 2026",
      tech: ["Internship", "CLSU MISO", "System Dev"],
      verified: true
    },
    { 
      title: "AI Dev Collaboration at TESO-CLSU", 
      category: "Experience", 
      img: "/gallery/co_aidev_at_TESO-CLSU.jpg",
      desc: "Interactive collaboration workshop session focusing on integrating AI intelligence models with the TESO organization workflows at CLSU.",
      date: "Dec 2025",
      tech: ["Gemini AI", "API Integrations", "Collaboration"],
      verified: true
    },
    { 
      title: "OJT Graduation", 
      category: "Achievement", 
      img: "/gallery/ojt_grad.jpg",
      desc: "Graduation ceremony representing the successful completion of the municipal systems internship program.",
      date: "Jan 2026",
      tech: ["Achievement", "OJT", "MISO"],
      verified: true
    },
    { 
      title: "OJT Final Presentation", 
      category: "Experience", 
      img: "/gallery/ojt_grad_presentation.jpg",
      desc: "Presentation of the final Laravel-based service request automation project (AIRA-LOGIX) to key municipal ICT directors.",
      date: "Jan 2026",
      tech: ["Presentation", "Laravel", "React", "Inertia"],
      verified: true
    },
    { 
      title: "OJT Graduation Ceremony", 
      category: "Memory", 
      img: "/gallery/ojt_graduation_image.jpg",
      desc: "Memorable snapshot with municipal administrators and tech leads during the internship graduation rites.",
      date: "Jan 2026",
      tech: ["Memory", "Graduation", "Team"],
      verified: false
    },
    { 
      title: "Graduation Portrait (Toga)", 
      category: "Achievement", 
      img: "/gallery/graduation_pic_toga.png",
      desc: "Formal graduation toga portrait celebrating completion of BS in Information Technology at Central Luzon State University.",
      date: "May 2026",
      tech: ["Academic", "CLSU", "BS IT"],
      verified: true
    },
    { 
      title: "Graduation Portrait", 
      category: "Achievement", 
      img: "/gallery/Graduation_pic.png",
      desc: "Formal graduation studio portrait for the university yearbook and alumni database.",
      date: "May 2026",
      tech: ["Academic", "CLSU", "BS IT"],
      verified: true
    },
    { 
      title: "Graduation Portrait (Barong)", 
      category: "Achievement", 
      img: "/gallery/graduationpic_barong.png",
      desc: "Formal Filipiniana graduation portrait wearing the traditional Barong Tagalog.",
      date: "May 2026",
      tech: ["Academic", "CLSU", "BS IT"],
      verified: true
    },
    { 
      title: "Career Seminar: Gender Equality", 
      category: "Achievement", 
      img: "/gallery/career_seminar.png",
      desc: "Seminar certificate focusing on gender equality, workplace diversity, and ethical development practices in tech.",
      date: "Nov 2025",
      tech: ["Seminar", "Ethics", "Professional"],
      verified: true
    },
    { 
      title: "TOPCIT Competency Certificate", 
      category: "Achievement", 
      img: "/gallery/TOPCIT.png",
      desc: "Test of Practical Competency in IT (TOPCIT) certificate validating core capabilities in software engineering and system architecture.",
      date: "Nov 2025",
      tech: ["TOPCIT", "IITP", "Software Eng"],
      verified: true
    },
    { 
      title: "PRISM Scholarship Portal", 
      category: "Web Development", 
      img: "/gallery/prism.png",
      desc: "Visual mockup screens of the CLSU PRISM Scholarship Portal designed to manage university scholarship schemes.",
      date: "Oct 2025",
      tech: ["Web Dev", "PHP", "MySQL", "UI/UX"],
      verified: true
    },
    { 
      title: "CLSU ICT Login", 
      category: "System Development", 
      img: "/gallery/ict_login.png",
      desc: "Portal login screen redesign and workflow optimization for the Central Luzon State University's main ICT hub.",
      date: "Sep 2025",
      tech: ["System Dev", "Authentication", "Tailwind"],
      verified: true
    },
    { 
      title: "TOPCIT Competency Certified", 
      category: "Achievement", 
      img: "/gallery/certificate_topcit.png",
      desc: "Detailed score breakdown report and credential confirmation from the Institute for Information & Communications Technology Planning (IITP).",
      date: "Nov 2025",
      tech: ["TOPCIT", "IITP", "Exam"],
      verified: true
    },
    { 
      title: "Harvard CS50 Certification", 
      category: "Achievement", 
      img: "/gallery/certificate_harvardCs50.jpg",
      desc: "HarvardX professional certificate for CS50's Introduction to Artificial Intelligence with Python, covering search, learning, and neural networks.",
      date: "Aug 2025",
      tech: ["HarvardX", "Python", "AI/ML"],
      verified: true
    },
    { 
      title: "Data Visualization Specialist", 
      category: "Achievement", 
      img: "/gallery/JAN HARRY MADRONA - Data Visualization.png",
      desc: "Kaggle certification validating data visualization strategies using Matplotlib, Seaborn, and advanced graphing principles.",
      date: "Jul 2025",
      tech: ["Kaggle", "Data Science", "Python"],
      verified: true
    },
    { 
      title: "Pandas for Data Science", 
      category: "Achievement", 
      img: "/gallery/JAN HARRY MADRONA - Pandas.png",
      desc: "Kaggle certification on data manipulation, analysis, aggregation, and styling using the Pandas framework in Python.",
      date: "Jul 2025",
      tech: ["Kaggle", "Pandas", "Python"],
      verified: true
    },
    { 
      title: "Career Seminar Participation", 
      category: "Achievement", 
      img: "/gallery/certificate_participation.jpg",
      desc: "Participation certificate for university-wide career preparation, job hunting readiness, and modern tech stack orientations.",
      date: "Oct 2025",
      tech: ["Seminar", "Career Readiness"],
      verified: true
    },
    { 
      title: "First Day at MISO", 
      category: "Experience", 
      img: "/gallery/firstday_internt_at_MISO.jpg",
      desc: "First day snapshot with fellow interns at the Municipal Information Systems Office starting system operations.",
      date: "Nov 2025",
      tech: ["Memory", "OJT", "First Day"],
      verified: false
    },
    { 
      title: "Project Presentation", 
      category: "Experience", 
      img: "/gallery/intern_project_presentation.jpg",
      desc: "Presenting our first sprint deliverables and system flow diagrams to CLSU faculty advisors and MISO managers.",
      date: "Dec 2025",
      tech: ["Presentation", "Sprint Review", "MISO"],
      verified: true
    },
    { 
      title: "OJT Work Session", 
      category: "Experience", 
      img: "/gallery/OJT_CODING.jpg",
      desc: "Late night coding and debugging session at the municipal center refining database triggers and state managers.",
      date: "Dec 2025",
      tech: ["OJT", "Development", "Teamwork"],
      verified: false
    },
    { 
      title: "OJT Deployment", 
      category: "Experience", 
      img: "/gallery/OJT_1.jpg",
      desc: "Setting up localized server stacks, configuring network interfaces, and deploying the initial alpha build.",
      date: "Jan 2026",
      tech: ["System Dev", "Deployment", "XAMPP"],
      verified: true
    },
    { 
      title: "Personal Moments", 
      category: "Memory", 
      img: "/gallery/with_my_gf.jpg",
      desc: "A cherished personal memory celebrating milestones and success together outside the development lab.",
      date: "Feb 2026",
      tech: ["Memory", "Personal", "Milestone"],
      verified: false
    }
  ]
}

function App() {
  const [activeTab, setActiveTab] = useState('main')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isIntroComplete, setIsIntroComplete] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check initial state from local storage or system preference
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [resumeViewMode, setResumeViewMode] = useState<'interactive' | 'pdf'>('interactive')
  const [isCopied, setIsCopied] = useState(false)
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'certs' | 'projects' | 'memories'>('all')
  const [galleryViewMode, setGalleryViewMode] = useState<'masonry' | 'inspector'>('masonry')
  const [activeImage, setActiveImage] = useState<typeof DATA.gallery[number] | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleCopyCommands = () => {
    const code = `composer create-project laravel/laravel my-laravel-app
cd my-laravel-app
npm install
npm run dev
php artisan serve`
    navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      const introTimer = setTimeout(() => {
        setIsIntroComplete(true)
      }, 500)
      return () => clearTimeout(introTimer)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTab = (tab: string) => {
    setActiveTab(tab)
    setIsMenuOpen(false)
  }

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center select-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <motion.h1
                className="text-3xl md:text-5xl font-black uppercase tracking-[0.4em] text-black pl-[0.4em] mb-4"
                initial={{ letterSpacing: "0.1em", opacity: 0 }}
                animate={{ letterSpacing: "0.4em", opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                ZYNXOSO
              </motion.h1>
              <div className="w-24 h-[1px] bg-black/10 mx-auto relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-black"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col lg:flex-row min-h-screen bg-white text-black font-['Poppins'] text-[14px] selection:bg-black selection:text-white relative">

        {/* Mobile Header - High visibility toggle */}
        <header className="lg:hidden flex justify-between items-center px-8 py-6 bg-white sticky top-0 z-40 border-b border-black/5">
          <h1 className="text-sm font-black uppercase tracking-tighter leading-none">{DATA.name}</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 -mr-2 text-black/60 hover:text-black transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 -mr-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay (Scrim) */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        {/* Sidebar - Professional Portfolio Aesthetic */}
        <aside className={`
        fixed inset-0 lg:relative lg:translate-x-0 lg:w-[300px] bg-white flex flex-col z-50 h-full
        transition-transform duration-500 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
          <motion.div
            initial="hidden"
            animate={isIntroComplete ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.1
                }
              }
            }}
            className="flex flex-col h-full"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
              }}
              className="p-12 pb-8 text-left hidden lg:block"
            >
              <h1 className="text-lg font-black uppercase tracking-tighter mb-2 leading-none">{DATA.name}</h1>
              <p className="text-[10px] text-black/60 uppercase tracking-[0.2em] font-bold">Systems & Content</p>
            </motion.div>

            <motion.nav
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.04
                  }
                }
              }}
              className="p-12 lg:p-6 space-y-2 flex-1 lg:flex-none"
            >
              {(['main', 'resume', 'stack', 'digital', 'links', 'gallery'] as const).map((tab) => {
                const labelMap: Record<string, string> = {
                  main: 'Portfolio',
                  resume: 'My Resume',
                  stack: 'Laravel Setup',
                  digital: 'Digital Product',
                  links: 'Featured Links',
                  gallery: 'Gallery'
                }
                const isActive = activeTab === tab
                return (
                  <motion.button
                    key={tab}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
                    }}
                    onClick={() => toggleTab(tab)}
                    className={`relative w-full flex items-center justify-between px-6 py-4 lg:py-3 transition-colors duration-300 z-10 select-none rounded-sm ${isActive ? 'text-black font-black' : 'text-black/60 hover:text-black'}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabBg"
                        className="absolute inset-0 bg-black/5 rounded-sm -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="uppercase text-[11px] lg:text-[11px] tracking-[0.2em]">{labelMap[tab]}</span>
                    {isActive ? (
                      <motion.div
                        layoutId="activeTabDot"
                        className="w-1.5 h-1.5 rounded-full bg-black"
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
                    )}
                  </motion.button>
                )
              })}
            </motion.nav>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.04
                  }
                }
              }}
              className="px-12 py-10 space-y-12"
            >
              <div className="hidden lg:block">
                <h3 className="text-[9px] font-black uppercase tracking-[0.3em] mb-8 text-black/50">Academic Background</h3>
                <div className="space-y-8">
                  {DATA.education.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
                      }}
                      className="group"
                    >
                      <p className="text-[11px] font-black uppercase tracking-tight leading-tight mb-2">{edu.school}</p>
                      <p className="text-[9px] text-black/60 font-bold uppercase tracking-widest">{edu.period} — {edu.level}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
              }}
              className="p-12 space-y-6 bg-black/2 lg:bg-transparent mt-auto"
            >
              <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{DATA.email}</span>
              </div>
              <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>{DATA.phone}</span>
              </div>
            </motion.div>
          </motion.div>
        </aside>

        {/* Main Content - Minimalist Professional Portfolio */}
        <main className="flex-1 flex flex-col min-h-screen bg-white lg:h-screen lg:overflow-hidden relative">
          <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={isIntroComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="hidden lg:flex px-16 py-12 justify-between items-center bg-white"
          >
            <div className="flex items-center space-x-4">
              {/* Title Removed */}
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={toggleDarkMode}
                className="group flex items-center space-x-3 text-black/40 hover:text-black transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{isDarkMode ? 'Light' : 'Dark'}</span>
              </button>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Available for Collaboration</span>
              </div>
            </div>
          </motion.header>

          <div className="flex-1 px-8 lg:px-16 pb-16 lg:overflow-hidden relative">
            <AnimatePresence mode="wait">            {activeTab === 'main' && (
              <motion.div
                key="main"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.05
                    }
                  },
                  exit: {
                    opacity: 0,
                    x: -20,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }
                }}
                initial="hidden"
                animate={isIntroComplete ? "visible" : "hidden"}
                exit="exit"
                className="h-full flex flex-col lg:flex-row space-y-20 lg:space-y-0 lg:space-x-20 lg:overflow-hidden"
              >
                {/* Left Column: Technical Mastery */}
                <motion.section
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: "easeOut",
                        staggerChildren: 0.04,
                        delayChildren: 0.1
                      }
                    }
                  }}
                  className="w-full lg:w-1/4 flex flex-col lg:overflow-hidden"
                >
                  <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-8 lg:mb-12 flex items-center text-black/50">
                    <Code2 className="w-4 h-4 mr-4 shrink-0" /> Digital Arsenal
                  </h3>
                  <div className="flex-1 lg:overflow-y-auto space-y-10 lg:space-y-12 custom-scrollbar lg:pr-6">
                    {DATA.skills.technical.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, y: 8 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
                        }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-4 text-black/50 group-hover:text-black transition-colors">
                          <span className="text-[12px] font-black uppercase tracking-widest">{skill.name}</span>
                          <span className="text-[9px] font-black opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                            {skill.level <= 30 ? 'BEGINNER' : skill.level <= 70 ? 'INTERMEDIATE' : 'ADVANCED'}
                          </span>
                        </div>
                        <div className="h-px bg-black/5 w-full relative group-hover:bg-black/10 transition-colors">
                          <motion.div
                            className="absolute top-0 left-0 h-full bg-black"
                            initial={{ width: 0 }}
                            animate={isIntroComplete ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ delay: idx * 0.04 + 0.3, duration: 0.6, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Middle Column: Featured Projects */}
                <motion.section
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: "easeOut",
                        staggerChildren: 0.05,
                        delayChildren: 0.15
                      }
                    }
                  }}
                  className="w-full lg:w-2/4 flex flex-col lg:overflow-hidden"
                >
                  <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-8 lg:mb-12 flex items-center text-black/50">
                    <Terminal className="w-4 h-4 mr-4 shrink-0" /> Major Deployments
                  </h3>
                  <div className="flex-1 space-y-8 lg:overflow-y-auto custom-scrollbar lg:pr-6">
                    {DATA.projects.map((proj, idx) => (
                      <motion.div
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, y: 15 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                        }}
                        className="group p-6 border border-black/5 hover:border-black/15 hover:bg-black/[0.01] rounded-sm transition-colors duration-300 flex flex-col justify-between"
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      >
                        <div>
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="p-2.5 bg-black/5 rounded-sm text-black/40 group-hover:text-black group-hover:bg-black/10 transition-colors shrink-0">
                              {proj.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg lg:text-xl font-black uppercase leading-tight tracking-tighter transition-colors">{proj.name}</h4>
                              <p className="text-[9px] font-black uppercase tracking-[0.2em] mt-1 text-black/50">{proj.role}</p>
                            </div>
                            <a href={proj.url} target="_blank" rel="noopener noreferrer" className="p-1.5 text-black/40 hover:text-black transition-colors shrink-0">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                          <p className="text-[12px] font-medium leading-relaxed opacity-85">{proj.desc}</p>
                        </div>
                        {proj.tags && (
                          <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-black/5">
                            {proj.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="text-[8px] font-black uppercase tracking-wider px-2 py-0.5 bg-black/5 text-black/60 rounded-sm group-hover:bg-black/10 group-hover:text-black transition-colors">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Right Column: Key Accolades */}
                <motion.section
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: "easeOut",
                        staggerChildren: 0.04,
                        delayChildren: 0.2
                      }
                    }
                  }}
                  className="w-full lg:w-1/4 flex flex-col lg:overflow-hidden"
                >
                  <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-8 lg:mb-12 flex items-center text-black/50">
                    <Award className="w-4 h-4 mr-4 shrink-0" /> Highlights
                  </h3>
                  <div className="flex-1 space-y-10 lg:space-y-12 lg:overflow-y-auto custom-scrollbar lg:pr-6">
                    {DATA.achievements.map((ach, idx) => (
                      <motion.div
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
                        }}
                        className="group"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="mt-1 text-black/20 group-hover:text-black transition-colors shrink-0">{ach.icon}</div>
                          <div>
                            <p className="text-[13px] font-black uppercase tracking-tight mb-2 group-hover:text-black transition-colors leading-tight">{ach.title}</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-black/60">{ach.category}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </motion.div>
            )}

              {activeTab === 'resume' && (
                <motion.div
                  key="resume"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full flex flex-col lg:overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-6 lg:space-y-0 shrink-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full lg:w-auto">
                      <h3 className="text-[11px] font-black uppercase tracking-[0.4em] flex items-center text-black/50">
                        <FileText className="w-4 h-4 mr-4 shrink-0" /> Professional Resume
                      </h3>
                      
                      {/* View Mode Toggle Pill */}
                      <div className="flex bg-black/5 rounded-full p-1 border border-black/5 self-start sm:self-auto select-none">
                        <button
                          onClick={() => setResumeViewMode('interactive')}
                          className={`px-4 py-1.5 text-[9px] font-black uppercase tracking-wider rounded-full transition-all duration-300 ${
                            resumeViewMode === 'interactive'
                              ? 'bg-black text-white shadow-sm'
                              : 'text-black/60 hover:text-black'
                          }`}
                        >
                          Interactive
                        </button>
                        <button
                          onClick={() => setResumeViewMode('pdf')}
                          className={`px-4 py-1.5 text-[9px] font-black uppercase tracking-wider rounded-full transition-all duration-300 ${
                            resumeViewMode === 'pdf'
                              ? 'bg-black text-white shadow-sm'
                              : 'text-black/60 hover:text-black'
                          }`}
                        >
                          PDF View
                        </button>
                      </div>
                    </div>
                    
                    <a
                      href={DATA.resume}
                      download="RESUME_LATEST2026.pdf"
                      className="bg-black text-white px-8 py-4 lg:py-3 text-[10px] font-black uppercase tracking-widest hover:bg-black/80 transition-colors flex items-center space-x-3 w-full lg:w-auto justify-center select-none"
                    >
                      <Package className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                  </div>

                  {/* PDF View Container */}
                  <div className={`flex-1 flex flex-col ${resumeViewMode === 'pdf' ? '' : 'hidden'}`}>
                    <div className="flex-1 bg-black/5 border border-black/5 overflow-hidden relative group rounded-sm">
                      {resumeViewMode === 'pdf' && (
                        <iframe
                          src={DATA.resume}
                          className="w-full h-full border-none min-h-[500px]"
                          title="Resume Preview"
                        />
                      )}
                      <div className="absolute inset-0 pointer-events-none border border-black/5 group-hover:border-black/10 transition-colors"></div>
                    </div>
                    <span className="text-[10px] text-black/40 mt-2 select-none">
                      Note: If the PDF does not display, it may have been intercepted by a download manager (like IDM) or your browser is set to download PDFs instead of previewing them.
                    </span>
                  </div>

                  {/* Interactive CV Render */}
                  {resumeViewMode === 'interactive' && (
                    <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 lg:pr-6 pb-8">
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white border border-black/5 rounded-sm p-8 md:p-12 space-y-12 transition-all duration-300 hover:border-black/10"
                      >
                        {/* Header Block: Name and Avatar */}
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-black/5 pb-8">
                          <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none text-black">
                              Jan Harry I. Madrona
                            </h2>
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-black/60">
                              Software Engineer / AI Developer
                            </p>
                            <div className="text-[11px] text-black/60 leading-relaxed space-y-1 font-medium">
                              <p className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-2 shrink-0" /> San Agustin, Guimba, Nueva Ecija, Philippines</p>
                              <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1">
                                <a href="mailto:Janharrymadrona1000@gmail.com" className="hover:text-black hover:underline transition-colors flex items-center">
                                  <Mail className="w-3.5 h-3.5 mr-1.5 shrink-0" /> Janharrymadrona1000@gmail.com
                                </a>
                                <a href="tel:+639776255563" className="hover:text-black hover:underline transition-colors flex items-center">
                                  <Phone className="w-3.5 h-3.5 mr-1.5 shrink-0" /> +63 977 625 5563
                                </a>
                              </div>
                            </div>
                          </div>
                          
                          {/* Image Box */}
                          <div className="relative group shrink-0 self-start">
                            <div className="w-24 h-24 md:w-28 md:h-28 overflow-hidden bg-black/5 border border-black/5 rounded-sm">
                              <img 
                                src="/gallery/Graduation_pic.png" 
                                alt="Jan Harry I. Madrona" 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-100"
                              />
                            </div>
                            <div className="absolute inset-0 border border-black/5 pointer-events-none group-hover:border-black/20 transition-colors rounded-sm"></div>
                          </div>
                        </div>

                        {/* Summary Block */}
                        <div className="space-y-4">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">Summary</h4>
                          <p className="text-[12px] md:text-[13px] leading-relaxed opacity-85 font-medium">
                            Creative and technical developer specializing in web systems, Laravel application development, and AI-assisted automation. Builds scalable digital platforms, modern full-stack solutions, and high-impact content with strong focus on usability, performance, and practical business outcomes.
                          </p>
                        </div>

                        {/* 2-Column Split */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                          
                          {/* Left Column (Span 7) - Experience & Projects */}
                          <div className="lg:col-span-7 space-y-12">
                            
                            {/* Experience Section */}
                            <div className="space-y-6">
                              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 border-b border-black/5 pb-2">Experience</h4>
                              <div className="space-y-6">
                                <div className="space-y-2">
                                  <div className="flex justify-between items-start gap-4">
                                    <h5 className="text-[13px] font-black uppercase tracking-tight">Municipal Information Systems Office (MISO)</h5>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-black/50 shrink-0">Internship</span>
                                  </div>
                                  <p className="text-[11px] font-bold uppercase tracking-wider text-black/60">Intern / System Developer</p>
                                </div>
                                <div className="space-y-2">
                                  <div className="flex justify-between items-start gap-4">
                                    <h5 className="text-[13px] font-black uppercase tracking-tight">Freelance / Independent Projects</h5>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-black/50 shrink-0">Ongoing</span>
                                  </div>
                                  <p className="text-[11px] font-bold uppercase tracking-wider text-black/60">Full-Stack and Laravel System Development</p>
                                </div>
                              </div>
                            </div>

                            {/* Projects Section */}
                            <div className="space-y-6">
                              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 border-b border-black/5 pb-2">Projects</h4>
                              <div className="space-y-8">
                                <div className="space-y-2 group">
                                  <div className="flex justify-between items-center gap-4">
                                    <h5 className="text-[13px] font-black uppercase tracking-tight group-hover:text-black transition-colors flex items-center">
                                      Scholarship Portal (CLSU ERDT)
                                    </h5>
                                    <a href="https://clsu-erdt.com/" target="_blank" rel="noopener noreferrer" className="text-[9px] font-black uppercase tracking-widest text-black/50 hover:text-black transition-colors flex items-center shrink-0">
                                      Website <ExternalLink className="w-2.5 h-2.5 ml-1" />
                                    </a>
                                  </div>
                                  <p className="text-[11px] font-bold uppercase tracking-wider text-black/60">Lead Developer</p>
                                  <p className="text-[11px] leading-relaxed opacity-80 font-medium">
                                    Architected a scholarship management platform to streamline online applications, review flow, and data tracking.
                                  </p>
                                </div>
                                
                                <div className="space-y-2 group">
                                  <div className="flex justify-between items-center gap-4">
                                    <h5 className="text-[13px] font-black uppercase tracking-tight group-hover:text-black transition-colors flex items-center">
                                      Barangay Management System
                                    </h5>
                                    <a href="https://github.com/zynxoso/BARANGAY-MANAGEMENT-SYSTEM-ACCESS" target="_blank" rel="noopener noreferrer" className="text-[9px] font-black uppercase tracking-widest text-black/50 hover:text-black transition-colors flex items-center shrink-0">
                                      GitHub <ExternalLink className="w-2.5 h-2.5 ml-1" />
                                    </a>
                                  </div>
                                  <p className="text-[11px] font-bold uppercase tracking-wider text-black/60">Lead Developer</p>
                                  <p className="text-[11px] leading-relaxed opacity-80 font-medium">
                                    Built a centralized governance information system, digitizing records and improving operational efficiency.
                                  </p>
                                </div>

                                <div className="space-y-2 group">
                                  <div className="flex justify-between items-center gap-4">
                                    <h5 className="text-[13px] font-black uppercase tracking-tight group-hover:text-black transition-colors flex items-center">
                                      AIRA-GEN (Reports AI)
                                    </h5>
                                    <a href="https://github.com/zynxoso/AIRA-GEN" target="_blank" rel="noopener noreferrer" className="text-[9px] font-black uppercase tracking-widest text-black/50 hover:text-black transition-colors flex items-center shrink-0">
                                      GitHub <ExternalLink className="w-2.5 h-2.5 ml-1" />
                                    </a>
                                  </div>
                                  <p className="text-[11px] font-bold uppercase tracking-wider text-black/60">Lead AI Developer</p>
                                  <p className="text-[11px] leading-relaxed opacity-80 font-medium">
                                    Developed a Laravel + Livewire application that reads ICT request forms (DOCX/images), stores structured data, and exports DOCX/XLSX/CSV reports.
                                  </p>
                                </div>

                                <div className="space-y-2 group">
                                  <div className="flex justify-between items-center gap-4">
                                    <h5 className="text-[13px] font-black uppercase tracking-tight group-hover:text-black transition-colors flex items-center">
                                      AIRA-LOGIX
                                    </h5>
                                    <a href="https://github.com/zynxoso/AIRA-LOGIX" target="_blank" rel="noopener noreferrer" className="text-[9px] font-black uppercase tracking-widest text-black/50 hover:text-black transition-colors flex items-center shrink-0">
                                      GitHub <ExternalLink className="w-2.5 h-2.5 ml-1" />
                                    </a>
                                  </div>
                                  <p className="text-[11px] font-bold uppercase tracking-wider text-black/60">Internship Project Contributor</p>
                                  <p className="text-[11px] leading-relaxed opacity-80 font-medium">
                                    Implemented delivery and daily task tracking features for team operations.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Significant Roles */}
                            <div className="space-y-6">
                              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 border-b border-black/5 pb-2">Significant Roles</h4>
                              <div className="space-y-4">
                                <div className="flex justify-between items-baseline gap-4">
                                  <span className="text-[12px] font-black uppercase tracking-tight">Lead Developer</span>
                                  <span className="text-[9px] font-black uppercase tracking-widest text-black/50 shrink-0">Recent Projects</span>
                                </div>
                                <div className="flex justify-between items-baseline gap-4">
                                  <span className="text-[12px] font-black uppercase tracking-tight">Lead AI Developer</span>
                                  <span className="text-[9px] font-black uppercase tracking-widest text-black/50 shrink-0">AIRA-GEN (Reports AI)</span>
                                </div>
                                <div className="flex justify-between items-baseline gap-4">
                                  <span className="text-[12px] font-black uppercase tracking-tight">Content Creator</span>
                                  <span className="text-[9px] font-black uppercase tracking-widest text-black/50 shrink-0">Ongoing</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Right Column (Span 5) - Skills, Education, Certs */}
                          <div className="lg:col-span-5 space-y-12">
                            
                            {/* Skills Section */}
                            <div className="space-y-6">
                              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 border-b border-black/5 pb-2">Skills</h4>
                              <div className="space-y-6">
                                <div className="space-y-2">
                                  <p className="text-[10px] font-black uppercase tracking-wider text-black/60">Languages & Core Tech</p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {['PHP', 'Python', 'JavaScript', 'SQL'].map(s => (
                                      <span key={s} className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 bg-black/5 rounded-sm text-black/75">
                                        {s}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                
                                <div className="space-y-2">
                                  <p className="text-[10px] font-black uppercase tracking-wider text-black/60">Frameworks & Libraries</p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {['Laravel', 'Livewire', 'React', 'Django', 'Tailwind CSS'].map(s => (
                                      <span key={s} className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 bg-black/5 rounded-sm text-black/75">
                                        {s}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <p className="text-[10px] font-black uppercase tracking-wider text-black/60">Databases & Tools</p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {['MySQL', 'Git/GitHub', 'Composer', 'Node.js', 'XAMPP'].map(s => (
                                      <span key={s} className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 bg-black/5 rounded-sm text-black/75">
                                        {s}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <p className="text-[10px] font-black uppercase tracking-wider text-black/60">Specializations</p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {['AI Automation', 'System Development', 'Web App Architecture', 'Technical Content'].map(s => (
                                      <span key={s} className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 bg-black/5 rounded-sm text-black/75">
                                        {s}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Education Section */}
                            <div className="space-y-6">
                              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 border-b border-black/5 pb-2">Education</h4>
                              <div className="space-y-4">
                                <div className="space-y-1">
                                  <div className="flex justify-between items-baseline gap-4">
                                    <p className="text-[11px] font-black uppercase tracking-tight">BS Information Technology</p>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-black/50 shrink-0">2021-2026</span>
                                  </div>
                                  <p className="text-[10px] text-black/60 font-bold uppercase tracking-widest leading-none">CLSU</p>
                                </div>
                                <div className="space-y-1">
                                  <div className="flex justify-between items-baseline gap-4">
                                    <p className="text-[11px] font-black uppercase tracking-tight">Senior High Graduate</p>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-black/50 shrink-0">2021</span>
                                  </div>
                                  <p className="text-[10px] text-black/60 font-bold uppercase tracking-widest leading-none">Galvan High School</p>
                                </div>
                              </div>
                            </div>

                            {/* Certifications Section */}
                            <div className="space-y-6">
                              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 border-b border-black/5 pb-2">Certifications</h4>
                              <div className="space-y-3">
                                {[
                                  "CS50 AI with Python (HarvardX)",
                                  "TOPCIT IT Competency (IITP)",
                                  "IT Specialist in Web (Pearson VUE)",
                                  "Kaggle: Data Visualization",
                                  "Kaggle: Pandas for Data Science"
                                ].map((cert, idx) => (
                                  <div key={idx} className="flex items-start space-x-2 text-[11px] font-medium leading-relaxed opacity-85">
                                    <span className="text-black/30 shrink-0 mt-0.5">•</span>
                                    <span>{cert}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                          </div>
                        </div>

                        {/* References Block */}
                        <div className="border-t border-black/5 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-[11px]">
                          <div className="space-y-2">
                            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">References</h5>
                            <p className="opacity-80 font-medium">Available upon request.</p>
                          </div>
                          <div className="space-y-2">
                            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">Declaration</h5>
                            <p className="opacity-80 font-medium">I hereby declare that the above-mentioned information is true and correct to the best of my knowledge and belief.</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              )}


              {activeTab === 'stack' && (
                <motion.div
                  key="stack"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full flex flex-col lg:overflow-hidden"
                >
                  <div className="mb-8 shrink-0">
                    <h3 className="text-[11px] font-black uppercase tracking-[0.4em] flex items-center text-black/50">
                      <Layers className="w-4 h-4 mr-4 shrink-0" /> Laravel Development Setup
                    </h3>
                  </div>

                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 lg:pr-6 pb-8 space-y-12">
                    {/* Installer Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {DATA.laravelStack.map((item, idx) => {
                        const getBadge = (name: string) => {
                          if (name.toLowerCase().includes("composer")) return "1.8 MB"
                          if (name.toLowerCase().includes("node.js")) return "v24.13.0"
                          return "Apache"
                        }
                        const cleanDesc = (desc: string) => {
                          return desc.replace(/\s*\(v.*?\)/g, '')
                        }

                        return (
                          <motion.div
                            key={idx}
                            className="group bg-white border border-black/5 p-6 rounded-sm flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-black/10 hover:shadow-sm"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08, duration: 0.4 }}
                          >
                            <div className="space-y-4">
                              <div className="flex justify-between items-start">
                                <div className="p-2.5 bg-black/5 rounded-sm text-black/40 group-hover:text-black group-hover:bg-black/10 transition-colors shrink-0">
                                  {item.icon}
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-black/5 text-black/60 rounded-sm select-none">
                                  {getBadge(item.name)}
                                </span>
                              </div>
                              <div className="space-y-2">
                                <h4 className="text-sm font-black uppercase tracking-tight leading-tight">
                                  {item.name.replace(/\s*\(.*?\)/g, '')}
                                </h4>
                                <p className="text-[11px] leading-relaxed opacity-75 font-medium">
                                  {cleanDesc(item.desc)}
                                </p>
                              </div>
                            </div>

                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full text-center inline-block py-3 border border-black bg-black text-white hover:bg-transparent hover:text-black transition-colors duration-300 font-black text-[9px] tracking-widest uppercase select-none rounded-sm"
                            >
                              {item.label === "Download" ? "Download Installer" : "Official Website"}
                            </a>
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Terminal Console */}
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">Bootstrap Console</h4>
                      <div className="bg-[#0b0b0c] border border-black/10 rounded-sm overflow-hidden flex flex-col font-mono text-[11px] text-[#f7f8f8]">
                        {/* Window header */}
                        <div className="flex justify-between items-center px-4 py-3 bg-[#131315] border-b border-[#23252a] select-none">
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                            <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                          </div>
                          <span className="text-[9px] font-black tracking-widest text-[#8a8f98] uppercase">Terminal</span>
                          <button
                            onClick={handleCopyCommands}
                            className="text-[9px] font-black tracking-wider uppercase text-[#8a8f98] hover:text-[#f7f8f8] transition-colors"
                          >
                            {isCopied ? 'Copied!' : 'Copy Code'}
                          </button>
                        </div>
                        
                        {/* Console output */}
                        <pre className="p-6 overflow-x-auto custom-scrollbar leading-relaxed text-[#d0d6e0] select-all">
{`# 1. Install a new Laravel project via Composer
composer create-project laravel/laravel my-laravel-app

# 2. Navigate to your project directory
cd my-laravel-app

# 3. Install NPM dependencies and run Vite dev server
npm install
npm run dev

# 4. In a new terminal, serve the local PHP server
php artisan serve`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'digital' && (
                <motion.div
                  key="digital"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full flex flex-col lg:overflow-hidden"
                >
                  <div className="mb-8 shrink-0">
                    <h3 className="text-[11px] font-black uppercase tracking-[0.4em] flex items-center text-black/50">
                      <Package className="w-4 h-4 mr-4 shrink-0" /> Digital Products
                    </h3>
                  </div>
                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 lg:pr-6 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {DATA.digitalProducts.map((product, idx) => (
                        <motion.div
                          key={idx}
                          className="group bg-white border border-black/5 p-6 rounded-sm flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-black/10 hover:shadow-sm"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.4 }}
                        >
                          <div className="space-y-4">
                            <div className="flex justify-between items-start">
                              <div className="p-2.5 bg-black/5 rounded-sm text-black/40 group-hover:text-black group-hover:bg-black/10 transition-colors shrink-0">
                                {product.icon}
                              </div>
                              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-black/5 text-black/60 rounded-sm select-none">
                                {product.tag}
                              </span>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-black uppercase tracking-tight leading-tight">
                                {product.name}
                              </h4>
                              <p className="text-[11px] leading-relaxed opacity-75 font-medium">
                                {product.desc}
                              </p>
                            </div>
                          </div>

                          <a
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center inline-block py-3 border border-black bg-black text-white hover:bg-transparent hover:text-black transition-colors duration-300 font-black text-[9px] tracking-widest uppercase select-none rounded-sm"
                          >
                            Access Notion
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'links' && (
                <motion.div
                  key="links"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full flex flex-col lg:overflow-hidden"
                >
                  <div className="mb-8 shrink-0">
                    <h3 className="text-[11px] font-black uppercase tracking-[0.4em] flex items-center text-black/50">
                      <ExternalLink className="w-4 h-4 mr-4 shrink-0" /> Featured Links
                    </h3>
                  </div>
                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 lg:pr-6 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {DATA.links.map((link, idx) => {
                        const getHoverColor = (name: string) => {
                          if (name.toLowerCase() === 'github') return 'hover:border-black/30'
                          if (name.toLowerCase() === 'linkedin') return 'hover:border-[#0077b5]/30'
                          if (name.toLowerCase() === 'tiktok') return 'hover:border-[#ff0050]/30'
                          if (name.toLowerCase() === 'instagram') return 'hover:border-[#e1306c]/30'
                          return 'hover:border-black/30'
                        }
                        return (
                          <motion.a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group bg-white border border-black/5 p-6 rounded-sm flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-sm ${getHoverColor(link.name)}`}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08, duration: 0.4 }}
                          >
                            <div className="space-y-4">
                              <div className="flex justify-between items-start">
                                <div className="p-2.5 bg-black/5 rounded-sm text-black/40 group-hover:text-black group-hover:bg-black/10 transition-colors shrink-0">
                                  {link.icon}
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-black/5 text-black/60 rounded-sm select-none">
                                  Link
                                </span>
                              </div>
                              <div className="space-y-2">
                                <h4 className="text-sm font-black uppercase tracking-tight leading-tight">
                                  {link.name}
                                </h4>
                                <p className="text-[11px] leading-relaxed opacity-75 font-medium">
                                  {link.desc}
                                </p>
                              </div>
                            </div>

                            <span className="w-full text-center inline-block py-3 border border-black bg-black text-white group-hover:bg-transparent group-hover:text-black transition-colors duration-300 font-black text-[9px] tracking-widest uppercase select-none rounded-sm">
                              Visit Platform
                            </span>
                          </motion.a>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'gallery' && (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full flex flex-col lg:overflow-hidden"
                >
                  {/* Gallery Control Header */}
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-8 shrink-0">
                    <h3 className="text-[11px] font-black uppercase tracking-[0.4em] flex items-center text-black/50">
                      <LayoutGrid className="w-4 h-4 mr-4 shrink-0" /> Visual Showcase
                    </h3>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full xl:w-auto">
                      {/* Filter Tabs Pill */}
                      <div className="flex bg-black/5 rounded-full p-1 border border-black/5 select-none overflow-x-auto max-w-full no-scrollbar">
                        {(['all', 'certs', 'projects', 'memories'] as const).map((filter) => {
                          const filterLabelMap: Record<string, string> = {
                            all: 'All',
                            certs: 'Certifications',
                            projects: 'Projects',
                            memories: 'Memories'
                          }
                          return (
                            <button
                              key={filter}
                              onClick={() => setGalleryFilter(filter)}
                              className={`px-4 py-1.5 text-[9px] font-black uppercase tracking-wider rounded-full transition-all duration-300 shrink-0 ${
                                galleryFilter === filter
                                  ? 'bg-black text-white shadow-sm'
                                  : 'text-black/60 hover:text-black'
                              }`}
                            >
                              {filterLabelMap[filter]}
                            </button>
                          )
                        })}
                      </div>

                      {/* View Mode Toggle Switcher */}
                      <div className="flex bg-black/5 rounded-full p-1 border border-black/5 select-none shrink-0 self-start sm:self-auto">
                        <button
                          onClick={() => setGalleryViewMode('masonry')}
                          className={`px-4 py-1.5 text-[9px] font-black uppercase tracking-wider rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                            galleryViewMode === 'masonry'
                              ? 'bg-black text-white shadow-sm'
                              : 'text-black/60 hover:text-black'
                          }`}
                          title="Masonry Stream"
                        >
                          <Columns className="w-3 h-3" />
                          <span>Stream</span>
                        </button>
                        <button
                          onClick={() => setGalleryViewMode('inspector')}
                          className={`px-4 py-1.5 text-[9px] font-black uppercase tracking-wider rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                            galleryViewMode === 'inspector'
                              ? 'bg-black text-white shadow-sm'
                              : 'text-black/60 hover:text-black'
                          }`}
                          title="Inspector Grid"
                        >
                          <List className="w-3 h-3" />
                          <span>Inspector</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Gallery Content */}
                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 lg:pr-6 pb-8">
                    {galleryViewMode === 'masonry' ? (
                      /* Masonry Stream Mode */
                      <motion.div 
                        layout 
                        className="columns-1 md:columns-2 gap-8 space-y-8 pb-10"
                      >
                        {DATA.gallery
                          .filter((item) => {
                            if (galleryFilter === 'all') return true
                            if (galleryFilter === 'certs') return item.category === 'Achievement'
                            if (galleryFilter === 'projects') return item.category === 'Web Development' || item.category === 'System Development'
                            if (galleryFilter === 'memories') return item.category === 'Experience' || item.category === 'Memory'
                            return true
                          })
                          .map((item) => (
                            <motion.div
                              layout
                              key={item.img}
                              onClick={() => setActiveImage(item)}
                              className="group relative break-inside-avoid overflow-hidden bg-black/5 border border-black/5 cursor-pointer rounded-sm"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3 }}
                              whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            >
                              <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                                <div className="flex justify-between items-center mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50">
                                    {item.category}
                                  </p>
                                  {item.verified && (
                                    <span className="text-[8px] font-black uppercase bg-white/10 text-white px-2 py-0.5 rounded-sm">
                                      VERIFIED
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-base font-black uppercase tracking-tighter text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                  {item.title}
                                </h4>
                              </div>
                            </motion.div>
                          ))}
                      </motion.div>
                    ) : (
                      /* Inspector Grid Mode (Dense technical details) */
                      <motion.div 
                        layout 
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-10"
                      >
                        {DATA.gallery
                          .filter((item) => {
                            if (galleryFilter === 'all') return true
                            if (galleryFilter === 'certs') return item.category === 'Achievement'
                            if (galleryFilter === 'projects') return item.category === 'Web Development' || item.category === 'System Development'
                            if (galleryFilter === 'memories') return item.category === 'Experience' || item.category === 'Memory'
                            return true
                          })
                          .map((item) => (
                            <motion.div
                              layout
                              key={item.img}
                              onClick={() => setActiveImage(item)}
                              className="group bg-white border border-black/5 p-5 rounded-sm flex flex-col justify-between space-y-5 cursor-pointer transition-all duration-300 hover:border-black/15 hover:shadow-sm"
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4 }}
                              whileHover={{ y: -4 }}
                            >
                              <div className="space-y-4">
                                {/* Top Header Specs */}
                                <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-wider text-black/40">
                                  <span className="px-2 py-0.5 bg-black/5 rounded-sm text-black/60">
                                    {item.category}
                                  </span>
                                  {item.verified ? (
                                    <div className="flex items-center text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">
                                      <span className="w-1 h-1 bg-emerald-600 rounded-full mr-1.5 shrink-0" />
                                      <span>VERIFIED</span>
                                    </div>
                                  ) : (
                                    <span className="text-black/30">DRAFT</span>
                                  )}
                                </div>

                                {/* Aspect-Ratio Thumbnail Box */}
                                <div className="relative aspect-[16/10] bg-black/5 overflow-hidden border border-black/5 rounded-sm">
                                  <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    loading="lazy"
                                  />
                                </div>

                                {/* Text Details */}
                                <div className="space-y-2">
                                  <h4 className="text-xs font-black uppercase tracking-tight leading-tight group-hover:text-black transition-colors">
                                    {item.title}
                                  </h4>
                                  <p className="text-[11px] leading-relaxed opacity-70 line-clamp-2 font-medium">
                                    {item.desc}
                                  </p>
                                </div>
                              </div>

                              {/* Tech & Date Footer block */}
                              <div className="border-t border-black/5 pt-4 flex flex-col gap-2.5">
                                <div className="flex flex-wrap gap-1">
                                  {item.tech.slice(0, 3).map((tag, tIdx) => (
                                    <span key={tIdx} className="text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 bg-black/5 text-black/60 rounded-sm">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                                <div className="flex justify-between items-center text-[9px] font-black text-black/40 uppercase tracking-widest">
                                  <span>Captured:</span>
                                  <span>{item.date}</span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <footer className="px-8 lg:px-16 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 text-black/40 border-t border-black/5 mt-auto">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-center">
              <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-[1em]">JAN_HARRY_MADRONA</span>
            </div>
            <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-[1em]">CREDENTIAL_VERIFIED</span>
          </footer>
        </main>
      </div>

      {/* Lightbox Modal Viewer */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 md:p-8 cursor-zoom-out select-none"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full h-[90vh] md:h-[75vh] bg-white dark:bg-[#0f1011] border border-black/10 dark:border-[#23252a] rounded-sm shadow-2xl flex flex-col md:flex-row cursor-default overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors p-2 z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Media Viewer */}
              <div className="flex-1 md:w-3/5 bg-black/[0.02] dark:bg-white/[0.01] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-black/5 dark:border-[#23252a] overflow-hidden min-h-[40vh] md:min-h-0">
                <img
                  src={activeImage.img}
                  alt={activeImage.title}
                  className="max-w-full max-h-[35vh] md:max-h-[60vh] object-contain rounded-sm select-all"
                />
              </div>

              {/* Right Side: Technical Inspector Panel */}
              <div className="w-full md:w-2/5 flex flex-col justify-between p-8 bg-white dark:bg-[#0f1011] overflow-y-auto custom-scrollbar">
                <div className="space-y-8">
                  {/* Status & Category */}
                  <div className="flex justify-between items-center select-none pt-2">
                    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60 rounded-sm">
                      {activeImage.category}
                    </span>
                    {activeImage.verified ? (
                      <div className="flex items-center text-[9px] font-black text-emerald-600 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-950/35 px-2 py-0.5 rounded-sm">
                        <span className="w-1.5 h-1.5 bg-emerald-600 dark:bg-emerald-500 rounded-full mr-1.5 shrink-0" />
                        <span>VERIFIED CREDENTIAL</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-[9px] font-black text-black/40 dark:text-white/40 bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-sm">
                        <span className="w-1.5 h-1.5 bg-black/40 dark:bg-white/40 rounded-full mr-1.5 shrink-0" />
                        <span>PERSONAL ARCHIVE</span>
                      </div>
                    )}
                  </div>

                  {/* Asset Title */}
                  <div className="space-y-2 text-left">
                    <h4 className="text-sm md:text-base font-black uppercase tracking-tight leading-tight text-black dark:text-white">
                      {activeImage.title}
                    </h4>
                  </div>

                  {/* Technical Specs Table */}
                  <div className="border-t border-b border-black/5 dark:border-[#23252a] py-4 space-y-3 font-medium text-[11px] text-left">
                    <div className="flex justify-between gap-4">
                      <span className="text-black/40 dark:text-white/40 uppercase tracking-widest text-[9px] shrink-0">File Path</span>
                      <span className="font-mono text-black/80 dark:text-white/80 select-all truncate text-right">{activeImage.img}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black/40 dark:text-white/40 uppercase tracking-widest text-[9px]">Captured / Issued</span>
                      <span className="text-black/80 dark:text-white/80">{activeImage.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black/40 dark:text-white/40 uppercase tracking-widest text-[9px]">Category Class</span>
                      <span className="text-black/80 dark:text-white/80">{activeImage.category}</span>
                    </div>
                  </div>

                  {/* Context Description */}
                  <div className="space-y-2.5 text-left">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 dark:text-white/40">Context / Description</h5>
                    <p className="text-[12px] leading-relaxed text-black/75 dark:text-white/75 font-medium">
                      {activeImage.desc}
                    </p>
                  </div>

                  {/* Tech Stack involved */}
                  <div className="space-y-3 text-left">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 dark:text-white/40">Metadata Tags</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {activeImage.tech.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-black/5 dark:bg-white/5 text-black/75 dark:text-white/75 rounded-sm font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-8 mt-auto border-t border-black/5 dark:border-[#23252a]">
                  <a
                    href={activeImage.img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 border border-black/15 dark:border-[#23252a] hover:border-black dark:hover:border-white text-[9px] font-black uppercase tracking-widest text-black dark:text-white transition-colors rounded-sm flex items-center justify-center space-x-2 select-none"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Full Image</span>
                  </a>
                  <button
                    onClick={() => setActiveImage(null)}
                    className="flex-1 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 text-[9px] font-black uppercase tracking-widest transition-colors rounded-sm select-none cursor-pointer"
                  >
                    Close Inspector
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
