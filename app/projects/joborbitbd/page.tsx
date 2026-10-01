"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// সরাসরি GitHub এর আইকন তৈরি করে দেওয়া হলো
const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

// অ্যানিমেশন ভেরিয়েবল
const fadeInUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function JobOrbitBDProject() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 pb-20">
      
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 w-full bg-zinc-50/80 backdrop-blur-md z-50 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-16">
        
        {/* Project Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-12">
          <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 text-white shadow-md">
            <LayoutTemplate size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">JobOrbitBD</h1>
          <p className="text-xl text-zinc-600 mb-8 max-w-2xl">
            An AI-Powered Job Marketplace designed to match candidates with relevant job opportunities using semantic skill matching and CV analysis.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#" className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors">
              <ExternalLink size={20} /> Live Demo
            </a>
            <a href="https://github.com/yourusername/joborbitbd" target="_blank" className="flex items-center gap-2 border border-zinc-300 bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-50 transition-colors">
              <GithubIcon size={20} /> View Source Code
            </a>
          </div>
        </motion.div>

        {/* Project Image Placeholder */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="w-full h-[300px] md:h-[500px] relative rounded-3xl mb-16 border border-zinc-200 overflow-hidden shadow-sm">
  <Image 
    src="/projects/joborbitbd.png" 
    alt="JobOrbitBD Dashboard Preview"
    fill
    className="object-cover"
    priority
  />
</motion.div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-12">
            
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-4">Overview & Problem Statement</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Traditional job portals often fail to accurately match a candidate's actual skills with employer requirements, leading to high rejection rates and wasted time. Candidates struggle to find jobs that perfectly align with their CVs.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                <strong>Solution:</strong> JobOrbitBD solves this by implementing an AI-driven matching engine. It extracts data directly from candidate CVs and uses Natural Language Processing (NLP) to semantically match their skills and experiences with job postings, providing an automated compatibility score.
              </p>
            </motion.section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {[
                  "AI-based Semantic Skill Matching between CVs and Job Descriptions.",
                  "Automated Resume Parsing and Data Extraction.",
                  "Separate Role-based Dashboards for Job Seekers and Employers.",
                  "Real-time Job Recommendation Engine.",
                  "Automated Interview Question Generation based on job roles."
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-600">
                    <CheckCircle2 size={20} className="text-zinc-900 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-4">My Contribution</h2>
              <p className="text-zinc-600 leading-relaxed">
                I was responsible for designing the overall system architecture. I developed the site architecture, built the CV extraction logic, and integrated the AI interview question features. I also implemented the connection between the React frontend and the Django/FastAPI backend to ensure seamless data flow and low-latency AI responses.
              </p>
            </motion.section>

          </div>

          {/* Sidebar / Tech Stack */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-8">
            <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Django", "FastAPI", "Python", "MySQL", "Sentence Transformers", "Machine Learning"].map(t => (
                  <span key={t} className="bg-zinc-100 text-zinc-700 px-3 py-1.5 rounded-md text-sm font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-4">Project Info</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="block text-zinc-500 mb-1">Role</span>
                  <span className="font-medium text-zinc-900">Full Stack / AI Integration</span>
                </div>
                <div>
                  <span className="block text-zinc-500 mb-1">Category</span>
                  <span className="font-medium text-zinc-900">Web Application</span>
                </div>
                <div>
                  <span className="block text-zinc-500 mb-1">Status</span>
                  <span className="font-medium text-zinc-900">Completed</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}