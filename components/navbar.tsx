"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import ContactIcon from "@/shared/icons/icons";

export const Navbar = () => {
  const router = useRouter();
  const handleLinkClick = () => {
    router.push("/");
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const underlineVariants = {
    initial: { width: 0 },
    whileHover: {
      width: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    whileHover: { scale: 1.1, color: "#F5A554", transition: { duration: 0.2 } },
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        {/* <NavbarBrand className="gap-3 max-w-fit">
          <Logo />
        </NavbarBrand> */}

        {/* Desktop links with animation */}
        <div className="hidden xl:flex gap-4 justify-start">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <motion.div
                animate="animate"
                className="relative"
                initial="initial"
                variants={linkVariants}
                whileHover="whileHover"
              >
                <ScrollLink
                  className={clsx(
                    "cursor-pointer text-default-800 hover:text-pink-600",
                  )}
                  color="black"
                  duration={500}
                  offset={-90}
                  smooth={true}
                  to={item.href.substring(1)}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </ScrollLink>
                {/* Animated underline */}
                <motion.div
                  className="absolute left-0 bottom-[-2px] h-[2px] bg-pink-600 "
                  variants={underlineVariants}
                />
              </motion.div>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>
      <NavbarContent justify="center">
        <ContactIcon />
      </NavbarContent>
      <NavbarContent
        className="sm:hidden basis-1 pl-4"
        justify="end"
        onClick={handleClick}
      >
        <FiMenu />
      </NavbarContent>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
