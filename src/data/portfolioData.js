export const personalInfo = {
  name: "Eyuel Ashenafi",
  title: "Full-Stack Developer",
  subTitle: "Software Engineering Student & Omishtu Intern",
  university: "Adama Science and Technology University (ASTU)",
  location: "Adama / Addis Ababa, Ethiopia",
  email: "eashenafi82@gmail.com",
  phone: "+251 921 940 725",
  telegram: "@Eyuuell",
  telegramLink: "https://t.me/Eyuuell",
  instagram: "@eyuel_ash",
  github: "https://github.com/eyuashu06",
  linkedin: "https://linkedin.com/in/eyuel-ashenafi-16a474382",
  resumePdf: "/Eyuel_Ashenafi_Resume.pdf",
  bio: "Full-Stack Developer and Software Engineering student at Adama Science and Technology University (ASTU). I design, build, and deploy high-performance web and mobile applications—ranging from React & Vue.js frontends to Node.js, Express, and Laravel backends with robust SQL/NoSQL databases, secure JWT/Sanctum authentication, and Google Gemini AI integrations.",
  status: "Available for Full-time Roles & Freelance Work"
};

export const stats = [
  { label: "Completed Projects", value: 8, suffix: "+" },
  { label: "Live Vercel Apps", value: 2, suffix: "" },
  { label: "Tech Stack Tools", value: 15, suffix: "+" },
  { label: "Engineering Years", value: 3, suffix: "+" }
];

export const workExperience = [
  {
    role: "Software Engineering Intern",
    company: "Omishtu Software Company",
    period: "2026 – Present",
    type: "Internship",
    description: "Developing production-grade full-stack web applications and API services within professional Git workflows.",
    highlights: [
      "Building full-stack features end to end: Laravel backend microservices and RESTful APIs paired with Vue.js & React.js frontends.",
      "Comprehensive API testing, validation, and documentation using Postman and Thunder Client.",
      "Collaborating actively using Git branch management, pull requests, code reviews, and Agile team standards."
    ],
    tech: ["Laravel", "React.js", "Vue.js", "REST APIs", "Postman", "Git"]
  }
];

export const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Adama Science and Technology University (ASTU)",
    period: "Current",
    details: "Focused on Software Architecture, Data Structures & Algorithms, Database Design, System Security, Web Technologies, and Software Development Life Cycle (SDLC)."
  }
];

