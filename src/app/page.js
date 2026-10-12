"use client";

import Accordian from "./Component/Accordian";
import SecondaryButton from "./Component/SecondaryButton";
import WelcomeCard from "./Component/Cardblue";
import Navbar from "./Component/Navbar";
import Text from "./Component/Text";
import WorkCard from "./Component/Cardyellow";
import Footer from "./Component/Footer";
import Button from "./Component/Button";
import { useState } from "react";
import Animation from "./Component/Animation";
import Experiencesection from "./Experiencesection";
import Projectsection from "./Projectsection";
export default function Home() {
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

  return (
    <div
      id="home"
      className="relative page-grain max-w-[1440px] bg-[#E3E5F6] w-[100%] m-auto "
    >
      <Animation />
      {/* Below the fold. These used to fade in behind the intro's delay, so for
          the first second of the visit they were invisible too. They render
          immediately now. */}
      <Experiencesection />
      <Projectsection />
      <Footer />
    </div>
  );
}
