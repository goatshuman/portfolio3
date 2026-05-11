import {
    neuralnet,
    neuralnet1,
    neuralnet2,
    neuralnet3,
    neuralnet4,
    astroPixel,
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
    mobile,
    novalearn,
    ponggame,
    portfolio,
    web,
    astroPixel1,
    astroPixel2,
    astroPixel3,
    malariadetectionsystem1,
    malariadetectionsystem2,
    contact,
    skills,
    about,
    novalearn1,
    novalearn2,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "achievement",
      title: "Achievement",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Frontend Development",
      icon: web,
    },
    {
      title: "Backend Development",
      icon: mobile,
    },
    {
      title: "Database Management",
      icon: backend,
    },
    {
      title: "Cloud & DevOps",
      icon: creator,
    },
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
      name: "FitPulse",
      description:
        "Fitness tracker landing page with a sleek, modern design. Built with smooth animations and a responsive layout to showcase health and wellness features effectively.",
      tags: [
        { name: "React", color: "blue-text-gradient" },
        { name: "TailwindCSS", color: "green-text-gradient" },
        { name: "JavaScript", color: "pink-text-gradient" },
      ],
      image: "https://opengraph.githubassets.com/1/goatshuman/fitpulse",
      images: ["https://opengraph.githubassets.com/1/goatshuman/fitpulse"],
      source_code_link: "https://github.com/goatshuman/fitpulse",
      live_demo_link: "",
      metrics: { stars: 12, forks: 3, views: "240" },
      features: [
        "Responsive fitness tracker landing page",
        "Smooth scroll animations",
        "Modern health-focused UI design",
        "Mobile-first layout",
        "Feature showcase sections",
        "Clean component architecture",
      ],
    },
    {
      name: "BuildFlow",
      description:
        "Developer productivity platform landing page with professional SaaS-style design, feature breakdowns, pricing sections, and smooth user experience.",
      tags: [
        { name: "React", color: "blue-text-gradient" },
        { name: "TypeScript", color: "green-text-gradient" },
        { name: "TailwindCSS", color: "pink-text-gradient" },
      ],
      image: "https://opengraph.githubassets.com/1/goatshuman/buildflow",
      images: ["https://opengraph.githubassets.com/1/goatshuman/buildflow"],
      source_code_link: "https://github.com/goatshuman/buildflow",
      live_demo_link: "",
      metrics: { stars: 8, forks: 2, views: "180" },
      features: [
        "SaaS-style developer productivity platform",
        "Feature breakdown sections",
        "Pricing component design",
        "Clean TypeScript architecture",
        "Responsive across all devices",
        "Professional B2B design language",
      ],
    },
    {
      name: "Luminary Cafe",
      description:
        "Elegant cafe and restaurant website with a warm, inviting design. Showcases menu, ambiance, and reservation capabilities with beautiful food photography layout.",
      tags: [
        { name: "React", color: "blue-text-gradient" },
        { name: "SCSS", color: "green-text-gradient" },
        { name: "JavaScript", color: "pink-text-gradient" },
      ],
      image: "https://opengraph.githubassets.com/1/goatshuman/luminary-cafe",
      images: ["https://opengraph.githubassets.com/1/goatshuman/luminary-cafe"],
      source_code_link: "https://github.com/goatshuman/luminary-cafe",
      live_demo_link: "",
      metrics: { stars: 15, forks: 4, views: "320" },
      features: [
        "Elegant cafe and restaurant design",
        "Menu showcase with beautiful layouts",
        "Reservation section integration",
        "Warm inviting color palette",
        "Food photography-first design",
        "Fully responsive mobile layout",
      ],
    },
    {
      name: "Nexa Tasks",
      description:
        "Task management SaaS landing page with a modern, productivity-focused design, clean UI components, feature highlights, and a compelling call-to-action flow.",
      tags: [
        { name: "React", color: "blue-text-gradient" },
        { name: "TypeScript", color: "green-text-gradient" },
        { name: "TailwindCSS", color: "violet-text-gradient" },
      ],
      image: "https://opengraph.githubassets.com/1/goatshuman/nexa-tasks",
      images: ["https://opengraph.githubassets.com/1/goatshuman/nexa-tasks"],
      source_code_link: "https://github.com/goatshuman/nexa-tasks",
      live_demo_link: "",
      metrics: { stars: 10, forks: 2, views: "210" },
      features: [
        "Task management SaaS landing page",
        "Modern productivity-focused design",
        "Feature highlights with animations",
        "Compelling CTA flow",
        "Clean TypeScript codebase",
        "Responsive grid layouts",
      ],
    },
    {
      name: "SnapVault",
      description:
        "Photography portfolio website with a minimalist, gallery-focused design. Showcases photography work with smooth transitions, lightbox views, and an elegant presentation.",
      tags: [
        { name: "React", color: "blue-text-gradient" },
        { name: "JavaScript", color: "green-text-gradient" },
        { name: "CSS", color: "pink-text-gradient" },
      ],
      image: "https://opengraph.githubassets.com/1/goatshuman/snapvault",
      images: ["https://opengraph.githubassets.com/1/goatshuman/snapvault"],
      source_code_link: "https://github.com/goatshuman/snapvault",
      live_demo_link: "",
      metrics: { stars: 18, forks: 5, views: "400" },
      features: [
        "Photography portfolio with gallery layout",
        "Smooth image transitions",
        "Lightbox viewer integration",
        "Minimalist design aesthetic",
        "Elegant typography choices",
        "Mobile-responsive gallery grid",
      ],
    },
  ];

  const words = [
    { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
    {
      text: "Concepts",
      imgPath: concepts,
      font: "'Courier New', Courier, monospace",
    },
    {
      text: "Designs",
      imgPath: designs,
      font: "'Times New Roman', Times, serif",
    },
    { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
    {
      text: "Ideas",
      imgPath: ideas,
      font: "'Comic Sans MS', cursive, sans-serif",
    },
    { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
    { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
    { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
  ];

  export { achievements, projects, services, testimonials, words };
  