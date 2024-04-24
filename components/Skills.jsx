"use client"

import React, {useRef} from 'react';
import SkillsCard from "@/components/SkillsCard";
import {motion, useInView} from 'framer-motion';
import Image from 'next/image';

const Skills = () => {

    const skillRef = useRef();
    // const isSkillRefInView = useInView(skillRef, {once:true});
    const isSkillRefInView = useInView(skillRef, {margin:"-100px"});


    let skillsData = [
        { name: 'HTML', imageSrc: '/assets/skills/html.svg', altText: 'HTML Logo' },
        { name: 'CSS', imageSrc: '/assets/skills/css.svg', altText: 'CSS Logo' },
        { name: 'JavaScript', imageSrc: '/assets/skills/javascript.svg', altText: 'JavaScript Logo' },
        { name: 'TypeScript', imageSrc: '/assets/skills/typescript.svg', altText: 'TypeScript Logo' },
        { name: 'Vue', imageSrc: '/assets/skills/vue.svg', altText: 'Vue Logo' },
        { name: 'Svelte', imageSrc: '/assets/skills/svelte.svg', altText: 'Svelte Logo' },
        { name: 'React', imageSrc: '/assets/skills/react.svg', altText: 'React Logo' },
        { name: 'Tailwind CSS', imageSrc: '/assets/skills/tailwindcss.svg', altText: 'Tailwind CSS Logo' },
        { name: 'Firebase', imageSrc: '/assets/skills/firebase.svg', altText: 'Firebase Logo' },
        { name: 'Git', imageSrc: '/assets/skills/git.svg', altText: 'Git Logo' },
        { name: 'Next.js', imageSrc: '/assets/skills/next-js.svg', altText: 'Next.js Logo' },
        { name: 'Google Cloud', imageSrc: '/assets/skills/google-cloud.svg', altText: 'Google Cloud Logo' },
    ];

    return (
        <div id="skills" className="w-full lg:h-screen p-3" ref={skillRef}>
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <motion.p initial={{x:"-100px", opacity: 0}} animate={isSkillRefInView ? {x:0, opacity: 1} : {}} transition={{delay:0.3}} className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</motion.p>
                <motion.div initial={{x:"-100px", opacity: 0}} animate={isSkillRefInView ? {x:0, opacity: 1} : {}} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 grayscale hover:grayscale-0 transition duration-200">
                    {skillsData.map((skill) => (
                        <SkillsCard key={skill.name} skill={skill} />
                    ))}

                    {/*<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/html.svg" width={64} height={64}
                                       alt="HTML Logo"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/css.svg" width={64} height={64}
                                       alt="Css Logo"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/javascript.svg" width={64} height={64}
                                       alt="Javascript Logo"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JAVASCRIPT</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/typescript.svg" width={64} height={64}
                                       alt="Typescript Logo"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>TYPESCRIPT</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/vue.svg" width={64} height={64}
                                       alt="Vue Logo"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>VUE</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/svelte.svg" width={64} height={64}
                                       alt="Svelte Logo"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>SVELTE</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/react.svg" width={64} height={64}
                                       alt="React Logo"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>REACT</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/tailwindcss.svg" width={64} height={64}
                                       alt="Tailwind Css Logo"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>TAILWINDCSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/firebase.svg" width={64} height={64}
                                       alt="Firebase Logo"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>FIREBASE</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/git.svg" width={64} height={64}
                                       alt="HTML Logo"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>GIT</h3>
                            </div>
                        </div>
                    </div>*/}

                </motion.div>
            </div>
        </div>
    );
};

export default Skills;