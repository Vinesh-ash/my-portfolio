import React from 'react';
import { Link } from '../router/Router';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Terminal, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { experienceData } from '../data/experienceData';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
          <span>Professional Timeline // Experience</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
          Practical Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Chronological record of internships and engineering roles, with transparent status designations adhering strictly to verified professional timelines.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
        {experienceData.map((item, index) => {
          const isUpcoming = item.status === 'Upcoming – Not Started';

          return (
            <div key={item.id} className="relative group">
              
              {/* Timeline Node Indicator */}
              <div 
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  isUpcoming
                    ? 'border-teal-400 bg-teal-950 shadow-[0_0_12px_rgba(20,184,166,0.5)]'
                    : 'border-cyan-400 bg-cyan-950 shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                }`}
              />

              {/* Experience Card */}
              <div className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-5">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                  <div>
                    <span 
                      className={`text-[10px] font-mono px-3 py-1 rounded-full border ${
                        isUpcoming
                          ? 'bg-teal-950/80 border-teal-500/40 text-teal-300'
                          : 'bg-slate-900 border-slate-700 text-slate-300'
                      }`}
                    >
                      {item.status}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold font-display text-white mt-2">
                      {item.role} <span className="text-cyan-400 font-normal">@ {item.company}</span>
                    </h2>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-1">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">
                    Key Highlights & Scope:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-400">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-black/40 border border-slate-800 text-slate-300"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0a1222] via-[#0b162b] to-[#070d1a] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base font-bold text-white font-display">
            Interested in Interviewing or Hiring?
          </h3>
          <p className="text-xs text-slate-400">
            Open to Machine Learning Engineering internships, research opportunities, and collaborations.
          </p>
        </div>
        <Link
          to="/contact"
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-semibold hover:opacity-95 transition-all shadow-md shadow-cyan-500/20 shrink-0"
        >
          Contact Me
        </Link>
      </div>

    </div>
  );
};
