import Globe from "react-globe.gl";
import Button from "../Components/Button.jsx";
import {useState} from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("galiashok1200@gmail.com")
            .then(() => {
                console.log("Copied to clipboard");
                setHasCopied(true);
                setTimeout(() => {
                    setHasCopied(false);
                }, 2000);
            })
            .catch((err) => {
                console.error("Copy failed: ", err);
            });
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/black.jpeg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p className="grid-headtext">Hi, I'm Ashok...</p>
                            <p className="grid-subtext">Aspiring Full Stack Software Development Engineer with a robust foundation in programming. Proficient in multiple programming languages, development
                                tools, and software testing methodologies. Expertise in Frontend Development with a focus on animated 3D websites and Backend Development.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/Full.jpg" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I Expertise in JavaScript/TypeScript with a focus on React and Angular.
                                Specialized in C++/Java/C# and NodeJs. And also proficient in database technologies such as
                                SQL/Oracle/MongoDB, and Firebase, Also proficient in Manual Testing and Automation Testing and Databse Testing - Using Selenium
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat:17.3841, lng:78.4564,
                                    text: "Hey, I'm here!",
                                    color:'light blue',
                                    size:100,
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">
                                Ready to work remotely across different timezones.
                            </p>
                            <p className="grid-subtext">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                I'm based in Hyderabad, IND. Ready to relocate and also work remotely.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/keyboard1.jpeg" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain cursor-pointer"/>
                        <div>
                            <p className="grid-headtext">My Adore is coding</p>
                            <p className="grid-subtext">I thrive on solving problems and bringing ideas to life through code.
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                 Coding isn't just my profession — it's my obsession, my creative intensity.
                                For me, coding is not just about writing lines of code, but about crafting experiences,
                                driving impact, and constantly evolving with technology.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/timer.jpeg" alt="grid-4" className="w-full md:h-[130px] sm:h-[290px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-headtext text-center">Contact Me</p>
                            <div onClick={handleCopy} className="cursor-pointer copy-container">
                                <img
                                    src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                                    alt="copy" className="inline-block"
                                />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white mt-2">galiashok1200@gmail.com</p>
                            </div>
                            <div className="space-y-2 text-center mt-4">
                                <p className="lg:text-xl md:text-lg text-gray_gradient text-white">📞 Phone: +91-7330655940</p>
                                <p className="lg:text-xl md:text-lg text-gray_gradient text-white">
                                    🔗 LinkedIn:
                                    <a href="https://linkedin.com/in/ashokgali18/" target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-blue-400"> linkedin.com/in/ashokgali18</a>
                                </p>
                                <p className="lg:text-xl md:text-lg text-gray_gradient text-white">
                                    👨‍💻 GitHub:
                                    <a href="https://github.com/GaliAshok1" target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-blue-400 "> github.com/GaliAshok1</a>
                                </p>
                                <p className="lg:text-xl md:text-lg text-gray_gradient text-white">📍 Location: Uppal Hyderabad,
                                    Telangana,
                                    India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;

