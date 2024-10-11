"use client";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { IconClick } from "@tabler/icons-react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="py-20 bg-black-100">
      <section id="projects">
        <h1 className="text-4xl text-center md:heading">
          A small selection of{" "}
          <span className="text-purple-400">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center flex-row p-4 gap-16 mt-10">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[100vw]  "
              key={item.id}
            >
              <PinContainer title={item.link} href={item.href}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image
                      alt="bgimg"
                      src="/bg.png"
                      width={800}
                      height={1000}
                    />
                  </div>
                  <Image
                    src={item.img}
                    alt="bgimg"
                    width={800}
                    height={1000}
                    className="rounded-lg rotate-3 z-10 absolute bottom-4 p-1"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          width={100}
                          height={100}
                          src={icon}
                          alt="icon5"
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-base md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <IconClick className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
