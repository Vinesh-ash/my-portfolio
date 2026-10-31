import React from 'react';
import { Link } from '../router/Router';
import { 
  Brain, 
  Cpu, 
  Sparkles, 
  Compass, 
  Layers, 
  Radio, 
  ShieldCheck, 
  ArrowRight,
  Terminal,
  FileDown
} from 'lucide-react';
import { profileData } from '../data/profileData';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>Professional Dossier // About Geriki Vinesh</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
          Engineering Intelligence Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Silicon & Software</span>
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          {profileData.aboutSummary}
        </p>
      </div>

      {/* Main Philosophy Quote Callout */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0a1222] via-[#0b162b] to-[#070d1a] border border-cyan-500/30 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            // Core Philosophy
          </div>
          <blockquote className="text-xl sm:text-2xl font-display font-semibold text-white leading-snug">
            "{profileData.philosophy}"
          </blockquote>
          <p className="text-xs text-slate-400 font-mono">
            — GERIKI VINESH • Machine Learning Engineer & IoT Architect
          </p>
        </div>
      </div>

      {/* Structured Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Background & Foundation */}
        <div className="p-8 rounded-2xl bg-[#090e1a]/90 border border-slate-800 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
            <Brain className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-lg font-bold text-white font-display">
            Professional Background
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Currently pursuing a B.Tech in Artificial Intelligence and Machine Learning at Vel Tech R&D Institute of Science and Technology (maintaining an academic record of 9.6 CGPA), building upon a foundational Diploma in Computer Engineering (98% distinction). My trajectory merges rigorous computer science foundations with hands-on systems development.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            From low-level microcontrollers (NodeMCU ESP8266, ESP32) to neural architectures and LLM reasoning pipelines, I approach software engineering as an end-to-end discipline where models must reliably communicate with real-world sensors, relays, and users.
          </p>
        </div>

        {/* Technical Interests */}
        <div className="p-8 rounded-2xl bg-[#090e1a]/90 border border-slate-800 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-blue-400" />
          </div>
          <h2 className="text-lg font-bold text-white font-display">
            Technical Interests & Specializations
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
              <span><strong>Frontier LLMs & RAG:</strong> Grounding generative language models with domain-specific engineering vector stores to eliminate hallucinations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
              <span><strong>Autonomous AI Agents:</strong> Constructing goal-directed closed-loop agents with tool invocation and deterministic safety boundaries.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
              <span><strong>Cyber-Physical Systems:</strong> Developing real-time digital twins paired with cryptographic audit logging and IoT sensor telemetry.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
              <span><strong>Assistive IoT:</strong> Leveraging long-range LoRa RF links and geodesic math to safeguard children with autism.</span>
            </li>
          </ul>
        </div>

        {/* Engineering Approach */}
        <div className="p-8 rounded-2xl bg-[#090e1a]/90 border border-slate-800 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center">
            <Cpu className="w-5 h-5 text-purple-400" />
          </div>
          <h2 className="text-lg font-bold text-white font-display">
            Engineering Approach & Integrity
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            I adhere strictly to principled software and hardware engineering: modularity, deterministic fail-safes, and empirical validation. When architecting AI for critical infrastructure (such as power grids), the intelligence layer must operate as an auxiliary governor that respects hardware protection relays rather than introducing unvalidated single points of failure.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Every prototype I construct—from circuit schematics in ORCAD to React frontends and Python pipelines—is designed to be testable, maintainable, and aligned with practical operational constraints.
          </p>
        </div>

        {/* Career Direction */}
        <div className="p-8 rounded-2xl bg-[#090e1a]/90 border border-slate-800 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center">
            <Compass className="w-5 h-5 text-emerald-400" />
          </div>
          <h2 className="text-lg font-bold text-white font-display">
            Career Direction & Aspirations
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            My objective is to work at the forefront of AI/ML engineering, contributing to impactful machine learning systems, research laboratories, and intelligent automation platforms. I am actively seeking advanced engineering internships, academic research partnerships, and conference collaborations.
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Incoming AI Intern @ Internmo (Nov 2026)
            </span>
          </div>
        </div>

      </div>

      {/* Navigation CTA */}
      <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-white">
            Discover Technical Capabilities
          </h3>
          <p className="text-xs text-slate-400">
            Review detailed skill breakdown or explore the three core engineering architectures.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/skills"
            className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300 hover:border-cyan-400 transition-all"
          >
            Explore Skills
          </Link>
          <Link
            to="/projects"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-mono text-white hover:opacity-95 transition-all shadow-md shadow-cyan-500/20"
          >
            Explore Projects
          </Link>
        </div>
      </div>

    </div>
  );
};
