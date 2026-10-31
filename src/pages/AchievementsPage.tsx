import React from 'react';
import { Link } from '../router/Router';
import { 
  Trophy, 
  Award, 
  Flame, 
  Briefcase, 
  Terminal, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { achievementsData, AchievementItem } from '../data/achievementsData';

export const AchievementsPage: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy': return Trophy;
      case 'Award': return Award;
      case 'Flame': return Flame;
      default: return Briefcase;
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Trophy className="w-3.5 h-3.5 text-cyan-400" />
          <span>Honors & Milestones // Verified Distinctions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
          Honors, Championships & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Milestones</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Demonstrated excellence extending across national competitive athletics, nationwide engineering hackathons, and technical industry selections.
        </p>
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievementsData.map((item) => {
          const Icon = getIcon(item.iconName);

          return (
            <div
              key={item.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#090e1a]/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:shadow-[0_10px_35px_-10px_rgba(0,240,255,0.15)]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-3 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-400 transition-all">
                    <Icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h2>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Character & Engineering Impact */}
              <div className="p-4 rounded-2xl bg-black/40 border border-slate-800/80 space-y-1 text-xs">
                <span className="text-[10px] font-mono uppercase text-cyan-400 font-semibold block">
                  Character & Disciplined Mindset:
                </span>
                <p className="text-slate-400 leading-relaxed">
                  {item.impact}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Discipline Spotlight Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0a1222] via-[#0b162b] to-[#070d1a] border border-cyan-500/30 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          <span>The Intersection of Martial Discipline & Engineering</span>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
          Earning a Karate Black Belt and achieving victory as a National Champion established fundamental habits of daily preparation, intense mental focus, emotional control under pressure, and systematic technique breakdown. These same principles directly govern my engineering workflow: building reliable systems with zero tolerance for sloppy fundamentals, debugging tenaciously, and remaining composed when solving complex technical roadblocks.
        </p>
      </div>

    </div>
  );
};
