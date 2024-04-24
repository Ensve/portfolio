"use client";
import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import Image from 'next/image';
import Link from "next/link";

const Projects = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref});
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    const projects = [
        {
            id: 1,
            //color: "from-red-300 to-blue-300",
            title: "Portfolio",
            description: "This is my portfolio project. It is built with Next.js and Tailwind CSS.",
            image: "/assets/projects/portfolio.png",
            link: "",
        },
        {
            id: 2,
            //color: "from-blue-300 to-violet-300",
            title: "Ratatouille",
            description: "A recipe app for discovering, saving, and managing world-class recipes.",
            image: "/assets/projects/512.png",
            link: "https://github.com/Ensve/PG5602_H23_iOS_Programming-",
        },
        {
            id: 3,
            //color: "from-violet-300 to-purple-300",
            title: "TravelSnap",
            description: "Crossplattform application for sharing travel photos and locations.",
            image: "/assets/projects/travelsnapImage.png",
            link: "https://github.com/Ensve/TDS200_H23_CrossPlatform",
        },
    ];

    return (
        <motion.div
            id="projects"
            className="h-full relative"
            initial={{y:"-200vh"}}
            animate={{y:"0%"}}
            transition={{duration:1}}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div
                    className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center">
                    <h1 className="uppercase text-center tracking-widest text-[#5651e5]">Projects</h1>
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center justify-items-start bg-gradient-to-b from-[#ecf0f3] to-gray-300 overflow-hidden">
                    <motion.div
                        style={{x}}
                        className="flex"
                    >
                        <div className="h-screen w-screen flex items-center justify-center"/>
                    {projects.map(item => (
                        <div
                            className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r}`}
                            key={item.id}>
                            <div
                                className="w-[300px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex flex-col gap-8 text-white">
                                    <div className="w-full h-64 overflow-hidden relative rounded-t-lg">
                                        <Image src={item.image} alt={item.title} layout="fill" objectFit="cover"/>
                                    </div>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                        <Link href={item.link}>
                                            <button
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#5651e5] rounded-lg hover:bg-[#8179f7] focus:ring-4 focus:outline-none focus:ring-blue-300">
                                                Read more
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"
                                                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;