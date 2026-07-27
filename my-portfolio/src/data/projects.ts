import letsbuiltImg from "../assets/projects/letsbuilt.png";
import neuralchatbotImg from "../assets/projects/chatbotneural.png";
import deskflowImg from "../assets/projects/deskflow.png";
import furnitureStoreImg from "../assets/projects/furniture-store.png";

export const PROJECTS = [
  {
    n: "01",
    title: "LetsBuilt",
    year: "2026",
    tag: "SaaS / Full Stack",
    desc: "Full-stack construction management platform with secure authentication, type-safe data validation, and a responsive UI.",
    stack: ["Next.js", "TypeScript", "Clerk", "Drizzle ORM", "Neon PostgreSQL", "Tailwind CSS"],
    href: "https://letsbuilt.vercel.app",
    repo: "https://github.com/XHassan2003/letsbuilt",
    image: letsbuiltImg,
  },
  {
    n: "02",
    title: "NeuralChatbot",
    year: "2026",
    tag: "AI / Chatbot",
    desc: "AI-powered chatbot with real-time conversational responses, a responsive chat interface, and efficient API integration.",
    stack: ["React", "Vite", "OpenAI API", "Tailwind CSS"],
    href: "https://chatbot-neural.vercel.app",
    repo: "https://github.com/XHassan2003/chatbot-neural",
    image: neuralchatbotImg,
  },
  {
    n: "03",
    title: "DeskFlow",
    year: "2026",
    tag: "Full Stack / Booking",
    desc: "Coworking space booking platform built on the MERN stack with secure authentication, RESTful APIs, and seamless reservations.",
    stack: ["MongoDB", "Express", "React", "Node"],
    href: "https://deskflow-toi6.vercel.app",
    repo: "https://github.com/XHassan2003/deskflow",
    image: deskflowImg,
  },
  {
    n: "04",
    title: "The Furniture Store",
    year: "2026",
    tag: "E-Commerce / Next.js",
    desc: "Full-featured furniture e-commerce storefront with category and attribute filtering, search, sort, a shopping cart, Sanity CMS-driven product catalog, and an AI shopping assistant.",
    stack: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind CSS"],
    href: "https://ecommerce-nextjs-ten-chi.vercel.app",
    repo: "https://github.com/XHassan2003/ecommerce-nextjs",
    image: furnitureStoreImg,
  },
];