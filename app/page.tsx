"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, Download, Code2, Smartphone, Database, Layout, GraduationCap, Briefcase, Award, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ১. Magnetic Button Component (মাইক্রো-ইন্টারঅ্যাকশন)
const MagneticButton = ({ children, className, href, target }: any) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const boundingRect = ref.current?.getBoundingClientRect();
    if (boundingRect) {
      const { width, height, left, top } = boundingRect;
      // মাউস কতটুকু মুভ করলে বাটন কতটুকু সরবে তার রেশিও (0.2)
      const x = (clientX - (left + width / 2)) * 0.2;
      const y = (clientY - (top + height / 2)) * 0.2;
      setPosition({ x, y });
    }
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      href={href}
      target={target}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

// ২. Spotlight Card Component (মাউস গ্লো ইফেক্ট)
const SpotlightCard = ({ children, className }: any) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
      variants={fadeInUp}
    >
      <div
        className="pointer-events-none absolute -inset-px z-20 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,0,0,0.06), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

// আইকনগুলো
const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>
);
const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const fadeInUp: any = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const SKILLS = {
  "Programming": ["Python", "Dart", "C", "C++", "JavaScript", "TypeScript"],
  "Mobile Development": ["Flutter", "Dart", "Firebase", "REST API"],
  "Backend": ["Python", "FastAPI", "Django", "MySQL"],
  "Web": ["React", "Next.js", "Tailwind CSS", "HTML"]
};

const PROJECTS = [
  {
    title: "JobOrbitBD",
    description: "An AI-powered job marketplace matching candidates using semantic skill matching and CV analysis.",
    tech: ["React", "Django", "FastAPI", "Python", "Machine Learning"],
    link: "/projects/joborbitbd",
    image: "/projects/joborbitbd.png",
  },
  {
    title: "RiceCare AI",
    description: "Rice Leaf Disease Detection Mobile Application with deep learning integration.",
    tech: ["Flutter", "Dart", "Python", "Machine Learning"],
    link: "/projects/ricecare-ai",
    image: "/projects/ricecare-ai.png",
  }
];

