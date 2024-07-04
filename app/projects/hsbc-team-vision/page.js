import { FaGithub, FaBook } from "react-icons/fa";
import { ProjectTitle } from "@/components/ui/project_title";
import { ProjectDesc } from "@/components/ui/project_desc";
import { ProjectTechnologies } from "@/components/ui/project_technologies";
import { ProjectImages } from "@/components/ui/project_images";

export default function Page() {
    const screenshots = [
        { src: "/images/hsbc1.png", description: "Page displaying ongoing zoom calls" },
        { src: "/images/hsbc2.png", description: "User-created groups" },
        { src: "/images/hsbc3.png", description: "User-specific favourites" },
        { src: "/images/hsbc4.png", description: "Calendar page with scheudled zoom meetings" }
    ];

    const technologies = [
        { name: "React", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
        { name: "AWS Lambda", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
        { name: "WebSockets", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
        { name: "DynamoDB", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
    ];

    return (
        <main className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 bg-white rounded-lg">
            <ProjectTitle title="HSBC Team Vision" className="text-3xl font-bold text-gray-800"/>
            <div className="flex items-center gap-4 mt-5 mb-6">
                <a href="https://github.com/cliff42/HSBC-Team-Vision-Root" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition duration-300">
                    <FaGithub className="mr-2"/> View on GitHub
                </a>
                <a href="https://drive.google.com/file/d/1GZ_drhTiLNzTUNII5x6GLjRA-G3bU4BA/view" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition duration-300">
                    <FaBook className="mr-2"/> User Manual
                </a>
            </div>
            <ProjectDesc description="HSBC Team Vision is a virtual office meeting platform developed based on specifications provided by HSBC Canada. Our approach leveraged the Zoom API and WebSockets to provide real-time updates (such as when a user leaves or enters a meeting) in a React dashboard. The product was built as a serverless application using AWS Lambda and DynamoDB, which was managed and deployed using AWS SAM and CloudFormation." />
            <ProjectTechnologies technologies={technologies} />
            <ProjectImages screenshots={screenshots} />
        </main>
    );
}