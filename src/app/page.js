"use client";

import Accordian from "./Component/Accordian";
import SecondaryButton from "./Component/SecondaryButton";
import WelcomeCard from "./Component/Cardblue";
import Navbar from "./Component/Navbar";
import Text from "./Component/Text";
import WorkCard from "./Component/Cardyellow";
import Footer from "./Component/Footer";
import Button from "./Component/Button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Animation from "./Component/Animation";
import Experience from "./Component/Experience";
import Landing from "./Landing";
import Experiencesection from "./Experiencesection";
import Projectsection from "./Projectsection";
import Noise from "./Noise";
export default function Home() {
  const cards = [
    { imgsrc: "/Bluegradient.png", text: "Welcome!" },
    // { imgsrc: "/Orangegradient.png", text: "Welcome!" },
    // { imgsrc: "/Orange.png", text: "I make the complex simple." },
    // { imgsrc: "/rainbow.png", text: "And back it up with statistics." },
  ];
  const [index, setIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // close if same, else open new
  };

  const faqs = [
    {
      label: "What makes your design process user-centered?",
      content:
        "I combine UX research, usability testing, and accessibility principles to ensure designs meet real user needs. By leveraging surveys, interviews, and heatmaps, I iterate solutions that improve clarity, efficiency, and overall satisfaction.",
    },
    {
      label: "How do you approach accessibility in your projects?",
      content:
        "Accessibility is integral to my design work. I follow WCAG guidelines, conduct research on diverse user needs—including ESL, DHH, and neurodivergent students—and test designs to ensure they are inclusive and usable for everyone.",
    },
    {
      label: "How do you validate design decisions?",
      content:
        "I use a mix of qualitative and quantitative methods, including user surveys, interviews, and timed user flows, to measure design effectiveness. Iterating based on real feedback ensures that solutions solve the right problems.",
    },
    {
      label: "Which tools and skills do you rely on most?",
      content:
        "My work blends design, research, and frontend skills. I use Figma, Adobe Illustrator, and Photoshop for prototyping and visuals, complemented by HTML, CSS, and JavaScript for interactive implementations. Strong research, statistical, and interaction design skills guide my process.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="cursor-crosshair relative max-w-[1440px]  bg-[#E3E5F6]    brightness-95  w-[100%] m-auto "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        className="absolute inset-0   w-full h-full opacity-30 pointer-events-none z-[2000]"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="10"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <Animation />
      <motion.div
        initial={{ height: "0px" }}
        animate={{ height: "auto" }}
        transition={{
          delay: 3,
          type: "spring",
          stiffness: 200,
          damping: 40,
        }}
        className="overflow-hidden"
      >
        <Experiencesection />
        <Projectsection />
        <Footer />
      </motion.div>
    </div>
  );
}
