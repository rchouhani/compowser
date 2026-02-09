'use client'

import { useEffect, useRef, useState } from "react";

export default function InputCyberpunk() {
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
            h-12 w-40 bg-black transition-all duration-700
            ${isVisible ? "translate-x-0" : "-translate-x-40"}
          `}
        />

        {/* Partie droite */}
        <div
          className={`
            h-12 w-40 bg-black transition-all duration-700
            ${isVisible ? "translate-x-0" : "translate-x-40"}
          `}
        />

        {/* Input réel */}
        <input
          type="text"
          placeholder="Votre message..."
          className={`
            absolute h-12 w-80 bg-black text-green-400
            border border-green-400 rounded-md
            px-4 outline-none
            transition-all duration-5000
            ${isVisible ? "opacity-100 glow-animate" : "opacity-0"}
          `}
        />
      </div>
    </div>
  );
}

