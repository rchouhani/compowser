"use client";

import { useEffect, useRef, useState } from "react";

export default function CardInputCyberpunk() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex justify-center items-center">
      <div className="relative flex items-center">
        {/* Partie gauche */}
        <div
          className={`
            h-12 w-30 bg-black transition-all duration-700
            ${isVisible ? "translate-x-0" : "-translate-x-40"}
          `}
        />

        {/* Partie droite */}
        <div
          className={`
            h-12 w-30 bg-black transition-all duration-700
            ${isVisible ? "translate-x-0" : "translate-x-40"}
          `}
        />

        {/* Input réel */}
        <input
          type="text"
          placeholder="Votre message..."
          className={`
          absolute h-12 w-60 bg-(--background)
          border border-[#30EDC1]
          text-[#30EDC1]
          px-4 outline-none rounded-lg
          transition-opacity duration-700
          ${isVisible ? "opacity-100 glow-animate" : "opacity-0"}
        `}
        />
      </div>
    </div>
  );
}