// ৩. Staggered Text (Hero Section এর জন্য শব্দগুলো)
const heroTitleWords = "CSE Graduate | Software Engineer | Mobile Application Developer".split(" ");

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-50/80 backdrop-blur-md z-50 border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">Md. Mehedi Hasan</span>
          <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="#skills" className="hover:text-zinc-900 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-zinc-900 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* Hero Section */}
        <motion.section initial="hidden" animate="visible" className="mb-32 mt-10">
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Md. Mehedi Hasan
          </motion.h1>
          
          {/* Staggered Text Reveal Effect */}
          <motion.h2 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
            }}
            className="text-xl md:text-2xl text-zinc-600 font-medium mb-6 flex flex-wrap gap-x-2"
          >
            {heroTitleWords.map((word, i) => (
              <motion.span 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p variants={fadeInUp} className="max-w-2xl text-lg text-zinc-600 mb-10 leading-relaxed">
            Passionate about building scalable software applications, mobile experiences, and API-driven products using Flutter, Python, FastAPI and modern web technologies.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            {/* Magnetic Buttons */}
            <MagneticButton href="#projects" className="bg-zinc-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors z-10">
              View Projects
            </MagneticButton>
            <MagneticButton href="/resume.pdf" target="_blank" className="flex items-center gap-2 border border-zinc-300 bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-50 transition-colors z-10">
              <Download size={20} /> Resume
            </MagneticButton>
            <MagneticButton href="https://github.com/yourusername" target="_blank" className="flex items-center justify-center w-12 h-12 border border-zinc-300 bg-white text-zinc-900 rounded-lg hover:bg-zinc-50 transition-colors z-10">
              <GithubIcon size={20} />
            </MagneticButton>
            <MagneticButton href="https://linkedin.com/in/yourusername" target="_blank" className="flex items-center justify-center w-12 h-12 border border-zinc-300 bg-white text-zinc-900 rounded-lg hover:bg-zinc-50 transition-colors z-10">
              <LinkedinIcon size={20} />
            </MagneticButton>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="scroll-mt-24 mb-32">
          <h3 className="text-3xl font-bold mb-6">About Me</h3>
          <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm">
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              I am a Computer Science and Engineering graduate with hands-on experience in mobile application development, REST APIs, backend development and AI-powered applications. I enjoy transforming ideas into practical software products and continuously improving my skills through real-world projects.
            </p>
            <div className="flex flex-wrap gap-8 text-zinc-900 font-medium">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">10+</span>
                <span className="text-zinc-500 text-sm">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">CSE</span>
                <span className="text-zinc-500 text-sm">Graduate</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">BD</span>
                <span className="text-zinc-500 text-sm">Based</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="scroll-mt-24 mb-32">
          <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-8">Technical Skills</motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(SKILLS).map(([category, skills], idx) => (
              <motion.div key={category} variants={fadeInUp} className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-4 text-zinc-900">
                  {idx === 0 && <Code2 size={24} />}
                  {idx === 1 && <Smartphone size={24} />}
                  {idx === 2 && <Database size={24} />}
                  {idx === 3 && <Layout size={24} />}
                  <h4 className="text-xl font-bold">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="bg-zinc-100 text-zinc-800 px-3 py-1.5 rounded-md text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section (With Spotlight Effect) */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="scroll-mt-24 mb-32">
          <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-8">Featured Projects</motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project: any, idx) => (
              <SpotlightCard key={idx} className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm flex flex-col group">
                <Link href={project.link || "#"} className="h-48 md:h-56 bg-zinc-100 flex items-center justify-center border-b border-zinc-100 relative overflow-hidden cursor-pointer">
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors z-10" />
                  )}
                </Link>
                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <Link href={project.link || "#"}>
                    <h4 className="text-xl font-bold mb-2 hover:text-zinc-600 transition-colors cursor-pointer">{project.title}</h4>
                  </Link>
                  <p className="text-zinc-600 mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t: string) => (
                      <span key={t} className="bg-zinc-100 text-zinc-600 px-2 py-1 rounded text-xs font-medium border border-zinc-200/50">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <Link href={project.link || "#"} className="flex items-center gap-2 text-sm font-medium hover:text-zinc-600 transition-colors">
                      <ExternalLink size={16} /> Case Study
                    </Link>
                    <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-zinc-600 transition-colors">
                      <GithubIcon size={16} /> Code
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="mb-32">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3"><GraduationCap size={28} /> Education</h3>
          
          <div className="space-y-6">
            {/* BSc */}
            <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-zinc-900"></div>
              <h4 className="text-2xl font-bold text-zinc-900 mb-2">Bachelor of Science in Computer Science and Engineering</h4>
              <p className="text-lg text-zinc-600 font-medium mb-1">Daffodil International University</p>
              <p className="text-sm text-zinc-500">Graduated: September 2026</p>
            </div>

            {/* HSC */}
            <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm relative overflow-hidden">
              {/* বাম দিকের বর্ডার একটু হালকা কালার দেওয়া হলো ডিজাইনের ভ্যারিয়েশনের জন্য */}
              <div className="absolute top-0 left-0 w-2 h-full bg-zinc-400"></div>
              <h4 className="text-xl font-bold text-zinc-900 mb-2">Higher Secondary Certificate (HSC)</h4>
              <p className="text-zinc-600 font-medium mb-1">Ahsanullah Collage, Khulna</p>
              <p className="text-sm text-zinc-500">Passing Year: 2021 | Group: Science</p>
            </div>

            {/* SSC */}
            <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-zinc-300"></div>
              <h4 className="text-xl font-bold text-zinc-900 mb-2">Secondary School Certificate (SSC)</h4>
              <p className="text-zinc-600 font-medium mb-1">Kalaran Chandipur Ideal High School</p>
              <p className="text-sm text-zinc-500">Passing Year: 2019 | Group: Science</p>
            </div>
          </div>
        </motion.section>

        {/* Experience & Activities Section */}
        <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="scroll-mt-24 mb-32">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3"><Briefcase size={28} /> Experience & Activities</h3>
          <div className="space-y-6">
            <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-zinc-900">Mobile App Developer (Volunteer)</h4>
                  <p className="text-zinc-600 font-medium">দর্পণ ফাউন্ডেশন (Darpan Foundation)</p>
                </div>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Developed a mobile application using Flutter and Firebase for a social organization comprising over 50 members. The app streamlines member directories, organizational documentation, and community initiative management.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-zinc-900">Academic & Project Experience</h4>
                  <p className="text-zinc-600 font-medium">Software & API Development</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-zinc-600 space-y-2 leading-relaxed">
                <li>Designed architecture and workflow for full-stack platforms using React.js, Django REST API, and MySQL.</li>
                <li>Trained deep learning models for image classification and deployed them via Python cloud APIs.</li>
                <li>Built intuitive mobile interfaces and real-time data streams using Flutter and Dart.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Resume Call to Action */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="mb-32">
          <div className="bg-zinc-100 border border-zinc-200 p-10 md:p-16 rounded-3xl text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-zinc-900 shadow-sm">
              <FileText size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">Want to know more about my experience?</h3>
            <p className="text-zinc-600 mb-8 max-w-lg mx-auto">
              Get a comprehensive overview of my technical skills, academic background, and project details.
            </p>
            <div className="flex justify-center gap-4">
              {/* Magnetic Button Used Here */}
              <MagneticButton href="/resume.pdf" target="_blank" className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-colors z-10">
                <Download size={20} /> Download Resume (PDF)
              </MagneticButton>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="scroll-mt-24 text-center bg-zinc-900 text-white p-12 md:p-20 rounded-3xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Let's work together.</h3>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">
            I am currently open to new opportunities in software and mobile development. Whether you have a question or a project idea, I'd love to hear from you!
          </p>
          {/* Magnetic Button Used Here */}
          <MagneticButton href="mailto:your.email@example.com" className="inline-flex items-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition-colors z-10">
            <Mail size={20} /> Say Hello
          </MagneticButton>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-8 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Md. Mehedi Hasan. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion.</p>
      </footer>
    </div>
  );
}