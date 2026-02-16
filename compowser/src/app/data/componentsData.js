
// src/data/componentsData.js

import CardFooter from "../components/CardFooter";

export const codeSnippets = {

CardNavbar: `
/* Note : Ce composant nécessite lucide-react et useState pour fonctionner */
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
    </nav>`,

CardNavbarIcon: `
<nav className="flex flex-row justify-center bg-(--logoColor) p-3">
<div className="text-white flex justify-between w-full max-w-md">
<Link href={"#"} className="hover:text-gray-300 transition-colors">
<Home/>
</Link>
<Link href={"#"} className="hover:text-gray-300 transition-colors">
<Github/>
</Link>
<Link href={"#"} className="hover:text-gray-300 transition-colors">
<Search/>
</Link>
<Link href={"#"} className="hover:text-gray-300 transition-colors">
<PlusCircle/>
</Link>
</div>
</nav>`,



CardNavbarBurger: 
`/* Note : Ce composant nécessite lucide-react et useState pour fonctionner */
<div className="relative w-full">
<div className="flex justify-between items-center bg-(--logoColor) p-3 rounded-lg">
<div>
<p className="text-white font-bold">COMPowser</p>
</div>
<button className="text-white">
{/* Icône Menu (Lucide) */}
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" />
</svg>
</button>
</div>


{/* Menu déroulant */}
<div className="absolute top-14 left-0 right-0 z-10">
<nav className="bg-(--logoColor) rounded-xl p-6 shadow-lg">
<ul className="flex flex-col items-center gap-4 text-white">
<li>Accueil</li>
<li>À propos</li>
<li>Galerie</li>
<li>Contact</li>
</ul>
</nav>
</div>
</div>`,

cardButton: `<button className="btn text-white text-xl bg-(--logoColor) hover:bg-[#44a68f] transition-colors pt-1 pb-1 pl-5 pr-5 rounded-md cursor-pointer">
Button
</button>`,

CardInputClassic: `<input className="w-100ovh border-solid border-2 border-[#30EDC1] rounded-lg p-2" type="text" placeholder=" Texte" />
`,

CardInputCyberpunk: `
/* Note : Ce composant utilise des animations Tailwind */
<div className="flex justify-center items-center">
<div className="relative flex items-center">
{/* Input avec effet Glow Cyberpunk */}
<input type="text" placeholder="Votre message..." className="h-12 w-80 bg-black border border-[#30EDC1] text-[#30EDC1] px-4 outline-none rounded-md shadow-[0_0_15px_#30EDC1]"/>
</div>
</div>`,



cardInputPassword: `/* Note : Ce composant nécessite Lucide-React et un state showPassword pour fonctionner */
<form>
  <div className="field field-password relative flex items-center">
    <input
      type={showPassword ? "text" : "password"}
      placeholder=" Password"
      className="pr-12 w-60 border-solid border-2 border-[#30EDC1] text-[#30EDC1] rounded-lg p-2 bg-transparent outline-none"
    />
    <div className="absolute right-3 cursor-pointer flex items-center">
      {showPassword ? (
        <EyeClosed size={20} onClick={togglePassword} className="text-[#30EDC1]" />
      ) : (
        <Eye size={20} onClick={togglePassword} className="text-[#30EDC1]" />
      )}
    </div>
  </div>
</form>`,

CardFooter: `<footer className="flex flex-col items-start text-left w-full bg-(--logoColor) p-3">
      <p className="text-white font-bold mb-3">COMPowser</p>

      <div className="text-white flex flex-col gap-1">
        <Link className="hover:underline hover:font-bold" href="#">Accueil</Link>
        <Link className="hover:underline hover:font-bold" href="#">GitHub</Link>
        <Link className="hover:underline hover:font-bold" href="#">À propos</Link>
      </div>
    </footer>`
}