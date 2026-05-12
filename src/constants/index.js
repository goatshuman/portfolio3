import {
    luminary,
    nexa,
    fitpulse,
    buildflow,
    snapvault,
    backend,
    code,
    concepts,
    coursera,
    cp,
    creator,
    designs,
    fcc,
    hr,
    ideas,
    mobile,
    web,
    contact,
    skills,
    about,
  } from "../assets";

  export const navLinks = [
    { id: "about",       title: "About"       },
    { id: "achievement", title: "Achievement" },
    { id: "contact",     title: "Contact"     },
  ];

  const services = [
    { title: "Frontend Development", icon: web     },
    { title: "Backend Development",  icon: mobile  },
    { title: "Database Management",  icon: backend },
    { title: "Cloud & DevOps",       icon: creator },
  ];

  const achievements = [
    {
      title: ["FreeCodeCamp"],
      company_name: "freeCodeCamp",
      icon: fcc, iconBg: "#383E56", date: "May 2024",
      points: ["Responsive Web Design", "JavaScript"],
      credential: [
        "https://freecodecamp.org/certification/goatshuman/responsive-web-design",
        "https://freecodecamp.org/certification/goatshuman/javascript-algorithms-and-data-structures",
      ],
    },
    {
      title: ["HackerRank"],
      company_name: "HackerRank",
      icon: hr, iconBg: "#E6DEDD", date: "Apr 2025",
      points: ["Python (Basic)", "SQL (Basic)", "CSS (Basic)", "Go (Basic)"],
      credential: [
        "https://www.hackerrank.com/certificates/b011ba865ccf",
        "https://www.hackerrank.com/certificates/633d92ea00fe",
        "https://www.hackerrank.com/certificates/c9bfa3c0b9e7",
        "https://www.hackerrank.com/certificates/b5ee5bc85229",
      ],
    },
    {
      title: ["Certiport"],
      company_name: "Certiport",
      icon: cp, iconBg: "#383E56", date: "2024",
      points: ["IT Fundamentals"],
      credential: ["#"],
    },
    {
      title: ["Coursera"],
      company_name: "Coursera",
      icon: coursera, iconBg: "#E6DEDD", date: "2024",
      points: ["Web Development Fundamentals"],
      credential: ["#"],
    },
  ];

  export const projects = [
    {
      name: "Snapvault",
      description: "A photography portfolio platform to showcase and manage photos with a clean, minimal gallery layout. Built for visual storytelling with smooth image transitions.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "tailwindcss", color: "pink-text-gradient" },
        { name: "vite", color: "green-text-gradient" },
      ],
      image: snapvault,
      images: [snapvault],
      source_code_link: "https://github.com/goatshuman/snapvault",
      live_link: "https://snapvault.vercel.app",
      tech: ["React", "Tailwind CSS", "Vite"],
      overview: "Snapvault is a photography portfolio app designed for visual storytelling. It features a minimal gallery interface with smooth transitions, responsive design for all devices, and an intuitive image management flow. Perfect for photographers and creatives.",
    },
    {
      name: "Luminary Cafe",
      description: "An immersive cafe web experience with atmospheric design, menu showcase, and ambient visual elements that bring the cafe ambiance to life online.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "framer-motion", color: "pink-text-gradient" },
        { name: "tailwindcss", color: "green-text-gradient" },
      ],
      image: luminary,
      images: [luminary],
      source_code_link: "https://github.com/goatshuman/luminary-cafe",
      live_link: "https://luminary-cafe.vercel.app",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      overview: "Luminary Cafe is an immersive web experience for a modern cafe brand. It features rich visual design with atmospheric gradients, smooth Framer Motion animations, a full menu showcase, and a cozy ambient aesthetic that makes the brand come alive online.",
    },
    {
      name: "Nexa Tasks",
      description: "A sleek productivity and task management application with drag-and-drop boards, priority tracking, and a clean dark-themed interface for maximum focus.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "typescript", color: "pink-text-gradient" },
        { name: "shadcn", color: "green-text-gradient" },
      ],
      image: nexa,
      images: [nexa],
      source_code_link: "https://github.com/goatshuman/nexa-tasks",
      live_link: "https://nexa-tasks.vercel.app",
      tech: ["React", "TypeScript", "ShadCN UI"],
      overview: "Nexa Tasks is a modern task management app built for productivity. It features drag-and-drop task boards, priority levels, due dates, and a distraction-free dark interface. Built with TypeScript for type safety and ShadCN UI for a polished component library.",
    },
    {
      name: "Fitpulse",
      description: "A fitness tracking dashboard that monitors workouts, progress metrics, and health stats with interactive charts and personalized goal setting.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "recharts", color: "pink-text-gradient" },
        { name: "tailwindcss", color: "green-text-gradient" },
      ],
      image: fitpulse,
      images: [fitpulse],
      source_code_link: "https://github.com/goatshuman/fitpulse",
      live_link: "https://fitpulse.vercel.app",
      tech: ["React", "Recharts", "Tailwind CSS"],
      overview: "Fitpulse is a fitness tracking dashboard that helps users monitor their workout progress, set health goals, and visualize stats through interactive Recharts graphs. Features a clean dark UI, workout logging, and personal progress milestones.",
    },
    {
      name: "Buildflow",
      description: "A project management and workflow tool that helps teams organize tasks, track milestones, and collaborate efficiently with Kanban-style boards.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "typescript", color: "pink-text-gradient" },
        { name: "express", color: "green-text-gradient" },
      ],
      image: buildflow,
      images: [buildflow],
      source_code_link: "https://github.com/goatshuman/buildflow",
      live_link: "https://buildflow.vercel.app",
      tech: ["React", "TypeScript", "Express"],
      overview: "Buildflow is a full-stack project management platform with Kanban-style boards, milestone tracking, and team collaboration features. Built with React and TypeScript on the frontend and Express on the backend, it streamlines project workflows from idea to delivery.",
    },
  ];

  export const words = [
    { text: "Ideas" },
    { text: "into" },
    { text: "Interfaces." },
  ];

  export { services, achievements };
  