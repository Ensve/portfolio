"use client"
import React from 'react';
import {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        emailjs
            .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSuccess(true);
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setError(true);
                },
            );
    };

    return (
        <div id="contact" className="w-full h-screen lg:h-screen flex items-center justify-center p-3">
            <section className="">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <p className="mb-4 text-4xl tracking-wider font-bold text-center text-[#5651e5]">Contact
                        Me</p>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 sm:text-xl">Got
                        some questions about my work, or want to know more about me? Let me know.</p>
                    <form onSubmit={sendEmail} ref={form} className="space-y-8">
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-600">Your
                                email</label>
                            <input type="email" id="email"
                                   className="shadow-sm bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                   placeholder="Email" required
                                   name="user_email"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message"
                                   className="block mb-2 text-sm font-medium text-gray-600">Your
                                message</label>
                            <textarea id="message" rows="6"
                                      name="user_message"
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                      placeholder="Dear Endre..."></textarea>
                        </div>
                        <button type="submit"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#5651e5] rounded-lg hover:bg-[#5451f5] focus:ring-4 focus:outline-none focus:ring-blue-300">Send
                            message
                        </button>
                        {success && <span className="text-green-500 font-semibold block">Message sent successfully!</span>}
                        {error && <span className="text-red-500 font-semibold block">An error occurred, please try again later.</span>}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;