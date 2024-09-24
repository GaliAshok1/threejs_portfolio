
import {myProjects} from "../Constants/index.js";
import {Suspense, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanavasLoader from "../Components/CanavasLoader.jsx";
import Computer from "../Components/Computer.jsx";

const projectsLength=myProjects.length;
const Projects = () => {
    const [projectsIndex, setProjectsIndex]=useState(0);
    const currentProjects=myProjects[projectsIndex];

    const handleClick =(direction)=>{
        setProjectsIndex((prevIndex)=>{
            if(direction==="previous"){
                return prevIndex===0 ? projectsLength-1 : prevIndex-1;
            }
            else{
                return prevIndex===projectsLength-1 ? 0 : prevIndex+1;
            }
        })
    }
    return (
        <section className="c-space my-20" id="work">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="head-text">What I've Built </p>
            <div className="grid lg:grid-col-2 grid-col-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProjects.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl"/>
                    </div>
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={myProjects[0].logoStyle}>
                        <img src={currentProjects.logo} alt="logo" className="w-12 h-12 shadow-sm"/>
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProjects.title}</p>
                        <p className="animatedText">{currentProjects.desc}</p>
                        <p className="animatedText">{currentProjects.subdesc}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProjects.tags.map((tag,index)=> (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name}/>
                                </div>
                            ))}
                        </div>
                        <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProjects.href} target="_blank" rel="noreferrer">
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3 "/>
                        </a>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleClick('previous')}>
                            <img src="/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4"/>
                        </button>
                        <button className="arrow-btn" onClick={() => handleClick('next')}>
                            <img src="/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4"/>
                        </button>
                    </div>
                </div>
                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight  position={[10,10,5]}/>
                        <Center>
                            <Suspense fallback={<CanavasLoader />}>
                                <group scale={2} position={[0,-3, 0]} rotation={[0,-0.1,0]}>
                                    <Computer texture={currentProjects.texture}/>
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}
export default Projects;
