
export type Pillar = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon:
    | "briefcase"
    | "coins"
    | "shield"
    | "heart-handshake"
    | "scale"
    | "cpu"
    | "megaphone";
};

export const fallbackPillars: Pillar[] = [
  {
    id: "employment-relationship",
    number: "01",
    title: "Understanding Work Relationships",
    description:
      "Learn about employment contracts, self-employment, independent work, and the responsibilities of workers and employers.",
    icon: "briefcase",
  },
  {
    id: "fair-income",
    number: "02",
    title: "Fair Pay and Income",
    description:
      "Understand wages, earnings, payment agreements, deductions, and the importance of fair and timely payment.",
    icon: "coins",
  },
  {
    id: "working-conditions-safety",
    number: "03",
    title: "Working Conditions and Safety",
    description:
      "Explore workplace safety, working hours, rest periods, occupational risks, and ways to protect yourself at work.",
    icon: "shield",
  },
  {
    id: "social-protection",
    number: "04",
    title: "Social Protection",
    description:
      "Discover how pensions, health insurance, injury protection, and other social security benefits can support workers.",
    icon: "heart-handshake",
  },
  {
    id: "equality-inclusion",
    number: "05",
    title: "Equality and Fair Treatment",
    description:
      "Understand discrimination, equal opportunities, inclusion, and the right to fair treatment at work.",
    icon: "scale",
  },
  {
    id: "algorithmic-management",
    number: "06",
    title: "Technology and the Changing World of Work",
    description:
      "Explore how digital platforms, artificial intelligence, and automated decisions are changing how people work.",
    icon: "cpu",
  },
  {
    id: "worker-voice",
    number: "07",
    title: "Worker Voice and Representation",
    description:
      "Learn how workers can raise concerns, organise, join associations or unions, and participate in decisions affecting their work.",
    icon: "megaphone",
  },
];

export const pillars = fallbackPillars;
