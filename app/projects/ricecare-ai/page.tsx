"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// সরাসরি GitHub এর আইকন
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

export default function RiceCareAIProject() {
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
            <Smartphone size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">RiceCare AI</h1>
          <p className="text-xl text-zinc-600 mb-8 max-w-2xl">
            A comprehensive Deep Learning approach paired with a Flutter mobile application for predicting rice leaf diseases and recommending solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#" className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors">
              <ExternalLink size={20} /> Watch Demo
            </a>
            <a href="https://github.com/yourusername/ricecare-ai" target="_blank" className="flex items-center gap-2 border border-zinc-300 bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-50 transition-colors">
              <GithubIcon size={20} /> View Source Code
            </a>
          </div>
        </motion.div>

        {/* Project Image Placeholder */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="w-full h-[300px] md:h-[500px] relative rounded-3xl mb-16 border border-zinc-200 overflow-hidden shadow-sm">
  <Image 
    src="/projects/ricecare-ai.png" 
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
                Rice diseases significantly impact agricultural yield, but manual identification is often slow, inaccurate, and requires expert knowledge that isn't readily available to all farmers.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                <strong>Solution:</strong> I developed "RiceCare AI" to empower farmers with an accessible tool. By simply taking a picture of a diseased rice leaf using their smartphone, the app instantly identifies the specific disease and provides actionable recommendations for treatment.
              </p>
            </motion.section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {[
                  "Real-time image classification using a custom Deep Learning model.",
                  "User-friendly cross-platform mobile interface built with Flutter.",
                  "Detailed disease information and expert-verified treatment recommendations.",
                  "Robust cloud deployment of the AI model via REST API.",
                  "Offline support for previously identified diseases."
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-600">
                    <CheckCircle2 size={20} className="text-zinc-900 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-4">My Contribution & Technical Approach</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                This was an academic project where I handled the end-to-end development cycle. I started with dataset preparation and training a deep learning model for image classification.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                I then developed a Python-based backend API hosted on Render.com to serve the model predictions. Finally, I built the entire mobile application using Flutter, focusing on a clean UI/UX and seamless integration with the cloud API to ensure fast and accurate results.
              </p>
            </motion.section>

          </div>

          {/* Sidebar / Tech Stack */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-8">
            <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "Dart", "Python", "Deep Learning", "TensorFlow/PyTorch", "REST API", "Render.com"].map(t => (
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
                  <span className="font-medium text-zinc-900">Mobile Dev & ML Integration</span>
                </div>
                <div>
                  <span className="block text-zinc-500 mb-1">Category</span>
                  <span className="font-medium text-zinc-900">Mobile App / Academic Project</span>
                </div>
                <div>
                  <span className="block text-zinc-500 mb-1">Status</span>
                  <span className="font-medium text-zinc-900">Completed (August 2026)</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}