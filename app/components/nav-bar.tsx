"use client";

import { ThemeToggle } from "./theme-toggle";

export const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Art of Marda</div>
          <div className="space-x-4">
            <a href="/" className="hover:text-blue-300">
              Home
            </a>
            <a href="/gallery" className="hover:text-blue-300">
              Gallery
            </a>
            <a href="/about" className="hover:text-blue-300">
              About
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
