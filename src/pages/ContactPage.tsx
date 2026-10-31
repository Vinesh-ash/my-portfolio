import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Send, 
  ExternalLink, 
  Terminal, 
  Clock,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { profileData } from '../data/profileData';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Working mailto fallback as required by prompt
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>Communication Channels // Initiate Handshake</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
          Let's Connect & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Collaborate</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Open to AI/ML engineering internships, research fellowships, collaborative open-source systems, and technical dialogues.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-8 rounded-3xl bg-[#090e1a]/90 border border-slate-800 space-y-6">
            <h2 className="text-lg font-bold text-white font-display">
              Direct Contact Details
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              
              {/* Email */}
              <div className="p-4 rounded-2xl bg-black/40 border border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">Primary Email</span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-white hover:text-cyan-300 font-mono transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-cyan-300 hover:border-cyan-400 transition-all"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-black/40 border border-slate-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">Direct Line</span>
                  <a
                    href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                    className="text-white hover:text-cyan-300 font-mono transition-colors"
                  >
                    {profileData.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-black/40 border border-slate-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">Location Base</span>
                  <span className="text-white font-mono">
                    {profileData.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Social Profiles */}
            <div className="pt-2 border-t border-slate-800/80 space-y-3">
              <span className="text-[10px] font-mono uppercase text-slate-500 block">
                Professional Repositories & Networks
              </span>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-mono transition-all"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-400 text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-mono transition-all"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Status note */}
            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Current Status: Responding within 24 hours to technical and research inquiries.</span>
            </div>

          </div>

        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-[#090e1a]/90 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-6"
          >
            <div>
              <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Dispatch Direct Message
              </h2>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Submissions automatically format a pre-filled client dispatch directly to {profileData.email}.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 uppercase block">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Jane Smith / Recruiter"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 uppercase block">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. janesmith@university.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400 uppercase block">
                Subject Line
              </label>
              <input
                type="text"
                placeholder="e.g. AI Engineering Internship Opportunity / Research Collaboration"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400 uppercase block">
                Message Content *
              </label>
              <textarea
                rows={5}
                required
                placeholder="Detail your inquiry, project scope, or opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-all resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-semibold hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Launch Mail Client Dispatch</span>
              </button>
              <span className="text-[10px] font-mono text-slate-500 text-center block mt-2">
                // Dispatches directly via authenticated system mail handler. No third-party data tracking.
              </span>
            </div>
          </form>
        </div>

      </div>

    </div>
  );
};
