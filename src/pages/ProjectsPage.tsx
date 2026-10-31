import React, { useState } from 'react';
import { Link } from '../router/Router';
import { 
  Layers, 
  ArrowRight, 
  Cpu, 
  Radio, 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  ExternalLink,
  Github,
  Zap,
  Terminal,
  ChevronRight
} from 'lucide-react';
import { projectsData, ProjectDetail } from '../data/projectsData';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'iot' | 'automation'>('all');

  const filteredProjects = projectsData.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'ai') return project.tags.includes('AI Agents') || project.tags.includes('Machine Learning');
    if (filter === 'iot') return project.tags.includes('IoT') || project.tags.includes('LoRa');
    if (filter === 'automation') return project.tags.includes('Closed-Loop Control') || project.tags.includes('Digital Twin');
    return true;
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>Core Engineering Showcase // Systems & Architectures</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
          Intelligent Systems & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cyber-Physical Frameworks</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Detailed technical blueprints, mathematical workflows, and hardware-software implementations. Designed to demonstrate practical engineering capabilities, algorithmic depth, and architectural rigor.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#090e1a]/80 border border-slate-800 backdrop-blur-md max-w-fit">
        {[
          { id: 'all', label: 'All Architectures' },
          { id: 'ai', label: 'AI Agents & ML' },
          { id: 'iot', label: 'IoT & Telemetry' },
          { id: 'automation', label: 'Autonomous Control' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              filter === tab.id
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Showcase Cards */}
      <div className="space-y-12">
        {filteredProjects.map((project, index) => {
          const isFlagship = project.id === 'autonomous-power-grid-ai';

          return (
            <div
              key={project.id}
              className={`rounded-3xl bg-[#090e1a]/90 border transition-all duration-300 p-8 sm:p-10 relative overflow-hidden group hover:shadow-[0_15px_40px_-10px_rgba(0,240,255,0.15)] ${
                isFlagship 
                  ? 'border-cyan-500/50 shadow-cyan-950/20 shadow-xl' 
                  : 'border-slate-800/90 hover:border-cyan-500/40'
              }`}
            >
              {/* Flagship accent glow */}
              {isFlagship && (
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              )}

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Project Details */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                      {project.statusBadge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Duration: {project.duration}
                    </span>
                    {isFlagship && (
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-500/30 text-blue-300">
                        PRIMARY RESEARCH ARCHITECTURE
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-xs font-mono text-cyan-400 font-medium">
                    "{project.tagline}"
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Highlights Bullet Summary */}
                  <div className="space-y-2 pt-1 text-xs text-slate-400">
                    <div className="font-mono text-slate-300 text-[11px] uppercase tracking-wider">
                      // Core Engineering Capabilities Demonstrated:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                      {project.motivationObjectives.slice(0, 4).map((obj, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Technical Blueprint Box & Action Button */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-black/40 border border-slate-800/80 space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-cyan-400 border-b border-slate-800 pb-3">
                      <span>PROJECT METADATA</span>
                      <span>SYS-SPEC 0{index + 1}</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-500 block">Primary Stack</span>
                        <span className="text-slate-200 font-mono text-xs">
                          {project.softwareStack.map(s => s.technologies).join(', ').slice(0, 70)}...
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-500 block">Hardware Target</span>
                        <span className="text-slate-200 font-mono text-xs">
                          {project.hardwareComponents.map(h => h.name).join(', ').slice(0, 60)}...
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-500 block">AI/ML Paradigm</span>
                        <span className="text-slate-200 font-mono text-xs">
                          {project.aiMlMethodology.map(m => m.technique).join(', ')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    <Link
                      to={`/projects/${project.id}`}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-semibold hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                    >
                      <span>Full Technical Breakdown</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-400">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                      <span>•</span>
                      <span className="text-slate-500">
                        {project.architectureSteps.length} Pipeline Stages
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
