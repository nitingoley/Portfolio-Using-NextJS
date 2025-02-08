"use client";   

import React, { useState } from "react";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

 
  const handleLinkClick = (link: string) => {
    setActiveLink(link);

    if (link === "contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative top-3 w-full flex justify-center z-10">
      <nav className="flex gap-2 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#"
          className={`nav-item ${activeLink === "home" ? "bg-white text-gray-900" : ""}`}
          onClick={() => handleLinkClick("home")}
        >
          Home
        </a>
        <a
          href="#"
          className={`nav-item ${activeLink === "about" ? "bg-white text-gray-900" : ""}`}
          onClick={() => handleLinkClick("about")}
        >
          About
        </a>
        <a
          href="#"
          className={`nav-item ${activeLink === "projects" ? "bg-white text-gray-900" : ""}`}
          onClick={() => handleLinkClick("projects")}
        >
          Projects
        </a>
        <a
          href="#"
          className={`nav-item ${activeLink === "contact" ? "bg-white text-gray-900" : ""} 
                      ${activeLink === "contact" ? "hover:bg-white/70 hover:text-gray-900" : ""}`}
          onClick={() => handleLinkClick("contact")}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
