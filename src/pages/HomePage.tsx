import React from 'react';
import { Link } from '../router/Router';
import { 
  ArrowRight, 
  ExternalLink, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Cpu, 
  Brain, 
  Radio, 
  Shield, 
  Database, 
  Bot, 
  Zap, 
  Compass, 
  Trophy, 
  GraduationCap, 
  Briefcase,
  Layers,
  ChevronRight,
  Terminal,
  Activity
} from 'lucide-react';
import { profileData, technicalDomains } from '../data/profileData';
import { projectsData } from '../data/projectsData';
import { educationData } from '../data/educationData';
import { achievementsData } from '../data/achievementsData';

export const HomePage: React.FC = () => {
  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <div className="relative pt-24 pb-20 space-y-28">
      
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>AI/ML Engineering Portfolio // 2026</span>
            </div>

            {/* Name & Professional Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
                GERIKI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">VINESH</span>
              </h1>
              <p className="mt-2 text-base sm:text-lg font-mono text-cyan-400 font-medium tracking-wide">
                {profileData.title}
              </p>
            </div>

            {/* Main Headline */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-200 leading-snug">
              "{profileData.headline}"
            </p>

            {/* Supporting Introduction */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              {profileData.shortBio}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                to="/projects"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-xs sm:text-sm hover:opacity-95 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/research"
                className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-medium text-xs sm:text-sm hover:border-cyan-400 hover:text-cyan-300 transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Research & Publications</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </Link>

              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl bg-slate-900/60 border border-cyan-500/30 text-cyan-300 font-medium text-xs sm:text-sm hover:bg-cyan-500/10 transition-all"
              >
                Contact Me
              </Link>

              <a
                href={`mailto:${profileData.email}?subject=CV%20Request%20-%20Geriki%20Vinesh`}
                className="px-4 py-2.5 rounded-xl border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs sm:text-sm flex items-center gap-1.5 transition-all"
                title="Download or Request Resume"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-2 flex items-center gap-4 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Connect:
              </span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Neural Geometry Composition */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
              
              {/* Outer Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-4 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
              
              {/* Glowing Backing Aura */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-transparent blur-2xl" />

              {/* Portrait Container */}
              <div className="relative z-10 w-60 h-60 sm:w-72 sm:h-72 rounded-full p-1.5 bg-gradient-to-b from-cyan-400/80 via-blue-500/40 to-slate-900 shadow-[0_0_35px_rgba(0,240,255,0.25)]">
                <div className="w-full h-full rounded-full bg-[#080d1a] border border-cyan-500/40 overflow-hidden flex flex-col items-center justify-center relative group">
                  
                  {/* Subtle Grid inside portrait */}
                  <div className="absolute inset-0 tech-dot-bg opacity-30" />
                  
                  {/* Neural nodes overlay */}
                  <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 200 200">
                    <line x1="40" y1="50" x2="100" y2="80" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="100" y1="80" x2="160" y2="60" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="100" y1="80" x2="110" y2="150" stroke="#3b82f6" strokeWidth="1" />
                    <circle cx="100" cy="80" r="4" fill="#00f0ff" />
                    <circle cx="40" cy="50" r="3" fill="#3b82f6" />
                    <circle cx="160" cy="60" r="3" fill="#00f0ff" />
                    <circle cx="110" cy="150" r="3" fill="#3b82f6" />
                  </svg>

                  {/* Monogram / Avatar Composition */}
                  <div className="relative z-10 flex flex-col items-center text-center p-6">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-400/60 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                      <Brain className="w-8 h-8 text-cyan-300" />
                    </div>
                    <span className="font-display font-bold text-xl text-white tracking-wider">
                      GERIKI VINESH
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400 mt-1 uppercase tracking-widest">
                      AI & IoT Systems
                    </span>
                    <span className="text-[10px] text-slate-400 mt-2 px-2.5 py-0.5 rounded-full bg-slate-900/80 border border-slate-700/80">
                      Vel Tech • CGPA 9.6
                    </span>
                  </div>

                  {/* High-tech corner telemetry marks */}
                  <div className="absolute top-3 left-4 text-[9px] font-mono text-cyan-500/60">SYS::READY</div>
                  <div className="absolute bottom-3 right-4 text-[9px] font-mono text-cyan-500/60">NODE::GV_01</div>
                </div>
              </div>

              {/* Floating badges around the portrait */}
              <div className="absolute -bottom-2 -left-2 z-20 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                <Bot className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI Agents & RAG</span>
              </div>

              <div className="absolute -top-2 -right-2 z-20 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-blue-500/40 text-[11px] font-mono text-blue-300 shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                <Radio className="w-3.5 h-3.5 text-blue-400" />
                <span>IoT & Embedded</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION A: TECHNICAL DOMAINS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>Domain Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Core Technical Domains
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Specialized engineering capabilities across frontier artificial intelligence, agentic frameworks, and cyber-physical IoT integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalDomains.map((domain) => {
            const getIcon = (id: string) => {
              switch (id) {
                case 'ai-ml': return Brain;
                case 'llm': return Sparkles;
                case 'rag': return Database;
                case 'ai-agents': return Bot;
                case 'iot': return Radio;
                default: return Zap;
              }
            };
            const DomainIcon = getIcon(domain.id);

            return (
              <div
                key={domain.id}
                className="p-6 rounded-2xl bg-[#090e1a]/80 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-[0_10px_30px_-10px_rgba(0,240,255,0.15)] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-950/40 transition-all">
                    <DomainIcon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span>Explore Stack</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* =========================================================================
          SECTION B: FEATURED PROJECTS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Engineering Depth</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Featured Systems & Architectures
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1">
              Real-world implementations spanning autonomous grid monitoring, secure digital twins, and assistive LoRa tracking.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View All Engineering Details</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#090e1a]/90 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              {/* Project Card Header & Badges */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                    {project.statusBadge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {project.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {project.overview}
                </p>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0">
                <Link
                  to={`/projects/${project.id}`}
                  className="w-full py-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                >
                  <span>View Technical Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION C: RESEARCH HIGHLIGHT
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c1426] via-[#090e1a] to-[#060a14] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Academic & Scientific Research Showcase</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Bridging Machine Learning Theory with Real-World Physical Systems
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Active investigation into closed-loop AI agent architectures, deterministic safety governors for critical electrical infrastructure, and cryptographically verified digital twins. Structured for conference submissions, collaborative research, and academic rigor.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[11px] font-mono px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300">
                  // IEEE Smart Grid Paradigms
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300">
                  // Constrained Action Optimization
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300">
                  // Sub-GHz Assistive Telemetry
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
              <Link
                to="/research"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-xs sm:text-sm hover:opacity-95 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2"
              >
                <span>Explore Research Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-[11px] font-mono text-slate-500">
                Manuscripts & Conference Proceedings
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION D: PROFESSIONAL SNAPSHOT
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Activity className="w-4 h-4" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Professional Snapshot
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Education Snapshot */}
          <div className="p-6 rounded-2xl bg-[#090e1a]/80 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Education Credentials</h3>
                <span className="text-[11px] font-mono text-slate-400">Academic Standing</span>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="font-semibold text-white">B.Tech in AI & ML</div>
                <div className="text-cyan-400 font-mono text-[11px] mt-0.5">Vel Tech R&D Institute • CGPA 9.6</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="font-semibold text-white">Diploma in Computer Engineering</div>
                <div className="text-cyan-400 font-mono text-[11px] mt-0.5">Sri Durgadevi Polytechnic • 98%</div>
              </div>
            </div>

            <Link
              to="/education"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 pt-1"
            >
              <span>View Full Academic History</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Technical Experience Snapshot */}
          <div className="p-6 rounded-2xl bg-[#090e1a]/80 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Industry Experience</h3>
                <span className="text-[11px] font-mono text-slate-400">Internships & Roles</span>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-white">AI Intern</div>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-teal-950 border border-teal-500/40 text-teal-300">
                    Upcoming (Nov 2026)
                  </span>
                </div>
                <div className="text-slate-400 font-mono text-[11px] mt-0.5">Internmo • Applied AI</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-white">Web Developer Intern</div>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                    Completed
                  </span>
                </div>
                <div className="text-slate-400 font-mono text-[11px] mt-0.5">NVSKZEN • Summer 2023</div>
              </div>
            </div>

            <Link
              to="/experience"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 pt-1"
            >
              <span>View Experience Timeline</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Honors & Achievements Snapshot */}
          <div className="p-6 rounded-2xl bg-[#090e1a]/80 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Key Achievements</h3>
                <span className="text-[11px] font-mono text-slate-400">Honors & Competitions</span>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="font-semibold text-amber-300">National-Level Karate Champion</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Peak martial arts tournament excellence & discipline</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="font-semibold text-cyan-300">Karate Black Belt</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Prestigious Dan rank martial arts certification</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="font-semibold text-blue-300">Smart India Hackathon 2026</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Selected national hackathon participant</div>
              </div>
            </div>

            <Link
              to="/achievements"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 pt-1"
            >
              <span>View All Achievements</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION E: CONTACT CTA
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0a1122] to-slate-900 border border-cyan-500/40 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center">
            <Terminal className="w-7 h-7 text-cyan-400" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Let's Connect & Build
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              "Have an idea, research opportunity or interesting problem to solve? Let's connect."
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-xs sm:text-sm hover:opacity-95 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2"
            >
              <span>Initiate Contact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`mailto:${profileData.email}`}
              className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs sm:text-sm hover:border-cyan-400 hover:text-cyan-300 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{profileData.email}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
