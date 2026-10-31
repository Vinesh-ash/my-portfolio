import React from 'react';
import { Link } from '../router/Router';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  Terminal, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { educationData } from '../data/educationData';

export const EducationPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
          <span>Academic Pedigree // Credentials</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
          Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Qualifications</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Chronological record of formal educational degrees and academic milestones, demonstrating consistent scholastic excellence and rigorous computer science foundations.
        </p>
      </div>

      {/* Qualifications List */}
      <div className="space-y-8">
        {educationData.map((edu, idx) => (
          <div
            key={edu.id}
            className="p-8 sm:p-10 rounded-3xl bg-[#090e1a]/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-6 relative overflow-hidden group shadow-lg"
          >
            {/* Top Row: Institution, Degree & Score Badge */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-300">
                    {edu.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.period}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors pt-1">
                  {edu.degree}
                </h2>

                <div className="text-xs sm:text-sm font-mono text-slate-300 flex flex-wrap items-center gap-2">
                  <span>{edu.institution}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* High-Impact Academic Score Card */}
              <div className="p-4 rounded-2xl bg-black/60 border border-cyan-500/30 flex items-center gap-4 shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400">
                    Academic Standing
                  </div>
                  <div className="text-2xl font-bold font-mono text-white">
                    <span className="text-cyan-400">{edu.score}</span>{' '}
                    <span className="text-xs text-slate-400 font-normal">({edu.scoreType})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Summary */}
            <p className="text-sm text-slate-300 leading-relaxed">
              {edu.summary}
            </p>

            {/* Focus Areas & Core Courses */}
            <div className="space-y-2 pt-1">
              <span className="text-[10px] font-mono uppercase text-slate-500 block">
                Curriculum Focus & Core Modules:
              </span>
              <div className="flex flex-wrap gap-2">
                {edu.focusAreas.map((area, aIdx) => (
                  <span
                    key={aIdx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-black/40 border border-slate-800 text-slate-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Academic Highlights Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0a1222] via-[#0b162b] to-[#070d1a] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base font-bold text-white font-display">
            Scholastic Distinction
          </h3>
          <p className="text-xs text-slate-400">
            9.6 CGPA in B.Tech AI & ML and 98% in Computer Engineering Diploma reflect academic discipline and dedication.
          </p>
        </div>
        <Link
          to="/projects"
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-semibold hover:opacity-95 transition-all shadow-md shadow-cyan-500/20 shrink-0"
        >
          View Applied Projects
        </Link>
      </div>

    </div>
  );
};
