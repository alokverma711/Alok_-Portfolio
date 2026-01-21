import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import carhubImg from "@/public/carhub.png";
import realtorImg from "@/public/realtor.png";
import ecommerceImg from "@/public/ecommerce.png";
import bankingImg from "@/public/banking.webp";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/alok-verma-5253b3330",
  github: "https://github.com/alokverma711",
  resume: "/resume.pdf",
  source_code: "https://github.com/alokverma711/Alok_-Portfolio",
  email: "alokverma072005@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "LNCT Excellence, Bhopal",
    description:
      "B.Tech in Computer Science (Data Science Specialization). Expected Graduation: Jun 2028 | Current CGPA: 7.7. Relevant Coursework: Data Structures, DBMS, Web Development, Cloud Computing",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2028 (Expected)",
  },
  {
    title: "The Origin Guild Bhopal, India",
    description:
      "MEMBER",
    icon: React.createElement(CgWorkAlt),
    date: "02/2025",
  },
  {
    title: "GDG on Campus-LNCT&S- Bhopal, India",
    description:
      "CAMPUS AMBASSADOR. Hosted events, Volunteer Experience",
    icon: React.createElement(CgWorkAlt),
    date: "01/2025",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "AI Assistant",
    description:
      "Developed an intelligent AI assistant using Python, leveraging NLP, Machine Learning, and API integrations to automate tasks.",
    tags: ["Python", "NLP", "Machine Learning", "API"],
    imageUrl: carhubImg,
    projectUrl: "https://github.com/alokverma711/ai_assist",
  },
  {
    title: "Find My Restaurant",
    description:
      "Built a RESTful backend application using Node.js, Express.js, MongoDB (Mongoose), and Postman to manage restaurant data.",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Postman"],
    imageUrl: realtorImg,
    projectUrl: "https://github.com/alokverma711/my_restaurant",
  },
  {
    title: "Chat Application",
    description:
      "Developed a real-time chat application using JavaScript, enabling instant user messaging with dynamic UI updates.",
    tags: ["JavaScript"],
    imageUrl: ecommerceImg,
    projectUrl: "https://github.com/alokverma711/Bill_tracker",
  },
  {
    title: "Banking App",
    description:
      "Developed a full-stack banking application using React, Node.js, and Three.js, incorporating interactive 3D visualizations.",
    tags: ["React", "Node.js", "Three.js"],
    imageUrl: bankingImg,
    projectUrl: "https://github.com/alokverma711/Tangerine_bank_proj",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "JavaScript",
  "Python",
  "C++",
  "HTML",
  "CSS",
  "React.js",
  "Next.js",
  "Three.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Git",
  "Postman",
  "GSAP",
  "Bootstrap"
] as const;

// Owner name
export const OWNER_NAME = "Alok Verma";
