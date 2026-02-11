"use client"; 
import { useState, useEffect } from "react"; // Ajout de useEffect
import { Eye, X } from "lucide-react"; 
import Prism from "prismjs";

// Les styles et le langage
// import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-okaidia.css";

export default function Card(props) { 
    const [isOpen, setIsOpen] = useState(false); 

    // Cette fonction surveille l'ouverture de la modale
    useEffect(() => {
        if (isOpen) {
            // Prism analyse tout le code présent dans la page
            Prism.highlightAll();
        }
    }, [isOpen]); // Se déclenche dès que isOpen change de valeur

    return ( 
        <> 
        <article className="border-2 rounded-2xl w-130 border-(--borderCard) flex flex-col"> 
            <h2 className="uppercase font-black pb-3 p-5 text-(--textColor)"> {props.title} </h2> 
            
            <div className="m-2 flex-grow"> 
                {props.component} 
            </div> 
            
            <div className="relative rounded-b-2xl p-3 group flex justify-center"> 
                <button onClick={() => setIsOpen(true)} 
                    className="transition-all duration-200 cursor-pointer hover:scale-110 hover:shadow-[0_0_10px_var(--logoColor)] rounded-full p-1"> 
                    <Eye size={22} className=" text-(--textColor)" /> 
                </button> 
            </div> 
        </article> 
                
        {/* MODALE D'AFFICHAGE DU CODE */} 
        {isOpen && ( 
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"> 
                <div className="bg-[#1a1a1a] border border-(--borderCard) rounded-xl w-[90%] max-w-3xl p-6 relative"> 
                    <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 hover:opacity-70 text-white" aria-label="Fermer" > 
                        <X size={22} /> 
                    </button> 
                        
                    <div className="m-5 flex justify-center"> 
                        {props.component} 
                    </div> 

                    {/* On ajoute la classe language-jsx pour que Prism sache quoi colorier */}
                    <pre className="rounded-lg overflow-auto max-h-[60vh] text-left whitespace-pre font-mono custom-scrollbar"> 
                        <code className="language-jsx">{props.code}</code> 
                    </pre> 
                </div> 
            </div>
        )}
        </> 
    ); 
}