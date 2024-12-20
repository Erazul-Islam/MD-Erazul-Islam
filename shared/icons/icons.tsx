/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import React from 'react';
import { motion } from "framer-motion"
import { FaDiscord, FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';

export const iconVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 },
    },
    whileHover: { scale: 1.2,  transition: { duration: 0.3 } },
    whileTap: { scale: 0.95, rotate: 0, transition: { duration: 0.2 } },
};

const ContactIcon = () => {
    return (
        <div>
            <div className="flex flex-row gap-3 items-center">
                <motion.div
                    animate="animate"
                    initial="initial"
                    variants={iconVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                >
                    <Button
                        isIconOnly
                        aria-label="Discord"
                        as={Link}
                        target="_blank"
                        color='danger'
                        href={'https://www.linkedin.com/in/md-erazul-islam'}
                        radius="sm"
                        size="sm"
                        startContent={<FaLinkedin className="text-white" size={18} />}
                        variant="ghost"
                    />
                </motion.div>
                <motion.div
                    animate="animate"
                    initial="initial"
                    variants={iconVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                >
                    <Button
                        isIconOnly
                        aria-label="Twitter"
                        as={Link}
                        target="_blank"
                        color='danger'
                        href={'https://x.com/erazulIslamT'}
                        radius="sm"
                        size="sm"
                        startContent={<FaTwitter className="text-white" size={18} />}
                        variant="ghost"
                    />
                </motion.div>
                <motion.div
                    animate="animate"
                    initial="initial"
                    variants={iconVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                >
                    <Button
                        isIconOnly
                        aria-label="Discord"
                        as={Link}
                        target="_blank"
                        color='danger'
                        href={'/'}
                        radius="sm"
                        size="sm"
                        startContent={<FaDiscord className="text-white" size={18} />}
                        variant="ghost"
                    />
                </motion.div>
                <motion.div
                    animate="animate"
                    initial="initial"
                    variants={iconVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                >
                    <Button
                        isIconOnly
                        aria-label="Github"
                        as={Link}
                        target="_blank"
                        color='danger'
                        href={'https://github.com/Erazul-Islam'}
                        radius="sm"
                        size="sm"
                        startContent={<FaGithub className="text-white" size={18} />}
                        variant="ghost"
                    />
                </motion.div>
                <motion.div
                    animate="animate"
                    initial="initial"
                    variants={iconVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                >
                    <Button
                        isIconOnly
                        aria-label="Facebook"
                        as={Link}
                        target="_blank"
                        color='danger'
                        href={"https://www.facebook.com/erazulislam.taosif"}
                        radius="sm"
                        size="sm"
                        startContent={<FaFacebookF className="text-white" size={18} />}
                        variant="ghost"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default ContactIcon;