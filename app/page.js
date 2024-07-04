import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaFilePdf, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center space-y-8">
      <Image 
        src={"/images/portrait.png"}
        width={400}
        height={400}
        alt="portrait"
        className="rounded-md"
      />
      <div className="text-center">
        <h1 className="text-2xl mb-4">Hi, I'm Chris.</h1>
        <h3>A full stack software developer.</h3>
      </div>

      <div className="flex space-x-8 pb-6">
        <a href="/resources/christopher_cliff_resume.pdf" target="_blank" rel="noopener noreferrer"> <FaFilePdf size={25} /></a>
        <a href="https://www.linkedin.com/in/chris-cliff/" target="_blank"> <FaLinkedin size={25} /> </a>
        <a href="https://github.com/cliff42" target="_blank"> <FaGithub size={25} /> </a>
        <a href="mailto: chris.cliff@shaw.ca" target="_blank"> <FaEnvelope size={25} /> </a>
      </div>
    </main>
  );
}
