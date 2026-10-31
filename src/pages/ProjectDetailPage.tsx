import React from 'react';
import { useParams, Link } from '../router/Router';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Cpu, 
  Radio, 
  ShieldCheck, 
  Database, 
  Layers, 
  Activity, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Sparkles,
  Terminal,
  Clock,
  Zap,
  GitBranch
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { ProjectArchitectureDiagram } from '../components/ProjectArchitectureDiagram';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h1 className="text-2xl font-bold text-white font-display">Project Architecture Not Found</h1>
        <p className="text-slate-400 text-sm">The requested engineering project does not exist.</p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Projects Overview</span>
        </Link>
      </div>
    );
  }

  const isFlagship = project.id === 'autonomous-power-grid-ai';

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Back button & top navigation breadcrumbs */}
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <span>SPECIFICATION ID:</span>
          <span className="text-cyan-400 font-bold">{project.id.toUpperCase()}</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="space-y-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
            {project.statusBadge}
          </span>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            {project.duration}
          </span>
          {isFlagship && (
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300">
              Primary Academic & Systems Framework
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg font-mono text-cyan-400 leading-snug">
          "{project.tagline}"
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>


      {/* =========================================================================
          SECTION 1: PROJECT OVERVIEW
          ========================================================================= */}
      <section className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800 space-y-4">
        <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
          <Terminal className="w-5 h-5 text-cyan-400" />
          1. Project Overview
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          {project.overview}
        </p>
      </section>


      {/* =========================================================================
          SECTION 2 & 3: PROBLEM STATEMENT & MOTIVATION / OBJECTIVES
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Section 2: Problem Statement */}
        <section className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-400" />
            2. Problem Statement
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.problemStatement}
          </p>
        </section>

        {/* Section 3: Motivation and Objectives */}
        <section className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            3. Motivation and Objectives
          </h2>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
            {project.motivationObjectives.map((obj, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>


      {/* =========================================================================
          SECTION 4: PROPOSED SOLUTION
          ========================================================================= */}
      <section className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800 space-y-4">
        <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
          <Cpu className="w-5 h-5 text-cyan-400" />
          4. Proposed Solution
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {project.proposedSolution}
        </p>
      </section>


      {/* =========================================================================
          SECTION 5: SYSTEM ARCHITECTURE & INTERACTIVE DIAGRAM
          ========================================================================= */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            5. System Architecture & Component Visualizations
          </h2>
          <p className="text-xs text-slate-400">
            {project.systemArchitectureDescription}
          </p>
        </div>

        {/* Interactive Architecture Diagram Component */}
        <ProjectArchitectureDiagram projectId={project.id} />

        {/* Sequential Architecture Step Breakdown */}
        <div className="space-y-3 pt-4">
          <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
            // Sequential Architecture Pipeline Breakdown
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.architectureSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-[#090e1a]/80 border border-slate-800 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-300">
                    STAGE {step.step}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {step.component}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 6: WORKFLOW AND DATA FLOW
          ========================================================================= */}
      <section className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800 space-y-6">
        <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          6. Workflow and Data Flow Protocol
        </h2>
        <div className="space-y-3">
          {project.workflowDataFlow.map((flow, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-slate-800/80">
              <span className="w-6 h-6 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-[11px] font-mono text-cyan-400 flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {flow}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 7 & 8: HARDWARE COMPONENTS & SOFTWARE STACK
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Section 7: Hardware Components */}
        <section className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800 space-y-5">
          <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
            <Radio className="w-5 h-5 text-cyan-400" />
            7. Hardware Components & Circuitry
          </h2>
          <div className="space-y-3">
            {project.hardwareComponents.map((hw, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-black/40 border border-slate-800/80 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-white">{hw.name}</span>
                  <span className="text-[10px] font-mono text-cyan-400">{hw.role}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {hw.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Software Stack */}
        <section className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800 space-y-5">
          <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-400" />
            8. Software & Technology Stack
          </h2>
          <div className="space-y-3">
            {project.softwareStack.map((sw, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-black/40 border border-slate-800/80 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-white">{sw.layer}</span>
                  <span className="text-[10px] font-mono text-blue-400">{sw.technologies}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {sw.role}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>


      {/* =========================================================================
          SECTION 9: AI/ML METHODOLOGY
          ========================================================================= */}
      <section className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800 space-y-6">
        <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
          <Cpu className="w-5 h-5 text-cyan-400" />
          9. AI & Machine Learning Methodology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.aiMlMethodology.map((m, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-semibold">{m.technique}</span>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded">
                  {m.purpose}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 10 & 11: IMPLEMENTATION DETAILS & MY TECHNICAL CONTRIBUTIONS
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Section 10: Implementation Details */}
        <section className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400" />
            10. Implementation Details
          </h2>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
            {project.implementationDetails.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 11: Technical Contributions */}
        <section className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            11. My Technical Contributions
          </h2>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
            {project.contributions.map((c, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>


      {/* =========================================================================
          SECTION 12: CHALLENGES AND ENGINEERING DECISIONS
          ========================================================================= */}
      <section className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800 space-y-6">
        <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-cyan-400" />
          12. Challenges & Engineering Decisions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {project.engineeringDecisions.map((dec, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-slate-800/80 space-y-3">
              <div className="text-xs font-semibold text-amber-300">
                Challenge: {dec.challenge}
              </div>
              <div className="text-xs text-white font-mono bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                Decision: {dec.decision}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rationale: {dec.rationale}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 13: RESULTS AND CURRENT DEVELOPMENT STATUS
          (Explicitly distinguishing Implemented, Prototype, Proposed, Future Scope)
          ========================================================================= */}
      <section className="p-8 rounded-3xl bg-[#090e1a]/90 border border-cyan-500/30 space-y-6 shadow-xl">
        <div>
          <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            13. Development Status Breakdown
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Rigorous classification distinguishing implemented modules, lab prototypes, proposed models, and future scope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Implemented */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 space-y-2">
            <div className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Implemented
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
              {project.developmentStatus.implemented.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Prototype */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" />
              Prototype
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
              {project.developmentStatus.prototype.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Proposed */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-blue-500/30 space-y-2">
            <div className="text-xs font-mono text-blue-400 font-semibold flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5" />
              Proposed
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
              {project.developmentStatus.proposed.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Future Scope */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-500/30 space-y-2">
            <div className="text-xs font-mono text-purple-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Future Scope
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
              {project.developmentStatus.futureScope.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 14 & 15: FUTURE SCOPE & DOCUMENTATION / CODE REPOSITORY LINKS
          ========================================================================= */}
      <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base font-bold text-white font-display">
            Repository & Documentation Links
          </h3>
          <p className="text-xs text-slate-400">
            Source code, architectural documentation, and related research references.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs flex items-center gap-2 border border-slate-700 transition-all"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>GitHub Repository</span>
          </a>

          <Link
            to="/research"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-semibold hover:opacity-95 transition-all shadow-md shadow-cyan-500/20 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Related Research</span>
          </Link>
        </div>
      </div>

    </div>
  );
};
