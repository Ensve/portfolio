'use client';
import React, {useState} from 'react';
import Link from "next/link";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";
import NavLinks from "@/components/NavLinks";
import {motion} from "framer-motion";
import Image from "next/image";

const NavbarClient = () => {
    const links = [
        {url: "/", title: "Home"},
        {url: "/#about", title: "About"},
        {url: "/#skills", title: "Skills"},
        {url: "/#projects", title: "Projects"},
        {url: "/#contact", title: "Contact"},
    ];

    const topVariants = {
        closed: {
          rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255, 255, 255)",
        }
    };

    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    };

    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255, 255, 255)",
        }
    };

    const listVariants = {
        closed: {
          x: "100vw",
        },
        opened: {
            x: 0,
        },
        duration: 1,
    };

    const [nav, setNav] = useState(false);

    return (
        <div className="fixed w-full h-20 z-[100] bg-[#ecf0f3] p-4">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <Image src="/assets/front-end.png" alt="/" width="50" height="50"/>
                </Link>
                <div>
                    <ul className="hidden md:flex gap-4 w-1/3">
                        {links.map((link) => (
                            <NavLinks key={link.title} link={link} />
                        ))}
                        {/*<Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>*/}
                    </ul>
                    <div onClick={(() => setNav(!nav))} className="md:hidden cursor-pointer z-50 relative">
                        {/*<AiOutlineMenu size={25} />*/}
                        <button className="bg-none w-7 h-6 flex flex-col justify-between">
                            <motion.div
                                variants={topVariants}
                                animate={nav ? "opened" : "closed"}
                                className="w-7 h-1 bg-black rounded origin-left">
                            </motion.div>
                            <motion.div
                                variants={centerVariants}
                                animate={nav ? "opened" : "closed"}
                                className="w-7 h-1 bg-black rounded">
                            </motion.div>
                            <motion.div
                                variants={bottomVariants}
                                animate={nav ? "opened" : "closed"}
                                className="w-7 h-1 bg-black rounded origin-left">
                            </motion.div>
                        </button>
                    </div>
                </div>
            </div>

            {nav && (
            <div
                className="absolute md:hidden top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center p-10">
                <div>

                </div>
                <motion.div variants={listVariants} initial={"closed"} animate={"opened"}
                            className="py-4 flex flex-col items-center justify-center text-white text-center gap-4 pt-10 z-40">
                    {/*{links.map((link) => (
                            <NavLinks onClick={() => setNav(false)} key={link.title} className="uppercase text-sm p-1 border-b border-transparent hover:border-b hover:border-[#5651e5] transition duration-200" link={link} />
                    ))}*/}

                        <ul className="uppercase">
                            <Link href="/">
                                <li onClick={() => setNav(false)} className="py-2 text-sm border-b border-transparent hover:border-b hover:border-[#5651e5]">Home</li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={() => setNav(false)} className="py-4 text-sm border-b border-transparent hover:border-b hover:border-[#5651e5]">About</li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={() => setNav(false)} className="py-4 text-sm border-b border-transparent hover:border-b hover:border-[#5651e5]">Skills</li>
                            </Link>
                            <Link href="/#projects">
                                <li onClick={() => setNav(false)} className="py-4 text-sm border-b border-transparent hover:border-b hover:border-[#5651e5]">Projects</li>
                            </Link>
                            <Link href="/#contat">
                                <li onClick={() => setNav(false)} className="py-4 text-sm border-b border-transparent hover:border-b hover:border-[#5651e5]">Contact</li>
                            </Link>
                        </ul>

                        <div className="pt-20">
                            <p className="uppercase tracking-widest text-[#5651e5] text-center">Let`s Connect</p>
                            <div className="flex items-center text-center justify-between gap-4 my-4 sm:w-[80%]">
                                <div
                                    className="ml-1 rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <Link href="https://www.linkedin.com/in/endre-svendsen-8b831b233">
                                        <FaLinkedinIn/>
                                    </Link>
                                </div>
                                <div
                                    className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <Link href="https://github.com/Ensve">
                                        <FaGithub/>
                                    </Link>
                                </div>
                                <div
                                    className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <Link href="/#contact">
                                        <AiOutlineMail/>
                                    </Link>
                                </div>
                            </div>
                            <div className="my-4 py-10">
                                <p className="text-sm">© 2024 Endre Svendsen</p>
                            </div>
                        </div>
                    </motion.div>
            </div>
                )}

            {/*<div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                <div
                    className={
                    nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }
                >
                    <div>
                        <div className="flex w-full justify-between items-center">
                            <h1>ES</h1>
                            <Image src="" alt="/" width="87" height="35"/>
                            <div  onClick={toggleNav} className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3">
                                <AiOutlineClose/>
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">Let`s build something legendary together</p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li className="py-4 text-sm">Home</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">About</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">Skills</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">Projects</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">Let`s Connect</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <div
                                    className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn/>
                                </div>
                                <div
                                    className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaGithub/>
                                </div>
                                <div
                                    className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <AiOutlineMail/>
                                </div>
                                <div
                                    className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <BsFillPersonLinesFill/>
                                </div>
                            </div>
                            <div className="my-4 py-10">
                                <p className="text-sm">© 2024 Endre Svendsen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
        </div>
    );
};

export default NavbarClient;