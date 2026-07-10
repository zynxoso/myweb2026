import {
  Zap,
  Layers,
  Terminal,
  Code2,
  Briefcase,
  Globe,
  Youtube,
  Cpu,
  Star,
  FileText,
  Github,
  Linkedin
} from 'lucide-react'

export const DATA = {
  name: "Jan Harry I. Madrona",
  title: "Content Creator | System Developer | AI Developer",
  location: "Philippines",
  phone: "0977 625 5563",
  email: "Janharrymadrona1000@gmail.com",
  objective: "I build web systems and make digital videos. I work a lot with Laravel and full-stack development, and I like using code to automate repetitive tasks. My goal is just to make simple, clean tools that solve actual problems.",
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
      name: "PulseOS",
      role: "Lead Developer",
      desc: "An operations console and admin dashboard for system monitoring, alerts, earnings tracking, and AI automation workflows.",
      icon: <Cpu className="w-5 h-5" />,
      url: "https://next-myapp-pi.vercel.app/dashboard",
      tags: ["Next.js", "React", "Tailwind CSS", "Dashboard"]
    },
    {
      name: "AITO (AI 3D Talking Objects)",
      role: "Lead Developer",
      desc: "A web platform that generates production-ready scripts for character videos, nursery rhymes, and thumbnail motion packs, featuring AI tools and integrations for automated video creation.",
      icon: <Cpu className="w-5 h-5" />,
      url: "https://ai-3-dto.vercel.app/",
      tags: ["React", "AI Video", "Script Builder", "Veo"]
    },
    {
      name: "AIRA (AI Reports Automation)",
      role: "Lead AI Developer | Intern Project",
      desc: "A web app I built during my internship to move CLSU's paper service requests online. It runs on Laravel 12, React 19, and Inertia.js. I added Gemini AI to read info directly from photos and documents so staff don't have to type it in manually.",
      icon: <Cpu className="w-5 h-5" />,
      url: "https://github.com/zynxoso/CLSU_AIRA-LOGIX",
      tags: ["Laravel 12", "React 19", "Gemini AI", "Inertia 2"]
    },
    {
      name: "Viral Content",
      role: "Content Automation Project",
      desc: "A Python script that helps me automate content creation. It handles things like researching topics, generating video drafts, and publishing to social media, which saves me hours of manual editing.",
      icon: <Youtube className="w-5 h-5" />,
      url: "https://github.com/zynxoso/viralcontent",
      tags: ["Python", "Automation", "Youtube API", "Asset Gen"]
    },
    {
      name: "Budget Planner",
      role: "Personal Finance Tool",
      desc: "A simple dashboard for tracking monthly income and spending. I kept it free of extra clutter, using just basic categories and charts so you can see where your money goes. Built with React and Tailwind.",
      icon: <Briefcase className="w-5 h-5" />,
      url: "https://github.com/zynxoso/BudgetPlanner",
      tags: ["React", "Tailwind CSS", "Finance", "Local Storage"]
    },
    {
      name: "Scholarship Portal",
      role: "Lead Developer",
      desc: "I built CLSU's scholarship site. It replaced their old paper system with a simple online form, which makes it much faster for students to apply and easier for the administration to review applicants.",
      icon: <Terminal className="w-5 h-5" />,
      url: "https://clsu-erdt.com/",
      tags: ["PHP", "MySQL", "CLSU", "Workflow"]
    },
    {
      name: "Barangay System",
      role: "Lead Developer",
      desc: "A local database system for barangay records. I helped digitize their paper files so staff can search, edit, and update community details instantly instead of looking through filing cabinets.",
      icon: <Layers className="w-5 h-5" />,
      url: "https://github.com/zynxoso/BARANGAY-MANAGEMENT-SYSTEM-ACCESS",
      tags: ["Access DB", "Local Gov", "System Dev"]
    },
  ],
  education: [
    { school: "Central Luzon State University", period: "Class of 2026", level: "BSIT" },
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
  links: [
    { name: "GitHub", desc: "Where I host my repositories and automation scripts.", url: "https://github.com/zynxoso", icon: <Github className="w-4 h-4" /> },
    { name: "LinkedIn", desc: "My professional network page.", url: "https://www.linkedin.com/in/jan-harry-madrona-212108402", icon: <Linkedin className="w-4 h-4" /> },
    { name: "TikTok", desc: "Where I post short videos about coding and developer tips.", url: "https://www.tiktok.com/@zynxoso82?_r=1&_t=ZS-93m74k6DkZg", icon: <Youtube className="w-4 h-4" /> }
  ],
  digitalProducts: [
    {
      name: "Laravel Developer Playbook",
      desc: "A personal collection of database designs, coding patterns, and tips I use for Laravel projects.",
      tag: "PLAYBOOK",
      url: "https://www.notion.so/313b98734365800ab923f2f3ff22062d?v=313b98734365804bb69c000cf0323e78&source=copy_link",
      icon: <FileText className="w-4 h-4" />
    },
    {
      name: "SMS Laravel Tutorial",
      desc: "A guide on setting up SMS alerts and message queues in Laravel.",
      tag: "TUTORIAL",
      url: "https://www.notion.so/313b98734365803f8906db614451dacc?v=313b98734365804bb69c000cf0323e78&source=copy_link",
      icon: <FileText className="w-4 h-4" />
    }
  ],
  designTemplates: [
    {
      name: "Sleek Flyer with Textured Off-White Background",
      category: "Canva Template",
      desc: "A bold marketing flyer with textured off-white paper, black display type, and red growth graphics.",
      preview: "/canva_design_templates/sleek-flyer-textured-off-white-background.jpg",
      format: "Canva Link",
      canvaUrl: "https://canva.link/mnt0i9c7h0q1tkl",
      tools: ["Canva", "Template", "Editable"]
    },
    {
      name: "Flyer - TURN ATTENTION INTO REVENUE",
      category: "Canva Template",
      desc: "A tall grayscale growth flyer with editorial panels, chart visuals, and a bold revenue-focused headline.",
      preview: "/canva_design_templates/flyer-turn-attention-into-revenue.jpg",
      format: "Canva Link",
      canvaUrl: "https://canva.link/3howurew25mpsum",
      tools: ["Canva", "Template", "Editable"]
    },
    {
      name: "Tactile Print Layout for Meridian Works",
      category: "Canva Template",
      desc: "A textured print-style growth layout with bold typography, red package blocks, and strategy diagram details.",
      preview: "/canva_design_templates/tactile-print-layout-for-meridian-works.jpg",
      format: "Canva Link",
      canvaUrl: "https://canva.link/lb5prgvbyaeqry3",
      tools: ["Canva", "Template", "Editable"]
    },
    {
      name: "Structured Editorial Brochure Layout 2",
      category: "Canva Template",
      desc: "A structured editorial brochure with grid-based metrics, paper texture, and sparse technical linework.",
      preview: "/canva_design_templates/structured-editorial-brochure-layout-2.jpg",
      format: "Canva Link",
      canvaUrl: "https://canva.link/sqgzz3z4g6f0spm",
      tools: ["Canva", "Template", "Editable"]
    },
    {
      name: "Premium Strategy Studio Brochure Design",
      category: "Canva Template",
      desc: "A premium studio brochure concept with editorial text blocks, soft paper tone, and orange strategy charts.",
      preview: "/canva_design_templates/premium-strategy-studio-brochure-design.jpg",
      format: "Canva Link",
      canvaUrl: "https://canva.link/6d9vi2k2pmj0bvp",
      tools: ["Canva", "Template", "Editable"]
    },
    {
      name: "Premium Craft Beverage Mockup of Northline Cold Brew",
      category: "Canva Template",
      desc: "A premium cold brew product mockup with bottle packaging, warm studio light, and refined label styling.",
      preview: "/canva_design_templates/premium-craft-beverage-mockup-of-northline-cold-brew.jpg",
      format: "Canva Link",
      canvaUrl: "https://canva.link/eiu8sxz7www2amz",
      tools: ["Canva", "Mockup", "Beverage"]
    },
    {
      name: "Northline Cold Brew Concentrate Editorial Mockup",
      category: "Canva Template",
      desc: "An editorial cold brew concentrate scene with layered bottles, packaging shadows, and promo card detail.",
      preview: "/canva_design_templates/northline-cold-brew-concentrate-editorial-mockup.jpg",
      format: "Canva Link",
      canvaUrl: "https://canva.link/kq6w5cedcg1fyo3",
      tools: ["Canva", "Mockup", "Editorial"]
    },
    {
      name: "Instagram Post - Discover the Richness of Northline Cold Brew Concentrate",
      category: "Canva Template",
      desc: "A square social post for Northline Cold Brew with product photography and a large editorial headline.",
      preview: "/canva_design_templates/instagram-post-discover-the-richness-of-northline-cold-brew-concentrate.jpg",
      format: "Canva Link",
      canvaUrl: "https://canva.link/p74dynvihojdywn",
      tools: ["Canva", "Instagram", "Beverage"]
    }
  ],
  resume: "/RESUME_LATEST2026.pdf",
  gallery: [
    {
      title: "PulseOS Dashboard",
      category: "Web Development",
      img: "/gallery/PulseOS.png",
      desc: "An operations console and admin dashboard for system monitoring, alerts, earnings tracking, and AI automation workflows.",
      date: "Feb 2026",
      tech: ["Next.js", "React", "Tailwind CSS", "Dashboard"],
      verified: true
    },
    {
      title: "AITO (AI 3D Talking Objects)",
      category: "Web Development",
      img: "/gallery/AI3DTO.png",
      desc: "A production-ready script building studio for character videos, nursery rhymes, and image-to-video thumbnail animations.",
      date: "Feb 2026",
      tech: ["React", "AI Video", "Script Builder", "Veo"],
      verified: true
    },
    {
      title: "Internship Certificate of Completion",
      category: "Achievement",
      img: "/gallery/cert_of_completion_intern.jpg",
      desc: "My certificate for finishing a 480-hour internship at CLSU's Management Information Systems Office.",
      date: "Jan 2026",
      tech: ["Internship", "CLSU MISO", "System Dev"],
      verified: true
    },
    {
      title: "OJT Final Presentation",
      category: "System Development",
      img: "/gallery/ojt_grad_presentation.jpg",
      desc: "Presenting the AIRA-LOGIX app to the ICT directors at the end of our internship.",
      date: "Jan 2026",
      tech: ["Presentation", "Laravel", "React", "Inertia"],
      verified: true
    },
    {
      title: "Graduation Portrait (Toga)",
      category: "Achievement",
      img: "/gallery/graduation_pic_toga.png",
      desc: "My graduation photo celebrating my BS in IT degree from CLSU.",
      date: "May 2026",
      tech: ["Academic", "CLSU", "BS IT"],
      verified: true
    },
    {
      title: "Graduation Portrait",
      category: "Achievement",
      img: "/gallery/Graduation_pic.png",
      desc: "Yearbook portrait photo.",
      date: "May 2026",
      tech: ["Academic", "CLSU", "BS IT"],
      verified: true
    },
    {
      title: "Graduation Portrait (Barong)",
      category: "Achievement",
      img: "/gallery/graduationpic_barong.png",
      desc: "Graduation portrait in traditional Barong Tagalog.",
      date: "May 2026",
      tech: ["Academic", "CLSU", "BS IT"],
      verified: true
    },
    {
      title: "Career Seminar: Gender Equality",
      category: "Achievement",
      img: "/gallery/career_seminar.png",
      desc: "Certificate for attending a seminar on workplace diversity and ethics in tech.",
      date: "Nov 2025",
      tech: ["Seminar", "Ethics", "Professional"],
      verified: true
    },
    {
      title: "TOPCIT Competency Certificate",
      category: "Achievement",
      img: "/gallery/TOPCIT.png",
      desc: "My TOPCIT exam certificate, showing software engineering competency.",
      date: "Nov 2025",
      tech: ["TOPCIT", "IITP", "Software Eng"],
      verified: true
    },
    {
      title: "PRISM Scholarship Portal",
      category: "Web Development",
      img: "/gallery/prism.png",
      desc: "Interface designs for the CLSU PRISM scholarship project.",
      date: "Oct 2025",
      tech: ["Web Dev", "PHP", "MySQL", "UI/UX"],
      verified: true
    },
    {
      title: "CLSU ICT Login",
      category: "System Development",
      img: "/gallery/ict_login.png",
      desc: "Redesigning the login page for CLSU's main ICT portal.",
      date: "Sep 2025",
      tech: ["System Dev", "Authentication", "Tailwind"],
      verified: true
    },
    {
      title: "TOPCIT Competency Certified",
      category: "Achievement",
      img: "/gallery/certificate_topcit.png",
      desc: "Score report from the TOPCIT exam.",
      date: "Nov 2025",
      tech: ["TOPCIT", "IITP", "Exam"],
      verified: true
    },
    {
      title: "Harvard CS50 Certification",
      category: "Achievement",
      img: "/gallery/certificate_harvardCs50.jpg",
      desc: "Certificate for completing Harvard's CS50 AI with Python course.",
      date: "Aug 2025",
      tech: ["HarvardX", "Python", "AI/ML"],
      verified: true
    },
    {
      title: "Data Visualization Specialist",
      category: "Achievement",
      img: "/gallery/JAN HARRY MADRONA - Data Visualization.png",
      desc: "Kaggle certificate for data visualization in Python.",
      date: "Jul 2025",
      tech: ["Kaggle", "Data Science", "Python"],
      verified: true
    },
    {
      title: "Pandas for Data Science",
      category: "Achievement",
      img: "/gallery/JAN HARRY MADRONA - Pandas.png",
      desc: "Kaggle certificate for data analysis using Pandas.",
      date: "Jul 2025",
      tech: ["Kaggle", "Pandas", "Python"],
      verified: true
    },
    {
      title: "Career Seminar Participation",
      category: "Achievement",
      img: "/gallery/certificate_participation.jpg",
      desc: "Certificate for a seminar on career prep and job hunting.",
      date: "Oct 2025",
      tech: ["Seminar", "Career Readiness"],
      verified: true
    }
  ]
}
