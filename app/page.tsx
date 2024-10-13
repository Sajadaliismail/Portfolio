"use client";
import AboutMe from "@/components/AboutMe";
import ChatBot from "@/components/ChatBot";
import Contact from "@/components/Contact";
import Copyright from "@/components/Copyright";
import Experience from "@/components/Experiences";
import HeroComponent from "@/components/HeroComponent";
import Profiles from "@/components/Profiles";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <div className=" bg-black-100 relative " style={{ scrollbarWidth: "none" }}>
      <FloatingNav />
      <ChatBot />
      <HeroComponent />
      <AboutMe />
      <Projects />
      <Profiles />
      <Experience />
      <Contact />
      <Copyright props={"Sajad Ali Ismail"}></Copyright>
    </div>
  );
}
