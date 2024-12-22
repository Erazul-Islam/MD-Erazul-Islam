/* eslint-disable import/order */
/* eslint-disable prettier/prettier */



import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import SmoothScroller from "@/components/ui/scroll/Scrool";

import { ReactNode } from "react";
import Footer from "@/shared/Footer/Footer";

interface RootLayout {
  children: ReactNode;
  about: ReactNode;
  education: ReactNode;
  skills: ReactNode;
  projects: ReactNode;
  blogs: ReactNode;
  contact: ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children, about, skills, projects, blogs, education, contact }: RootLayout) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <SmoothScroller />
            <div id="home">
              {children}
            </div>
            <div id="skills">
              {skills}
            </div>
            <div id="projects">
              {projects}
            </div>
            <div id="about">
              {about}
            </div>
            <div id="blogs">
              {blogs}
            </div>
            <div id="contact">
              {contact}
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
