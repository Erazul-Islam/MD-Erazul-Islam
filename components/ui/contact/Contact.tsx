/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */

"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2
        }
    }
}
const ContactComponent = () => {

    const ref = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLFormElement | null>(null);
    const [error, setError] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const isInView = useInView(ref, { margin: "-100px" })

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current) {
            emailjs.sendForm("service_fjgysjg", "template_lfi5s9x", formRef.current, '_h7WSz0zA-C7JJLVB')
                .then((result) => {
                    setSuccess(true);
                    console.log(result);
                }, (error) => {
                    setError(true);
                    console.log(error.text);
                });
        } else {
            console.error("Form reference is null");
        }
    };

    return (
        <motion.div ref={ref} variants={variants} initial="initial" animate="animate" className="h-full lg:ml-[230px] lg:mr-48 max-w-full  md:flex items-center gap-12">
            <motion.div variants={variants} className="flex-1 flex flex-col gap-10">
                <motion.h1 variants={variants} className="md:text-8xl font-serif text-center lg:text-left md:leading-[100px]">Let's work together</motion.h1>
                <motion.div className="text-center lg:text-left" variants={variants}>
                    <h2 className="font-serif">Mail</h2>
                    <span className="font-serif">erazul89@gmail.com</span>
                </motion.div>
                <motion.div className="text-center lg:text-left" variants={variants}>
                    <h2>Address</h2>
                    <span className="font-serif">Sahid TajUddin Ahmod Hall , JU</span>
                </motion.div>
                <motion.div className="text-center lg:text-left" variants={variants}>
                    <h2>Phone</h2>
                    <span className="font-serif">01843291218</span>
                </motion.div>
            </motion.div>
            <div className="flex-1 relative">
                <motion.div className=" z-0 stroke-orange-400 absolute m-auto" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 3, duration: 1 }} >
                    <svg className="w-full px-5 mx-auto items-center mt-12 lg:mt-24 lg:ml-24 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[450px] lg:max-h-[450px] xl:max-w-2xl" viewBox="0 0 32.666 32.666">
                        <motion.path
                            strokeWidth={0.2}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 3 }}
                            d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
                        />
                    </svg>
                </motion.div>
                <motion.form
                    onSubmit={sendEmail}
                    ref={formRef}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                    className="flex px-8 flex-col mt-6 lg:mt-12 gap-5"
                >
                    {/* Name Input */}
                    <input
                        className="rounded-md p-4 bg-black border border-pink-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
                        type="text"
                        placeholder="Name"
                        onChange={handleInputChange}
                        value={formData.name}
                        name="name"
                    />

                    {/* Email Input */}
                    <input
                        className="rounded-md p-4 bg-black border border-pink-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
                        type="email"
                        required
                        onChange={handleInputChange}
                        value={formData.email}
                        placeholder="Email"
                        name="email"
                    />

                    {/* Message Textarea */}
                    <textarea
                        className="rounded-md p-4 bg-black border-pink-800 text-white border focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        name="message"
                        rows={8}
                    />

                    {/* Submit Button */}
                    <button className="border rounded-md border-pink-800 p-4 bg-black text-white hover:bg-pink-800 cursor-pointer">
                        Submit
                    </button>

                    {/* Error/Success Messages */}
                    {error && <span className="text-red-500 mt-2">Error occurred!</span>}
                    {success && <span className="text-green-500 mt-2">Wow, Success!</span>}
                </motion.form>

            </div>
        </motion.div>
    );
};

export default ContactComponent;