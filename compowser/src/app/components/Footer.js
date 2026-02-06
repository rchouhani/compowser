import { Copyright } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="flex flex-col gap-5 p-5 mt-6 border-t-2 border-t-(--border)">
            <div className="text-sm md:text-2xl
                font-light tracking-widest text-transparent [-webkit-text-stroke:1px_rgb(48,237,193,1)]
                mb-4 md:mb-0 ">
                <Link href="/">COMPowser</Link>
            </div>
           
            <p className="flex flex-row items-center justify-center gap-2 text-white"> Tous droits réservés à 
                <a href="https://www.linkedin.com/in/camille-lebigot-pro/" className="font-bold text-(--logoColor)">Camille</a>|
                <a href="www.linkedin.com/in/fdiarra" className="font-bold text-(--logoColor)">Faty</a>|
                <a href="https://www.linkedin.com/in/romain-chouhani-334b1586/" className="font-bold text-(--logoColor)">Romain</a>
            </p>

        </footer>
    )
}