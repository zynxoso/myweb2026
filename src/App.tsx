import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  Code2,
  FileText,
  User,
  Globe,
  Youtube,
  Cpu,
  Terminal,
  Layers,
  Zap,
  Star,
  Package,
  Server,
  Database,
  Hexagon
} from 'lucide-react'
import { useState } from 'react'

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
      name: "AIRA-GEN",
      role: "Lead AI Developer",
      desc: "Developed an advanced AI-driven reporting engine that automates data parsing and insight generation, transforming complex datasets into actionable intelligence.",
      icon: <Cpu className="w-5 h-5" />,
      url: "https://github.com/zynxoso/AIRA-GEN"
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
  ]
}

function App() {
  const [activeTab, setActiveTab] = useState('main')

  return (
    <div className="flex h-screen bg-white text-black font-['Poppins'] overflow-hidden text-[14px] selection:bg-black selection:text-white">
      {/* Sidebar - Professional Portfolio Aesthetic */}
      <aside className="w-[300px] bg-white flex flex-col z-20">
        <div className="p-12 pb-8 text-left">
          <h1 className="text-lg font-black uppercase tracking-tighter mb-2 leading-none">{DATA.name}</h1>
          <p className="text-[10px] text-black/60 uppercase tracking-[0.2em] font-bold">Systems & Content</p>
        </div>

        <nav className="p-6 space-y-2">
          <button
            onClick={() => setActiveTab('main')}
            className={`w-full flex items-center justify-between px-6 py-3 transition-all duration-300 ${activeTab === 'main' ? 'text-black font-black' : 'text-black/60 hover:text-black'}`}
          >
            <span className="uppercase text-[11px] tracking-[0.2em]">Portfolio</span>
            <div className={`w-1.5 h-1.5 rounded-full bg-black transition-opacity ${activeTab === 'main' ? 'opacity-100' : 'opacity-0'}`}></div>
          </button>
          <button
            onClick={() => setActiveTab('stack')}
            className={`w-full flex items-center justify-between px-6 py-3 transition-all duration-300 ${activeTab === 'stack' ? 'text-black font-black' : 'text-black/60 hover:text-black'}`}
          >
            <span className="uppercase text-[11px] tracking-[0.2em]">Laravel Setup</span>
            <div className={`w-1.5 h-1.5 rounded-full bg-black transition-opacity ${activeTab === 'stack' ? 'opacity-100' : 'opacity-0'}`}></div>
          </button>
          <button
            onClick={() => setActiveTab('links')}
            className={`w-full flex items-center justify-between px-6 py-3 transition-all duration-300 ${activeTab === 'links' ? 'text-black font-black' : 'text-black/60 hover:text-black'}`}
          >
            <span className="uppercase text-[11px] tracking-[0.2em]">Featured Links</span>
            <div className={`w-1.5 h-1.5 rounded-full bg-black transition-opacity ${activeTab === 'links' ? 'opacity-100' : 'opacity-0'}`}></div>
          </button>
        </nav>

        <div className="flex-1 px-12 py-10 space-y-12 custom-scrollbar overflow-y-auto">
          <div>
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

        <div className="p-12 space-y-6">
          <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
            <Mail className="w-3.5 h-3.5" />
            <span className="truncate">{DATA.email}</span>
          </div>
          <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
            <Phone className="w-3.5 h-3.5" />
            <span>{DATA.phone}</span>
          </div>
        </div>
      </aside>

      {/* Main Content - Minimalist Professional Portfolio */}
      <main className="flex-1 flex flex-col h-full bg-white relative overflow-hidden">
        <header className="px-16 py-12 flex justify-between items-center bg-white">
          <div className="flex items-center space-x-4">
            {/* Title Removed */}
          </div>
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Available for Collaboration</span>
          </div>
        </header>

        <div className="flex-1 px-16 pb-16 overflow-hidden">
          {activeTab === 'main' ? (
            <div className="h-full flex space-x-20 overflow-hidden">

              {/* Left Column: Technical Mastery */}
              <section className="w-1/4 flex flex-col overflow-hidden">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-12 flex items-center text-black/50">
                  <Code2 className="w-4 h-4 mr-4" /> Digital Arsenal
                </h3>
                <div className="flex-1 overflow-y-auto space-y-12 custom-scrollbar pr-6">
                  {DATA.skills.technical.map((skill, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center justify-between mb-4 text-black/50 group-hover:text-black transition-colors">
                        <span className="text-[12px] font-black uppercase tracking-[0.1em]">{skill.name}</span>
                        <span className="text-[9px] font-black opacity-0 group-hover:opacity-100 transition-opacity">
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
              <section className="w-2/4 flex flex-col overflow-hidden">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-12 flex items-center text-black/50">
                  <Terminal className="w-4 h-4 mr-4" /> Major Deployments
                </h3>
                <div className="flex-1 space-y-20 overflow-y-auto custom-scrollbar pr-6">
                  {DATA.projects.map((proj, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-baseline justify-between mb-6">
                        <h4 className="text-3xl font-black uppercase leading-none tracking-tighter group-hover:translate-x-1 transition-transform">{proj.name}</h4>
                        <a href={proj.url} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-black/60">{proj.role}</p>
                      <p className="text-[13px] font-medium leading-relaxed opacity-80 max-w-md">{proj.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Right Column: Key Accolades */}
              <section className="w-1/4 flex flex-col overflow-hidden">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-12 flex items-center text-black/50">
                  <Award className="w-4 h-4 mr-4" /> Highlights
                </h3>
                <div className="flex-1 space-y-16 overflow-y-auto custom-scrollbar pr-6">
                  {DATA.achievements.map((ach, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1 text-black/20 group-hover:text-black transition-colors">{ach.icon}</div>
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
            <div className="h-full flex flex-col overflow-hidden">
              <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-12 flex items-center text-black/50">
                <Layers className="w-4 h-4 mr-4" /> Essential Installers
              </h3>
              <div className="flex-1 grid grid-cols-1 gap-6 overflow-y-auto custom-scrollbar pr-6 max-w-2xl">
                {DATA.laravelStack.map((item, idx) => (
                  <div key={idx} className="group border-b border-black/5 py-8 transition-all hover:pl-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-6">
                        <div className="text-black/10 group-hover:text-black transition-colors scale-125">{item.icon}</div>
                        <h4 className="text-xl font-black uppercase tracking-tight leading-none group-hover:translate-x-1 transition-transform">{item.name}</h4>
                      </div>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest"
                      >
                        {item.label}
                      </a>
                    </div>
                    <p className="text-[12px] font-medium opacity-60 leading-relaxed ml-14">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-start py-24">
              <div className="w-full max-w-xl space-y-6">
                {DATA.links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-8 border-b border-black/5 hover:border-black transition-all group">
                    <div className="flex items-center space-x-12">
                      <div className="text-black/40 group-hover:text-black transition-colors scale-125">{link.icon}</div>
                      <span className="font-black text-sm uppercase tracking-[0.3em]">{link.name}</span>
                    </div>
                    <div className="w-2 h-2 bg-black scale-0 group-hover:scale-100 transition-transform"></div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <footer className="px-16 py-12 flex justify-between items-center text-black/40 border-t border-black/5">
          <div className="flex items-center space-x-6">
            <span className="text-[9px] font-black uppercase tracking-[1em]">JAN_HARRY_MADRONA</span>
          </div>
          <span className="text-[9px] font-black uppercase tracking-[1em]">CREDENTIAL_VERIFIED</span>
        </footer>
      </main>
    </div>
  )
}

export default App
