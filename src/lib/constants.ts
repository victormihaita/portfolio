export const SITE_NAME = "Victor Mihaita";
export const SITE_TITLE = "Full Stack Developer";
export const SITE_DESCRIPTION = "Software developer with 8 years of experience building products end-to-end. iOS, React, Go, and everything in between.";
export const SITE_URL = "https://portfolio.victormihaita.dev";

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/vmihai12/",
  github: "https://github.com/victormihaita",
  email: "mailto:vmihai12@icloud.com",
};

export const ABOUT = {
  intro: "Software developer with 8 years of experience. Started in iOS development, and over the past 4 years have shifted focus to full-stack work—building frontends, backends, APIs, and cloud infrastructure alongside mobile apps.",
  stack: "Currently working with Swift/SwiftUI on iOS, React and Next.js for web, Go and GraphQL for backend services, PostgreSQL for data, and GCP for infrastructure. Also have hands-on experience with AI/ML integration and relational database design.",
  focus: "I enjoy owning the full picture—from database schema to user interface—and shipping products that work well end-to-end.",
  topSkills: ["iOS Development", "Back-End Web Development", "Front-End Development", "Relational Databases", "End-to-end Ownership"],
};

export const PROJECTS = [
  {
    id: "go2fix",
    name: "Go2Fix",
    description: "Romania's first home services marketplace — an investor-ready MVP that formalizes the informal services sector through compliance, trust, and technology. Starting with cleaning, expanding to all home services.",
    role: "Full Stack Developer",
    url: "https://www.go2fix.ro",
    tech: ["Go", "GraphQL", "PostgreSQL", "Next.js", "Stripe", "WebSockets"],
    badge: "MVP",
  },
  {
    id: "idle-civilizations",
    name: "Idle Civilizations",
    description: "Idle game for history enthusiasts. Start with a campfire in the Stone Age and progress through 8 historical eras to the Space Age. Features offline progression, prestige mechanics, weekly events, and 40 unique buildings.",
    role: "iOS Developer",
    url: "https://idle-studio.vercel.app/games/idle-civilizations/",
    tech: ["Swift", "SwiftUI", "Game Design"],
  },
  {
    id: "paste",
    name: "Paste",
    description: "The best clipboard manager for Mac, iPhone, and iPad. Organize and manage clipboard history across Apple devices.",
    role: "iOS Developer",
    url: "https://pasteapp.io",
    tech: ["Swift", "SwiftUI", "iCloud Sync"],
  },
  {
    id: "wishes",
    name: "Wishes",
    description: "Social wishlist app that helps people create, organize, and share gift wishlists. Shipped to 60K+ users.",
    role: "iOS Developer",
    url: "https://wishes.app",
    tech: ["SwiftUI", "GraphQL", "Payments", "Chat"],
  },
  {
    id: "postsam",
    name: "PostSam",
    description: "AI-powered social media management tool that automates content creation and scheduling across multiple platforms.",
    role: "Full Stack Developer",
    url: "https://postsam.ai",
    tech: ["AI/LLM", "React", "Node.js", "Multi-platform"],
  },
  {
    id: "helpfred",
    name: "HelpFred",
    description: "AI customer support agent that automatically handles emails by learning from your knowledge base and communication style.",
    role: "Full Stack Developer",
    url: "https://helpfred.ai",
    tech: ["AI/ML", "Gmail API", "React", "SaaS"],
  },
  {
    id: "artland",
    name: "Artland",
    description: "Global digital marketplace connecting galleries with art collectors. Making contemporary art more accessible worldwide.",
    role: "Senior iOS + Backend Developer",
    url: "https://thehub.io/startups/artland",
    tech: ["Swift", "Go", "GraphQL", "PostgreSQL"],
  },
  {
    id: "zalt",
    name: "Zalt",
    description: "Cross-platform reminders app with real-time sync across iOS and Android. Features custom snooze intervals, advanced recurring schedules, and offline-first architecture.",
    role: "Full Stack Developer",
    url: "https://jolt-website-liart.vercel.app",
    tech: ["Go", "GraphQL", "Swift", "Kotlin", "Next.js"],
    badge: "In Progress",
  },
];

export const SKILLS = {
  mobile: ["Swift", "SwiftUI", "UIKit", "Combine", "Core Data"],
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Go", "GraphQL", "REST APIs", "Node.js"],
  database: ["PostgreSQL", "Neon", "SQLite", "Core Data"],
  cloud: ["Google Cloud Platform", "Vercel", "Docker", "CI/CD", "Cloud Run"],
  ai: ["LLM Integration", "RAG", "Vector Databases", "Prompt Engineering"],
};
