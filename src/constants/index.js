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
    { title: "Frontend Development",  icon: web     },
    { title: "Backend Development",   icon: mobile  },
    { title: "Database Management",   icon: backend },
    { title: "Cloud & DevOps",        icon: creator },
  ];

  const achievements = [
    {
      title: ["FreeCodeCamp"],
      company_name: "freeCodeCamp",
      icon: fcc,
      iconBg: "#383E56",
      date: "May 2024",
      points: ["Responsive Web Design", "JavaScript"],
      credential: [
        "https://freecodecamp.org/certification/Jayant-1/responsive-web-design",
        "https://freecodecamp.org/certification/Jayant-1/responsive-web-design",
      ],
    },
    {
      title: ["HackerRank"],
      company_name: "HackerRank",
      icon: hr,
      iconBg: "#E6DEDD",
      date: "Apr 2025",
      points: [
        "Python (Basic) Certificate",
        "SQL (Basic) Certificate",
        "CSS (Basic) Certificate",
        "Go (Basic) Certificate",
      ],
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
      icon: cp,
      iconBg: "#383E56",
      date: "Apr 2025",
      points: ["IT Specialist - HTML and CSS", "IT Specialist - Databases"],
      credential: [
        "https://www.credly.com/badges/c59ff7d1-7af2-4dcb-8c57-d2bd6a6d1f44/linked_in_profile",
        "https://www.credly.com/badges/61128af2-38bc-4299-b862-157ba2ca2edb/linked_in_profile",
      ],
    },
    {
      title: ["Coursera"],
      company_name: "Coursera",
      icon: coursera,
      iconBg: "#0056d2",
      date: "Jul 2025",
      points: ["IBM Full Stack Software Developer"],
      credential: ["https://coursera.org/verify/professional-cert/8R7RY7URFI6O"],
    },
  ];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Anshuman proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Anshuman does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Anshuman boosted our website traffic by 50% through his smart optimization. We are truly grateful!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const projects = [
    {
      name: "NovaLearn",
      description:
        "A modern e-learning platform built with React and Node.js. Features course management, real-time progress tracking, interactive quizzes, and a clean dashboard for students and instructors.",
      tags: [
        { name: "React",     color: "blue-text-gradient"  },
        { name: "Node.js",   color: "green-text-gradient" },
        { name: "MongoDB",   color: "pink-text-gradient"  },
      ],
      image: novalearn,
      images: [novalearn, novalearn1, novalearn2],
      source_code_link: "https://github.com/goatshuman",
      live_demo_link: "",
      features: [
        "Course creation and management",
        "Real-time progress tracking",
        "Interactive quiz system",
        "Student & instructor dashboards",
        "Responsive across all devices",
        "Clean modern UI design",
      ],
    },
    {
      name: "NeuralNet Visualizer",
      description:
        "An interactive neural network visualizer that lets users build and observe neural network architectures in real time. Built with vanilla JavaScript and custom canvas rendering.",
      tags: [
        { name: "JavaScript", color: "blue-text-gradient"  },
        { name: "Canvas API", color: "green-text-gradient" },
        { name: "HTML/CSS",   color: "pink-text-gradient"  },
      ],
      image: neuralnet,
      images: [neuralnet, neuralnet1, neuralnet2, neuralnet3, neuralnet4],
      source_code_link: "https://github.com/goatshuman",
      live_demo_link: "",
      features: [
        "Real-time neural network visualization",
        "Drag-and-drop layer configuration",
        "Custom canvas rendering engine",
        "Forward propagation animation",
        "Configurable node counts",
        "Dark-themed UI",
      ],
    },
    {
      name: "Malaria Detection AI",
      description:
        "A machine learning project that detects malaria from blood cell microscopy images using a trained CNN model. Achieved 95%+ accuracy on test data with Python and TensorFlow.",
      tags: [
        { name: "Python",     color: "blue-text-gradient"  },
        { name: "TensorFlow", color: "green-text-gradient" },
        { name: "OpenCV",     color: "pink-text-gradient"  },
      ],
      image: malariadetectionsystem,
      images: [malariadetectionsystem, malariadetectionsystem1, malariadetectionsystem2],
      source_code_link: "https://github.com/goatshuman",
      live_demo_link: "",
      features: [
        "95%+ accuracy CNN model",
        "Blood cell image classification",
        "Real-time inference pipeline",
        "Grad-CAM heatmap visualization",
        "Data augmentation pipeline",
        "Flask API for model serving",
      ],
    },
    {
      name: "AstroPixel",
      description:
        "A pixel art editor and gallery app for creating and sharing space-themed artwork. Supports layered drawing, palette management, animation frames, and one-click export.",
      tags: [
        { name: "React",      color: "blue-text-gradient"  },
        { name: "Canvas API", color: "green-text-gradient" },
        { name: "Firebase",   color: "pink-text-gradient"  },
      ],
      image: astroPixel,
      images: [astroPixel, astroPixel1, astroPixel2, astroPixel3],
      source_code_link: "https://github.com/goatshuman",
      live_demo_link: "",
      features: [
        "Pixel art editor with layers",
        "Space-themed palette collections",
        "Animation frame support",
        "Gallery sharing with Firebase",
        "PNG export at 1x–8x scale",
        "Undo/redo history",
      ],
    },
    {
      name: "Krypton",
      description:
        "A full-featured cryptocurrency dashboard with live price feeds, portfolio tracking, and market analytics. Built with React, Chart.js, and the CoinGecko API for real-time data.",
      tags: [
        { name: "React",      color: "blue-text-gradient"  },
        { name: "Chart.js",   color: "green-text-gradient" },
        { name: "CoinGecko",  color: "pink-text-gradient"  },
      ],
      image: krypton,
      images: [krypton, krypton1, krypton2, krypton3, krypton4, krypton5, krypton6],
      source_code_link: "https://github.com/goatshuman/Trade-Hub",
      live_demo_link: "",
      features: [
        "Live crypto price feeds",
        "Portfolio value tracking",
        "Interactive candlestick charts",
        "Top movers leaderboard",
        "Market cap & volume analytics",
        "Responsive dark-mode UI",
      ],
    },
    {
      name: "Pong Game",
      description:
        "A classic Pong arcade game recreation with smooth physics, AI opponent, score tracking, and increasing difficulty. Built entirely with vanilla JavaScript and the HTML5 Canvas API.",
      tags: [
        { name: "JavaScript", color: "blue-text-gradient"  },
        { name: "Canvas API", color: "green-text-gradient" },
        { name: "HTML/CSS",   color: "pink-text-gradient"  },
      ],
      image: ponggame,
      images: [ponggame],
      source_code_link: "https://github.com/goatshuman",
      live_demo_link: "",
      features: [
        "Classic Pong gameplay",
        "AI opponent with adaptive difficulty",
        "Smooth collision physics",
        "Score tracking system",
        "Increasing ball speed",
        "Keyboard and touch controls",
      ],
    },
  ];

  const words = [
    { text: "Ideas",    imgPath: ideas,    font: "Arial, sans-serif"                      },
    { text: "Concepts", imgPath: concepts, font: "'Courier New', Courier, monospace"      },
    { text: "Designs",  imgPath: designs,  font: "'Times New Roman', Times, serif"        },
    { text: "Code",     imgPath: code,     font: "'Fira Mono', monospace"                 },
    { text: "Ideas",    imgPath: ideas,    font: "'Comic Sans MS', cursive, sans-serif"   },
    { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif"                   },
    { text: "Designs",  imgPath: designs,  font: "'Georgia', serif"                       },
    { text: "Code",     imgPath: code,     font: "'Source Code Pro', monospace"           },
  ];

  export { achievements, projects, services, testimonials, words };
  