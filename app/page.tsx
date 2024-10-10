"use client";
import AboutMe from "@/components/AboutMe";
import HeroComponent from "@/components/HeroComponent";
import Profiles from "@/components/Profiles";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <div className="h-[300vh] bg-black-100">
      <FloatingNav />
      <HeroComponent />
      <AboutMe />
      <Projects />
      <Profiles />
    </div>
  );
}
