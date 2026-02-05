import { Github, Home, PlusCircle, Search } from "lucide-react";
import Link from "next/link";

export default function CardNavbarIcon () {
return(
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
    </nav>
    )
}