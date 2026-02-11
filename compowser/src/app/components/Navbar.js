"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-background px-6 py-6">
      <div className="flex justify-between items-center">
        <div
          className="text-2xl md:text-3xl font-light tracking-widest 
          text-transparent [-webkit-text-stroke:1px_rgb(48,237,193,1)]"
        >
          <Link href="/">COMPowser</Link>
        </div>

        <div className="hidden md:flex gap-10 text-lg md:text-xl text-(--textColor)">
          <Link href="/">COMPONENTS</Link>
          <Link
            href="https://github.com/rchouhani/compowser/tree/main/compowser"
            target="_blank"
          >
            GITHUB
          </Link>
          <Link href="/about">
            ABOUT <span className="text-(--logoColor)">US</span>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-(--textColor) transition-opacity"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

  
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full 
          bg-background flex flex-col items-center gap-6 py-8 
          text-lg text-(--textColor) shadow-lg"
        >
          <Link href="/" onClick={() => setIsOpen(false)}>
            COMPONENTS
          </Link>

          <Link
            href="https://github.com/rchouhani/compowser/tree/main/compowser"
            target="_blank"
            onClick={() => setIsOpen(false)}
          >
            GITHUB
          </Link>

          <Link href="/about" onClick={() => setIsOpen(false)}>
            ABOUT <span className="text-(--logoColor)">US</span>
          </Link>
        </div>
      )}
    </nav>
  );
}