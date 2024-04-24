"use client"
import React from 'react';
import {useState} from "react";

const About = () => {

    const [loading, setLoading] = useState(false);
    const [downloadSuccess, setDownloadSuccess] = useState(false);

    const handleDownload = async (e) => {
        e.preventDefault();
        setLoading(true);
        setDownloadSuccess(false);

        fetch('/Resume.pdf')
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = "Resume.pdf";
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
                setDownloadSuccess(true);
                setLoading(false);

                setTimeout(() => {
                    setDownloadSuccess(false);
                }, 3000);
            })
            .catch(() => {
                console.error('Download failed');
                setLoading(false);
            });
    };


    return (
        <div id="about" className="w-full md:h-screen flex items-center py-16 p-3">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
                    <p className="py-2 text-gray-600">As a dedicated technology enthusiast and a Bachelor ́s student in Frontend and Mobile Development, I am passionate about exploring and mastering new technologies. My experience ranges from part-time work as a Shop Assistant at telia, where I developed solid skills in customer service and technical support, to hands-on project work in my field. Notably, I contributed to an extensive Bachelor project at TV 2 Sporten, applying my technical skills effectively.</p>
                    <p className="py-2 text-gray-600"> My proactive learning approach, combined with the ability to quickly absorb new knowledge and work diligently towards results, makes me a valuable contributor in any setting. I thrive in both team environments and when working independently, always eager to share knowledge and learn from others. My organized nature, focus on results, and curiosity about technology drive my continuous personal and professional development.</p>
                    <button onClick={handleDownload} >
                        <p className="py-2 text-gray-600 underline cursor-pointer">Download my resume.</p>
                    </button>
                    {loading && <div>Downloading...</div>}
                    {downloadSuccess && <div><span className="text-green-500">Successfully downloaded!</span> ✅</div>}
                </div>
                <div className="grayscale w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 hover:grayscale-0 ease-in duration-300">
                    <img className="rounded-lg" src="/assets/me.jpg" alt="/" />
                </div>
            </div>
        </div>
    );
};

export default About;