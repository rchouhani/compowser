"use client";

import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export default function CardInputPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form>
      <div className="field field-password relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          placeholder=" Password"
          className="pr-12 w-60 border-solid border-2 border-[#30EDC1] text-[#30EDC1] rounded-lg p-2"
        />
        <div className="absolute right-35 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
          <div
            className={`size-6 cursor-pointer ${showPassword ? "hidden" : ""}`}
            onClick={togglePassword}
            aria-label="Afficher le mot de passe"
          >
            <Eye />
          </div>

          <div
            className={`size-6 cursor-pointer ${showPassword ? "" : "hidden"}`}
            onClick={togglePassword}
            aria-label="Masquer le mot de passe"
          >
            <EyeClosed />
          </div>
        </div>
      </div>
    </form>
  );
}
