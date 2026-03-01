import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, GraduationCap, Briefcase, Code, User, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  {
    title: "AI-Driven Data Analysis",
    description: "Turning complex datasets into actionable insights using advanced AI tools and precision-focused data management.",
    tags: ["AI", "Data Analysis", "Excel"],
    image: "https://picsum.photos/seed/ai-data/800/600",
    link: "#"
  },
  {
    title: "Educational Platform Builder",
    description: "Developing digital tools and websites focused on higher education and academic research support.",
    tags: ["Website Building", "App Development", "UX"],
    image: "https://picsum.photos/seed/edu-platform/800/600",
    link: "#"
  },
  {
    title: "Technical Research Portfolio",
    description: "Leveraging AI for structured academic and professional writing, bridging biological sciences and data proficiency.",
    tags: ["Research", "Botany", "AI Writing"],
    image: "https://picsum.photos/seed/research-portfolio/800/600",
    link: "#"
  }
];

const SKILLS = {
  "AI & Tech": ["AI Driven Analysis", "Data Management", "Technical Research", "Website Building", "App Building"],
  "Botany": ["Plant Biology", "Scientific Research", "Lab Operations", "Field Study"],
  "Tools": ["Microsoft Excel", "Google AI Tools", "Microsoft Certified Tools", "Database Operations"],
  "Soft Skills": ["Technical Writing", "Problem Solving", "Collaboration", "Data Proficiency"]
};

const EDUCATION = [
  {
    degree: "Bsc. Botany (Botany/Plant Biology)",
    school: "Orissa University of Agriculture and Technology (OUAT)",
    period: "July 2025 - July 2029",
    details: "Focusing on blending scientific rigor with AI and digital tools. Tech & Research Enthusiast."
  },
  {
    degree: "+2 Science",
    school: "Saraswata Residential Higher Secondary School",
    period: "July 2022 - March 2024",
    details: "Completed Higher Secondary education with a focus on Science stream."
  },
  {
    degree: "10th Grade",
    school: "Board of Secondary Education, Odisha (BSE Odisha)",
    period: "June 2021 - June 2022",
    details: "Secondary school education."
  }
];

const CERTIFICATIONS = [
  {
    title: "AI for Data Analysis",
    issuer: "Google/Microsoft Certified",
    period: "2026",
    description: "Mastery in turning complex datasets into actionable insights using AI."
  },
  {
    title: "AI for Writing and Communicating",
    issuer: "Professional Certification",
    period: "2026",
    description: "Leveraging AI for structured academic and professional writing."
  },
  {
    title: "Ms Excel",
    issuer: "Great Learning",
    period: "February 2026",
    description: "Advanced data management and precision-focused Excel operations."
  }
];

const CERTIFICATE_IMAGES = [
  "https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/5989273/original/Rasmi_Ranjan_Dalei20260211-533-9jjpnb.jpg",
  "https://media.licdn.com/dms/image/v2/D4D22AQEpFzmQ8E3QGg/feedshare-shrink_480/B4DZyV3cSKIYAs-/0/1772040865198?e=1773878400&v=beta&t=otykHapHX54PggZwwQZlOf8Zdzjw1bAEjaYHnJ6sgho",
  "https://media.licdn.com/dms/image/v2/D4D22AQEORO9YvvihXA/feedshare-shrink_480/B4DZyV3b9THcAo-/0/1772040863860?e=1773878400&v=beta&t=eTc5Ihk2RkVbHHvDLnpC1_pULc44m6kh8CrA3pvHLtk",
  "https://media.licdn.com/dms/image/v2/D4D22AQE9CJIFVdAFQA/feedshare-shrink_480/B4DZyV3cH_JYAs-/0/1772040864600?e=1773878400&v=beta&t=6PlfnNX3A8iFIPtCdos_oj9Kd64nwF8kKuiFqW5n64s",
  "https://media.licdn.com/dms/image/v2/D4D22AQEUV1jIlWFeXw/feedshare-shrink_480/B4DZyV3cwYH4Ao-/0/1772040867220?e=1773878400&v=beta&t=BaiJiLHhoFtCg9WImsreG4Kwy6fAtyniSac4DlMhShc",
  "https://media.licdn.com/dms/image/v2/D4D22AQE9NLXj46PcAA/feedshare-shrink_480/B4DZyV3cefKQAw-/0/1772040866047?e=1773878400&v=beta&t=8159QcVTlaZIp6BzJtZvFI48-Ho3JJvsnKnRktfJVGQ",
  "https://media.licdn.com/dms/image/v2/D4D22AQFy6EZfubsiWg/feedshare-shrink_480/B4DZyV3ciVG0Ao-/0/1772040866264?e=1773878400&v=beta&t=OQ5_ERy_10DcKz2Og9zB7kAOxpeoB7B6OEQLl_PYlRI",
  "https://media.licdn.com/dms/image/v2/D4D22AQETpbWs83-_2w/feedshare-shrink_480/B4DZyV3cMxGUAo-/0/1772040864856?e=1773878400&v=beta&t=xQe_tmf3gmRRNkfec1HaMxfrPbZZIFVCU2Nh97wM3bA",
  "https://media.licdn.com/dms/image/v2/D4D22AQGLV55HNBbC9A/feedshare-shrink_480/B4DZyV3cyjJIAo-/0/1772040867292?e=1773878400&v=beta&t=8aaSrE_P41vJC1YOOg5mpj8NK3QfEhl-kmEsbA-bUpM"
];

function CertificateSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % CERTIFICATE_IMAGES.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + CERTIFICATE_IMAGES.length) % CERTIFICATE_IMAGES.length);

  return (
    <div className="relative group w-full max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl bg-white aspect-[4/3]">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={CERTIFICATE_IMAGES[currentIndex]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full object-contain p-4 md:p-8"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={prev} className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all active:scale-95">
          <ChevronLeft size={24} className="text-zinc-900" />
        </button>
        <button onClick={next} className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all active:scale-95">
          <ChevronRight size={24} className="text-zinc-900" />
        </button>
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {CERTIFICATE_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-indigo-600 w-6" : "bg-zinc-300"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("AI & Tech");

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif italic text-xl font-bold tracking-tight">Rasmi.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#education" className="hover:text-black transition-colors">Education</a>
            <a href="#certifications" className="hover:text-black transition-colors">Certifications</a>
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>
          <a 
            href="https://drive.google.com/file/d/1tx722FlWod1uodgMZhf_KwPfjHVrq_qU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black hover:shadow-lg hover:shadow-zinc-900/20 transition-all active:scale-95 print:hidden"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F9F8F6] to-[#F3F2EE]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-zinc-100 rounded-full text-zinc-500">
              Life Science(Botany) Student
            </span>
            <h1 className="text-5xl md:text-8xl font-serif italic mb-8 leading-[0.9] tracking-tight">
              Rasmi Ranjan <br />
              <span className="text-emerald-600">Dalei</span>
              <span className="block text-xl md:text-3xl mt-6 font-sans not-italic font-light text-zinc-400 tracking-normal">
                — A journey from nothing to something
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-zinc-500 text-xl md:text-2xl mb-12 leading-relaxed font-light">
              Hi, I'm Rasmi. A B.Sc. Botany student at OUAT, blending scientific rigor with modern era of AI and digital tools. I learning in AI-driven analysis. data management & web developing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#projects" className="w-full sm:w-auto px-10 py-5 bg-zinc-900 text-white rounded-full font-medium hover:bg-black hover:shadow-xl hover:shadow-zinc-900/20 transition-all active:scale-95">
                View My Work
              </a>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-5 rounded-full border border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-zinc-300 transition-all active:scale-95">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/rasmi-ranjan-dalei-892157302" target="_blank" rel="noopener noreferrer" className="p-5 rounded-full border border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-zinc-300 transition-all active:scale-95">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="w-px h-12 bg-zinc-300" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/d/1ousArCOlihxpAnwj58nZBGTEWDDDrXwf" 
                alt="Rasmi Ranjan Dalei" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white px-10 py-6 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-xl font-bold uppercase tracking-[0.2em]">Learner</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4 block">The Story</span>
            <h2 className="text-6xl md:text-8xl font-serif italic mb-10 leading-none">About <br /> Me</h2>
            <p className="text-zinc-600 text-lg mb-6 leading-relaxed">
              I am currently a undergraduate student of Botany at College of Basic Science & Humanities, OUAT, where I spend my time exploring the fascinating world of plant life and biodiversity. In college time I usually live and enjoyed that time, learning, having fun, and other curricular activities in the premises.
            </p>
            <p className="text-zinc-600 text-lg mb-6 leading-relaxed">
              When I am not in lab & college, you can find me on LinkedIn and other social media finding, learning new things. Especially in the era of AI, you can also find me on edtech platforms.
            </p>
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed italic">
              Afterall, I am curious not only about the nature and plants, but also in other growing fields that can help both in my study and in my carrier.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <User className="mb-4 text-emerald-600" size={24} />
                <h4 className="font-bold mb-1">Personal Info</h4>
                <p className="text-sm text-zinc-500">Based in Odisha, India</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <Code className="mb-4 text-indigo-600" size={24} />
                <h4 className="font-bold mb-1">Interests</h4>
                <p className="text-sm text-zinc-500">Botany, Gen AI, Data entry, Data insights, Web developer using AI</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-[#F3F2EE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4 block">Expertise</span>
            <h2 className="text-6xl md:text-8xl font-serif italic mb-6 leading-none">Skills & <br /> Tools</h2>
            <p className="text-zinc-500 text-lg font-light">The technologies I use to bridge biology and AI.</p>
          </div>
          
          <div className="flex justify-center gap-4 mb-12">
            {Object.keys(SKILLS).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab 
                    ? "bg-zinc-900 text-white shadow-lg" 
                    : "bg-white text-zinc-500 hover:bg-zinc-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {SKILLS[activeTab as keyof typeof SKILLS].map((skill) => (
              <div key={skill} className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
                <span className="font-medium text-zinc-800 group-hover:text-emerald-600 transition-colors">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education & Certifications */}
      {/* Education Section */}
      <section id="education" className="section-padding bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <div className="flex flex-col gap-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">Academic</span>
              <h2 className="text-6xl font-serif italic leading-none">Education</h2>
            </div>
            
            <div className="space-y-12">
              {EDUCATION.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l border-zinc-200"
                >
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-50" />
                  <div className={(edu.degree.includes("Bsc. Botany") || edu.degree === "10th Grade" || edu.degree === "+2 Science") ? "flex flex-col md:flex-row md:items-center gap-10" : ""}>
                    <div className="flex-1">
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em]">{edu.period}</span>
                      <h3 className="text-2xl font-serif italic mt-3 mb-2">{edu.degree}</h3>
                      <p className="text-zinc-500 font-medium mb-5">{edu.school}</p>
                      <p className="text-zinc-600 leading-relaxed font-light">{edu.details}</p>
                    </div>
                    {edu.degree.includes("Bsc. Botany") && (
                      <div className="flex gap-4">
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          className="md:w-48 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                        >
                          <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYVewYSK71Ht-H6MYfcCrb5bWVbppnLtlig&s" 
                            alt="Bsc. Botany Photo 1" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          className="md:w-48 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                        >
                          <img 
                            src="https://ebhubaneswar.com/wp-content/uploads/2025/04/ouat-bhubaneswar-7866654.webp" 
                            alt="Bsc. Botany Photo 2" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>
                      </div>
                    )}
                    {edu.degree === "10th Grade" && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        className="md:w-72 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                      >
                        <img 
                          src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwer3Z1Ot74ku4xsc7z8pS3D_klhhpV2m4CFuFFywoU9x4aQn9woXZRD0dAaHF9kwkQf5zB5W91seEqwmMHOpHh4mGqfTWhgYUWNSGOfwYnd3av8LrLHoPXZLs5MnMoMjuARE6Ish=s1360-w1360-h1020-rw" 
                          alt="10th Grade Achievement" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    )}
                    {edu.degree === "+2 Science" && (
                      <div className="flex gap-4">
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          className="md:w-48 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                        >
                          <img 
                            src="https://lh3.googleusercontent.com/d/19gsYbOwEDUxbHIK4scSwyqAb9W3y7Yp3" 
                            alt="+2 Science Photo 1" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          className="md:w-48 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                        >
                          <img 
                            src="https://lh3.googleusercontent.com/d/1QWLjecyyP_gc5pnh6b1pnALTpEGW0NTW" 
                            alt="+2 Science Photo 2" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding bg-[#F3F2EE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="flex flex-col gap-4 mb-12">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">Showcase</span>
                <h2 className="text-6xl font-serif italic leading-none">Certificate <br /> Gallery</h2>
              </div>
              <CertificateSlideshow />
            </motion.div>

            <div>
              <div className="flex flex-col gap-4 mb-16">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">Professional</span>
                <h2 className="text-6xl font-serif italic leading-none">Certifications</h2>
              </div>
              
              <div className="space-y-12">
                {CERTIFICATIONS.map((cert, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-zinc-200"
                  >
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-indigo-50" />
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em]">{cert.period}</span>
                    <h3 className="text-2xl font-serif italic mt-3 mb-2">{cert.title}</h3>
                    <p className="text-zinc-500 font-medium mb-5">{cert.issuer}</p>
                    <p className="text-zinc-600 leading-relaxed font-light">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-[#151619] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4 block">Portfolio</span>
              <h2 className="text-6xl md:text-8xl font-serif italic mb-6 leading-none">Selected <br /> Works</h2>
            </div>
          </div>
          
          <div className="py-20 border border-zinc-800 rounded-[3rem] bg-white/5 flex flex-col items-center justify-center text-center px-6">
            <p className="text-2xl md:text-3xl font-serif italic text-zinc-300 max-w-2xl leading-relaxed">
              "Still working on it, Will be upload soon when I able to do the project related of my field"
            </p>
            <div className="mt-8 w-12 h-px bg-emerald-500/50" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-[#F9F8F6]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mb-6 block">Get in Touch</span>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-12 leading-tight">Let's create something <br /> meaningful together.</h2>
            <p className="text-zinc-500 text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
              I'm currently looking for internship opportunities and freelance projects. 
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            
            <div className="flex flex-col items-center gap-10">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rasmiranjandalei06@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4"
              >
                <div className="p-8 rounded-full bg-white shadow-sm group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 border border-zinc-100">
                  <Mail size={40} className="text-zinc-900" />
                </div>
                <span className="text-2xl md:text-3xl font-medium text-zinc-900 group-hover:text-emerald-600 transition-colors">
                  rasmiranjandalei06@gmail.com
                </span>
              </a>
              
              <div className="flex gap-12 mt-4">
                {[
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/rasmi-ranjan-dalei-892157302" }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors relative group"
                  >
                    {social.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-100 text-center">
        <p className="text-zinc-400 text-sm">
          © {new Date().getFullYear()} Rasmi Ranjan Dalei. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}
