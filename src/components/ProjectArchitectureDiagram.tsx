import React, { useState } from 'react';
import { 
  Zap, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Radio, 
  Database, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle,
  RefreshCw,
  GitBranch
} from 'lucide-react';

interface ProjectArchitectureDiagramProps {
  projectId: string;
}

export const ProjectArchitectureDiagram: React.FC<ProjectArchitectureDiagramProps> = ({ projectId }) => {
  const [activeTab, setActiveTab] = useState<'overall' | 'monitoring' | 'agent' | 'safety'>('overall');

  if (projectId === 'autonomous-power-grid-ai') {
    return (
      <div className="bg-[#080d1a] border border-cyan-500/20 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <h3 className="text-base font-display font-semibold text-white">
                Closed-Loop Power Grid Intelligence Architecture
              </h3>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Deterministic Protection Relays (Fail-Safe Base) ‖ Autonomous AI Supervisory Layer
            </p>
          </div>

          {/* Sub-diagram view tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl text-xs font-mono">
            <button
              onClick={() => setActiveTab('overall')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'overall' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              Overall Pipeline
            </button>
            <button
              onClick={() => setActiveTab('monitoring')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'monitoring' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              Diagnosis Flow
            </button>
            <button
              onClick={() => setActiveTab('agent')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'agent' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              Agent Decision Loop
            </button>
            <button
              onClick={() => setActiveTab('safety')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'safety' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              Safety Boundary Layer
            </button>
          </div>
        </div>

        {/* View 1: Overall Pipeline */}
        {activeTab === 'overall' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {[
                { step: "01", name: "Sensor Network", desc: "Multi-bus Current (CT) & Voltage (PT) telemetry nodes", icon: Radio, col: "border-blue-500/30" },
                { step: "02", name: "Data Acquisition", desc: "Sliding-window Kalman filtering & time synchronization", icon: Database, col: "border-cyan-500/30" },
                { step: "03", name: "Grid Monitoring", desc: "Continuous state vector estimation vs nominal limits", icon: Activity, col: "border-cyan-500/30" },
                { step: "04", name: "Anomaly & Faults", desc: "2σ statistical divergence & failure mode classifier", icon: AlertTriangle, col: "border-amber-500/30" },
                { step: "05", name: "Load Prediction", desc: "15-60 min regression of feeder demand & solar flux", icon: Cpu, col: "border-purple-500/30" },
              ].map((item, idx) => (
                <div key={idx} className={`p-4 rounded-xl bg-slate-900/60 border ${item.col} flex flex-col justify-between relative group hover:border-cyan-400 transition-all`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded">
                      STAGE {item.step}
                    </span>
                    <item.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h4 className="text-xs font-semibold text-white mb-1">{item.name}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Connecting transition flow indicator */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400/80 py-1">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                TELEMETRY VECTORS EVALUATED IN SUB-100MS CYCLES
              </span>
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {[
                { step: "06", name: "AI Agent Core", desc: "Goal-directed reinforcement & multi-step setpoint synthesis", icon: Cpu, col: "border-cyan-500/30" },
                { step: "07", name: "Safety & Constraints", desc: "Deterministic IEEE 1547 / IEC voltage & thermal bounds", icon: ShieldCheck, col: "border-emerald-500/40" },
                { step: "08", name: "Control Actions", desc: "VAR compensation, inverter dispatch, tap-changer step", icon: Zap, col: "border-blue-500/30" },
                { step: "09", name: "Switchgear Actuation", desc: "Approved commands sent to automated grid switchgear", icon: GitBranch, col: "border-indigo-500/30" },
                { step: "10", name: "Feedback Loop", desc: "Post-actuation verification closing continuous learning", icon: CheckCircle2, col: "border-cyan-500/40" },
              ].map((item, idx) => (
                <div key={idx} className={`p-4 rounded-xl bg-slate-900/60 border ${item.col} flex flex-col justify-between relative group hover:border-cyan-400 transition-all`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                      STAGE {item.step}
                    </span>
                    <item.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-xs font-semibold text-white mb-1">{item.name}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Crucial architectural note: coexistence with protection relays */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <span className="font-semibold text-cyan-300 uppercase tracking-wide font-mono text-[11px]">
                  Critical Protection Invariant:
                </span>
                <p className="text-slate-300 leading-relaxed">
                  The AI intelligence layer <strong>never replaces</strong> electromechanical or digital protection relays. 
                  Hardware breakers retain unconditional priority to trip circuits during catastrophic faults. The AI Agent operates 
                  strictly within the non-trip operating zone to optimize balance, compensate power factor, and avert premature breaker degradation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* View 2: Monitoring & Diagnosis Pipeline */}
        {activeTab === 'monitoring' && (
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h4 className="text-sm font-semibold text-cyan-300 font-mono">
                Multivariate Anomaly & Fault Classification Subsystem
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Raw CT and PT sensor inputs pass through high-speed analog-to-digital phasor estimation. Residual wave signatures are decomposed into symmetrical components (positive, negative, zero sequence) to immediately discern high-impedance faults from normal motor inrush currents.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-black/40 border border-slate-800">
                  <div className="text-[11px] font-mono text-cyan-400 mb-1">State Estimation</div>
                  <div className="text-xs text-slate-300">Tracks nominal bus voltage (±5% envelope) and nominal 50/60 Hz frequency tolerance.</div>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-slate-800">
                  <div className="text-[11px] font-mono text-amber-400 mb-1">Fault Isolation</div>
                  <div className="text-xs text-slate-300">Classifies Single Line-to-Ground (SLG), Line-to-Line (LL), and symmetrical 3-phase surges.</div>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-slate-800">
                  <div className="text-[11px] font-mono text-purple-400 mb-1">Equipment Health</div>
                  <div className="text-xs text-slate-300">Estimates transformer dielectric stress and thermal dissipation margins in real time.</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View 3: Agent Decision Loop */}
        {activeTab === 'agent' && (
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h4 className="text-sm font-semibold text-cyan-300 font-mono">
              Constrained Optimization & Multi-Step Reasoning Loop
            </h4>
            <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
              <div className="flex items-start gap-2">
                <span className="font-mono text-cyan-400 shrink-0">1. State Vector:</span>
                <span>Receives synchronized telemetry (active power P, reactive power Q, bus voltages V, phase angle θ, forecasted demand L(t+Δt)).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-cyan-400 shrink-0">2. Objective Function:</span>
                <span>Minimizes line loss while maximizing feeder voltage smoothness and battery lifetime.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-cyan-400 shrink-0">3. Action Candidates:</span>
                <span>Formulates candidate setpoint vectors (smart inverter VAR injection, battery charge/discharge, substation capacitor stepping).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono text-cyan-400 shrink-0">4. Governor Handshake:</span>
                <span>Transmits candidate vector to the deterministic Safety Governor for formal constraint checking prior to execution.</span>
              </div>
            </div>
          </div>
        )}

        {/* View 4: Safety Boundary Layer */}
        {activeTab === 'safety' && (
          <div className="p-5 rounded-xl bg-slate-900/80 border border-emerald-500/30 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h4 className="text-sm font-semibold text-emerald-300 font-mono">
                Deterministic Safety Boundary Governor
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Machine learning models can exhibit out-of-distribution drift. To deploy AI safely in critical infrastructure, the framework enforces hard mathematical boundaries that zero out any agent action violating grid codes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20">
                <div className="font-mono text-emerald-400 font-semibold mb-1">Voltage Bounds (ANSI C84.1)</div>
                <div className="text-slate-400">Strictly prohibits any dispatch action that drives bus voltage beyond 0.95 p.u. or 1.05 p.u. under any load condition.</div>
              </div>
              <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20">
                <div className="font-mono text-emerald-400 font-semibold mb-1">Thermal Branch Ratings (MVA)</div>
                <div className="text-slate-400">Calculates conductor ampacity; rejects redispatch signals exceeding continuous thermal ratings of underground cables.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (projectId === 'secure-digital-twin') {
    return (
      <div className="bg-[#080d1a] border border-cyan-500/20 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="pb-4 border-b border-slate-800">
          <h3 className="text-base font-display font-semibold text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            Cyber-Physical Digital Twin Communication & Audit Pipeline
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Physical Relays ↔ NodeMCU ESP8266 ↔ Firebase RTDB ↔ Web Digital Twin ↔ SHA-256 Chaining & ML Optimizer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400">
              <Cpu className="w-4 h-4" />
              1. Physical IoT Layer
            </div>
            <ul className="text-xs text-slate-400 space-y-1 list-disc pl-4">
              <li>NodeMCU ESP8266 (ESP-12E)</li>
              <li>4-Channel 5V Optocoupler Relays</li>
              <li>Galvanic isolation for 230V AC loads</li>
              <li>Hardware pushbuttons & interrupts</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-cyan-500/30 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
              <Radio className="w-4 h-4" />
              2. Realtime Cloud Sync
            </div>
            <ul className="text-xs text-slate-400 space-y-1 list-disc pl-4">
              <li>Firebase Realtime Database</li>
              <li>Persistent WebSocket streaming</li>
              <li>Sub-second telemetry updates</li>
              <li>Tokenized device security rules</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-blue-500/30 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-blue-400">
              <Activity className="w-4 h-4" />
              3. Digital Twin Dashboard
            </div>
            <ul className="text-xs text-slate-400 space-y-1 list-disc pl-4">
              <li>Interactive 2D virtual twin UI</li>
              <li>Real-time appliance state reflection</li>
              <li>Instant manual remote toggles</li>
              <li>Live electrical power graphs</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-emerald-500/30 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              4. Audit & ML Optimizer
            </div>
            <ul className="text-xs text-slate-400 space-y-1 list-disc pl-4">
              <li>Cryptographic SHA-256 audit chaining</li>
              <li>Append-only tamper-evident logs</li>
              <li>K-Means usage pattern clustering</li>
              <li>Predictive vampire power reduction</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'lora-autism-navigation') {
    return (
      <div className="bg-[#080d1a] border border-cyan-500/20 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="pb-4 border-b border-slate-800">
          <h3 className="text-base font-display font-semibold text-white flex items-center gap-2">
            <Radio className="w-4 h-4 text-cyan-400" />
            LoRa Assistive Telemetry & Geofence Intelligence Architecture
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Child Wearable (ESP32 + GPS + SOS) ↔ Sub-GHz LoRa RF ↔ Cloud DB ↔ Geodesic Math & Caregiver UI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-semibold mb-1 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              Child Wearable Beacon
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              ESP32 DevKit V1 parses continuous NMEA sentences from NEO-6M GPS. A large physical tactile switch wired to GPIO14 allows immediate panic triggers without touchscreens. An 85dB piezo buzzer on GPIO27 sounds remote search pulses.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-blue-500/30 space-y-2">
            <div className="text-xs font-mono text-blue-400 font-semibold mb-1 flex items-center gap-1.5">
              <Radio className="w-4 h-4" />
              Sub-GHz LoRa RF Link
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              SX1278 transceiver broadcasts compressed telemetry packets over kilometer-range point-to-point links. Operates without monthly cellular data SIM cards and remains fully resilient in rural wooded zones or cellular blackout areas.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-emerald-500/30 space-y-2">
            <div className="text-xs font-mono text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
              <Activity className="w-4 h-4" />
              Haversine Spatial Math Engine
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Calculates geodesic great-circle distances to parent-defined High Danger zones (quarries, highways) and Safe Havens. Evaluates approach velocity vectors and initiates immediate emergency sirens upon perimeter breach.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
