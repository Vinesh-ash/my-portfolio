export interface ProfileInfo {
  name: string;
  title: string;
  headline: string;
  shortBio: string;
  aboutSummary: string;
  philosophy: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  avatarUrl?: string;
}

export const profileData: ProfileInfo = {
  name: "GERIKI VINESH",
  title: "Machine Learning Engineer | AI & IoT Developer",
  headline: "Engineering Intelligence. Connecting AI with the Real World.",
  shortBio: "An AI & ML student passionate about transforming innovative ideas into practical intelligent solutions through Artificial Intelligence, Machine Learning, LLMs, RAG and IoT.",
  aboutSummary: "AI & ML student passionate about building innovative solutions using Artificial Intelligence, Machine Learning, LLMs, and Retrieval-Augmented Generation (RAG). Experienced in IoT, web development, and intelligent automation, with a strong interest in developing practical, real-world applications.",
  philosophy: "Driven by curiosity, focused on innovation, and passionate about bringing imagination to life through technology.",
  email: "vinuash012@gmail.com",
  phone: "+91 9159500523",
  location: "Sullurpeta, Andhra Pradesh, India",
  github: "https://github.com/Vinesh-ash",
  linkedin: "https://www.linkedin.com/in/geriki-vinesh-4545692",
  resumeUrl: "#", // Direct download or view CV trigger
};

export const technicalDomains = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    description: "Developing robust statistical models, supervised/unsupervised learning pipelines, and predictive architectures using Scikit-Learn and Python.",
    icon: "Brain",
    accent: "from-cyan-500/20 to-blue-500/10",
    border: "group-hover:border-cyan-500/50",
  },
  {
    id: "llm",
    title: "Large Language Models",
    description: "Exploring context orchestration, prompt engineering, fine-tuning, and reasoning token evaluation for specialized domain execution.",
    icon: "Cpu",
    accent: "from-blue-500/20 to-indigo-500/10",
    border: "group-hover:border-blue-500/50",
  },
  {
    id: "rag",
    title: "Retrieval-Augmented Generation",
    description: "Constructing hybrid search indices, dense vector embeddings, and chunking pipelines to ground LLMs in authoritative knowledge bases.",
    icon: "Database",
    accent: "from-emerald-500/20 to-cyan-500/10",
    border: "group-hover:border-emerald-500/50",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description: "Designing closed-loop autonomous agents with tool-calling capabilities, reflective loops, and multi-step goal resolution for complex systems.",
    icon: "Bot",
    accent: "from-purple-500/20 to-cyan-500/10",
    border: "group-hover:border-purple-500/50",
  },
  {
    id: "iot",
    title: "IoT & Embedded Systems",
    description: "Interfacing NodeMCU ESP8266, ESP32 microcontrollers, LoRa transceivers, sensors, and actuators with low-latency telemetry protocols.",
    icon: "Radio",
    accent: "from-amber-500/20 to-cyan-500/10",
    border: "group-hover:border-amber-500/50",
  },
  {
    id: "automation",
    title: "Intelligent Automation",
    description: "Bridging algorithmic decision-making with physical hardware relays, smart digital twins, and autonomous control feedback loops.",
    icon: "Zap",
    accent: "from-cyan-500/20 to-teal-500/10",
    border: "group-hover:border-teal-500/50",
  },
];
