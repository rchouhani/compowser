"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function CardNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-(--logoColor) p-3">
      <div className="flex flex-row items-center justify-between">
        <div>
          <p className="text-white font-bold text-sm sm:text-base">COMPowser</p>
        </div>

        <div className="hidden sm:flex text-white gap-5 text-sm sm:text-base">
          <Link className="hover:underline hover:font-bold" href={"#"}>
            Accueil
          </Link>
          <Link className="hover:underline hover:font-bold" href={"#"}>
            GitHub
          </Link>
          <Link className="hover:underline hover:font-bold" href={"#"}>
            À propos
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden flex flex-col gap-3 mt-4 text-white text-sm">
          <Link
            className="hover:underline hover:font-bold py-2"
            href={"#"}
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
          <Link
            className="hover:underline hover:font-bold py-2"
            href={"#"}
            onClick={() => setIsOpen(false)}
          >
            GitHub
          </Link>
          <Link
            className="hover:underline hover:font-bold py-2"
            href={"#"}
            onClick={() => setIsOpen(false)}
          >
            À propos
          </Link>
        </div>
      )}
    </nav>
  );
}