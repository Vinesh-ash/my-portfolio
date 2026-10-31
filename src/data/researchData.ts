export interface ResearchInterest {
  id: string;
  title: string;
  category: "Core AI & ML" | "GenAI & Agents" | "Cyber-Physical & IoT" | "Assistive Systems";
  summary: string;
  focusAreas: string[];
  keyChallenges: string[];
}

export interface OngoingResearchProject {
  id: string;
  title: string;
  domain: string;
  problemStatement: string;
  objectives: string[];
  methodology: string[];
  technologies: string[];
  currentProgress: string;
  expectedContribution: string;
  targetVenue: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  domain: string;
  abstract: string;
  status: "Published" | "Accepted" | "Presented" | "Under Review" | "In Progress" | "Forthcoming";
  doi?: string;
  paperUrl?: string;
  pdfUrl?: string;
  conferenceLink?: string;
}

export const researchInterests: ResearchInterest[] = [
  {
    id: "autonomous-agents",
    title: "AI Agents & Autonomous Intelligent Systems",
    category: "GenAI & Agents",
    summary: "Investigating closed-loop agentic architectures, goal-directed decomposition, tool-use execution, and safety-critical constraint verification in autonomous environments.",
    focusAreas: ["Multi-Agent Coordination", "Constrained Action Optimization", "Reflective Reasoning Loops", "Safety Governors"],
    keyChallenges: ["Deterministic safety guarantees in non-deterministic model outputs", "Sub-second inference latencies for closed-loop grid actuation"]
  },
  {
    id: "llm-rag",
    title: "Large Language Models & Retrieval-Augmented Generation",
    category: "GenAI & Agents",
    summary: "Grounding neural language models in domain-specific technical documentation, structural knowledge graphs, and low-latency vector indexes.",
    focusAreas: ["Dense Vector Retrieval", "Hierarchical Chunking", "Hallucination Mitigation", "Context Compression"],
    keyChallenges: ["High-precision factual grounding in specialized engineering standards (IEEE, IEC)", "Maintaining context coherence over multi-hop technical queries"]
  },
  {
    id: "ai-energy",
    title: "AI-Driven Energy Optimization & Smart Grids",
    category: "Cyber-Physical & IoT",
    summary: "Applying predictive machine learning and time-series forecasting to dynamic power grid distribution, renewable balancing, and load-shedding intelligence.",
    focusAreas: ["Short-Term Load Forecasting (STLF)", "Multivariate Anomaly Detection", "Equipment Fault Diagnostics", "Microgrid Voltage Stability"],
    keyChallenges: ["Handling non-stationary distribution shifts from intermittent solar/wind generation", "Zero-downtime execution alongside legacy SCADA systems"]
  },
  {
    id: "iot-digital-twins",
    title: "IoT & Secure Cyber-Physical Digital Twins",
    category: "Cyber-Physical & IoT",
    summary: "Bridging embedded microcontroller telemetry (ESP32, NodeMCU ESP8266) with cloud-mirrored virtual twins and cryptographic audit chains.",
    focusAreas: ["Bi-directional State Synchronization", "Hardware Optoisolation", "Cryptographic State Verification", "Vampire Power Mitigation"],
    keyChallenges: ["Latency jitter over intermittent consumer Wi-Fi networks", "Lightweight tamper-evident logging on edge microcontrollers"]
  },
  {
    id: "human-centered-ai",
    title: "Human-Centered AI & Assistive Technologies",
    category: "Assistive Systems",
    summary: "Designing compassionate, low-friction assistive systems for neurodivergent individuals and vulnerable populations using long-range IoT and geofencing.",
    focusAreas: ["LoRa Long-Range Telemetry", "Sensory-Friendly Tactile Interfaces", "Geodesic Haversine Intelligence", "Caregiver Vector Guidance"],
    keyChallenges: ["Zero-dependency tracking in cellular dead zones", "Eliminating false positive alerts through adaptive movement filtering"]
  },
  {
    id: "ml-predictive-analytics",
    title: "Statistical Machine Learning & Predictive Analytics",
    category: "Core AI & ML",
    summary: "Developing principled regression, classification, and clustering pipelines that extract actionable signals from complex multi-sensor time-series data.",
    focusAreas: ["Feature Engineering", "Ensemble Tree Methods", "Unsupervised Clustering", "Sliding Window Kalman Filtering"],
    keyChallenges: ["High sensor noise ratios and transient electromagnetic interference", "Model interpretability in industrial diagnostic workflows"]
  }
];

