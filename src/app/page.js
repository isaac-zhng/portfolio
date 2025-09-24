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
    <div className="max-w-[1440px] overflow-hidden w-[100%] m-auto ">
      <motion.div
        initial={{ height: "auto", opacity: 100 }}
        animate={{ height: 0, opacity: 0 }}
        transition={{
          delay: 2.2,
          type: "spring",
          stiffness: 200,
          damping: 40,
        }}
        className="lg:max-h-[1080px] h-[100dvh] w-full overflow-hidden"
      >
        <Animation />
      </motion.div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 100 }}
        transition={{
          delay: 2.2,
          type: "spring",
          stiffness: 800,
          damping: 40,
        }}
        className="overflow-hidden"
        id="home"
      >
        <Navbar />

        <div className="lg:max-h-[1080px] overflow-x-hidden h-[100dvh] scroll-smooth scrollbar-hide overflow-y-scroll snap-y snap-mandatory scroll-container">
          <div className="lg:max-h-[1080px] h-[100dvh] relative lg:px-[96px] overflow-hidden px-[32px] snap-start py-[48px] gap-[24px] flex flex-col w-full">
            <img
              src="/Icon.png"
              className="w-[44px] absolute lg:hidden left-[32px] top-[32px]"
            />
            <div className="flex w-full flex-1 items-center justify-center gap-[24px]">
              <WelcomeCard imgsrc="Blue.png" text="Welcome!" />
              {/* <WelcomeCard
      imgsrc="Orange.png"
      text="I make the complex simple."
    />
    <WelcomeCard
      imgsrc="Yellow.png"
      text="I make the complex simple."
    /> */}
              {/* <WelcomeCard imgsrc="Blue.png" text="Welcome!" />
    <WelcomeCard
      imgsrc="Orange.png"
      text="I make the complex simple."
    />
    <WelcomeCard
      imgsrc="Yellow.png"
      text="And back it up with statistics."
    /> */}
              {/* <div className="relative"> */}
              {/* <img src="ipod.png" className="w-[240px]" /> */}
              {/* <div className="h-[320px] group w-[240px] bg-gray-100 flex flex-col relative gap-[12px] rounded-[16px] p-[24px]">
                  <img
                    src={cards[index].imgsrc}
                    className="w-full aspect-square rounded-[12px]"
                  />
                  <div className="w-full flex-grow  flex justify-center">
                    <button className="relative text-black/10 text-[20px] cursor-pointer h-full  aspect-square bg-white rounded-full">
                      <div className="inset-0 absolute scale-0 group-hover:scale-50 transition-all duration-200  group-hover:bg-black/5 rounded-full" />
                    </button>
                  </div>
                </div>
                <div className="absolute w-[20px] h-[60px] rounded-b-[4px] bg-gray-100 border-t-0 z-[1] -translate-x-1/2 left-[30%] " />
                <div className="absolute border-l w-[10000px] left-[30%] z-[0] h-1/2 border-b-2 border-black/5 rounded-bl-[40px]" />
              </div> */}
              {/* <WelcomeCard
      imgsrc={cards[index].imgsrc}
      text={cards[index].text}
    /> */}
              {/* <div className="h-fit flex p-[24px] bg-[url('/Bluegradient.png')] bg-cover relative group rounded-[12px] bg-gray-100 w-[400px]">
      <div className="h-[280px] rounded-full relative flex justify-center items-center bg-gradient-to-r from-black group-hover:rotate-[1080deg] transition-all duration-10000 via-gray-800 to-black aspect-square">
        <div className="h-[64px] object-cover bg-white aspect-square rounded-full " />
        <div className="absolute inset-[20px] rounded-full border border-white/20" />
        <div className="absolute inset-[40px] rounded-full border border-white/20" />
        <div className="absolute inset-[60px] rounded-full border border-white/20" />
        <div className="absolute inset-[80px] rounded-full border border-white/20" />
      </div>
      <div className="w-[2px] h-[200px] rotate-45 bg-white" />
    </div> */}
            </div>
            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 100 }}
              transition={{
                delay: 2.8,
                type: "spring",
                stiffness: 200,
                damping: 40,
              }}
            >
              <img src="Isaactext.png" className="w-full z-[1]" />
            </motion.div>
            <div className="flex lg:flex-row flex-col gap-[24px] lg:justify-between w-full items-start lg:items-center">
              <Text className="lg:w-[40%] text-black/70">
                a Product Designer and Researcher studying Human Centered
                Computing @ RIT. I specialize in design, research, and visual
                development.
              </Text>
              <a href="mailto:iz5183@g.rit.edu">
                <Button>Contact Me</Button>
              </a>
            </div>
          </div>
          <div
            id="work"
            className="lg:max-h-[1080px] h-[100dvh] scroll-smooth snap-start flex flex-col justify-end lg:gap-[128px] md:gap-[64px] gap-[128px] py-[48px] "
          >
            <div className="flex px-[32px] lg:px-[96px] lg:h-fit h-full flex-col gap-[24px] lg:gap-[48px]">
              <div className="h-full xl:h-[360px] w-full flex-col md:flex-row gap-[24px] flex ">
                <WorkCard
                  imgsrc="/Bluegradient.png"
                  profilesrc="/Experience/rit.png"
                  header="UX Researcher @ RIT (Co-op)"
                >
                  Led a team of 5+ at RIT on AI support for ESL, DHH, and
                  neurodivergent students, producing a paper and collaborating.
                </WorkCard>
                <WorkCard
                  imgsrc="/Orangegradient.png"
                  profilesrc="/Experience/tigersnackbox.png"
                  header="UX Designer @ Tiger Snack Box "
                >
                  Case study for Tiger Snack Box’s game: surveyed 30+ users,
                  analyzed competitors, and improved timed flows by 23%.
                </WorkCard>
                {/* <WorkCard
                  imgsrc="/Yellowgradient.png"
                  header="Graphic Designer @ Infinity Educational Programs"
                >
                  Created digital and print graphics for social media and web
                  using Adobe tools, ensuring brand consistency and
                  collaborating with the team to accelerate feature rollout.
                </WorkCard> */}
              </div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 40,
                }}
                viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
              >
                <img
                  src="Worktext.png"
                  className="lg:h-[100px] h-[35px]  w-auto"
                />
              </motion.div>
              <div className="flex lg:flex-row flex-col gap-[24px] lg:justify-between w-full items-start lg:items-center">
                <Text className="lg:w-[40%] text-black/70">
                  a Product Designer and Researcher studying Human Centered
                  Computing @ RIT. I specialize in design, research, and visual
                  development.
                </Text>
                <a href="/isaac_ux_resume.pdf" download>
                  <Button>Download Resume</Button>
                </a>
              </div>
            </div>
          </div>
          <div
            id="faq"
            className="lg:max-h-[1080px] justify-end h-[100dvh] scroll-smooth items-end snap-start flex flex-col lg:flex-row gap-[48px] px-[32px] lg:px-[96px] py-[48px]"
          >
            <div className="w-full lg:w-1/2 rounded-[24px] hidden lg:block  h-full bg-[url(/Forest.png)] bg-cover bg-bottom" />
            <div className="h-fit w-full lg:w-1/2 justify-end flex flex-col gap-[24px] lg:gap-[48px]">
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 40,
                }}
                viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
              >
                <img
                  src="FAQtext.png"
                  className="lg:h-[100px] h-[35px] w-auto"
                />
              </motion.div>
              <div>
                {faqs.map((faq, index) => (
                  <Accordian
                    key={index}
                    label={faq.label}
                    isOpen={openIndex === index}
                    onToggle={() => toggleAccordion(index)}
                  >
                    <Text>{faq.content}</Text>
                  </Accordian>
                ))}
              </div>
            </div>
          </div>
          <div className="snap-start ">
            <Footer />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
