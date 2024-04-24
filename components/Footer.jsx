import React from 'react';
import Link from "next/link";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="w-screen bg-black">
            <div className="flex flex-col justify-center items-center gap-2 p-4">
                <p className="uppercase tracking-widest text-[#5651e5] text-center">Let`s Connect</p>
                <div className="flex items-center text-white text-center justify-center gap-4 my-4 sm:w-[80%]">
                    <div
                        className="rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-120 hover:text-[#5651e5] ease-in duration-200">
                        <Link href="https://www.linkedin.com/in/endre-svendsen-8b831b233">
                            <FaLinkedinIn/>
                        </Link>
                    </div>
                    <div
                        className="rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-120 ease-in duration-200 hover:text-[#5651e5]">
                        <Link href="https://github.com/Ensve">
                            <FaGithub/>
                        </Link>
                    </div>
                    <div
                        className="rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-120 ease-in duration-200 hover:text-[#5651e5]">
                        <Link href="/#contact">
                            <AiOutlineMail/>
                        </Link>
                    </div>
                </div>
                <p className="text-white text-center">© 2024 Endre Svendsen</p>
            </div>
        </div>
    );
};

export default Footer;