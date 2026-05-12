import {
    neuralnet,
    neuralnet1,
    neuralnet2,
    neuralnet3,
    neuralnet4,
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
      points: ["Python (Basic) Certificate","SQL (Basic) Certificate","CSS (Basic) Certificate","Go (Basic) Certificate"],
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
      name: "NeuralNet",
      description:
        "A full-stack visual deep learning studio where you design neural networks with drag-and-drop nodes, compile to Keras, train with real TensorFlow metrics, and deploy secure prediction APIs.",
      tags: [
        { name: "react",      color: "ruby-text-gradient"   },
        { name: "Zustand",    color: "green-text-gradient"  },
        { name: "TensorFlow", color: "pink-text-gradient"   },
        { name: "Recharts",   color: "orange-text-gradient" },
      ],
      image: neuralnet,
      images: [neuralnet, neuralnet1, neuralnet2, neuralnet3, neuralnet4],
      source_code_link: "https://github.com/goatshuman",
      live_demo_link: "",
      metrics: { stars: 12, forks: 3, views: "1.2K" },
      features: [
        "Drag-and-drop layer nodes to design a model visually.",
        "Converts the visual graph into executable TensorFlow/Keras model code.",
        "Supports built-in datasets like MNIST, CIFAR-10, and custom uploads.",
        "View training metrics such as loss and accuracy over epochs.",
        "Deploy trained models as secure API endpoints.",
        "Send inference requests and view predictions from the UI.",
      ],
    },
    {
      name: "Krypton",
      description:
        "An AI-powered research assistant that searches arXiv and OpenAlex, ranks papers by relevance, recency, and citations, and generates summaries, insights, and research-gap analysis.",
      tags: [
        { name: "react",   color: "blue-text-gradient"   },
        { name: "fastapi", color: "pink-text-gradient"   },
        { name: "arxiv",   color: "green-text-gradient"  },
        { name: "jwt",     color: "orange-text-gradient" },
      ],
      image: krypton,
      images: [krypton, krypton1, krypton2, krypton3, krypton4, krypton5, krypton6],
      source_code_link: "https://github.com/goatshuman/Trade-Hub",
      live_demo_link: "",
      metrics: { stars: 18, forks: 5, views: "980" },
      features: [
        "Multi-source paper search across arXiv and OpenAlex.",
        "Intelligent ranking using relevance, recency, and citation scoring.",
        "AI-generated plain-English summaries and key contributions.",
        "Structured insight extraction: problem, method, result, limitation.",
        "Research gap analysis with thematic opportunity clusters.",
        "Personalized topic recommendations and goal-aware suggestions.",
      ],
    },
    {
      name: "AstroPixel",
      description:
        "A FastAPI + React platform for exploring NASA gigapixel imagery with deep zoom, annotations, and secure user/admin workflows. Ingests GeoTIFF files and generates tile pyramids with GDAL.",
      tags: [
        { name: "FastAPI",       color: "blue-text-gradient"   },
        { name: "GDAL",          color: "green-text-gradient"  },
        { name: "OpenSeadragon", color: "pink-text-gradient"   },
        { name: "PostgreSQL",    color: "orange-text-gradient" },
      ],
      image: astroPixel,
      images: [astroPixel, astroPixel1, astroPixel2, astroPixel3],
      source_code_link: "https://github.com/goatshuman",
      live_demo_link: "",
      metrics: { stars: 9, forks: 2, views: "640" },
      features: [
        "Deep zoom for gigapixel imagery",
        "Secure user authentication and admin workflows",
        "Annotation system for collaborative marking",
        "GeoTIFF file ingestion and tile pyramid generation",
        "Cloudflare R2 integration for scalable storage",
        "PostgreSQL database for persistent data",
      ],
    },
    {
      name: "Malaria Detection System",
      description:
        "AI-powered malaria detection system for hospitals with patient management, PDF report generation, and real-time analytics. Built with React, Supabase & FastAPI.",
      tags: [
        { name: "React",    color: "blue-text-gradient"   },
        { name: "Supabase", color: "green-text-gradient"  },
        { name: "FastAPI",  color: "pink-text-gradient"   },
        { name: "Keras",    color: "violet-text-gradient" },
      ],
      image: malariadetectionsystem,
      images: [malariadetectionsystem, malariadetectionsystem1, malariadetectionsystem2],
      source_code_link: "https://github.com/goatshuman",
      live_demo_link: "",
      metrics: { stars: 14, forks: 4, views: "870" },
      features: [
        "AI-powered malaria cell detection using Keras",
        "Patient management system",
        "Automated PDF report generation",
        "Real-time analytics dashboard",
        "Hospital workflow integration",
        "Secure data storage with Supabase",
      ],
    },
    {
      name: "Nova-Learn",
      description:
        "An AI-powered learning platform that creates personalized learning paths with interactive content and quizzes. Designed with a futuristic 3D UI for an immersive experience.",
      tags: [
        { name: "node",       color: "blue-text-gradient"   },
        { name: "spline",     color: "green-text-gradient"  },
        { name: "JavaScript", color: "pink-text-gradient"   },
        { name: "Flask",      color: "violet-text-gradient" },
      ],
      image: novalearn,
      images: [novalearn, novalearn1, novalearn2],
      source_code_link: "https://github.com/goatshuman",
      live_demo_link: "",
      metrics: { stars: 11, forks: 3, views: "760" },
      features: [
        "Personalized learning path generation",
        "Interactive 3D user interface with Spline",
        "Dynamic quiz generation",
        "Progress tracking and analytics",
        "Futuristic design system",
        "Mobile-responsive learning experience",
      ],
    },
    {
      name: "Multiplayer Pong Game",
      description:
        "Multiplayer Pong Game with three modes: play with a friend online, side-by-side on the same screen, or challenge an AI opponent. Classic Pong with modern multiplayer via WebSockets.",
      tags: [
        { name: "socket.io",  color: "blue-text-gradient"  },
        { name: "express",    color: "green-text-gradient" },
        { name: "JavaScript", color: "pink-text-gradient"  },
      ],
      image: ponggame,
      images: [ponggame],
      source_code_link: "https://github.com/goatshuman",
      live_demo_link: "",
      metrics: { stars: 7, forks: 1, views: "420" },
      features: [
        "Real-time multiplayer gameplay via WebSocket",
        "Three game modes: Online, Local co-op, and AI",
        "Responsive controls and smooth physics",
        "Score tracking system",
        "AI opponent with adjustable difficulty",
        "Low-latency networking with Express.js",
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
  