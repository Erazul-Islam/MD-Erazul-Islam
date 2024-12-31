/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
"use client"

import { motion } from "framer-motion";

import ContactIcon from "../icons/icons";


export default function Footer() {
    return (
        <footer className=" text-gray-300 font-serif lg:mt-12 py-10">
            <div className="lg:ml-[240px]">
                <motion.div
                    className="container  px-6 grid grid-cols-1 lg:grid-cols-3 gap-"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    {/* About Section */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-lg sm:text-center font-semibold text-white">About Me</h3>
                        <p className="text-sm">
                            I am a passionate developer focused on creating impactful <br />
                            digital solutions. Let’s connect and bring your ideas to life!
                        </p>
                    </motion.div>

                    {/* Links Section */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-lg font-semibold sm:mt-4 sm:text-center text-white">Quick Links</h3>
                        <ul className="space-y-2 sm:flex justify-between ">
                            <li className="mt-4">
                                <a href="#home" >
                                    Home
                                </a>
                            </li>
                            <li className="">
                                <a href="#about" >
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#projects" >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#blogs" >
                                    Blogs
                                </a>
                            </li>
                            <li>
                                <a href="#contact" >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-lg font-semibold sm:text-center text-white">Get in Touch</h3>
                        <ul className="space-y-2">
                            <li className="mt-4">
                                <a
                                    href="mailto:erazul89@gmail.com"
                                    className="hover:text-blue-400"
                                >
                                    📧 erazul89@gmail.com
                                </a>
                            </li>
                            <li className="mt-4">
                                <a href="tel:+1234567890" className="font-serif">
                                    📞 +880 1843291218
                                </a>
                            </li>
                            <li className="flex mt-4 space-x-4">
                                <ContactIcon />
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                className="mt-8 pt-4 text-center text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <p>© 2024 Md. Erazul Islam Taosif. All Rights Reserved.</p>
            </motion.div>
        </footer>
    );
}
