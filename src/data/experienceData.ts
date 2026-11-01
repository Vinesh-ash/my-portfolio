export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  status: "Upcoming – Not Started" | "Completed" | "Current";
  description: string;
  highlights: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "internmo-ai",
    role: "AI Intern",
    company: "Internmo",
    location: "Remote / Hybrid",
    period: "Nov 2026 – Present (Ongoing)",
    status: "Upcoming – Not Started",
    description: "Internship opportunity focused on practical exposure to Artificial Intelligence concepts, machine learning workflows, and practical applications.",
    highlights: [
      "Scheduled upcoming practical engagement with enterprise AI paradigms.",
      "Focus on transforming algorithmic theory into real-world software modules.",
      "Status clearly designated: Upcoming – Not Started until commencement."
    ],
    skills: ["Artificial Intelligence", "Machine Learning", "Applied Problem Solving"]
  },
  {
    id: "nvskzen-web",
    role: "Web Developer Intern",
    company: "NVSKZEN",
    location: "Tamil Nadu, India",
    period: "May 2023 – June 2023",
    status: "Completed",
    description: "Gained hands-on experience in web development during an intensive one-month summer internship.",
    highlights: [
      "Contributed to frontend interface components and responsive web design implementations.",
      "Collaborated with senior developers on real-time web interface styling and asset structuring.",
      "Acquired foundational software engineering practices and client-facing web workflows."
    ],
    skills: ["Web Development", "Frontend Architecture", "HTML/CSS", "JavaScript"]
  }
];