export const ongoingResearch: OngoingResearchProject[] = [
  {
    id: "grid-intelligence-framework",
    title: "Closed-Loop AI Agent Supervision for Resilient Power Distribution Grids",
    domain: "Autonomous Intelligent Systems & Power Systems",
    problemStatement: "The accelerating integration of renewable distributed generators creates sudden voltage sags and reverse power flows that traditional SCADA systems and delayed human operators cannot preemptively stabilize.",
    objectives: [
      "Formulate a non-disruptive AI Agent intelligence layer that monitors bus state vectors in real-time.",
      "Incorporate IEEE standard safety boundary constraints that mathematically veto unsafe agent setpoint adjustments.",
      "Validate short-term feeder load prediction models to preemptively redispatch reactive power before protection breakers trip."
    ],
    methodology: [
      "State-space modeling of multi-bus distribution feeders.",
      "Multivariate time-series forecasting using ensemble models and sliding-window Kalman noise filters.",
      "Dual-layer control architecture: deterministic electromechanical relays at the base, supervisory AI agent at the apex."
    ],
    technologies: ["Python", "Scikit-learn", "Power System Simulation Datasets", "Closed-Loop Feedback Control Algorithms"],
    currentProgress: "Mathematical architecture formulated; synthetic bus fault profiles designed; anomaly detection baseline established.",
    expectedContribution: "A published architectural framework and benchmark showing how AI Agents can operate safely within mission-critical electrical protection envelopes.",
    targetVenue: "IEEE / Springer International Conference on Smart Grid & Artificial Intelligence"
  },
  {
    id: "secure-iot-twins",
    title: "Cryptographically Verified Digital Twins for Low-Cost Residential Automation",
    domain: "IoT & Cyber-Physical Security",
    problemStatement: "Consumer smart home devices lack transparent auditability, exposing homeowners to unauthorized remote access without immutable forensic logs.",
    objectives: [
      "Build a low-cost hardware-to-cloud digital twin testbed using NodeMCU ESP8266 and Firebase Realtime Database.",
      "Implement append-only SHA-256 cryptographic chaining for all device actuation events.",
      "Analyze temporal power usage patterns using clustering algorithms to identify vampire load leakage."
    ],
    methodology: [
      "Circuit design with optocoupler relay isolation.",
      "Lightweight off-chain event hashing with periodic root anchoring.",
      "Unsupervised clustering on appliance duty-cycle telemetry."
    ],
    technologies: ["NodeMCU ESP8266", "C++", "Firebase Realtime DB", "Python SHA-256 Chaining", "Scikit-learn"],
    currentProgress: "Physical 4-channel hardware prototype assembled and verified; cloud synchronization operational; cryptographic ledger schema finalized.",
    expectedContribution: "An empirical paper validating the latency, security, and energy-reduction trade-offs of lightweight digital twins on low-power IoT microcontrollers.",
    targetVenue: "International Conference on Internet of Things and Embedded Systems"
  },
  {
    id: "lora-assistive-tracking",
    title: "Long-Range Telemetry and Geodesic Spatial Geofencing for Child Elopement Mitigation",
    domain: "Assistive Technology & Embedded IoT",
    problemStatement: "Wandering among autistic children poses severe drowning and traffic risks, while existing cellular trackers fail in remote parks and impose burdensome monthly fees.",
    objectives: [
      "Evaluate sub-GHz LoRa RF propagation for continuous GPS coordinate streaming in diverse terrain.",
      "Develop geodesic Haversine algorithms to trigger dynamic multi-tier danger perimeter warnings.",
      "Design a sensory-friendly hardware wearable with an instant physical SOS interrupt on GPIO14."
    ],
    methodology: [
      "Point-to-point LoRa RF link profiling with SX1278 transceivers.",
      "Spatial geofencing math with adaptive movement filters to prevent false positive notifications.",
      "Real-world telemetry syncing with cloud emergency banners and audible sirens."
    ],
    technologies: ["ESP32 DevKit V1", "SX1278 LoRa", "NEO-6M GPS", "Haversine Spatial Math", "Firebase"],
    currentProgress: "Firmware and cloud contract fully operational; caregiver map interface complete; simulated geofence tests validated.",
    expectedContribution: "A practical assistive technology framework demonstrating how long-range RF and edge spatial math protect vulnerable children without expensive infrastructure.",
    targetVenue: "Symposium on Human-Computer Interaction & Assistive Technologies"
  }
];

export const conferenceEvents = [
  {
    title: "Smart India Hackathon (SIH) 2026",
    role: "Selected Participant & Team Developer",
    scope: "National Level Innovation Competition",
    focus: "Tackling real-world challenges through intelligent software and embedded technology systems."
  },
  {
    title: "Academic Research & Technical Workshops",
    role: "Active Researcher & Student Member",
    scope: "Vel Tech R&D Institute of Science and Technology",
    focus: "Advancing knowledge in Deep Learning, Large Language Model architectures, and IoT hardware prototyping."
  }
];

// Placeholder registry for forthcoming publications
export const forthcomingPublications: PublicationItem[] = [
  {
    id: "grid-ai-paper-prep",
    title: "AI-Agent-Based Closed-Loop Framework for Autonomous Power Grid Monitoring and Fault Optimization",
    authors: ["Geriki Vinesh", "Academic Advisors (In Preparation)"],
    venue: "Manuscript Under Preparation for IEEE Conference Submission",
    year: "2026",
    domain: "Power Grid AI & Autonomous Systems",
    abstract: "Presents an AI-agent closed-loop supervision framework that integrates multi-source sensor monitoring, real-time multivariate anomaly detection, fault diagnosis, and load forecasting. The paper details a strict mathematical safety governor that guarantees agent-initiated redispatch actions strictly observe grid voltage and thermal constraints within existing electrical protection relays.",
    status: "In Progress"
  },
  {
    id: "secure-twin-paper-prep",
    title: "A Secure Cyber-Physical Digital Twin Architecture for Domestic Automation Using IoT and Cryptographic Audit Verification",
    authors: ["Geriki Vinesh", "Research Collaborators (In Preparation)"],
    venue: "Manuscript Under Preparation for Cyber-Physical Systems Symposium",
    year: "2026",
    domain: "IoT & Cyber-Physical Security",
    abstract: "Explores the design and empirical evaluation of a low-cost smart home digital twin utilizing NodeMCU ESP8266, optocoupler relays, and Firebase Realtime Database. Investigates the integration of tamper-evident SHA-256 audit chaining and machine learning clustering for energy consumption optimization.",
    status: "In Progress"
  }
];
