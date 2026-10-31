import React, { useState } from 'react';
import { Link } from '../router/Router';
import { 
  BookOpen, 
  Sparkles, 
  FileText, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Filter, 
  Layers, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Cpu,
  Radio,
  Brain,
  Award,
  Calendar,
  Share2
} from 'lucide-react';
import { 
  researchInterests, 
  ongoingResearch, 
  forthcomingPublications, 
  conferenceEvents,
  ResearchInterest,
  OngoingResearchProject,
  PublicationItem
} from '../data/researchData';

export const ResearchPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedAbstract, setExpandedAbstract] = useState<Record<string, boolean>>({
    'grid-ai-paper-prep': true
  });
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAbstract = (id: string) => {
    setExpandedAbstract(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredInterests = researchInterests.filter(interest => {
    if (selectedCategory !== 'all' && interest.category !== selectedCategory) return false;
    if (searchQuery) {
      return interest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             interest.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
             interest.focusAreas.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return true;
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
          <span>Academic Portal // Scientific Research & Publications</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
          Research Portfolio & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Academic Exploration</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Structured for academic collaborations, faculty researchers, and peer-reviewed conference submissions. Grounded in closed-loop AI agent supervision, cyber-physical digital twins, and assistive IoT algorithms.
        </p>
      </div>


      {/* =========================================================================
          SECTION 1: RESEARCH DOMAINS & INTERESTS
          ========================================================================= */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Scientific Inquiries</span>
            </div>
            <h2 className="text-2xl font-bold font-display text-white">
              Core Research Domains & Inquiries
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-2xl text-xs font-mono">
            {['all', 'Core AI & ML', 'GenAI & Agents', 'Cyber-Physical & IoT', 'Assistive Systems'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Domains' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInterests.map((interest) => (
            <div
              key={interest.id}
              className="p-6 rounded-2xl bg-[#090e1a]/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400">
                    {interest.category}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                <h3 className="text-base font-semibold text-white">
                  {interest.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {interest.summary}
                </p>

                {/* Focus Areas */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">
                    Focus Vectors:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {interest.focusAreas.map((f, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-slate-800/80 text-slate-300"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Challenge */}
              <div className="pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
                <span className="text-amber-400/90 font-mono text-[10px] uppercase block">Investigation Bottleneck:</span>
                <span className="text-slate-300">{interest.keyChallenges[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: ONGOING RESEARCH INITIATIVES
          ========================================================================= */}
      <section className="space-y-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
            <Clock className="w-4 h-4" />
            <span>Active Investigations</span>
          </div>
          <h2 className="text-2xl font-bold font-display text-white">
            Ongoing Research Initiatives
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Detailed problem formulations, experimental methodologies, and target publication venues currently under development.
          </p>
        </div>

        <div className="space-y-6">
          {ongoingResearch.map((project) => (
            <div
              key={project.id}
              className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                <div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-500/30 text-blue-300 uppercase">
                    {project.domain}
                  </span>
                  <h3 className="text-xl font-bold text-white font-display mt-2">
                    {project.title}
                  </h3>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Target Publication Venue</span>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">{project.targetVenue}</span>
                </div>
              </div>

              {/* Problem & Objectives Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="p-4 rounded-xl bg-black/40 border border-slate-800/80 space-y-2">
                  <span className="font-mono text-amber-400 uppercase text-[11px] font-semibold block">
                    Problem Statement
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-slate-800/80 space-y-2">
                  <span className="font-mono text-cyan-400 uppercase text-[11px] font-semibold block">
                    Research Objectives
                  </span>
                  <ul className="space-y-1.5 text-slate-300 list-disc pl-4">
                    {project.objectives.map((obj, idx) => (
                      <li key={idx}>{obj}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Methodology & Current Progress */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <span className="font-mono text-slate-400 text-[10px] uppercase">Methodology</span>
                  <p className="text-slate-200">{project.methodology.join(' • ')}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <span className="font-mono text-slate-400 text-[10px] uppercase">Tooling & Models</span>
                  <p className="text-slate-200 font-mono text-[11px]">{project.technologies.join(', ')}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <span className="font-mono text-slate-400 text-[10px] uppercase">Current Progress</span>
                  <p className="text-cyan-300">{project.currentProgress}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 3: SCIENTIFIC PUBLICATIONS & MANUSCRIPTS REGISTRY
          ========================================================================= */}
      <section className="space-y-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
            <FileText className="w-4 h-4" />
            <span>Academic Registry</span>
          </div>
          <h2 className="text-2xl font-bold font-display text-white">
            Publications & Forthcoming Preprints
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Manuscripts currently under experimental benchmarking and drafting for peer-reviewed IEEE and ACM conference submissions.
          </p>
        </div>

        {/* Polished Coming Soon / Preprints Under Preparation Notice */}
        <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs">
            <span className="font-semibold text-cyan-300 font-mono uppercase text-[11px]">
              Academic Integrity Notice:
            </span>
            <p className="text-slate-300 leading-relaxed">
              In accordance with academic standards, manuscript preprints are indexed here during their empirical validation and drafting phase. Official DOI numbers and conference proceedings links will be populated upon peer-review completion and formal presentation.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {forthcomingPublications.map((pub) => {
            const isExpanded = expandedAbstract[pub.id] || false;

            return (
              <div
                key={pub.id}
                className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300">
                      STATUS: {pub.status}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {pub.year}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-cyan-400">
                    Domain: {pub.domain}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-display leading-snug">
                  {pub.title}
                </h3>

                <div className="text-xs text-slate-400 font-mono">
                  <span>Authors: </span>
                  <span className="text-slate-200">{pub.authors.join(', ')}</span>
                  <span className="mx-2">•</span>
                  <span className="text-slate-300 italic">{pub.venue}</span>
                </div>

                {/* Abstract Section */}
                <div className="p-4 rounded-xl bg-black/40 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase text-cyan-400">
                      Abstract Preview
                    </span>
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <span>Collapse</span>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <span>Expand</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className={`text-xs text-slate-300 leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}>
                    {pub.abstract}
                  </p>
                </div>

                {/* Metadata & Actions */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      DOI: Pending Final Review
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      PDF: Preprint Under Drafting
                    </span>
                  </div>

                  <a
                    href="mailto:vinuash012@gmail.com?subject=Academic%20Research%20Inquiry%20-%20Manuscript"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Request Early Draft / Collaborate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* =========================================================================
          SECTION 4: ACADEMIC & CONFERENCE PARTICIPATION
          ========================================================================= */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
            <Award className="w-4 h-4" />
            <span>Academic Engagement</span>
          </div>
          <h2 className="text-2xl font-bold font-display text-white">
            Conference & Hackathon Participation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conferenceEvents.map((evt, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#090e1a]/80 border border-slate-800 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-300">
                  {evt.scope}
                </span>
                <Calendar className="w-4 h-4 text-slate-500" />
              </div>
              <h3 className="text-base font-bold text-white font-display">
                {evt.title}
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                Role: {evt.role}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                {evt.focus}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* Bottom Academic Contact Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0a1222] via-[#0b162b] to-[#070d1a] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base font-bold text-white font-display">
            Interested in Academic Collaboration?
          </h3>
          <p className="text-xs text-slate-400">
            Open to joint publications, laboratory research, and conference workshop participation.
          </p>
        </div>
        <Link
          to="/contact"
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-semibold hover:opacity-95 transition-all shadow-md shadow-cyan-500/20 shrink-0"
        >
          Discuss Research
        </Link>
      </div>

    </div>
  );
};
