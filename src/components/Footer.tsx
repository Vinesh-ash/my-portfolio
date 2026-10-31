import React from 'react';
import { Link } from '../router/Router';
import { Github, Linkedin, Mail, ArrowUp, Activity, Terminal } from 'lucide-react';
import { profileData } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04060d] border-t border-slate-900 pt-16 pb-12 overflow-hidden">
      {/* Subtle top light band */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Identity & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center">
                <span className="font-mono font-bold text-xs text-cyan-400">GV</span>
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wide">
                GERIKI VINESH
              </span>
            </div>
            
            <p className="text-cyan-400 font-mono text-xs tracking-tight">
              {profileData.title}
            </p>
            
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              "{profileData.headline}"
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                <Activity className="w-3 h-3 animate-pulse" />
                Active Node • Open to AI/ML Opportunities
              </span>
            </div>
          </div>

          {/* Quick Architecture Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              Core Architecture
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  About & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Engineering Projects
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Research & Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* Supporting Navigation & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Professional Signals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/experience" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Academic Credentials
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Honors & Championships
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Direct Inquiries
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                aria-label="Email Geriki Vinesh"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Geriki Vinesh. Built with React, TypeScript & Tailwind CSS.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
