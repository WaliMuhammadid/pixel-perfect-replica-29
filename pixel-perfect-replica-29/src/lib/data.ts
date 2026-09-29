export const projectsData = [
  {
    slug: "veloce",
    title: "Veloce",
    category: "Luxury Automotive",
    tags: ["Next.js", "WebGL", "GSAP"],
    image: "bg-gradient-to-br from-neutral-800 to-neutral-900",
    overview: "A highly immersive, cinematic web experience for a luxury automotive brand, featuring real-time 3D car configurators.",
    challenge: "Creating a photorealistic 3D car configurator that runs at 60fps on mobile devices.",
    solution: "We leveraged React Three Fiber with custom compressed glTF models and heavily optimized shaders to deliver unparalleled visual fidelity without sacrificing performance.",
    tech: ["Next.js", "React Three Fiber", "GSAP", "Tailwind CSS"],
    results: ["120% increase in time on site", "45% increase in configuration completions", "FWA of the Day"]
  },
  {
    slug: "gymhelp",
    title: "GymHelp",
    category: "Fitness Platform",
    tags: ["React Native", "Node.js", "AI"],
    image: "bg-gradient-to-br from-indigo-500 to-purple-900",
    overview: "A comprehensive fitness ecosystem combining a user-facing mobile app with a powerful management dashboard for gym owners.",
    challenge: "Handling real-time class bookings and complex personalized workout generation.",
    solution: "Implemented a robust GraphQL backend with Node.js and an AI engine for generating tailored fitness plans.",
    tech: ["React Native", "GraphQL", "Node.js", "OpenAI API"],
    results: ["50k+ active users", "Reduced booking no-shows by 30%", "Top 10 Health & Fitness app"]
  },
  {
    slug: "aetheris",
    title: "Aetheris",
    category: "NFT Marketplace",
    tags: ["Web3", "Next.js", "Solidity"],
    image: "bg-gradient-to-br from-emerald-400 to-cyan-900",
    overview: "A next-generation NFT marketplace focusing on generative art and exclusive digital collectibles.",
    challenge: "Ensuring secure, low-latency transactions and real-time bidding updates.",
    solution: "Built on a custom smart contract architecture with a highly responsive frontend consuming WebSockets.",
    tech: ["Next.js", "Solidity", "Ethers.js", "Framer Motion"],
    results: ["$2M+ in trading volume in Q1", "0 security breaches", "Featured in Web3 Weekly"]
  },
  {
    slug: "nexus-vr",
    title: "Nexus VR",
    category: "Immersive Web",
    tags: ["WebXR", "Three.js", "React"],
    image: "bg-gradient-to-br from-orange-500 to-red-900",
    overview: "A browser-based virtual reality platform for remote collaboration and interactive presentations.",
    challenge: "Creating a seamless cross-device VR experience accessible directly from the browser.",
    solution: "Utilized WebXR and Three.js to build lightweight, immersive environments that gracefully degrade on non-VR devices.",
    tech: ["WebXR", "Three.js", "React", "WebRTC"],
    results: ["Adopted by 5 Fortune 500 companies", "200% increase in remote engagement", "Webby Award Nominee"]
  }
];

export const productsData = [
  {
    slug: "vtro",
    name: "VTRO",
    description: "Virtual try-on API and WordPress plugin for fashion and eyewear brands.",
    status: "Live",
    features: ["Real-time AR face tracking", "Easy WooCommerce integration", "Analytics dashboard"],
    image: "bg-gradient-to-br from-blue-900 to-blue-950"
  },
  {
    slug: "iron-pulse",
    name: "Iron Pulse",
    description: "The ultimate gym management SaaS for modern fitness centers.",
    status: "Beta",
    features: ["Member management", "Automated billing", "Class scheduling", "Access control integration"],
    image: "bg-gradient-to-br from-zinc-800 to-black"
  },
  {
    slug: "beast-fit-ai",
    name: "BEAST-FIT AI",
    description: "AI-powered fitness and nutrition app tailored for the Pakistani market.",
    status: "Coming Soon",
    features: ["Localized diet plans", "Urdu language support", "AI form correction", "Community challenges"],
    image: "bg-gradient-to-br from-green-900 to-emerald-950"
  }
];

export const roadmapData = [
  {
    quarter: "Q1 2026",
    title: "Iron Pulse Public Launch",
    description: "Moving Iron Pulse out of beta and launching globally with full hardware integration support."
  },
  {
    quarter: "Q2 2026",
    title: "Softadex AI Division",
    description: "Opening a dedicated division for enterprise LLM integration and custom AI agents."
  },
  {
    quarter: "Q3 2026",
    title: "VTRO 2.0",
    description: "Next-generation AR tracking with full-body support and virtual changing rooms."
  },
  {
    quarter: "Q4 2026",
    title: "BEAST-FIT AI Release",
    description: "Launch of our flagship fitness app targeting 1 million downloads in South Asia."
  },
  {
    quarter: "2027",
    title: "Global Expansion",
    description: "Opening new offices in Dubai and London to serve our growing international client base."
  },
  {
    quarter: "2028",
    title: "Web3 & Spatial Computing",
    description: "Launching our proprietary spatial computing framework for the next generation of the web."
  }
];

export const servicesData = [
  {
    title: "Web Development",
    description: "High-performance, accessible, and cinematic web experiences built with Next.js, WebGL, and modern headless architectures.",
    deliverables: ["Corporate Websites", "E-Commerce Platforms", "Web Applications", "3D & WebGL Experiences"]
  },
  {
    title: "Mobile App Development",
    description: "Native-feeling React Native and Flutter applications that dominate the App Store and Google Play.",
    deliverables: ["iOS Apps", "Android Apps", "Cross-Platform Solutions", "App Store Optimization"]
  },
  {
    title: "UI/UX & Product Design",
    description: "Award-winning interface design that converts users into loyal brand advocates.",
    deliverables: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"]
  },
  {
    title: "Graphic Design & Branding",
    description: "Crafting memorable visual identities that resonate with your target audience.",
    deliverables: ["Logo Design", "Brand Guidelines", "Marketing Collateral", "Motion Graphics"]
  },
  {
    title: "AI Solutions & Automation",
    description: "Seamless integration of LLMs and machine learning models to supercharge your business processes.",
    deliverables: ["Custom AI Agents", "Workflow Automation", "Predictive Analytics", "NLP Integration"]
  },
  {
    title: "Maintenance & DevOps",
    description: "Ensuring your digital products remain secure, fast, and highly available around the clock.",
    deliverables: ["Cloud Architecture", "CI/CD Pipelines", "24/7 Monitoring", "Security Audits"]
  }
];
