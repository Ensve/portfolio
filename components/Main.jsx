"use client";
import React from 'react';
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import Link from "next/link";
import {motion ,useInView} from "framer-motion";
import {useRef} from "react";

const Main = () => {
    const mainRef = useRef();
    // const isMainRefInView = useInView(mainRef, {once:true});
    const isMainRefInView = useInView(mainRef, {margin:"-100px"});

    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1}}>
                    <p className="uppercase text-sm tracking-widest text-gray-600">Lets collaborate and innovate</p>
                    <h1 className="py-4 text-gray-700">Hi, I`m <span className="text-[#5651e5]">Endre</span></h1>
                    <h1 className="py-1 text-gray-700">A Passionate Front-End and Mobile Developer</h1>
                    <p className="py-4 text-gray-600 max-w-[90%] m-auto">I am currently an information technology
                        student specializing in front-end and mobile development at Kristiania Bergen. My passion is to
                        craft user-friendly applications. I emphasize clean and understandable code, which enhances both
                        functionality and user experience.</p>
                    <p className="py-2 text-gray-600 max-w-[90%] m-auto">Curious about new technologies, I strive to
                        stay updated with the latest trends in the industry. My strength lies in understanding user
                        needs and transforming them into practical and user-friendly applications.</p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <button
                            className="inline-flex items-centershadow-xl border border-transparent bg-black text-white rounded px-3 py-2 text-sm hover:bg-transparent hover:border-black hover:text-black transition duration-300">
                            <Link href="/#projects">View My Work</Link>
                        </button>
                        <button
                            className="inline-flex items-center shadow-xl bg-transparent border border-black rounded px-3 py-2 text-sm hover:bg-black hover:text-white hover:border-transparent transition duration-300">
                            <Link href="/#contact">Contact Me</Link>
                        </button>
                        {/*<div
                            className="rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <Link href="https://www.linkedin.com/in/endre-svendsen-8b831b233">
                                <FaLinkedinIn/>
                            </Link>
                        </div>
                        <div
                            className="rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <Link href="https://github.com/Ensve">
                                <FaGithub/>
                            </Link>
                        </div>
                        <div
                            className="rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <Link href="/#contact">
                                <AiOutlineMail/>
                            </Link>
                        </div>*/}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Main;