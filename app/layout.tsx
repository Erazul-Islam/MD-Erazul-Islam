import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { ReactNode } from "react";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/shared/Footer/Footer";

interface RootLayout {
  children: ReactNode;
  about: ReactNode;
  education: ReactNode;
  skills: ReactNode;
  projects: ReactNode;
  blogs: ReactNode;
  contact: ReactNode;
  experience: ReactNode;
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

export default function RootLayout({
  children,
  // about,
  skills,
  projects,
  blogs,
  experience,
  contact,
}: RootLayout) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-serif overflow-x-hidden antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div>
            <Navbar />
            <div id="home">{children}</div>
            <div id="skills">{skills}</div>
            <div id="experience">{experience}</div>
            <div className="px-12" id="projects">
              {projects}
            </div>
            <div id="blogs">{blogs}</div>
            <div id="contact">{contact}</div>
            <div>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
