// ─── DATA ────────────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    icon: "🏢",
    gradient: "linear-gradient(135deg, #e8613a, #c0392b)",
    name: "HRMS Request Approval System",
    tags: ["React", "TypeScript", "Node.js", "MySQL"],
    desc: "Enterprise-grade HRMS platform with dynamic form builder and configurable multi-level approval workflows.",
    features: [
      "Drag-and-drop Form Builder using React + TypeScript",
      "Forms stored as JSON in MySQL and rendered dynamically",
      "Configurable multi-level approval workflow engine",
      "Fully typed backend services in TypeScript",
      "JWT secured REST APIs",
    ],
    live: "https://dev.maxdigi.co/alinko/z-flow/",
    // github: "",
  },
  {
    icon: "🐾",
    gradient: "linear-gradient(135deg, #f97316, #ea580c)",
    name: "AllTails – Pet Care & E-commerce Platform",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    desc: "Integrated pet care and multi-vendor e-commerce platform with real-time chat and geo-based vet services.",
    features: [
      "Multi-vendor product management system",
      "Real-time chat using Socket.IO",
      "Geo-based vet service integration",
      "Push notifications via FCM",
      "Automated alerts using Nodemailer",
    ],
    live: "https://development.alltails.in/",
    github: "https://github.com/dineshpawar8696",
  },
  {
    icon: "🛕",
    gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    name: "Temple Town Trips – Travel Booking Platform",
    tags: ["React", "Node.js", "MongoDB", "WhatsApp API"],
    desc: "Dynamic travel booking platform with custom itinerary builder and WhatsApp chatbot automation.",
    features: [
      "Custom travel itinerary creation",
      "Reusable React component architecture",
      "Admin panel for package & analytics management",
      "WhatsApp chatbot integration",
    ],
    live: "https://dev.templetowntrips.com/",
    // github: "https://github.com/dineshpawar8696",
  },
  {
    icon: "📱",
    gradient: "linear-gradient(135deg, #a855f7, #7e22ce)",
    name: "Zolemate Social App (Play Store)",
    tags: ["Node.js", "MongoDB", "Firebase", "Msg91"],
    desc: "Social networking mobile app backend with reels, posts, friend-zone system and scalable API architecture.",
    features: [
      "Backend optimization for scalability",
      "Mass SMS & email system using Msg91",
      "Admin portal enhancements",
      "Real-time features via Firebase",
    ],
    // live: "#",
    // github: "https://github.com/dineshpawar8696",
  },
  {
    icon: "🏥",
    gradient: "linear-gradient(135deg, #22c55e, #16a34a)",
    name: "Crown Health Care – Medical E-commerce",
    tags: ["React", "Node.js", "MongoDB"],
    desc: "Medical e-commerce platform with authentication, payments, and inventory management.",
    features: [
      "Secure user authentication & payments",
      "Product categorization & filtering",
      "Optimized backend inventory management",
      "High traffic reliability improvements",
    ],
    live: "https://www.crownkenya.com/",
    // github: "https://github.com/dineshpawar8696",
  },
  {
    icon: "📊",
    gradient: "linear-gradient(135deg, #0ea5e9, #0369a1)",
    name: "Survey Generation & Reporting System",
    tags: ["React", "Node.js", "MySQL"],
    desc: "Custom survey builder with formula-based report generation engine similar to Excel logic.",
    features: [
      "Dynamic survey creation platform",
      "Formula-based computation engine",
      "Automated email report sharing via Nodemailer",
      "Data visualization & export features",
    ],
    live: "#",
    // github: "https://github.com/dineshpawar8696",
  },
  {
    icon: "👔",
    gradient: "linear-gradient(135deg, #f43f5e, #be123c)",
    name: "Siyaram’s Clothing Sales Platform",
    tags: ["React", "Node.js", "MySQL"],
    desc: "Admin & Seller dashboard enhancement project improving order booking and system synchronization.",
    features: [
      "Improved frontend-backend API sync",
      "Seller dashboard enhancements",
      "Pattern display & order booking system",
      "Bug fixing & performance improvements",
    ],
    live: "#",
    // github: "https://github.com/dineshpawar8696",
  },
];

export const SKILLS = [
  {
    icon: "⚛️",
    title: "Frontend Development",
    tags: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Redux",
      "HTML5",
      "CSS3"
    ],
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    tags: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "Microservices Architecture",
      "WebSocket",
      "Socket.IO"
    ],
  },
  {
    icon: "🗄️",
    title: "Database Engineering",
    tags: [
      "MySQL (Advanced)",
      "PostgreSQL",
      "MongoDB",
      "Schema Design",
      "Query Optimization",
      "Indexing Strategies",
      "Database Performance Tuning",
      "Data Migration"
    ],
  },
  {
    icon: "⚡",
    title: "Caching & Messaging",
    tags: [
      "Redis",
      "RabbitMQ",
      "Event-driven Architecture",
      "Asynchronous Processing"
    ],
  },
  {
    icon: "☁️",
    title: "Cloud & Deployment",
    tags: [
      "AWS EC2",
      "AWS S3",
      "VPS Deployment",
      "Server Configuration",
      "Nginx"
    ],
  },
  {
    icon: "🔄",
    title: "Real-time Systems",
    tags: [
      "Firebase",
      "Socket.IO",
      "Push Notifications (FCM)",
      "Nodemailer"
    ],
  },
  {
    icon: "🚀",
    title: "DevOps & CI/CD",
    tags: [
      "CI/CD Pipelines",
      "Production Deployment",
      "Environment Configuration",
      "Monitoring & Logging"
    ],
  },
  {
    icon: "🛠️",
    title: "Version Control & Collaboration",
    tags: [
      "Git",
      "GitHub",
      "GitLab"
    ],
  },
];

export const MARQUEE = [
  "React.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "AWS EC2",
  "AWS S3",
  "Socket.IO",
  "Redux",
  "Next.js",
  "JWT Auth",
  "CI/CD",
  "Firebase",
];

export const EXPERIENCE = [
  {
    period: "Feb 2026 – Present",
    company: "ESDS Software Solutions Pvt. Ltd., Nashik",
    role: "Senior MERN Stack Developer (Specialist)",
    points: [
      "Currently working on a Government project (IIBF)",
      "Handling database-related responsibilities including DBA tasks",
      "Working on database design, optimization, and structured data management",
      "Actively involved in application development with a focus on clean, well-structured architecture",
      "Responsible for developing scalable and properly organized modules following best development practices",
    ],
  },
  {
    period: "Feb 2025 – Jan 2026",
    company: "Maxdigi Solutions Pvt. Ltd., Nashik",
    role: "Senior MERN Stack Developer",
    points: [
      "Architected HRMS platform with drag-and-drop form builder using React.js + TypeScript",
      "Designed multi-level approval workflows with Node.js + MySQL backend",
      "Built survey generation engine with Excel-like formula computation & Nodemailer reports",
      "Enhanced Siyaram's clothing platform — fixed critical API sync issues & seller dashboard",
    ],
  },
  {
    period: "Oct 2022 – Jan 2025",
    company: "Koolmind Technolab LLP",
    role: "MERN Stack Developer",
    points: [
      "Built AllTails — integrated pet care & e-commerce with Socket.IO real-time chat",
      "Developed Temple Town Trips travel booking with WhatsApp chatbot integration",
      "Enhanced Zolemate social app (Play Store) with Msg91 mass SMS/email system",
      "Deployed all applications on AWS EC2 + S3 with CI/CD pipelines",
    ],
  },
];
