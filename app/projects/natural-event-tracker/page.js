import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { ProjectTitle } from "@/components/ui/project_title";
import { ProjectDesc } from "@/components/ui/project_desc";
import { ProjectTechnologies } from "@/components/ui/project_technologies";
import { ProjectImages } from "@/components/ui/project_images";

export default function Page() {
    const screenshots = [
        { src: "/images/net1.png", description: "Viewing information about ongoing wildfires on the West Coast" },
        { src: "/images/net2.png", description: "Visualizing hurricane patterns" },
    ];

    const technologies = [
        { name: "Angular", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
        { name: "MongoDB", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
        { name: "Twilio", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
    ];

    return (
        <main className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 bg-white rounded-lg">
            <ProjectTitle title="Natural Event Tracker" className="text-3xl font-bold text-gray-800"/>
            <div className="flex items-center gap-4 mt-5 mb-6">
                <a href="https://github.com/cliff42/hack-the-valley-2021" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition duration-300">
                    <FaGithub className="mr-2"/> View on GitHub
                </a>
                <a href="https://devpost.com/software/natural-event-tracker" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition duration-300">
                    <FaExternalLinkAlt className="mr-2"/> Devpost Submission
                </a>
            </div>
            <ProjectDesc description="Natural Event Tracker is a tool that enables users to stay informed about current climate events and receive warnings about nearby climate alerts to stay safe. The application was built using climate data fetched from the NASA EONET API displayed in an Angular application. We utilized Twilio to send warning messages via SMS to users if any dangerous events were in their vicinity. This project won the Best Nature Hack and Use of Twilio awards at Hack the Valley." />
            <ProjectTechnologies technologies={technologies} />
            <ProjectImages screenshots={screenshots} />
        </main>
    );
}