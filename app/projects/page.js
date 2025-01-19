export default function Page() {
    return (
        <main className="flex justify-center items-center w-full">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-20 justify-center items-center mb-4">
                <div className="card bg-background text-foreground w-96 shadow-xl border border-gray-300">
                    <figure className="h-48">
                        <img
                        src="/images/hsbc2.png"
                        alt="HSBC team vision" />
                    </figure>
                    <div className="card-body h-64">
                        <h2 className="card-title"><img src="/images/hsbcIcon.png" className="-mt-1 mr-1"/>HSBC Team Vision</h2>
                        <p>A virtual office meeting platform built from specifications provided by HSBC Canada.</p>
                        <div className="card-actions justify-end">
                            <a href="/projects/hsbc-team-vision/" className="btn bg-green-700 text-white hover:bg-green-900 border-none">Details</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-background w-96 shadow-xl border border-gray-300">
                    <figure className="h-48">
                        <img
                        src="/images/ais1.png"
                        alt="Adrift in Somnium" />
                    </figure>
                    <div className="card-body h-64">
                        <h2 className="card-title"><img src="/images/aisIcon.png" className="-mt-1 mr-1"/>Adrift in Somnium</h2>
                        <p>A roguelite dungeon crawler created in a custom game engine.</p>
                        <div className="card-actions justify-end">
                            <a href="/projects/adrift-in-somnium/" className="btn bg-green-700 text-white hover:bg-green-900 border-none">Details</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-background w-96 shadow-xl border border-gray-300">
                    <figure className="h-48">
                        <img
                        src="/images/net1.png"
                        alt="Natural Event Tracker" />
                    </figure>
                    <div className="card-body h-64">
                        <h2 className="card-title"><img src="/images/netIcon.png" className="-mt-1 mr-1"/>Natural Event Tracker</h2>
                        <p>A real-time visualization and early-warning system utilizing climate data from the NASA EONET API.</p>
                        <div className="card-actions justify-end">
                            <a href="/projects/natural-event-tracker/" className="btn bg-green-700 text-white hover:bg-green-900 border-none">Details</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-background w-96 shadow-xl border border-gray-300">
                    <figure className="h-48">
                        <img
                        src="/images/ogl1.png"
                        alt="One Giant Leap" />
                    </figure>
                    <div className="card-body h-64">
                        <h3 className="card-title"><img src="/images/oglIcon.png" className="-mt-1 mr-1"/>One Giant Leap - C&C</h3>
                        <p>A command and control application that allows hundreds of flight controllers to create log entries in real-time.</p>
                        <div className="card-actions justify-end">
                            <a href="/projects/one-giant-leap/" className="btn bg-green-700 text-white hover:bg-green-900 border-none">Details</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-background w-96 shadow-xl border border-gray-300">
                    <figure className="h-48">
                        <img
                        src="/images/hw2.png"
                        alt="HateWatch" />
                    </figure>
                    <div className="card-body h-64">
                        <h2 className="card-title"><img src="/images/hwIcon.png" className="-mt-1 mr-1"/>HateWatch</h2>
                        <p>A Reddit bot deployment platform to monitor subreddits for hate speech.</p>
                        <div className="card-actions justify-end">
                            <a href="/projects/hatewatch/" className="btn bg-green-700 text-white hover:bg-green-900 border-none">Details</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-background w-96 shadow-xl border border-gray-300">
                    <figure className="h-48">
                        <img
                        src="/images/csc2.png"
                        alt="Crowdsource Covid" />
                    </figure>
                    <div className="card-body h-64">
                        <h2 className="card-title"><img src="/images/cscIcon.png" className="-mt-1 mr-1"/>Crowdsource Covid</h2>
                        <p>A review tool that allows users to rate how well businesses follow covid safety protocols.</p>
                        <div className="card-actions justify-end">
                            <a href="/projects/crowdsource-covid/" className="btn bg-green-700 text-white hover:bg-green-900 border-none">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}