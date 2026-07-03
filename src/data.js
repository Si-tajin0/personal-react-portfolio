export const products = [
  {
    id: 1,
    title: "Sami & Mahi Tower - Premium PMS",
    img: "https://i.ibb.co.com/1Ybr1Ysf/Sami-Mahi-Tower-07-03-2026-07-15-PM.png", // আপনার স্ক্রিনশট লিঙ্ক দিন
    link: "https://sami-mahi-tower-jifo.vercel.app/",
    github: "https://github.com/Si-tajin0/sami-mahi-tower",
    category: "mern",
    tech: ["Next.js 15", "TypeScript", "MongoDB", "Tailwind CSS", "Cloudinary"],
    description:
      "A high-end Property Management System (PMS) featuring a sleek Glassmorphism UI. It provides dedicated, role-based portals for Owners, Managers, and Tenants to streamline residential operations and financial tracking.",
    challenges:
      "Designing a hybrid responsive layout that switches between complex data tables on desktop and sleek menu cards on mobile, while managing real-time financial analytics across different user roles.",
    solutions:
      "Leveraged Next.js 15 App Router with advanced React hooks (useMemo, useCallback) for performance. Integrated jsPDF for automated receipt generation and implemented a PWA-ready architecture for standalone mobile use.",
    features: [
      "Interactive Building Occupancy Map",
      "Financial Analytics & Charts",
      "Automated WhatsApp Rent Reminders",
      "Digital PDF Receipt Generation",
      "Standalone PWA App Support",
    ],
  },
  {
    id: 2,
    title: "ENT Gadget - Premium Tech Store",
    img: "https://i.ibb.co.com/KjZFhWmK/ENT-Gadget-Premium-Tech-Gadget-Store-in-Bangladesh-07-03-2026-07-16-PM.png", // আপনার স্ক্রিনশট লিঙ্ক দিন
    link: "https://ent-gadget.vercel.app/",
    github: "https://github.com/Si-tajin0/ent-gadget",
    category: "mern",
    tech: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Nodemailer"],
    description:
      "A luxury tech e-commerce platform with a 'Red & Black' aesthetic. It features a fully synchronized real-time database, an advanced checkout system with advance payment logic, and a professional order management dashboard.",
    challenges:
      "Creating a duplicate-free dynamic cart that syncs across LocalStorage and MongoDB, and implementing a secure COD advance payment verification system with automated email triggers.",
    solutions:
      "Integrated MongoDB Atlas for persistent storage and Nodemailer for professional HTML invoice dispatch. Used the 'Unbounded' typeface and Framer Motion to maintain a high-end luxury brand feel.",
    features: [
      "Real-time Order Tracking System",
      "Advanced Coupon & Shipping Logic",
      "Automated PDF Invoice Generation",
      "Admin Inventory Dashboard",
      "Secure Role-based Authentication",
    ],
  },
  {
    id: 3,
    title: "XID Architect - Portfolio",
    img: "https://i.ibb.co.com/Kxk4kdh8/XID-Architect-Innovative-interior-architecture-07-03-2026-07-35-PM.png", // আপনার স্ক্রিনশট লিঙ্ক দিন
    link: "https://xidarchitect.com/",
    github: "",
    category: "wordpress",
    tech: ["WordPress", "Elementor", "Custom PHP", "CSS"],
    description:
      "A sophisticated digital portfolio for a premier architectural and interior design firm. The site focuses on minimalist aesthetics, high-quality visual storytelling, and seamless navigation to showcase large-scale projects.",
    challenges:
      "Managing high-resolution architectural image galleries while maintaining fast load times and creating custom interactive hover effects for service showcases.",
    solutions:
      "Implemented advanced asset optimization and lazy-loading techniques. Used custom PHP hooks and CSS to extend Elementor’s default capabilities for a unique, high-end architectural feel.",
    features: [
      "High-Definition Project Showcase",
      "Infinite Scroll Gallery",
      "Custom Service Detail Pages",
      "SEO-Optimized Performance",
      "Responsive Portfolio Grid",
    ],
  },
];
