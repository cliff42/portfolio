import { FaExternalLinkAlt } from "react-icons/fa";

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center space-y-8 mx-auto max-w-5xl mt-20">
            <ul className="timeline timeline-vertical timeline-snap-icon">
                <li>
                    <div className="timeline-end mr-8">Oct 2024 - Present</div>
                        <div className="timeline-middle">
                        <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center -mt-10">
                            <img src="/images/waabi.png" alt="waabi icon" className="w-10" />
                        </div>
                        </div>
                        <div className="timeline-start timeline-box ml-8 shadow-xl bg-background border-border">
                            <div className="text-2xl">Waabi</div>
                            <div className="text-xl mb-4">Software Developer</div>
                            • Software developer on the internal tools team 🤖🚚. 
                            <br></br>
                            <br></br>
                        </div>
                    <hr />
                </li>
                <li>
                    <div className="timeline-start mr-8">Jun 2023 - Oct 2024</div>
                        <div className="timeline-middle">
                        <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center -mt-10">
                            <img src="/images/rbc.png" alt="rbc icon" className="w-10" />
                        </div>
                        </div>
                        <div className="timeline-end timeline-box ml-8 shadow-xl bg-background border-border">
                            <div className="text-2xl">Royal Bank of Canada</div>
                            <div className="text-xl mb-4">GenAI Platform Engineer</div>
                            • Developed, deployed, and brought to production a platform to expose LLMs for enterprise use, using Python,
                            FastAPI, and frameworks such as LangChain, which over 100 internal teams have utilized.
                            <br></br>
                            <br></br>
                            • Using NLP methodologies to fine-tune NER and BERT-based models to detect and obfuscate PII, and prevent
                            proprietary source code leakage.
                            <br></br>
                            <br></br>
                            • Designed a variety of usage-tracking APIs and an accompanying Angular application developed with internal
                            libraries to display real-time usage metrics and aid in diagnostics for the LLM platform.
                        </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-end ml-8">May 2022 - Aug 2022</div>
                    <div className="timeline-middle">
                    <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center -mt-10">
                        <img src="/images/rbc.png" alt="rbc icon" className="w-10" />
                    </div>
                    </div>
                    <div className="timeline-start timeline-box mr-8 shadow-xl bg-background border-border">
                        <div className="text-2xl">Royal Bank of Canada</div>
                        <div className="text-xl mb-4">Amplify Developer</div>
                        • Inventor on patent filed by RBC: US20240070771A1, ”System and method for applying user data in accessing of
                        institutional products.” <a href="https://patents.google.com/patent/US20240070771A1/en" target="_blank" className="text-blue-500"><div className="flex">[link] <FaExternalLinkAlt size={10}/></div></a>
                        <br></br>
                        <br></br>
                        • Outlined and architected a comprehensive system to ensure robustness and scalability, and deployed a React front
                        end with 4 dockerized associated Node.js microservices using OpenShift.
                        <br></br>
                        <br></br>
                        • Pitched the final product to a team of senior executives in a conference format, and won the best teamwork award.
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start mr-8">May 2021 - Dec 2021</div>
                        <div className="timeline-middle">
                        <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center -mt-10">
                            <img src="/images/netapp.png" alt="netapp icon" className="w-10" />
                        </div>
                        </div>
                        <div className="timeline-end timeline-box ml-8 shadow-xl bg-background border-border">
                            <div className="text-2xl">NetApp</div>
                            <div className="text-xl mb-4">Software Developer Intern</div>
                            • Was given full responsibility as a key stakeholder as part of StorageGRID to design and develop a full stack solution
                            involving Bash scripting, Ruby REST APIs and back end, and an Angular front end for a client-requested feature.
                            <br></br>
                            <br></br>
                            • Was responsible for mentoring a new co-op student, and guiding them through any issues they faced.
                        </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-end ml-8">Jan 2020 - Aug 2020</div>
                    <div className="timeline-middle">
                    <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center -mt-10">
                        <img src="/images/incognito.png" alt="incognito icon" className="w-10" />
                    </div>
                    </div>
                    <div className="timeline-start timeline-box mr-8 shadow-xl bg-background border-border">
                        <div className="text-2xl">Incognito Software Systems</div>
                        <div className="text-xl mb-4">Co-op Software Developer</div>
                        • Created automated regression tests using Java and Selenium, leading to a 30% reduction in total testing time.
                        <br></br>
                        <br></br>
                        • Developed front end solutions following the standard model-view-controller pattern using JavaScript, backbone.js and jQuery for a new product in a team practicing Agile and Scrum methodology.
                        </div>
                    <hr />
                </li>
                <li className="mb-8">
                    <hr />
                    <div className="timeline-start mr-8">May 2019 - Aug 2019</div>
                    <div className="timeline-middle">
                    <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center -mt-10">
                        <img src="/images/uofa.png" alt="u of a icon" className="w-20" />
                    </div>
                    </div>
                    <div className="timeline-end timeline-box ml-8 shadow-xl bg-background border-border">
                        <div className="text-2xl">University of Alberta</div>
                        <div className="text-xl mb-4">Research Assistant</div>
                        • Researched and compared the A.I. entrepreneurial ecosystems of Edmonton and Vancouver - acknowledged in the
                        paper: "A New Tool for Policymakers: Mapping Cultural Possibilities in an Emerging AI Entrepreneurial
                        Ecosystem." <a href="https://www.sciencedirect.com/science/article/pii/S0048733321001165" target="_blank" className="text-blue-500"><div className="flex">[link] <FaExternalLinkAlt size={10}/></div></a>
                        <br></br>
                        <br></br>
                        • Created an autonomous database scraper using Python to download millions of lines of data and parse the results.
                    </div>
                    <hr />
                </li>
            </ul>
        </main>
    );
}