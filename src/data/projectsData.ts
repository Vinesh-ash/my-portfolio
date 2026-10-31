export interface ProjectArchitectureStep {
  step: string;
  title: string;
  description: string;
  component: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  statusBadge: "Implemented" | "Prototype" | "Proposed Architectural Framework" | "Active Prototype";
  featured: boolean;
  priorityOrder: number;
  tags: string[];
  heroHighlight: string;
  overview: string;
  problemStatement: string;
  motivationObjectives: string[];
  proposedSolution: string;
  systemArchitectureDescription: string;
  architectureSteps: ProjectArchitectureStep[];
  workflowDataFlow: string[];
  hardwareComponents: { name: string; role: string; details: string }[];
  softwareStack: { layer: string; technologies: string; role: string }[];
  aiMlMethodology: {
    technique: string;
    purpose: string;
    description: string;
  }[];
  implementationDetails: string[];
  contributions: string[];
  engineeringDecisions: {
    challenge: string;
    decision: string;
    rationale: string;
  }[];
  developmentStatus: {
    implemented: string[];
    prototype: string[];
    proposed: string[];
    futureScope: string[];
  };
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
}

export const projectsData: ProjectDetail[] = [
  {
    id: "autonomous-power-grid-ai",
    title: "AI-Agent-Based Closed-Loop Framework for Autonomous Power Grid Monitoring and Optimization",
    tagline: "A self-monitoring, self-diagnosing, and self-optimizing grid intelligence layer operating safely alongside existing electrical protection infrastructure.",
    duration: "2026",
    statusBadge: "Proposed Architectural Framework",
    featured: true,
    priorityOrder: 1,
    tags: ["AI Agents", "Closed-Loop Control", "Predictive Analytics", "Power Grid", "Anomaly Detection", "Load Forecasting"],
    heroHighlight: "Flagship Research Framework: Autonomous closed-loop intelligence layer with strict safety-boundary constraints for modern power grids.",
    overview: "Designed an AI-driven supervisory intelligence framework for real-time power grid monitoring, early anomaly detection, equipment fault diagnosis, and short-term load forecasting. The architecture introduces an autonomous AI Agent that evaluates grid state vectors, generates optimal load-balancing and redispatch suggestions, and enforces physical safety constraints before executing closed-loop control actions.",
    problemStatement: "Modern power distribution grids face acute operational volatility due to the intermittent integration of renewable energy sources, distributed generation, and rapid load swings. Traditional supervisory control systems rely heavily on manual human dispatcher intervention during anomalies, while hardware protection relays act only after destructive threshold trips occur. There is a critical architectural gap for an autonomous, continuous predictive intelligence layer that mitigates disturbances before protection trips trigger without compromising grid stability.",
    motivationObjectives: [
      "Bridge the latency gap between slow human supervisory decisions and instantaneous hardware protection trips.",
      "Achieve real-time multivariate anomaly detection across current, voltage, frequency, and harmonic distortion vectors.",
      "Accurately diagnose subtle nascent equipment faults before catastrophic transformer or feeder failures occur.",
      "Forecast dynamic intraday feeder loads using predictive machine learning models to enable preemptive grid optimization.",
      "Guarantee absolute grid safety by nesting AI Agent decisions inside deterministic constraint verification filters."
    ],
    proposedSolution: "A dual-layer hybrid architecture: an underlying deterministic physical protection infrastructure (distance relays, overcurrent breakers, SCADA telemetry) paired with an upper AI Agent closed-loop intelligence layer. The AI agent observes continuous multi-source sensor streams, predicts localized congestions or faults, evaluates candidate control actions (e.g., tap-changer stepping, reactive power VAR compensation, smart battery dispatch), validates them against hard physical constraints (voltage bands ±5%, thermal limits), and issues control actions in a tight feedback loop.",
    systemArchitectureDescription: "The framework operates in a continuous multi-stage pipeline: Sensor Network → Data Acquisition → Grid Monitoring → Anomaly Detection → Fault Diagnosis → Load Prediction → AI Agent Decision Core → Safety & Constraint Layer → Actuator Control Actions → Real-time Feedback Loop.",
    architectureSteps: [
      { step: "01", title: "Sensor Network & Telemetry", description: "Multi-bus current (CT), voltage (PT), and frequency transducer nodes streaming high-frequency power parameters.", component: "Hardware & Transducers" },
      { step: "02", title: "Data Acquisition & Preprocessing", description: "Time-synchronized sample aggregation, Kalman noise filtering, and sliding window state-vector generation.", component: "Telemetry Gateway" },
      { step: "03", title: "Continuous Grid Monitoring", description: "Real-time state estimation comparing live operational bus parameters against nominal steady-state profiles.", component: "State Estimator" },
      { step: "04", title: "Multivariate Anomaly Detection", description: "Statistical divergence and unsupervised residual analysis identifying deviant wave signatures and voltage sags.", component: "ML Anomaly Engine" },
      { step: "05", title: "Equipment Fault Diagnosis", description: "Pattern classification isolating fault types: line-to-ground, symmetrical surges, and insulation degradation.", component: "Diagnostic Classifier" },
      { step: "06", title: "Load Forecasting Core", description: "Predictive time-series regression calculating expected feeder demand curves across 15-minute horizons.", component: "Predictive Analytics" },
      { step: "07", title: "AI Agent Reasoning Core", description: "Goal-directed reinforcement and rule-guided agent formulating optimal corrective dispatch vectors.", component: "Autonomous AI Agent" },
      { step: "08", title: "Safety & Constraint Validation", description: "Hard-coded mathematical boundary checks enforcing IEEE 1547 / IEC voltage, frequency, and thermal safety margins.", component: "Safety Governor" },
      { step: "09", title: "Control Action Dispatch", description: "Executing approved setpoint adjustments: capacitor bank switching, inverter active/reactive modulation, transformer tap adjustments.", component: "Grid Actuation Layer" },
      { step: "10", title: "Feedback Loop Verification", description: "Closed-loop verification measuring post-actuation grid stability and updating agent memory states.", component: "Closed-Loop Feedback" }
    ],
    workflowDataFlow: [
      "Physical bus voltages and currents are sampled at sub-second intervals and normalized into multivariate feature vectors.",
      "The Anomaly Engine flags deviations exceeding 2σ statistical thresholds within 50ms of transient onset.",
      "Simultaneously, the Load Forecaster projects 15-minute ahead feeder loading to detect approaching capacity bottlenecks.",
      "The AI Agent evaluates the combined health vector and generates non-disruptive corrective setpoints.",
      "Crucially: The deterministic Safety Layer vetoes any agent action violating IEEE 519 harmonic or IEC 60255 voltage bounds.",
      "Approved signals dispatch to automated switchgear; telemetry monitors response to close the learning loop."
    ],
    hardwareComponents: [
      { name: "Current & Potential Transformers (CT/PT)", role: "Signal Transduction", details: "Step down high-voltage distribution lines to low-voltage ADC inputs for real-time phase monitoring." },
      { name: "Digital Signal Processing Acquisition Unit", role: "Synchronous Sampling", details: "Converts analog bus telemetry to digital phasor estimation vectors with GPS microsecond timestamps." },
      { name: "Intelligent Electronic Devices (IEDs)", role: "Actuation Interface", details: "Microprocessor-based controllers that execute digital setpoint adjustments on switchgear and transformers." },
      { name: "Isolated Hardware Protection Relays", role: "Primary Safety Invariant", details: "Independent electromechanical/digital trip relays that retain absolute autonomous override authority over AI commands." }
    ],
    softwareStack: [
      { layer: "AI Reasoning Core", technologies: "Python, Scikit-learn, Reinforcement Agent Logic", role: "Heuristic evaluation, multi-objective optimization, and state-action mapping." },
      { layer: "Predictive Analytics", technologies: "Time-Series Regression, Ensemble Trees", role: "Intraday load forecasting and thermal rise estimations." },
      { layer: "Safety Verification Engine", technologies: "Deterministic Constraint Checker", role: "Boundary assertion testing against standard grid tolerance envelopes." },
      { layer: "Data Layer & Monitoring", technologies: "Real-time Telemetry Pipeline, Time-Series Store", role: "High-throughput ingestion of time-stamped bus telemetry vectors." }
    ],
    aiMlMethodology: [
      {
        technique: "Multivariate Anomaly Detection",
        purpose: "Rapid transient detection",
        description: "Utilizes statistical distance scoring and residual error tracking on voltage/current vectors to flag anomalous transients prior to relay trip thresholds."
      },
      {
        technique: "Supervised Fault Classification",
        purpose: "Isolating equipment failure modes",
        description: "Employs trained multi-class decision trees to distinguish transient load spikes from high-impedance faults, phase imbalances, and transformer saturation."
      },
      {
        technique: "Short-Term Load Forecasting (STLF)",
        purpose: "Proactive congestion management",
        description: "Analyzes cyclical historical consumption, weather indicators, and solar irradiance patterns to forecast 15-to-60 minute feeder demand profiles."
      },
      {
        technique: "Constrained AI Agent Optimization",
        purpose: "Autonomous closed-loop setpoint generation",
        description: "Formulates grid rebalancing as a constrained optimization problem, balancing loss minimization with strict thermal and voltage boundary compliance."
      }
    ],
    implementationDetails: [
      "Designed mathematically rigorous state-space definitions capturing voltage deviations, branch power flows, and transformer headrooms.",
      "Structured a zero-trust safety boundary layer: the AI Agent never possesses direct raw breaker-trip authority, maintaining absolute hardware safety integrity.",
      "Formulated synthetic grid disturbance profiles (voltage sags, sudden solar drop-off, single-phase faults) to validate agent response times in simulation.",
      "Modeled closed-loop feedback latencies ensuring agent dispatch operations settle within sub-second stability windows."
    ],
    contributions: [
      "Conceptualized the complete end-to-end multi-tier system architecture and mathematical workflow from sensor ingestion to closed-loop actuation.",
      "Engineered the hierarchical safety-aware decision protocol that allows autonomous AI dispatch while keeping existing hardware protection relays paramount.",
      "Designed the multi-modal anomaly detection pipeline separating legitimate high-inrush motor starts from genuine high-impedance ground faults.",
      "Drafted comprehensive architectural and workflow diagrams detailing data stream transitions and feedback iterations."
    ],
    engineeringDecisions: [
      {
        challenge: "How to safely introduce AI automation into mission-critical grid infrastructure without risk of blackouts?",
        decision: "Adopt a supervisory intelligence layer running strictly in parallel with isolated hardware protection relays.",
        rationale: "Hardware breakers act as an immutable fail-safe. The AI agent acts only within the safe operational envelope to optimize efficiency and prevent reaching breaker trip limits."
      },
      {
        challenge: "High sensor noise and harmonic distortions skewing machine learning predictions.",
        decision: "Incorporate sliding window Kalman filtering and moving average state estimation before anomaly scoring.",
        rationale: "Prevents false-positive dispatch actions caused by brief non-fault electromagnetic spikes or measurement noise."
      },
      {
        challenge: "High latency in traditional cloud-based AI reasoning for time-sensitive grid stabilization.",
        decision: "Formulate the decision core as lightweight edge-executable inference models rather than bloated cloud endpoints.",
        rationale: "Sub-100ms decision latency is required for dynamic reactive power VAR compensation and feeder balancing."
      }
    ],
    developmentStatus: {
      implemented: [
        "Theoretical framework and mathematical system architecture specifications.",
        "End-to-end data flow models from sensor ingestion to actuator feedback.",
        "Safety-governor constraint validation rules (voltage ±5%, thermal limits).",
        "Algorithmic design for anomaly detection and short-term load prediction."
      ],
      prototype: [
        "Simulated Python-based testing environment for synthetic bus voltage sags and load swing scenarios.",
        "Scikit-learn baseline models for multivariate classification and regression."
      ],
      proposed: [
        "Physical hardware-in-the-loop (HIL) testbed integration with digital signal processors.",
        "Direct interface with microgrid switchgear protocols (IEC 61850 / DNP3)."
      ],
      futureScope: [
        "Reinforcement Learning multi-agent coordination across geographically distributed regional substations.",
        "Quantum-assisted optimal power flow calculation for continent-scale transmission networks."
      ]
    },
    links: {
      github: "https://github.com/Vinesh-ash",
      docs: "#"
    }
  },
  {
    id: "secure-digital-twin",
    title: "Secure Digital Twin Framework for Smart Home Automation Using IoT, Blockchain and Machine Learning",
    tagline: "Bridging physical IoT relays with real-time digital twin visualization, immutable blockchain auditing, and intelligent energy management.",
    duration: "2025–2026",
    statusBadge: "Prototype",
    featured: true,
    priorityOrder: 2,
    tags: ["IoT", "Digital Twin", "NodeMCU ESP8266", "Firebase", "Blockchain Audit", "Machine Learning", "Energy Management"],
    heroHighlight: "Complete physical-to-digital cyber-physical system with real-time state synchronization, cryptographic audit logging, and predictive energy analytics.",
    overview: "Developed a cyber-physical smart home ecosystem pairing physical IoT hardware (NodeMCU ESP8266, multi-channel optocoupler relay modules, sensor nodes) with a real-time reactive digital twin dashboard via Firebase Realtime Database. Integrated tamper-evident blockchain-based audit logging for immutable record tracking and machine learning models for usage-pattern analysis and intelligent energy optimization.",
    problemStatement: "Contemporary smart home platforms suffer from dual vulnerabilities: centralized cloud telemetry lacks transparent, tamper-proof audit trails for security investigations, and home automation systems remain reactive rather than predictive, leading to excessive energy waste and delayed failure detection in high-draw residential appliances.",
    motivationObjectives: [
      "Construct a live bidirectional digital twin mirroring physical appliance electrical states with sub-second latency.",
      "Eliminate centralized logging vulnerability through cryptographic, append-only blockchain transaction records.",
      "Employ machine learning on temporal device usage telemetry to forecast consumption peaks and recommend energy-saving profiles.",
      "Engineer a cost-effective, accessible hardware framework utilizing robust NodeMCU ESP8266 microcontrollers and optoisolated relays."
    ],
    proposedSolution: "An integrated tri-pillar architecture: (1) An IoT edge layer featuring NodeMCU ESP8266 controlling high-voltage appliances via optocoupler relays with local manual overrides; (2) A Firebase Realtime Database and interactive Web Digital Twin for instantaneous state reflection and remote actuation; (3) An analytics & security pipeline recording signed appliance state transitions to a cryptographic ledger while feeding Scikit-learn predictive models to optimize power consumption cycles.",
    systemArchitectureDescription: "Physical Appliances & Sensors ↔ NodeMCU ESP8266 (Wi-Fi 802.11 b/g/n) ↔ Firebase Realtime Database ↔ Web Digital Twin Dashboard ↔ Machine Learning Pattern Engine & Blockchain Audit Ledger.",
    architectureSteps: [
      { step: "01", title: "Physical Actuation & Sensors", description: "Multi-channel 5V optocoupler relay board interfaced with residential AC loads and ambient current/temperature sensors.", component: "Physical Edge Hardware" },
      { step: "02", title: "Microcontroller Firmware", description: "NodeMCU ESP8266 running C++ firmware managing GPIO digital pins, debounced physical buttons, and Wi-Fi reconnection routines.", component: "NodeMCU ESP8266" },
      { step: "03", title: "Cloud Real-Time Sync", description: "Low-overhead JSON WebSocket streaming with Firebase Realtime Database ensuring bi-directional state synchronization.", component: "Firebase RTDB" },
      { step: "04", title: "Digital Twin Dashboard", description: "Interactive 2D virtual twin displaying live power status, toggles, energy metrics, and telemetry indicators.", component: "Web Digital Twin" },
      { step: "05", title: "Blockchain Audit Logging", description: "Cryptographically hashed audit blocks containing timestamp, device ID, state change, and initiator hash for non-repudiation.", component: "Blockchain Audit Layer" },
      { step: "06", title: "ML Energy Optimization", description: "Usage pattern clustering and load regression identifying standby vampire draw and automated shutoff schedules.", component: "ML Analytics Engine" }
    ],
    workflowDataFlow: [
      "When a user interacts with the Digital Twin dashboard or physical wall toggle, an actuation event triggers.",
      "The state change publishes to Firebase `/home/appliances/{id}/state` within milliseconds.",
      "NodeMCU ESP8266 receives the subscribed stream payload via persistent WebSocket and energizes/de-energizes the corresponding relay coil.",
      "Simultaneously, the audit dispatcher creates a SHA-256 hashed transaction block recording the initiator, timestamp, and target relay.",
      "Continuous runtime metrics stream into the predictive ML module to map household occupancy patterns and generate efficiency recommendations."
    ],
    hardwareComponents: [
      { name: "NodeMCU ESP8266 (ESP-12E)", role: "Main IoT Controller", details: "Tensilica 32-bit LX106 processor with integrated 802.11 b/g/n Wi-Fi, operating at 80MHz with multiple GPIO ports." },
      { name: "Optocoupler 4-Channel Relay Module", role: "High-Voltage Isolation", details: "Optoisolated 5V relays capable of safely switching AC 250V/10A mains loads without electrical noise backfeed." },
      { name: "Current & Voltage Sensor (ACS712 / ZMPT101B)", role: "Electrical Telemetry", details: "Analog Hall-effect current sensing measuring true RMS wattage of connected home appliances." },
      { name: "Regulated 5V/3.3V Step-Down Power Supply", role: "Power Conditioning", details: "Clean, ripple-free DC power supply powering the ESP8266 and optoisolated coil drivers." }
    ],
    softwareStack: [
      { layer: "Microcontroller Firmware", technologies: "C++, Arduino IDE, ESP8266WiFi, FirebaseClient", role: "Embedded GPIO management, Wi-Fi reconnection, and WebSocket payload parsing." },
      { layer: "Cloud Real-Time Data", technologies: "Firebase Realtime Database", role: "Sub-second bidirectional telemetry syncing and device presence tracking." },
      { layer: "Frontend Digital Twin", technologies: "React, TypeScript, Tailwind CSS, SVG", role: "Real-time state visualizer, interactive device controls, and energy graphs." },
      { layer: "Security & Machine Learning", technologies: "Python, SHA-256 Hash Chaining, Scikit-learn", role: "Cryptographic state transition logging and energy consumption clustering." }
    ],
    aiMlMethodology: [
      {
        technique: "Usage Pattern Clustering",
        purpose: "Household behavior profiling",
        description: "Applies unsupervised K-Means clustering on temporal device activation logs to identify common morning, evening, and away-mode routine clusters."
      },
      {
        technique: "Appliance Duty-Cycle Regression",
        purpose: "Consumption forecasting",
        description: "Trains regression estimators on historical energy draw (kWh) to forecast weekly electricity billing and pinpoint anomalous high-draw deviations."
      },
      {
        technique: "Intelligent Automated Shedding",
        purpose: "Peak-demand management",
        description: "Rule-guided ML optimization recommending shifting heavy discretionary loads (water heaters, wash cycles) to off-peak utility pricing periods."
      }
    ],
    implementationDetails: [
      "Flashed NodeMCU ESP8266 with custom firmware featuring non-blocking asynchronous Wi-Fi and automatic reconnect routines.",
      "Configured secure Firebase database rules restricting read/write scopes to authenticated device tokens.",
      "Developed an interactive digital twin UI showing visual status indicators (active, idle, error) for each domestic appliance node.",
      "Implemented sequential cryptographic hashing linking consecutive operational events in an append-only JSON audit ledger."
    ],
    contributions: [
      "Engineered the complete ESP8266 hardware circuit including optocoupler relay isolation and power distribution.",
      "Programmed the embedded C++ firmware with robust error-handling for intermittent Wi-Fi connectivity.",
      "Designed the responsive Digital Twin web interface with real-time synchronization.",
      "Built the prototype blockchain audit schema and simulated machine learning energy profile models."
    ],
    engineeringDecisions: [
      {
        challenge: "Inductive kickback from switching mechanical relay coils causing ESP8266 processor resets.",
        decision: "Utilized optocoupler-isolated relay boards with flyback clamping diodes and separate 5V VCC power rail.",
        rationale: "Ensures complete galvanic isolation between sensitive 3.3V digital logic and 230V AC appliance inductive loads."
      },
      {
        challenge: "Intermittent Wi-Fi dropout disrupting manual home appliance control.",
        decision: "Implemented local hardware pushbuttons on GPIO pins with hardware interrupts alongside cloud sync.",
        rationale: "Home occupants can always toggle lighting and appliances physically even during network downtime."
      },
      {
        challenge: "High storage costs of on-chain Ethereum/Polygon transactions for high-frequency IoT pings.",
        decision: "Implemented lightweight off-chain Merkle tree aggregation with cryptographic hash verification.",
        rationale: "Provides mathematical tamper evidence and non-repudiation without incurring prohibitive gas transaction fees."
      }
    ],
    developmentStatus: {
      implemented: [
        "NodeMCU ESP8266 circuit design and optocoupler relay hardware assembly.",
        "Embedded C++ firmware with Wi-Fi reconnection and Firebase real-time sync.",
        "Interactive Digital Twin web interface with real-time appliance state toggles.",
        "Cryptographic SHA-256 audit log prototype."
      ],
      prototype: [
        "Benchtop physical prototype controlling 4 AC appliance channels.",
        "Scikit-learn usage pattern analysis on sample household consumption datasets."
      ],
      proposed: [
        "Full smart meter integration via Modbus RTU interface.",
        "Decentralized ledger deployment onto a private hyperledger or EVM testnet."
      ],
      futureScope: [
        "Voice-directed natural language agent integration via local LLM speech interfaces.",
        "Dynamic solar panel inverter coupling for net-zero automated home battery balancing."
      ]
    },
    links: {
      github: "https://github.com/Vinesh-ash",
      demo: "#",
      docs: "#"
    }
  },
  {
    id: "lora-autism-navigation",
    title: "LoRa-Based Smart Navigation System for Children with Autism (SafeKid AI)",
    tagline: "Long-range, low-power telemetry paired with intelligent geofencing, physical SOS alerts, and caregiver navigation assistance.",
    duration: "2026–Present",
    statusBadge: "Active Prototype",
    featured: true,
    priorityOrder: 3,
    tags: ["LoRa", "ESP32", "GPS Telemetry", "Geofencing", "Haversine Math", "Autism Safety", "Assistive Tech", "Firebase"],
    heroHighlight: "Assistive IoT safety wearable connecting autistic children and caregivers via long-range communication, adaptive geofencing, and panic alert protocols.",
    overview: "Designed an assistive wearable IoT tracking and safety system engineered specifically for children with autism who are susceptible to wandering (elopement). Combines long-range, low-power LoRa communication and GPS telemetry with an ESP32 hardware tracker (featuring a physical SOS button on GPIO14 and piezo buzzer on GPIO27). The cloud backend evaluates geodesic Haversine distance math to enforce multi-tier danger geofences, dispatch emergency sirens, and calculate straight-line caregiver rescue vectors.",
    problemStatement: "Children on the autism spectrum frequently wander away from safe environments, a phenomenon known as elopement. Standard cellular-based child trackers require expensive recurring data subscriptions, drain batteries within hours, and fail in cellular dead zones. Furthermore, children with sensory sensitivities often cannot operate complex touchscreen phones during distress, necessitating a rugged, dedicated single-press hardware SOS lifeline with intelligent spatial geofencing.",
    motivationObjectives: [
      "Provide long-range, subscription-free tracking that functions reliably across suburban and rural environments using LoRa technology.",
      "Eliminate touchscreen complexity with a dedicated physical tactile SOS pushbutton on GPIO14 for immediate one-press panic triggers.",
      "Deliver proactive proximity intelligence through dynamic geofencing (High Danger, Medium Risk, Safe Haven) using geodesic math.",
      "Equip caregivers with intuitive turn-by-turn navigation vectors (straight-line distance, compass bearing, map dispatch) to accelerate emergency reunions."
    ],
    proposedSolution: "A complete end-to-end assistive safety architecture: (1) A lightweight wearable child beacon containing an ESP32 microcontroller, high-gain GPS module, SX1278 LoRa transceiver, physical SOS button, and local piezo alert buzzer; (2) A local receiver/gateway syncing telemetry to Firebase Realtime Database; (3) A caregiver command dashboard evaluating live positions against colored danger zones, computing Haversine perimeters, triggering dual-frequency sirens upon zone breaches, and remotely sounding the wearable buzzer.",
    systemArchitectureDescription: "Child Wearable Tracker (ESP32 + GPS + LoRa SX1278 + GPIO14 SOS + GPIO27 Buzzer) → LoRa Long-Range RF Link (433/868/915 MHz) → Caregiver Gateway / Mobile Link → Firebase Realtime Database → Web Caregiver Dashboard (Leaflet Map + Spatial Math + SOS Dispatch).",
    architectureSteps: [
      { step: "01", title: "Child Wearable Beacon", description: "ESP32 DevKit V1 continuously reading NMEA GPS coordinates (latitude, longitude, altitude, ground speed, satellite fix count).", component: "ESP32 Hardware Tracker" },
      { step: "02", title: "Physical SOS Trigger", description: "Hardware debounced pushbutton on GPIO14 immediately flags high-priority emergency state upon momentary depression.", component: "Tactile Panic Button" },
      { step: "03", title: "Long-Range LoRa Broadcast", description: "SX1278 transceiver packages compressed telemetry into RF packets, transmitting up to several kilometers without cellular connectivity.", component: "LoRa SX1278 Link" },
      { step: "04", title: "Cloud Synchronization", description: "Telemetry ingests into Firebase `/gps/latest` and `/devices/{deviceId}/events/sos` with sub-minute timestamp validation.", component: "Firebase Realtime DB" },
      { step: "05", title: "Geodesic Haversine Intelligence", description: "Calculates live distance to parent-defined High Danger zones (water bodies, highways, construction sites) and Safe Havens.", component: "Spatial Math Engine" },
      { step: "06", title: "Caregiver Rescue Vector", description: "Computes direct straight-line distance, compass bearing (0-360°), and generates dispatch links to Google/Apple Maps.", component: "Caregiver Navigation UI" }
    ],
    workflowDataFlow: [
      "GPS module captures positioning fix (minimum 4 satellites) and passes NMEA sentences via UART to ESP32.",
      "If the child presses the GPIO14 pushbutton, the firmware instantly preempts normal polling to send an emergency SOS flag.",
      "The telemetry packet transmits across the LoRa RF link to the gateway and updates Firebase Realtime Database.",
      "The Caregiver Dashboard receives the stream, computes geodesic distances using the Haversine formula, and evaluates perimeter boundaries.",
      "If a High Danger breach occurs, the web app triggers an audible dual-frequency alarm and sends a remote buzzer command (`GPIO27`) to the child's wearable.",
      "The caregiver accesses one-click routing to direct emergency services or navigate directly to the child's live location."
    ],
    hardwareComponents: [
      { name: "ESP32 DevKit V1", role: "Primary Embedded Processor", details: "Dual-core Xtensa 32-bit LX6 running at 240MHz with ultra-low power deep sleep modes and rich GPIO peripheral support." },
      { name: "NEO-6M GPS Module", role: "Satellite Positioning", details: "High-sensitivity positioning engine with ceramic patch antenna delivering sub-2.5m horizontal positioning accuracy." },
      { name: "SX1278 LoRa Transceiver (433MHz)", role: "Long-Range RF Communication", details: "Spread-spectrum modulation offering -148 dBm sensitivity, enabling point-to-point telemetry over kilometers with minimal current draw." },
      { name: "Tactile Pushbutton (GPIO14) & Piezo Buzzer (GPIO27)", role: "User Interface & Alerting", details: "Physical sensory-friendly emergency button with pull-down resistor; 85dB active piezo buzzer for locating child in dense foliage or crowds." }
    ],
    softwareStack: [
      { layer: "Wearable Firmware", technologies: "C++, FreeRTOS, TinyGPS++, LoRa Library", role: "GPS sentence parsing, interrupt handling, packet serialization, power management." },
      { layer: "Cloud Database", technologies: "Firebase Realtime Database", role: "Live `/gps/latest` telemetry streaming and remote command queuing." },
      { layer: "Spatial Intelligence", technologies: "Geodesic Haversine Math, GeoJSON", role: "Perimeter distance calculation, approach warning zones, and circular geofence evaluation." },
      { layer: "Caregiver Web App", technologies: "React, TypeScript, Tailwind CSS, Leaflet", role: "Real-time interactive map, emergency banner, audio alerts, and navigation vector display." }
    ],
    aiMlMethodology: [
      {
        technique: "Geodesic Haversine Proximity Intelligence",
        purpose: "Spatial distance computation",
        description: "Computes great-circle distances between GPS coordinates on a spherical earth model to detect boundary approaches within millimeter accuracy."
      },
      {
        technique: "Adaptive Velocity & Staleness Filtering",
        purpose: "Eliminating GPS drift and false alarms",
        description: "Evaluates consecutive fix speeds and timestamp deltas; flags stationary multipath drift and ignores spurious coordinate jumps."
      },
      {
        technique: "Predictive Trajectory Projection (Planned)",
        purpose: "Estimating wandering path",
        description: "Applies directional vector smoothing to project the child's estimated path along known roadways or trails towards hazardous bodies of water."
      }
    ],
    implementationDetails: [
      "Configured ESP32 firmware with FreeRTOS tasks to concurrently handle GPS UART streaming, LoRa transmission, and GPIO14 hardware interrupts.",
      "Programmed robust remote buzzer contract (`PENDING` → `RECEIVED` → `ACTIVE` → `COMPLETED`) with timeout invalidation to prevent stale alarm loops.",
      "Implemented intelligent alert cooldown timers (2-minute window) preventing notification spam when a child lingers along a perimeter border.",
      "Created a hardware test simulator interface to validate siren audio, buzzer dispatches, and emergency flows without requiring field trips."
    ],
    contributions: [
      "Architected the dual-tier communication topology combining long-range LoRa with cloud Firebase streaming.",
      "Wrote and validated embedded C++ firmware for the ESP32 and GPS module integration.",
      "Designed the responsive caregiver UI with interactive Leaflet map, geofence layers, and audio sirens.",
      "Integrated the mathematical Haversine calculations and distance-bearing compass vector engine."
    ],
    engineeringDecisions: [
      {
        challenge: "Cellular GSM trackers fail in rural parks, forested areas, and require recurring SIM monthly subscriptions.",
        decision: "Adopt LoRa (Long Range) sub-GHz RF modulation instead of cellular GSM.",
        rationale: "LoRa delivers peer-to-peer transmission over kilometers without monthly subscription fees and operates independently of cellular tower coverage."
      },
      {
        challenge: "Autistic children in sensory distress cannot navigate touchscreens or dial phone numbers.",
        decision: "Incorporate a single large tactile physical button wired to GPIO14 hardware interrupt.",
        rationale: "Provides an instinctual, zero-friction panic lifeline that the child can depress instantly without needing to look at a screen."
      },
      {
        challenge: "High battery drain from continuous GPS satellite acquisition and radio transmissions.",
        decision: "Implement adaptive transmission rates: low-rate pings when stationary, switching to high-rate updates when velocity > 1.5 km/h or SOS is active.",
        rationale: "Extends wearable battery longevity significantly while ensuring maximum temporal resolution during active emergency wandering events."
      }
    ],
    developmentStatus: {
      implemented: [
        "ESP32 firmware integrating NEO-6M GPS parsing and GPIO14 physical SOS interrupt.",
        "Firebase Realtime Database synchronization contract for live telemetry and buzzer commands.",
        "Interactive web dashboard with Leaflet map, geofence boundaries, and Haversine distance calculations.",
        "Audio siren alert system and remote buzzer command state machine."
      ],
      prototype: [
        "Functional benchtop prototype with ESP32 DevKit, GPS module, and buzzer actuation.",
        "Hardware simulation suite for verifying geofence breaches and distress alerts."
      ],
      proposed: [
        "Ruggedized, child-friendly 3D-printed wearable enclosure with hypoallergenic strap.",
        "Integration of heart rate and galvanic skin response (GSR) sensors to detect sensory overload prior to elopement."
      ],
      futureScope: [
        "Community search-and-rescue peer-to-peer mesh networking between nearby caregiver devices.",
        "Offline map tile caching for backcountry tracking without internet connectivity."
      ]
    },
    links: {
      github: "https://github.com/Vinesh-ash",
      demo: "#",
      docs: "#"
    }
  }
];
