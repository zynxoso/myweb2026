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
  Image as ImageIcon
} from 'lucide-react'
import { useState, useEffect } from 'react'

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
      name: "Scholarship Portal",
      role: "Lead Developer",
      desc: "Architected a comprehensive scholarship management platform for CLSU, streamlining digital application workflows and data integrity.",
      icon: <Terminal className="w-5 h-5" />,
      url: "https://clsu-erdt.com/"
    },
    {
      name: "Barangay System",
      role: "Lead Developer",
      desc: "Engineered a centralized information management system for local governance, digitizing legacy records into a high-performance database.",
      icon: <Layers className="w-5 h-5" />,
      url: "https://github.com/zynxoso/BARANGAY-MANAGEMENT-SYSTEM-ACCESS"
    },
    {
      name: "AIRA-GEN (Reports AI)",
      role: "Lead AI Developer",
      desc: "A Laravel + Livewire app that reads ICT service request forms from DOCX or images, saves them to a database, and exports completed DOCX, XLSX, or CSV files.",
      icon: <Cpu className="w-5 h-5" />,
      url: "https://github.com/zynxoso/AIRA-GEN"
    },
    {
      name: "AIRA-LOGIX",
      role: "Intern Project",
      desc: "AIRA-LOGIX is a tool that helps teams track deliveries and daily work. I built features for it during my internship.",
      icon: <Cpu className="w-5 h-5" />,
      url: "https://github.com/zynxoso/AIRA-LOGIX"
    }
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
    { name: "GitHub", url: "https://github.com/zynxoso", icon: <Github className="w-4 h-4" /> },
    { name: "LinkedIn", url: "#", icon: <Linkedin className="w-4 h-4" /> },
    { name: "TikTok", url: "https://www.tiktok.com/@zynxoso82?_r=1&_t=ZS-93m74k6DkZg", icon: <Youtube className="w-4 h-4" /> },
    { name: "Instagram", url: "#", icon: <Globe className="w-4 h-4" /> },
    { name: "Latest Vid", url: "#", icon: <Youtube className="w-4 h-4" /> }
  ],
  digitalProducts: [
    { name: "Laravel Developer Playbook", url: "https://www.notion.so/313b98734365800ab923f2f3ff22062d?v=313b98734365804bb69c000cf0323e78&source=copy_link", icon: <FileText className="w-4 h-4" /> },
    { name: "SMS Laravel tutorial", url: "https://www.notion.so/313b98734365803f8906db614451dacc?v=313b98734365804bb69c000cf0323e78&source=copy_link", icon: <FileText className="w-4 h-4" /> }
  ],
  gallery: [
    { title: "PRISM Scholarship Portal", category: "Web Development", img: "/gallery/prism.png" },
    { title: "CLSU ICT Login", category: "System Development", img: "/gallery/ict_login.png" },
    { title: "TOPCIT Competency Certified", category: "Achievement", img: "/gallery/certificate_topcit.png" },
    { title: "Harvard CS50 Certification", category: "Achievement", img: "/gallery/certificate_harvardCs50.jpg" },
    { title: "Data Visualization Specialist", category: "Achievement", img: "/gallery/JAN HARRY MADRONA - Data Visualization.png" },
    { title: "Pandas for Data Science", category: "Achievement", img: "/gallery/JAN HARRY MADRONA - Pandas.png" },
    { title: "Career Seminar: Gender Equality", category: "Achievement", img: "/gallery/certificate_participation.jpg" },
    { title: "First Day at MISO", category: "Experience", img: "/gallery/firstday_internt_at_MISO.jpg" },
    { title: "Project Presentation", category: "Experience", img: "/gallery/intern_project_presentation.jpg" },
    { title: "OJT Work Session", category: "Experience", img: "/gallery/OJT_CODING.jpg" },
    { title: "OJT Deployment", category: "Experience", img: "/gallery/OJT_1.jpg" },
    { title: "Personal Moments", category: "Memory", img: "/gallery/with_my_gf.jpg" }
  ]
}

