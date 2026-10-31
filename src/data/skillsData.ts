export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    description: string;
    highlight?: boolean;
    tags?: string[];
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    category: "AI & Machine Learning",
    description: "Statistical modeling, predictive algorithms, and core machine learning paradigms.",
    iconName: "BrainCircuit",
    skills: [
      { name: "Artificial Intelligence", description: "Foundational AI principles, state-space search, heuristic evaluation, and intelligent agents." },
      { name: "Machine Learning", description: "Supervised and unsupervised learning, regression, classification, clustering, and model validation." },
      { name: "Scikit-learn", description: "Pipeline design, feature extraction, cross-validation, hyperparameter tuning, and ensemble methods." },
      { name: "Predictive Analytics", description: "Time-series forecasting, pattern recognition, anomaly identification, and data-driven projections." }
    ]
  },
  {
    id: "llm-genai",
    category: "LLM & Generative AI",
    description: "Frontier language modeling, retrieval architectures, and autonomous cognitive agents.",
    iconName: "Sparkles",
    skills: [
      { name: "Large Language Models (LLMs)", description: "Context framing, instruction tuning concepts, reasoning paradigms, and LLM-powered interfaces." },
      { name: "Retrieval-Augmented Generation (RAG)", description: "Vector-assisted knowledge retrieval, chunking strategies, dense indexing, and factual grounding." },
      { name: "AI Agents", description: "Autonomous closed-loop agent design, tool-use execution, memory buffers, and multi-step reasoning." }
    ]
  },
  {
    id: "programming",
    category: "Programming",
    description: "Core languages for algorithmic engineering, data systems, and system programming.",
    iconName: "Code2",
    skills: [
      { name: "Python", description: "Primary language for AI/ML modeling, automation scripts, data science libraries, and backend APIs." },
      { name: "Java", description: "Object-oriented software development, enterprise principles, and core algorithmic implementations." }
    ]
  },
  {
    id: "iot-hardware",
    category: "IoT & Hardware",
    description: "Embedded microcontrollers, wireless communication, and schematic/hardware circuit design.",
    iconName: "Cpu",
    skills: [
      { name: "Internet of Things", description: "Sensor data collection, low-latency telemetry pipelines, cloud sync, and remote actuator triggers." },
      { name: "IoT Hardware Integration", description: "Interfacing NodeMCU ESP8266, ESP32, GPS modules, relays, piezo buzzers, and physical switches." },
      { name: "ORCAD", description: "Schematic capture, PCB design workflows, and electronic circuit simulation." }
    ]
  },
  {
    id: "dev-databases",
    category: "Development & Databases",
    description: "Full-stack application architecture, relational storage, and real-time cloud data layers.",
    iconName: "Database",
    skills: [
      { name: "Application Development", description: "Designing responsive user interfaces, reactive state management, and end-to-end web workflows." },
      { name: "MySQL", description: "Relational database schema design, normalized data modeling, indexing, and structured SQL queries." }
    ]
  },
  {
    id: "professional",
    category: "Professional Skills",
    description: "Analytical rigor, organizational execution, and computer science foundations.",
    iconName: "Compass",
    skills: [
      { name: "Problem Solving", description: "Deconstructing complex technical roadblocks into systematic, testable engineering modules." },
      { name: "Leadership", description: "Team coordination, collaborative initiative, project direction, and technical communication." },
      { name: "Data Structures and Algorithms", description: "Algorithmic complexity (Big-O), trees, graphs, sorting, searching, and memory-efficient data structures." }
    ]
  }
];
