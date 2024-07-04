import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { ProjectTitle } from "@/components/ui/project_title";
import { ProjectDesc } from "@/components/ui/project_desc";
import { ProjectTechnologies } from "@/components/ui/project_technologies";
import { ProjectImages } from "@/components/ui/project_images";

export default function Page() {
    const screenshots = [
        { src: "/images/ogl1.png", description: "View of current log entires" },
        { src: "/images/ogl2.png", description: "Page to add custom log entry types" },
    ];

    const technologies = [
        { name: "Azure", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
        { name: ".NET", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
        { name: "C#", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
    ];

    return (
        <main className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 bg-white rounded-lg">
            <ProjectTitle title="One Giant Leap - Lunar C&C" className="text-3xl font-bold text-gray-800"/>
            <div className="flex items-center gap-4 mt-5 mb-6">
                <a href="https://github.com/evandigby/lunar-cmd" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition duration-300">
                    <FaGithub className="mr-2"/> View on GitHub
                </a>
                <a href="https://2021.spaceappschallenge.org/challenges/statements/lunar-surface-operations-real-time-collaboration/teams/one-giant-leap-lunar-cc/project" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition duration-300">
                    <FaExternalLinkAlt className="mr-2"/> NASA Space Apps Link
                </a>
            </div>
            <ProjectDesc description="One Giant Leap is a command and control application that allows hundreds of flight controllers to create, edit, and commit mission log entries that are updated on every flight controller’s console in real-time. Using an architecture technique called event-sourcing, a mission’s entire log history is stored as a final “view” and a series of events as they happened over time. This event history allows you to re-create the state of the mission log at any point in time--functionality that can provide critical insight during a mission debriefing or future audit of the actions taken during the mission. Our solution was selected as the winning submission for Vancouver, BC and was a global finalist honourable mention in the 2021 NASA Space Apps Challenge." />
            <ProjectTechnologies technologies={technologies} />
            <ProjectImages screenshots={screenshots} />
        </main>
    );
}