function App() {
  const [activeTab, setActiveTab] = useState('main')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check initial state from local storage or system preference
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

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
        <div className="p-12 pb-8 text-left hidden lg:block">
          <h1 className="text-lg font-black uppercase tracking-tighter mb-2 leading-none">{DATA.name}</h1>
          <p className="text-[10px] text-black/60 uppercase tracking-[0.2em] font-bold">Systems & Content</p>
        </div>

        <nav className="p-12 lg:p-6 space-y-2 flex-1 lg:flex-none">
          <button
            onClick={() => toggleTab('main')}
            className={`w-full flex items-center justify-between px-6 py-4 lg:py-3 transition-all duration-300 ${activeTab === 'main' ? 'text-black font-black bg-black/5 lg:bg-transparent' : 'text-black/60 hover:text-black'}`}
          >
            <span className="uppercase text-[11px] lg:text-[11px] tracking-[0.2em]">Portfolio</span>
            <div className={`w-1.5 h-1.5 rounded-full bg-black transition-opacity ${activeTab === 'main' ? 'opacity-100' : 'opacity-0'}`}></div>
          </button>
          <button
            onClick={() => toggleTab('stack')}
            className={`w-full flex items-center justify-between px-6 py-4 lg:py-3 transition-all duration-300 ${activeTab === 'stack' ? 'text-black font-black bg-black/5 lg:bg-transparent' : 'text-black/60 hover:text-black'}`}
          >
            <span className="uppercase text-[11px] lg:text-[11px] tracking-[0.2em]">Laravel Setup</span>
            <div className={`w-1.5 h-1.5 rounded-full bg-black transition-opacity ${activeTab === 'stack' ? 'opacity-100' : 'opacity-0'}`}></div>
          </button>
          <button
            onClick={() => toggleTab('digital')}
            className={`w-full flex items-center justify-between px-6 py-4 lg:py-3 transition-all duration-300 ${activeTab === 'digital' ? 'text-black font-black bg-black/5 lg:bg-transparent' : 'text-black/60 hover:text-black'}`}
          >
            <span className="uppercase text-[11px] lg:text-[11px] tracking-[0.2em]">Digital Product</span>
            <div className={`w-1.5 h-1.5 rounded-full bg-black transition-opacity ${activeTab === 'digital' ? 'opacity-100' : 'opacity-0'}`}></div>
          </button>
          <button
            onClick={() => toggleTab('links')}
            className={`w-full flex items-center justify-between px-6 py-4 lg:py-3 transition-all duration-300 ${activeTab === 'links' ? 'text-black font-black bg-black/5 lg:bg-transparent' : 'text-black/60 hover:text-black'}`}
          >
            <span className="uppercase text-[11px] lg:text-[11px] tracking-[0.2em]">Featured Links</span>
            <div className={`w-1.5 h-1.5 rounded-full bg-black transition-opacity ${activeTab === 'links' ? 'opacity-100' : 'opacity-0'}`}></div>
          </button>
          <button
            onClick={() => toggleTab('gallery')}
            className={`w-full flex items-center justify-between px-6 py-4 lg:py-3 transition-all duration-300 ${activeTab === 'gallery' ? 'text-black font-black bg-black/5 lg:bg-transparent' : 'text-black/60 hover:text-black'}`}
          >
            <span className="uppercase text-[11px] lg:text-[11px] tracking-[0.2em]">Gallery</span>
            <div className={`w-1.5 h-1.5 rounded-full bg-black transition-opacity ${activeTab === 'gallery' ? 'opacity-100' : 'opacity-0'}`}></div>
          </button>
        </nav>

        <div className="px-12 py-10 space-y-12">
          <div className="hidden lg:block">
            <h3 className="text-[9px] font-black uppercase tracking-[0.3em] mb-8 text-black/50">Academic Background</h3>
            <div className="space-y-8">
              {DATA.education.map((edu, idx) => (
                <div key={idx} className="group">
                  <p className="text-[11px] font-black uppercase tracking-tight leading-tight mb-2">{edu.school}</p>
                  <p className="text-[9px] text-black/60 font-bold uppercase tracking-widest">{edu.period} — {edu.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-12 space-y-6 bg-black/2 lg:bg-transparent mt-auto">
          <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{DATA.email}</span>
          </div>
          <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span>{DATA.phone}</span>
          </div>

          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity w-full pt-6 border-t border-black/5"
          >
            {isDarkMode ? (
              <>
                <Sun className="w-3.5 h-3.5 shrink-0" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 shrink-0" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content - Minimalist Professional Portfolio */}
      <main className="flex-1 flex flex-col min-h-screen bg-white lg:h-screen lg:overflow-hidden relative">
        <header className="hidden lg:flex px-16 py-12 justify-between items-center bg-white">
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
        </header>

        <div className="flex-1 px-8 lg:px-16 pb-16 lg:overflow-hidden">
          {activeTab === 'main' ? (
            <div className="h-full flex flex-col lg:flex-row space-y-20 lg:space-y-0 lg:space-x-20 lg:overflow-hidden">

              {/* Left Column: Technical Mastery */}
              <section className="w-full lg:w-1/4 flex flex-col lg:overflow-hidden">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-8 lg:mb-12 flex items-center text-black/50">
                  <Code2 className="w-4 h-4 mr-4 shrink-0" /> Digital Arsenal
                </h3>
                <div className="flex-1 lg:overflow-y-auto space-y-10 lg:space-y-12 custom-scrollbar lg:pr-6">
                  {DATA.skills.technical.map((skill, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center justify-between mb-4 text-black/50 group-hover:text-black transition-colors">
                        <span className="text-[12px] font-black uppercase tracking-widest">{skill.name}</span>
                        <span className="text-[9px] font-black opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                          {skill.level <= 30 ? 'BEGINNER' : skill.level <= 70 ? 'INTERMEDIATE' : 'ADVANCED'}
                        </span>
                      </div>
                      <div className="h-px bg-black/5 w-full relative group-hover:bg-black/10 transition-colors">
                        <div className="absolute top-0 left-0 h-full bg-black transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Middle Column: Featured Projects */}
              <section className="w-full lg:w-2/4 flex flex-col lg:overflow-hidden">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-8 lg:mb-12 flex items-center text-black/50">
                  <Terminal className="w-4 h-4 mr-4 shrink-0" /> Major Deployments
                </h3>
                <div className="flex-1 space-y-16 lg:space-y-20 lg:overflow-y-auto custom-scrollbar lg:pr-6">
                  {DATA.projects.map((proj, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-baseline justify-between mb-4 lg:mb-6">
                        <h4 className="text-2xl lg:text-3xl font-black uppercase leading-none tracking-tighter group-hover:translate-x-1 transition-transform">{proj.name}</h4>
                        <a href={proj.url} target="_blank" rel="noopener noreferrer" className="lg:opacity-0 group-hover:opacity-100 transition-opacity p-2">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 lg:mb-6 text-black/60">{proj.role}</p>
                      <p className="text-[13px] font-medium leading-relaxed opacity-80 max-w-md">{proj.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Right Column: Key Accolades */}
              <section className="w-full lg:w-1/4 flex flex-col lg:overflow-hidden">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-8 lg:mb-12 flex items-center text-black/50">
                  <Award className="w-4 h-4 mr-4 shrink-0" /> Highlights
                </h3>
                <div className="flex-1 space-y-12 lg:space-y-16 lg:overflow-y-auto custom-scrollbar lg:pr-6">
                  {DATA.achievements.map((ach, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1 text-black/20 group-hover:text-black transition-colors shrink-0">{ach.icon}</div>
                        <div>
                          <p className="text-[13px] font-black uppercase tracking-tight mb-2 group-hover:text-black transition-colors leading-tight">{ach.title}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-black/60">{ach.category}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          ) : activeTab === 'stack' ? (
            <div className="h-full flex flex-col lg:overflow-hidden">
              <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-12 flex items-center text-black/50">
                <Layers className="w-4 h-4 mr-4 shrink-0" /> Essential Installers
              </h3>
              <div className="flex-1 grid grid-cols-1 gap-6 lg:overflow-y-auto custom-scrollbar lg:pr-6 lg:max-w-2xl">
                {DATA.laravelStack.map((item, idx) => (
                  <div key={idx} className="group border-b border-black/5 py-8 transition-all lg:hover:pl-4">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 space-y-4 lg:space-y-0">
                      <div className="flex items-center space-x-6">
                        <div className="text-black/10 group-hover:text-black transition-colors scale-125 shrink-0">{item.icon}</div>
                        <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight leading-none group-hover:translate-x-1 transition-transform">{item.name}</h4>
                      </div>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-6 lg:px-4 py-3 lg:py-1.5 text-[10px] font-black uppercase tracking-widest text-center"
                      >
                        {item.label}
                      </a>
                    </div>
                    <p className="text-[12px] font-medium opacity-60 leading-relaxed ml-14">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTab === 'digital' ? (
            <div className="h-full flex flex-col justify-start py-12 lg:py-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="w-full max-w-xl space-y-6">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-12 flex items-center text-black/50">
                  <Package className="w-4 h-4 mr-4 shrink-0" /> Digital Products
                </h3>
                {DATA.digitalProducts.map((product, idx) => (
                  <a key={idx} href={product.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-6 lg:py-8 border-b border-black/5 hover:border-black transition-all group">
                    <div className="flex items-center space-x-8 lg:space-x-12">
                      <div className="text-black/40 group-hover:text-black transition-colors scale-110 lg:scale-125 shrink-0">{product.icon}</div>
                      <span className="font-black text-[12px] lg:text-sm uppercase tracking-[0.3em]">{product.name}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Notion</span>
                      <div className="w-2 h-2 bg-black scale-0 group-hover:scale-100 transition-transform"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : activeTab === 'links' ? (
            <div className="h-full flex flex-col justify-start py-12 lg:py-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="w-full max-w-xl space-y-6">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-12 flex items-center text-black/50">
                  <ExternalLink className="w-4 h-4 mr-4 shrink-0" /> Featured Links
                </h3>
                {DATA.links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-6 lg:py-8 border-b border-black/5 hover:border-black transition-all group">
                    <div className="flex items-center space-x-8 lg:space-x-12">
                      <div className="text-black/40 group-hover:text-black transition-colors scale-110 lg:scale-125 shrink-0">{link.icon}</div>
                      <span className="font-black text-[12px] lg:text-sm uppercase tracking-[0.3em]">{link.name}</span>
                    </div>
                    <div className="w-2 h-2 bg-black scale-0 group-hover:scale-100 transition-transform"></div>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col lg:overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-12 flex items-center text-black/50">
                <LayoutGrid className="w-4 h-4 mr-4 shrink-0" /> Visual Showcase
              </h3>
              <div className="flex-1 overflow-y-auto custom-scrollbar lg:pr-6">
                <div className="columns-1 md:columns-2 gap-8 space-y-8 pb-10">
                  {DATA.gallery.map((item, idx) => (
                    <div key={idx} className="group relative break-inside-avoid overflow-hidden bg-black/5 border border-black/5">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.category}</p>
                        <h4 className="text-lg font-black uppercase tracking-tighter text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <footer className="px-8 lg:px-16 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 text-black/40 border-t border-black/5 mt-auto">
          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-center">
            <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-[1em]">JAN_HARRY_MADRONA</span>
          </div>
          <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-[1em]">CREDENTIAL_VERIFIED</span>
        </footer>
      </main>
    </div>
  )
}

export default App
