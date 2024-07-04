import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { ProjectTitle } from "@/components/ui/project_title";
import { ProjectDesc } from "@/components/ui/project_desc";
import { ProjectTechnologies } from "@/components/ui/project_technologies";
import { ProjectImages } from "@/components/ui/project_images";

export default function Page() {
    const screenshots = [
        { src: "/images/hw1.png", description: "Bot deployment user interface" },
        { src: "/images/hw2.png", description: "Scanned comments and their hate speech likelihood" },
    ];

    const technologies = [
        { name: "GCP AutoML", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
        { name: "Vue.js", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
    ];

    return (
        <main className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 bg-white rounded-lg">
            <ProjectTitle title="HateWatch" className="text-3xl font-bold text-gray-800"/>
            <div className="flex items-center gap-4 mt-5 mb-6">
                <a href="https://github.com/cliff42/hateWatch" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition duration-300">
                    <FaGithub className="mr-2"/> View on GitHub
                </a>
                <a href="https://devpost.com/software/hatewatch" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition duration-300">
                    <FaExternalLinkAlt className="mr-2"/> Devpost Submission
                </a>
            </div>
            <ProjectDesc description="HateWatch allows moderators to create and deploy Reddit bots and assign them to their subreddits to begin monitoring for hate speech. Comments and submissions feed into a binary classification model to detect if the content contains hate speech. We leveraged GCP's AutoML to train the model using data from hatespeechdata.com, which resulted in a 91% accuracy score." />
            <ProjectTechnologies technologies={technologies} />
            <ProjectImages screenshots={screenshots} />
        </main>
    );
}