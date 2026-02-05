"use client";

import { Menu, X, Home, Info, Mail, Image } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CardNavbarBurger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center bg-(--logoColor) p-3 rounded-lg">
        <div>
          <p className="text-white font-bold">COMPowser</p>
        </div>
        
        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:opacity-70 transition-opacity">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-14 left-0 right-0 z-10">
          <nav className="bg-(--logoColor) rounded-xl p-6 shadow-lg">
            <ul className="flex flex-col items-center gap-4 text-white text-lg">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 hover:text-gray-300 transition-colors"
                >
                  <Home size={20} />
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 hover:text-gray-300 transition-colors"
                >
                  <Info size={20} />
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 hover:text-gray-300 transition-colors"
                >
                  <Image size={20} />
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 hover:text-gray-300 transition-colors"
                >
                  <Mail size={20} />
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}