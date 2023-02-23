"use client";
import Link from "next/link";
import Image from "next/image";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className=" min-h-screen p-8 ">
      <div className="lg:grid lg:grid-rows-1 lg:grid-cols-2 max-w-[1200px] m-auto">
        <div className="max-w-2xl">
        <section className="sticky top-[20vh] pl-12 pr-10 ">
          <h2 className="text-lg md:text-2xl">Web Developer</h2>
          <h2 className=" text-lg md:text-2xl">Software Developer</h2>
          <h1 className=" text-3xl md:text-5xl pt-3 pb-7">Shingo Tennichi</h1>
          <div className=" overflow-hidden rounded-full h-[60px] w-[60px] relative m-auto">
            <Image
              className="absolute top-[-35px]"
              alt="Profile Picture"
              src="/profile_picture.svg"
              height={100}
              width={100}
              quality={75}
            />
          </div>
          <p className=" text-sm md:text-lg py-7 text-center">
            Hi! I am currently learning about Computer Science at Douglas
            College in Vancouver
          </p>
          <div className="flex justify-evenly text-5xl pb-5">
            <Link href={"https://github.com/ShingoTennichi"}>
              <FontAwesomeIcon icon={faGithub}/>
            </Link>
            <Link href={"https://www.linkedin.com/in/shingo-tennichi-150693220/"}>
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
        </section>

        </div>
        <div>
          <section className="pb-4">
            <h3 className=" mb-4 tracking-[4px] sticky top-0 bg-[#151515]">PROJECTS</h3>
            <Projects />
          </section>
          <section className="pb-4">
            <h3 className=" mb-4 tracking-[4px] sticky top-0 bg-[#151515]">ABOUT</h3>
            <About />
          </section>
          <section className="pb-4">
            <h3 className=" mb-4 tracking-[4px]">EXPERIENCED IN</h3>
            <Skills />
          </section>
          <section className="pb-4">
            <h3 className=" mb-4 tracking-[4px]">CONTACT</h3>
            <p className="text-center text-xs md:text-base">Thank You for Visiting My Website</p>
            <p className="text-center">Feel Free to Contact Me</p>
            <Contact />
          </section>
        </div>
      </div>
    </main>
  );
}