export const projects = [
  {
    id: "recall-ai",
    title: "RecallAI (FlashGEN AI)",
    subtitle: "AI-Powered Flashcard & Spaced Repetition App",
    category: "AI & Full-Stack",
    date: "2026",
    status: "Live Production",
    liveUrl: "https://flash-gen-ai-six.vercel.app",
    githubUrl: "https://github.com/eyuashu06",
    description: "Full-stack AI flashcard application leveraging Google Gemini API to generate smart study flashcards automatically, powered by Firebase Firestore for real-time storage and security rules.",
    highlights: [
      "Built with React 19 + TypeScript, Vite, and Tailwind CSS on frontend with Express.js server backend.",
      "Direct integration with Google Gemini API for automated topic expansion and question-answer generation.",
      "Stored user card decks securely in Firebase Firestore with granular security rules."
    ],
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Express.js", "Google Gemini API", "Firebase Firestore", "Vercel"],
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "wedding-pass",
    title: "WeddingPass",
    subtitle: "Digital Invitations, RSVP & QR Ticketing System",
    category: "Full-Stack",
    date: "2026",
    status: "Live Production",
    liveUrl: "https://wedding-invitation-digital-ticket-m-pi.vercel.app",
    githubUrl: "https://github.com/eyuashu06",
    description: "Digital wedding invitation platform enabling real-time RSVP management, QR-code ticketing, guest attendance analytics, and custom invitation exporting.",
    highlights: [
      "Developed with React 18, TypeScript, Vite, and Tailwind CSS integrated with Supabase (PostgreSQL, Auth, RLS).",
      "Implemented attendance analytics dashboard using Recharts and PNG/PDF invitation document export.",
      "Guest venue check-in system with instant QR scanning."
    ],
    tech: ["React 18", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Recharts", "Vercel"],
    featured: true,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "astu-complaint",
    title: "ASTU Issue & Complaint Tracker",
    subtitle: "University Complaint System with Gemini AI Chatbot",
    category: "Full-Stack",
    date: "2026 – Present",
    status: "Active Project",
    liveUrl: null,
    githubUrl: "https://github.com/eyuashu06",
    description: "Centralized complaint management platform designed for ASTU university ecosystem with multi-role access and intelligent AI helpdesk guidance.",
    highlights: [
      "Built with React frontend and Node.js/Express backend paired with MongoDB Atlas.",
      "Secured JWT authentication with role-based authorization (Student, Department Head, Admin).",
      "Integrated Gemini-assisted chatbot endpoint to guide users through ticket filing and automated status updates."
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Gemini Chatbot", "Multer", "Nodemailer"],
    featured: true,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "student-marketplace",
    title: "Campus Student Marketplace",
    subtitle: "Verified Peer-to-Peer Marketplace API",
    category: "Backend",
    date: "2026 – Present",
    status: "Team Project",
    liveUrl: null,
    githubUrl: "https://github.com/eyuashu06",
    description: "Backend REST API for an exclusive campus marketplace enabling verified students to list, buy, and sell goods safely.",
    highlights: [
      "Architected Node.js & Express RESTful API with Prisma ORM.",
      "Implemented secure JWT authentication and email domain verification.",
      "Executed database migration from SQLite to MongoDB Atlas with schema restructuring for high scale."
    ],
    tech: ["Node.js", "Express.js", "Prisma ORM", "MongoDB Atlas", "SQLite", "JWT"],
    featured: false,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "food-ordering",
    title: "Campus Food & Delivery App",
    subtitle: "Mobile Ordering Platform (Expo / React Native)",
    category: "Mobile",
    date: "2026",
    status: "Team Project",
    liveUrl: null,
    githubUrl: "https://github.com/eyuashu06",
    description: "Cross-platform mobile application for campus food ordering, delivery tracking, and vendor management.",
    highlights: [
      "Contributed to Expo / React Native mobile client backed by Node.js, Express, and Prisma REST API.",
      "Vendor browsing, dine-in vs. delivery ordering options, live status updates, and courier approval."
    ],
    tech: ["React Native", "Expo", "Node.js", "Express.js", "Prisma ORM", "REST API"],
    featured: false,
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "laravel-rbac",
    title: "Role-Based User Access Control (RBAC)",
    subtitle: "Enterprise Laravel Permission Management System",
    category: "Backend",
    date: "2026 – Present",
    status: "Completed",
    liveUrl: null,
    githubUrl: "https://github.com/eyuashu06",
    description: "Backend administrative engine delivering dynamic role and permission management according to Software Requirements Specification (SRS) standards.",
    highlights: [
      "Developed with Laravel, Vue.js, and MySQL.",
      "Integrated Laravel Sanctum auth and Spatie Permission package for fine-grained authorization.",
      "Built clean MVC architecture and self-documenting REST APIs."
    ],
    tech: ["Laravel", "Vue.js", "MySQL", "Laravel Sanctum", "Spatie Permission"],
    featured: false,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "harmony-hub",
    title: "HarmonyHub",
    subtitle: "Audio & Music Key/Chord Analysis Web App",
    category: "Full-Stack",
    date: "2026 – Present",
    status: "In Development",
    liveUrl: null,
    githubUrl: "https://github.com/eyuashu06",
    description: "Web application analyzing uploaded audio files to detect musical scale, key signature, chord progressions, and track metadata.",
    highlights: [
      "Designing React frontend dashboard with Node.js analysis engine.",
      "Automatic audio spectral feature extraction and chord detection rendering."
    ],
    tech: ["React", "Node.js", "Express", "Audio API", "Tailwind CSS"],
    featured: false,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "student-registration",
    title: "Student Registration Platform",
    subtitle: "Database & Academic Record Management System",
    category: "Backend",
    date: "May 2026",
    status: "Completed",
    liveUrl: null,
    githubUrl: "https://github.com/eyuashu06",
    description: "Full student registration platform managing academic records, course enrollments, and student demographics.",
    highlights: [
      "Built with JavaScript, Node.js, and MySQL with robust normalized schema design.",
      "Frontend integration with RESTful backend endpoints."
    ],
    tech: ["JavaScript", "Node.js", "MySQL", "Express", "RESTful API"],
    featured: false,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
  }
];

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: 92, icon: "Code2" },
      { name: "TypeScript", level: 88, icon: "FileCode" },
      { name: "Python", level: 82, icon: "Terminal" },
      { name: "PHP", level: 80, icon: "Server" },
      { name: "Java", level: 75, icon: "Coffee" }
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js / React 19", level: 92, icon: "Atom" },
      { name: "Vue.js", level: 85, icon: "Layout" },
      { name: "Tailwind CSS", level: 95, icon: "Palette" },
      { name: "React Native (Expo)", level: 78, icon: "Smartphone" },
      { name: "Vite & HTML5/CSS3", level: 90, icon: "Zap" }
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js & Express", level: 90, icon: "Cpu" },
      { name: "Laravel", level: 84, icon: "Layers" },
      { name: "RESTful API Design", level: 92, icon: "Globe" },
      { name: "Prisma ORM", level: 82, icon: "Database" }
    ]
  },
  {
    category: "Databases & Security",
    skills: [
      { name: "MongoDB Atlas", level: 88, icon: "Database" },
      { name: "MySQL", level: 85, icon: "Table" },
      { name: "PostgreSQL (Supabase)", level: 82, icon: "ShieldCheck" },
      { name: "Firebase Firestore", level: 84, icon: "Flame" },
      { name: "JWT & Sanctum Auth", level: 90, icon: "Lock" }
    ]
  },
  {
    category: "AI & Tools",
    skills: [
      { name: "Google Gemini API", level: 88, icon: "Sparkles" },
      { name: "Git & GitHub", level: 90, icon: "GitBranch" },
      { name: "Postman & Thunder Client", level: 88, icon: "CheckCircle2" },
      { name: "Vercel Deployment", level: 92, icon: "UploadCloud" }
    ]
  }
];

export const clientServices = [
  {
    title: "Full-Stack Web App Development",
    description: "Building production-ready single page & multi-tier applications from ground up using React/Vue and Node/Laravel.",
    icon: "LayoutTemplate"
  },
  {
    title: "Custom REST APIs & Database Design",
    description: "Architecting secure, scalable RESTful API endpoints, ORM schemas, and relational/NoSQL databases (MySQL, MongoDB, PostgreSQL).",
    icon: "Server"
  },
  {
    title: "AI Integration (Google Gemini API)",
    description: "Adding smart AI features such as AI chat helpdesks, automated content generators, and smart flashcard engines into existing web systems.",
    icon: "Sparkles"
  },
  {
    title: "Auth, Security & Role-Based Access (RBAC)",
    description: "Implementing JWT authentication, Laravel Sanctum, Supabase RLS, and strict permissions to keep application data protected.",
    icon: "ShieldAlert"
  }
];
