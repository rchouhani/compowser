

import Link from "next/link";

export default function CardNavbar () {
return(
    <nav className="flex flex-row items-center justify-between bg-(--logoColor) p-3">
        <div>
            <p className="text-white font-bold">COMPowser</p>
        </div>
        <div className="text-white flex gap-5 ">
            <Link className="hover:underline-font-bold" href={"#"}> Accueil </Link>
            <Link className="hover:underline" href={"#"}> GitHub </Link>
            <Link className="hover:underline" href={"#"}> À propos </Link>
        </div>
    </nav>
    )
}

