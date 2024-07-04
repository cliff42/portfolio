import { FaGamepad, FaGithub } from "react-icons/fa";
import { ProjectTitle } from "@/components/ui/project_title";
import { ProjectDesc } from "@/components/ui/project_desc";
import { ProjectTechnologies } from "@/components/ui/project_technologies";
import { ProjectImages } from "@/components/ui/project_images";

export default function Page() {
    const screenshots = [
        { src: "/images/ais1.png", description: "Title screen" },
        { src: "/images/ais2.png", description: "Initial cutscene" },
        { src: "/images/ais3.png", description: "First level fight" },
        { src: "/images/ais4.png", description: "Second level encounter" }
    ];

    const technologies = [
        { name: "C++", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
        { name: "OpenGL", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
        { name: "Computer Graphics", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
    ];

    return (
        <main className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 bg-white rounded-lg">
            <ProjectTitle title="Adrift in Somnium" className="text-3xl font-bold text-gray-800"/>
            <div className="flex items-center gap-4 mt-5 mb-6">
                <a href="https://github.com/tocshi/cpsc427-team6" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition duration-300">
                    <FaGithub className="mr-2"/> View on GitHub
                </a>
                <a href="https://tocshi.itch.io/adrift-in-somnium" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition duration-300">
                    <FaGamepad className="mr-2"/> Game Page
                </a>
            </div>
            <ProjectDesc description="Implemented a roguelike dungeon crawler game about an overworked game designer that finds themself stuck in their own game in a custom engine built from scratch using C++ and OpenGL. Researched the fundamentals of computer graphics, simple animation and physics to build out the game engine, paired with additional topics such as AI pathfinding to create a fleshed-out experience." />
            <ProjectTechnologies technologies={technologies} />
            <ProjectImages screenshots={screenshots} />
        </main>
    );
}