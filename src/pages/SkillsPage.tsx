import React, { useState } from 'react';
import { Link } from '../router/Router';
import { 
  BrainCircuit, 
  Sparkles, 
  Code2, 
  Cpu, 
  Database, 
  Compass, 
  Terminal, 
  CheckCircle2, 
  Search,
  Layers,
  ArrowRight
} from 'lucide-react';
import { skillCategories, SkillCategory } from '../data/skillsData';

export const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai-ml': return BrainCircuit;
      case 'llm-genai': return Sparkles;
      case 'programming': return Code2;
      case 'iot-hardware': return Cpu;
      case 'dev-databases': return Database;
      default: return Compass;
    }
  };

  const filteredCategories = skillCategories.map(cat => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery && matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean) as SkillCategory[];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>Technical Capabilities // Classified Stack</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
          Technical Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Core Competencies</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Structured by technical domain, reflecting hands-on implementation across artificial intelligence, language models, microcontroller integration, and foundational software engineering.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#090e1a]/80 border border-slate-800 backdrop-blur-md">
        
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
            }`}
          >
            All Categories ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search competencies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
          />
        </div>
      </div>

      {/* Categories & Skill Cards Grid */}
      <div className="space-y-12">
        {filteredCategories.map((category) => {
          const CategoryIcon = getCategoryIcon(category.id);

          return (
            <div key={category.id} className="space-y-5">
              
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800/80">
                <div className="w-8 h-8 rounded-lg bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center">
                  <CategoryIcon className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white font-display">
                    {category.category}
                  </h2>
                  <p className="text-xs text-slate-400 font-mono">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 rounded-2xl bg-[#0a0f1d]/90 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-200 group flex flex-col justify-between hover:shadow-[0_4px_20px_rgba(0,240,255,0.08)]"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-cyan-400/80 shrink-0 mt-0.5" />
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-800/50 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>VERIFIED IN CURRICULUM & PROJECTS</span>
                      <span className="text-cyan-400">ACTIVE</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          );
        })}

        {filteredCategories.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400 text-xs font-mono">
            No technical skills found matching "{searchQuery}".
          </div>
        )}
      </div>

      {/* Bottom Bridge CTA */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0a1222] via-[#0b162b] to-[#070d1a] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base font-bold text-white font-display">
            Witness These Skills in Real Systems
          </h3>
          <p className="text-xs text-slate-400">
            See how these AI models, IoT microcontrollers, and algorithms integrate into production-level projects.
          </p>
        </div>
        <Link
          to="/projects"
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-xs font-mono hover:opacity-95 transition-all shadow-md shadow-cyan-500/20 flex items-center gap-2 shrink-0"
        >
          <span>Explore Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
