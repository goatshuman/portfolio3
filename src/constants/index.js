import {
    luminary,
    nexa,
    fitpulse,
    buildflow,
    snapvault,
    backend,
    creator,
    mobile,
    web,
  } from "../assets";

  export const navLinks = [
    { id: "about",   title: "About"    },
    { id: "work",    title: "Projects" },
    { id: "contact", title: "Contact"  },
  ];

  const services = [
    { title: "Frontend Development", icon: web     },
    { title: "Backend Development",  icon: mobile  },
    { title: "Database Management",  icon: backend },
    { title: "Cloud & DevOps",       icon: creator },
  ];

  export const testimonials = [];

  export const achievements = [];

  export const projects = [
    {
      name: "Snapvault",
      description: "A photography portfolio platform to showcase and manage photos with a clean, minimal gallery layout. Built for visual storytelling with smooth image transitions.",
      tags: [
        { name: "react",        color: "blue-text-gradient"  },
        { name: "tailwindcss",  color: "pink-text-gradient"  },
        { name: "vite",         color: "green-text-gradient" },
      ],
      image: snapvault,
      images: [snapvault],
      source_code_link: "https://github.com/goatshuman/snapvault",
      live_link: "https://snapvault.vercel.app",
      tech: ["React", "Tailwind CSS", "Vite"],
      overview: "Snapvault is a photography portfolio app designed for visual storytelling. Minimal gallery interface, smooth transitions, and responsive design for all devices.",
    },
    {
      name: "Luminary Cafe",
      description: "An immersive cafe web experience with atmospheric design, menu showcase, and ambient visual elements that bring the cafe ambiance to life online.",
      tags: [
        { name: "react",         color: "blue-text-gradient"  },
        { name: "framer-motion", color: "pink-text-gradient"  },
        { name: "tailwindcss",   color: "green-text-gradient" },
      ],
      image: luminary,
      images: [luminary],
      source_code_link: "https://github.com/goatshuman/luminary-cafe",
      live_link: "https://luminary-cafe.vercel.app",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      overview: "Luminary Cafe is an immersive web experience for a modern cafe brand. Rich visual design, smooth Framer Motion animations, and a cozy ambient aesthetic.",
    },
    {
      name: "Nexa Tasks",
      description: "A sleek productivity and task management application with drag-and-drop boards, priority tracking, and a clean dark-themed interface for maximum focus.",
      tags: [
        { name: "react",      color: "blue-text-gradient"  },
        { name: "typescript", color: "pink-text-gradient"  },
        { name: "shadcn",     color: "green-text-gradient" },
      ],
      image: nexa,
      images: [nexa],
      source_code_link: "https://github.com/goatshuman/nexa-tasks",
      live_link: "https://nexa-tasks.vercel.app",
      tech: ["React", "TypeScript", "ShadCN UI"],
      overview: "Nexa Tasks is a modern task management app. Drag-and-drop boards, priority levels, due dates, and a distraction-free dark UI with TypeScript and ShadCN.",
    },
    {
      name: "Fitpulse",
      description: "A fitness tracking dashboard that monitors workouts, progress metrics, and health stats with interactive charts and personalized goal setting.",
      tags: [
        { name: "react",       color: "blue-text-gradient"  },
        { name: "recharts",    color: "pink-text-gradient"  },
        { name: "tailwindcss", color: "green-text-gradient" },
      ],
      image: fitpulse,
      images: [fitpulse],
      source_code_link: "https://github.com/goatshuman/fitpulse",
      live_link: "https://fitpulse.vercel.app",
      tech: ["React", "Recharts", "Tailwind CSS"],
      overview: "Fitpulse is a fitness tracking dashboard for monitoring progress, setting health goals, and visualizing stats through interactive Recharts graphs.",
    },
    {
      name: "Buildflow",
      description: "A project management and workflow tool that helps teams organize tasks, track milestones, and collaborate efficiently with Kanban-style boards.",
      tags: [
        { name: "react",      color: "blue-text-gradient"  },
        { name: "typescript", color: "pink-text-gradient"  },
        { name: "express",    color: "green-text-gradient" },
      ],
      image: buildflow,
      images: [buildflow],
      source_code_link: "https://github.com/goatshuman/buildflow",
      live_link: "https://buildflow.vercel.app",
      tech: ["React", "TypeScript", "Express"],
      overview: "Buildflow is a full-stack project management platform with Kanban boards, milestone tracking, and team collaboration. Built with React, TypeScript and Express.",
    },
  ];

  export const words = [
    { text: "Ideas"       },
    { text: "into"        },
    { text: "Interfaces." },
  ];

  export { services };
  