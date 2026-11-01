export interface AchievementItem {
  id: string;
  title: string;
  category: "Martial Arts & Athletic Excellence" | "Engineering & Hackathons" | "Professional Career";
  badge: string;
  badgeColor: string;
  description: string;
  impact: string;
  iconName: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "national-karate-champion",
    title: "National-Level Karate Champion",
    category: "Martial Arts & Athletic Excellence",
    badge: "National Gold / Champion",
    badgeColor: "border-amber-500/50 bg-amber-500/10 text-amber-300",
    description: "Competed at the national level demonstrating peak athletic discipline, exceptional focus under pressure, tactical agility, and tournament victory.",
    impact: "Instilled relentless work ethic, mental toughness under pressure, high-stakes decision making, and consistent physical dedication.",
    iconName: "Trophy"
  },
  {
    id: "karate-black-belt",
    title: "Karate Black Belt",
    category: "Martial Arts & Athletic Excellence",
    badge: "Dan Grade Black Belt",
    badgeColor: "border-cyan-500/50 bg-cyan-500/10 text-cyan-300",
    description: "Attained the prestigious Dan rank Black Belt through years of rigorous training, technical mastery, form perfection (Kata), and combat discipline (Kumite).",
    impact: "Reflects long-term perseverance, uncompromising self-discipline, respect for mastery, and leadership mentorship.",
    iconName: "Award"
  },
  {
    id: "sih-2026",
    title: "Smart India Hackathon (SIH) 2026 Participant",
    category: "Engineering & Hackathons",
    badge: "National Hackathon",
    badgeColor: "border-blue-500/50 bg-blue-500/10 text-blue-300",
    description: "Selected to participate in Smart India Hackathon (SIH) 2026, India's premier nationwide innovation initiative addressing complex real-world challenges.",
    impact: "Direct engagement with national-scale engineering problem statements, high-tempo team collaboration, and rapid prototype delivery.",
    iconName: "Flame"
  },
  {
    id: "internmo-selection",
    title: "AI Internship – Internmo (Ongoing)",
    category: "Professional Career",
    badge: "Upcoming Industry Role",
    badgeColor: "border-teal-500/50 bg-teal-500/10 text-teal-300",
    description: "Selected for an Artificial Intelligence engineering internship at Internmo starting November 2026 to apply machine learning concepts to real products.",
    impact: "Bridging collegiate AI research with industry applications, enterprise tooling, and production software pipelines.",
    iconName: "Briefcase"
  }
];
