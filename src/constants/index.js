import {
    neuralnet,
    neuralnet1,
    neuralnet2,
    astroPixel,
    astroPixel1,
    astroPixel2,
    astroPixel3,
    backend,
    krypton,
    krypton1,
    krypton2,
    krypton3,
    krypton4,
    krypton5,
    krypton6,
    code,
    concepts,
    coursera,
    cp,
    creator,
    designs,
    fcc,
    hr,
    ideas,
    malariadetectionsystem,
    malariadetectionsystem1,
    malariadetectionsystem2,
    mobile,
    novalearn,
    novalearn1,
    novalearn2,
    ponggame,
    portfolio,
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
        "https://freecodecamp.org/certification/goatshuman/responsive-web-design",
      ],
    },
    {
      title: ["HackerRank"],
      company_name: "HackerRank",
      icon: hr, iconBg: "#E6DEDD", date: "Apr 2025",
      points: ["Python (Basic)","SQL (Basic)","CSS (Basic)","Go (Basic)"],
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
      icon: cp, iconBg: "#383E56", date: "Apr 2025",
      points: ["IT Specialist - HTML and CSS","IT Specialist - Databases"],
      credential: [
        "https://www.credly.com/badges/c59ff7d1-7af2-4dcb-8c57-d2bd6a6d1f44/linked_in_profile",
        "https://www.credly.com/badges/61128af2-38bc-4299-b862-157ba2ca2edb/linked_in_profile",
      ],
    },
    {
      title: ["Coursera"],
      company_name: "Coursera",
      icon: coursera, iconBg: "#0056d2", date: "Jul 2025",
      points: ["IBM Full Stack Software Developer"],
      credential: ["https://coursera.org/verify/professional-cert/8R7RY7URFI6O"],
    },
  ];

  const testimonials = [
    {
      testimonial: "I thought it was impossible to make a website as beautiful as our product, but Anshuman proved me wrong.",
      name: "Sara Lee", designation: "CFO", company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial: "I've never met a web developer who truly cares about their clients' success like Anshuman does.",
      name: "Chris Brown", designation: "COO", company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial: "Anshuman boosted our website traffic by 50% through his smart optimization. We are truly grateful!",
      name: "Lisa Wang", designation: "CTO", company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const projects = [
    {
      name: "FitPulse",
      description:
        "A modern fitness tracker landing page with sleek animations, workout tracking UI, and a responsive design built to convert. Showcases full-stack frontend skills with a health-focused theme.",
      tags: [
        { name: "React",      color: "blue-text-gradient"   },
        { name: "Tailwind",   color: "green-text-gradient"  },
        { name: "Framer",     color: "pink-text-gradient"   },
        { name: "TypeScript", color: "orange-text-gradient" },
      ],
      image: krypton,
      images: [krypton, krypton1, krypton2, krypton3, krypton4, krypton5, krypton6],
      source_code_link: "https://github.com/goatshuman/fitpulse",
      live_demo_link: "https://goatshuman.github.io/fitpulse/",
      metrics: { stars: 8, forks: 2, views: "520" },
      features: [
        "Responsive fitness tracker landing page",
        "Smooth scroll animations with Framer Motion",
        "Workout section with interactive UI cards",
        "Mobile-first design with Tailwind CSS",
        "Performance-optimized with Vite",
        "Clean, modern fitness brand aesthetic",
      ],
    },
    {
      name: "BuildFlow",
      description:
        "A developer productivity platform landing page with project management UI, sprint boards, and team collaboration features. Built to demonstrate enterprise-grade SaaS product design.",
      tags: [
        { name: "React",    color: "blue-text-gradient"   },
        { name: "Node.js",  color: "green-text-gradient"  },
        { name: "Tailwind", color: "pink-text-gradient"   },
        { name: "Vite",     color: "orange-text-gradient" },
      ],
      image: neuralnet,
      images: [neuralnet, neuralnet1, neuralnet2],
      source_code_link: "https://github.com/goatshuman/buildflow",
      live_demo_link: "https://goatshuman.github.io/buildflow/",
      metrics: { stars: 11, forks: 3, views: "680" },
      features: [
        "Developer productivity SaaS landing page",
        "Sprint board and project management UI",
        "Team collaboration feature showcases",
        "Dark-mode first design system",
        "Animated feature sections",
        "Enterprise pricing table",
      ],
    },
    {
      name: "Luminary Cafe",
      description:
        "A cafe and restaurant website with menu browsing, online reservations, and an elegant dark UI. Features parallax scrolling, custom animations, and a warm visual design.",
      tags: [
        { name: "HTML/CSS",   color: "blue-text-gradient"   },
        { name: "JavaScript", color: "green-text-gradient"  },
        { name: "GSAP",       color: "pink-text-gradient"   },
      ],
      image: astroPixel,
      images: [astroPixel, astroPixel1, astroPixel2, astroPixel3],
      source_code_link: "https://github.com/goatshuman/luminary-cafe",
      live_demo_link: "https://goatshuman.github.io/luminary-cafe/",
      metrics: { stars: 6, forks: 1, views: "390" },
      features: [
        "Cafe & restaurant website with menu UI",
        "Online reservation flow",
        "Parallax scrolling effects with GSAP",
        "Elegant warm dark theme",
        "Responsive across all devices",
        "Custom CSS animations",
      ],
    },
    {
      name: "Nexa Tasks",
      description:
        "A task management SaaS landing page with kanban board UI, productivity analytics previews, and team workspace features. Designed for modern remote teams.",
      tags: [
        { name: "React",      color: "blue-text-gradient"   },
        { name: "Tailwind",   color: "green-text-gradient"  },
        { name: "TypeScript", color: "pink-text-gradient"   },
      ],
      image: novalearn,
      images: [novalearn, novalearn1, novalearn2],
      source_code_link: "https://github.com/goatshuman/nexa-tasks",
      live_demo_link: "https://goatshuman.github.io/nexa-tasks/",
      metrics: { stars: 9, forks: 2, views: "450" },
      features: [
        "Task management SaaS landing page",
        "Kanban board UI showcase",
        "Productivity analytics previews",
        "Team workspace feature sections",
        "Modern gradient design system",
        "Smooth scroll animations",
      ],
    },
    {
      name: "SnapVault",
      description:
        "A photography portfolio website with gallery browsing, image lightbox, and a clean masonry layout. Built to showcase photographer work with stunning visual presentation.",
      tags: [
        { name: "React",    color: "blue-text-gradient"  },
        { name: "CSS Grid", color: "green-text-gradient" },
        { name: "Lightbox", color: "pink-text-gradient"  },
      ],
      image: malariadetectionsystem,
      images: [malariadetectionsystem, malariadetectionsystem1, malariadetectionsystem2],
      source_code_link: "https://github.com/goatshuman/snapvault",
      live_demo_link: "https://goatshuman.github.io/snapvault/",
      metrics: { stars: 7, forks: 1, views: "310" },
      features: [
        "Photography portfolio with masonry gallery",
        "Lightbox image viewer",
        "Smooth hover animations",
        "Category filter system",
        "Lazy-loading images for performance",
        "Fully responsive layout",
      ],
    },
    {
      name: "3D Portfolio",
      description:
        "A dynamic React portfolio with immersive 3D graphics, smooth Framer Motion animations, an interactive Spline keyboard, and Easter eggs. Built with Three.js and Spline.",
      tags: [
        { name: "React",         color: "blue-text-gradient"   },
        { name: "Three.js",      color: "green-text-gradient"  },
        { name: "Framer Motion", color: "pink-text-gradient"   },
        { name: "Spline",        color: "orange-text-gradient" },
      ],
      image: portfolio,
      images: [portfolio, about, skills, contact],
      source_code_link: "https://github.com/goatshuman/portfolio3",
      live_demo_link: "https://goatshuman.github.io/portfolio3/",
      metrics: { stars: 21, forks: 6, views: "1.4K" },
      features: [
        "Immersive 3D graphics with Three.js",
        "Interactive Spline 3D keyboard in Skills section",
        "Smooth scroll animations with Framer Motion",
        "Custom elastic cursor with physics",
        "Easter eggs and interactive elements",
        "Responsive across all devices",
      ],
    },
  ];

  const words = [
    { text: "Ideas",    imgPath: ideas,    font: "Arial, sans-serif"                    },
    { text: "Concepts", imgPath: concepts, font: "'Courier New', Courier, monospace"    },
    { text: "Designs",  imgPath: designs,  font: "'Times New Roman', Times, serif"      },
    { text: "Code",     imgPath: code,     font: "'Fira Mono', monospace"               },
    { text: "Ideas",    imgPath: ideas,    font: "'Comic Sans MS', cursive, sans-serif" },
    { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif"                 },
    { text: "Designs",  imgPath: designs,  font: "'Georgia', serif"                     },
    { text: "Code",     imgPath: code,     font: "'Source Code Pro', monospace"         },
  ];

  export { achievements, projects, services, testimonials, words };
  