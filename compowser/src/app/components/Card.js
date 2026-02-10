"use client"; 
import { useState } from "react"; 
import { Eye, X } from "lucide-react"; 

export default function Card(props) { 
    const [isOpen, setIsOpen] = useState(false); 
    
    return ( 
        <> 
        <article className="border-2 rounded-2xl w-130 border-(--borderCard) flex flex-col"> 
            <h2 className="uppercase font-black pb-3 p-5 text-(--textColor)"> {props.title} </h2> 
            
            <div className="m-2 flex-grow"> 
                {props.component} 
            </div> 
            
            <div className="relative rounded-b-2xl p-3 group flex justify-center"> 
                <button onClick={() => setIsOpen(true)} 
                    className="
                        transition-all duration-200 cursor-pointer
                        hover:scale-110
                        hover:shadow-[0_0_10px_var(--logoColor)]
                        rounded-full p-1
                        "> 
                    <Eye size={22} className=" text-(--textColor)" /> 
                </button> 
            </div> 
        </article> 
                
        {/* ICI LA MODALE QUI PERMET D'AFFICHER LE CODE DATA.JS DE CAMILLE */} 
            {isOpen && ( 
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"> 
                    <div className="border border-(--borderCard) rounded-xl w-[90%] max-w-3xl p-6 relative"> 
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 hover:opacity-70" aria-label="Fermer" > 
                            <X size={22} className=" text-(--textColor)"/> 
                        </button> 
                            
                        <div className="m-5"> 
                            {props.component} 
                        </div> 

                        <pre className="bg-gray-900 text-green-400 text-sm p-4 rounded-lg overflow-auto max-h-[60vh]"> 
                            <code> {props.code} </code> 
                        </pre> 
                    </div> 
                </div>
            )}
        </> 
    ); 
}