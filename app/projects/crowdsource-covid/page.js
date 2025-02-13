import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { ProjectTitle } from "@/components/ui/project_title";
import { ProjectDesc } from "@/components/ui/project_desc";
import { ProjectTechnologies } from "@/components/ui/project_technologies";
import { ProjectImages } from "@/components/ui/project_images";

export default function Page() {
    const screenshots = [
        { src: "/images/csc1.png", description: "Searching for a location to review" },
        { src: "/images/csc2.png", description: "Sample reviews" },
    ];

    const technologies = [
        { name: "GCP", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
        { name: "MySQL", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
        { name: "Angular", bgColor: "bg-green-500/85", borderColor: "border-green-700/80" },
    ];

    return (
        <main className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 bg-white rounded-lg">
            <ProjectTitle title="Crowdsource Covid" className="text-3xl font-bold text-gray-800"/>
            <div className="flex items-center gap-4 mt-5 mb-6">
                <a href="https://github.com/cliff42/crowdsourceCovid" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition duration-300">
                    <FaGithub className="mr-2"/> View on GitHub
                </a>
                <a href="https://devpost.com/software/crowdsource-covid-sgeqrk" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition duration-300">
                    <FaExternalLinkAlt className="mr-2"/> Devpost Submission
                </a>
            </div>
            <ProjectDesc description="Crowdsource Covid is an application that integrates the Google Maps API to allow users to search for public places (restaurants, movie theatres etc.) and leave reviews based on how well the locations follow COVID safety protocols. These reviews are then stored in a Google Cloud MySQL DB, and the results are aggregated so that other users who view the locations can see their scores. Crowdsource Coivd won the Best Use of GCP and the Best Use of Google Cloud: COVID-19 Hackathon Fund awards at VandyHacks VII." />
            <ProjectTechnologies technologies={technologies} />
            <ProjectImages screenshots={screenshots} />
        </main>
    );
}