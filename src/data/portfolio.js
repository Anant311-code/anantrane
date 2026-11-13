
export const personalInfo = {
  name: "Anant Rane",
  role: "Full Stack Developer",
  email: "raneanant2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/anant-rane-737250225/",
  github: "",
  resume: "#",
  description:
    "I design and develop modern digital experiences, transforming ideas into functional and meaningful web applications.",
};

export const projects = [
  {
    id: "01",
    slug: "cricverse",
    name: "CricVerse",
    category: "Sports Technology",
    type: "Live Cricket Score Platform",
    status: "Live",
    featured: true,
    description:
      "A cricket-focused platform designed to bring live match information, scorecards and match experiences together through a modern interface.",
    overview:
      "CricVerse explores the experience of a modern cricket information platform, with match discovery, live score integration and dedicated match-centre experiences.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Cricket API",
    ],
    image: "/images/cricverse.jpg",
    live: "https://cricverse-beryl.vercel.app/",
    github: "#",
  },
  {
    id: "02",
    slug: "paceorbit",
    name: "PaceOrbit",
    category: "Fitness Technology",
    type: "Activity Tracking Platform",
    status: "Live",
    featured: false,
    description:
      "A fitness activity platform focused on tracking movement, recording activities and creating a modern experience for active users.",
    overview:
      "PaceOrbit is a Strava-inspired fitness platform concept with activity tracking, route visualization and activity history.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    image: "/images/paceorbit.jpg",
    live: "https://pace-orbit-production.vercel.app/",
    github: "#",
  },
  {
    id: "03",
    slug: "nva-foods",
    name: "NVA Food International",
    category: "E-commerce",
    type: "Food Products Website",
    status: "Live",
    featured: false,
    description:
      "A digital product showcase for frozen food and ready-to-eat products, designed to present the brand and its product catalogue online.",
    overview:
      "NVA Food International is a product-focused website with category-based product discovery and a modern brand presentation.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
    image: "/images/nva-foods.jpg",
    live: "https://nva-foods.vercel.app/",
    github: "#",
  },
  {
    id: "04",
    slug: "matchwise",
    name: "Matchwise",
    category: "AI & Productivity",
    type: "Resume Analysis Platform",
    status: "Live",
    featured: false,
    description:
      "A resume analysis platform designed to help job seekers evaluate their resumes and understand how well they align with job opportunities.",
    overview:
      "Matchwise brings resume analysis and ATS-focused insights into a dedicated web application.",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
    ],
    image: "/images/matchwise.jpg",
    live: "https://resume-score-gray.vercel.app/",
    github: "#",
  },
];

export const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "Vite",
  "Framer Motion",
];

export const education = [
  {
    degree: "B.Tech Computer Engineering",
    institution:
      "SSVP's Bapusaheb Shivajirao Deore College of Engineering",
    university:
      "Dr. Babasaheb Ambedkar Technological University",
    score: "7.79 CGPA",
    year: "2025",
    level: "Graduation",
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "Coast Guard Public School, Daman",
    score: "90%",
    year: "2021",
    level: "Senior Secondary",
  },
  {
    degree: "Secondary School (Class X)",
    institution: "Coast Guard Public School, Daman",
    score: "85%",
    year: "2019",
    level: "Secondary",
  },
];
