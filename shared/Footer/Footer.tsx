"use client";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import ContactIcon from "../icons/icons";

export default function Footer() {
  return (
    <footer className=" max-w-7xl mx-auto text-gray-300 font-serif lg:mt-12 py-10">
      <div className="bg-black text-white flex flex-col">
        <div className="container mx-auto px-4 py-12 flex-grow">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Left Section */}
            <div className="space-y-8 md:w-1/3">
              <div className="space-y-2">
                <h1 className="text-5xl font-bold">
                  Get Ready <span className="font-normal">To Create</span>
                </h1>
                <h2 className="text-5xl font-normal">Great</h2>
              </div>

              <div className="relative">
                <input
                  className="w-full bg-transparent border-b border-gray-600 py-2 pr-10 focus:outline-none focus:border-white"
                  placeholder="Email Adress"
                  type="email"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Middle Section - Quick Links */}
            <div className="md:w-1/4">
              <h3 className="text-xl font-bold mb-6">Quick Link</h3>
              <ul className="space-y-4">
                <li>
                  <Link className="hover:text-gray-300" href="#about">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-300" href="#projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-300" href="#contact">
                    Contact Me
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-300" href="#blog">
                    Blog Post
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-300" href="#">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Section - Contact */}
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span>erazul89@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span>Jahangirnagr University,Savar Dhaka</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span>01843291218</span>
                </div>

                <div className=" mt-8">
                  <ContactIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              ©InversWeb 2025 | All Rights Reserved
            </div>
            <div className="flex gap-6">
              <Link className="text-gray-400 hover:text-white" href="#">
                Trams & Condition
              </Link>
              <Link className="text-gray-400 hover:text-white" href="#">
                Privacy Policy
              </Link>
              <Link className="text-gray-400 hover:text-white" href="#">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
