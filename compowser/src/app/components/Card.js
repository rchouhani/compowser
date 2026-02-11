"use client"; 
import { useState, useEffect } from "react"; 
import { Eye, X, Copy, Check } from "lucide-react"; // Ajout de Copy et Check
import Prism from "prismjs";

import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-okaidia.css";

export default function Card(props) { 
    const [isOpen, setIsOpen] = useState(false); 
    const [copied, setCopied] = useState(false); // État pour le feedback de copie

    // Fonction de copie
    const handleCopy = () => {
        navigator.clipboard.writeText(props.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset après 2s
    };

    useEffect(() => {
        if (isOpen) {
            Prism.highlightAll();
        }
    }, [isOpen]); 

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
                        
                    <div className="m-5 p-3"> 
                        {props.component} 
                    </div> 

                    {/* AJOUT DU BOUTON COPIER */}
                    <div className="flex justify-end mb-2">
                        <button 
                            onClick={handleCopy}
                            className="flex items-center gap-2 text-xs font-bold py-1 px-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-all active:scale-95"
                        >
                            {copied ? (
                                <>
                                    <span className="text-(--logoColor)">Copié !</span>
                                    <Check size={14} className="text-(--logoColor)" />
                                </>
                            ) : (
                                <>
                                    <span>Copier</span>
                                    <Copy size={14} />
                                </>
                            )}
                        </button>
                    </div>

                    <pre className="rounded-lg overflow-auto max-h-[60vh] text-left whitespace-pre font-mono custom-scrollbar"> 
                        <code className="language-jsx">{props.code}</code> 
                    </pre> 
                </div> 
            </div>
        )}
        </> 
    ); 
}
