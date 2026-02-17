import CardNavbar from "../components/CardNavbar";
import CardNavbarBurger from "../components/CardNavbarBurger";
import CardNavbarIcon from "../components/CardNavbarIcon";
import CardButton from "../components/CardButton";
import CardInputClassic from "../components/CardInputClassic";
import CardInputPassword from "../components/CardInputPassword";
import CardInputCyberpunk from "../components/CardInputCyberpunk";
import CardFooter from "../components/CardFooter";
import CardCard from "../components/CardCard"; // N'oublie pas l'import de la nouvelle carte !

export const allComponents = [
  {
    id: 1,
    title: "Responsive Navbar",
    component: <CardNavbar />,
    code: `<nav className="bg-(--logoColor) p-3">
      <div className="flex flex-row items-center justify-between">
        <div><p className="text-white font-bold text-sm sm:text-base">COMPowser</p></div>
        <div className="hidden sm:flex text-white gap-5 text-sm sm:text-base">
          <Link href="#">Accueil</Link>
          <Link href="#">GitHub</Link>
          <Link href="#">À propos</Link>
        </div>
      </div>
    </nav>`
  },
  {
    id: 2,
    title: "Mobile Navbar",
    component: <CardNavbarIcon />,
    code: `<nav className="flex flex-row justify-center bg-(--logoColor) p-3">
      <div className="text-white flex justify-between w-full max-w-md">
        <Link href="#"><Home/></Link>
        <Link href="#"><Github/></Link>
        <Link href="#"><Search/></Link>
      </div>
    </nav>`
  },
  {
    id: 3,
    title: "Burger Navbar",
    component: <CardNavbarBurger />,
    code: `<div className="relative w-full">
      <div className="flex justify-between items-center bg-(--logoColor) p-3 rounded-lg">
        <p className="text-white font-bold">COMPowser</p>
        <button className="text-white"><Menu /></button>
      </div>
    </div>`
  },
  {
    id: 4,
    title: "Bouton",
    component: <CardButton />,
    code: `<button className="btn text-white text-xl bg-(--logoColor) hover:bg-[#44a68f] transition-colors pt-1 pb-1 pl-5 pr-5 rounded-md cursor-pointer">
      Button
    </button>`
  },
  {
    id: 5,
    title: "Input Classic",
    component: <CardInputClassic />,
    code: `<input className="w-100ovh border-solid border-2 border-[#30EDC1] rounded-lg p-2" type="text" placeholder=" Texte" />`
  },
  {
    id: 6,
    title: "Input Cyberpunk",
    component: <CardInputCyberpunk />,
    code: `<input type="text" placeholder="Votre message..." className="h-12 w-80 bg-black border border-[#30EDC1] text-[#30EDC1] px-4 outline-none rounded-md shadow-[0_0_15px_#30EDC1]"/>`
  },
  {
    id: 7,
    title: "Input Password",
    component: <CardInputPassword />,
    code: `<input type={showPassword ? "text" : "password"} className="w-60 border-solid border-2 border-[#30EDC1] text-[#30EDC1] rounded-lg p-2 bg-transparent outline-none" />`
  },
  {
    id: 8,
    title: "Footer Classic",
    component: <CardFooter />,
    code: `<footer className="flex flex-col items-start text-left w-full bg-(--logoColor) p-3">
      <p className="text-white font-bold mb-3">COMPowser</p>
    </footer>`
  },
  {
    id: 9,
    title: "Carte Standard", // Nouveau composant récupéré du collègue
    component: <CardCard />,
    code: `<div className="border-solid border-2 border-[#30EDC1] p-3 rounded-lg">
      <div className="flex items-center justify-center w-full flex-shrink-0">
        <Image src="/favicon-16x16.png" alt="image" width={100} height={100} />
      </div>
      <div className="flex flex-col flex-grow">
        <h2 className="uppercase font-black py-3 px-5 text-(--logoColor) text-center">Titre</h2>
        <p className="px-5 pb-5 text-center text-(--textColor) flex-grow">Exemple de carte.</p>
      </div>
    </div>`
  }
];