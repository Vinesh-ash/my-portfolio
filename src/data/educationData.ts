export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
  status: "In Progress" | "Completed";
  summary: string;
  focusAreas: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "btech-aiml",
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    institution: "VELTECH R&D INSTITUTE OF SCIENCE AND TECHNOLOGY",
    location: "Avadi, Tamil Nadu",
    period: "2025 – Present",
    score: "9.6",
    scoreType: "CGPA",
    status: "In Progress",
    summary: "Undergraduate engineering program focusing on advanced Machine Learning, Deep Learning, Artificial Intelligence, and intelligent automation systems.",
    focusAreas: [
      "Artificial Intelligence & Machine Learning Foundations",
      "Large Language Models & Natural Language Processing",
      "Data Structures and Algorithms",
      "IoT & Intelligent Embedded Systems",
      "Software Engineering & Predictive Modeling"
    ]
  },
  {
    id: "diploma-cse",
    degree: "Diploma in Computer Engineering",
    institution: "SRI DURGADEVI POLYTECHNIC COLLEGE",
    location: "Kavaraipettai, Tamil Nadu",
    period: "2022 – 2025",
    score: "98%",
    scoreType: "Percentage",
    status: "Completed",
    summary: "Comprehensive technical diploma in computer engineering with top-tier academic distinction, covering core programming, hardware architecture, and database systems.",
    focusAreas: [
      "Computer Hardware Integration & Architecture",
      "Object-Oriented Programming (Java / Python)",
      "Relational Database Management Systems (MySQL)",
      "Circuit Design & Electronics (ORCAD)",
      "Operating Systems & Computer Networks"
    ]
  },
  {
    id: "secondary-school",
    degree: "Secondary School (10th Standard)",
    institution: "VSSC HOLY CROSS HIGH SCHOOL",
    location: "Sullurpeta, Andhra Pradesh",
    period: "2021 – 2022",
    score: "80%",
    scoreType: "Percentage",
    status: "Completed",
    summary: "Secondary education establishing strong foundations in mathematics, physical sciences, and analytical problem-solving.",
    focusAreas: [
      "Mathematics & Analytical Geometry",
      "Physical Sciences & General Physics",
      "Information Technology Foundations"
    ]
  }
];
