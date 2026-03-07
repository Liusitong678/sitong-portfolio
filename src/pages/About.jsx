import profile from "../assets/images/sitong.jpg";

function About() {
    return (
        <>
            <section className="mx-auto max-w-6xl px-8 py-24">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1px_3fr]">
                    <div className="space-y-2">
                        <h1 className="font-title text-5xl font-semibold tracking-tight">
                            Sitong Liu
                        </h1>
                        <p className="text-xl text-gray-300 font-medium mb-0">
                            Frontend Engineer
                        </p>
                        <p className="font-mono text-gray-400">
                            React · Vue · UI / UX
                        </p>

                        <div className="pt-4">
                            <img
                                src={profile}
                                alt="Sitong Liu"
                                className="w-[240px] rounded-xl border border-white/10 shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

                    {/* Right */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-5">About me</h2>
                        <div className="max-w-xl space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                I'm a frontend developer focused on building clean, intuitive,
                                and user-friendly interfaces. I mainly work with React, Vue,
                                and modern web technologies, and I enjoy transforming complex
                                ideas into thoughtful digital experiences.
                            </p>

                            <p>
                                I previously worked for two years as a Frontend Developer 
                                at a subsidiary of Geely, one of the largest automotive 
                                companies in China and the parent company of brands such as 
                                Volvo. During that time, I led the frontend development of a 
                                new energy battery swap management platform used to support 
                                electric vehicle battery swap stations.
                            </p>

                            <p>
                                Outside of work, I enjoy drawing and traveling. You can find
                                some of my artwork in the Gallery section. I also live with
                                two cute dogs (technically I'm their aunt) and they bring a lot
                                of joy to everyday life.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <section>

            </section>

        </>
    )
}

export default About;