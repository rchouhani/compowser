"use client";

import { useState } from "react";
import Card from "./components/Card";
import { allComponents } from "./data/componentsData";
import { Search, X} from "lucide-react";

export default function Home() {
  // États pour la recherche
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Logique de filtrage
  const filteredComponents = allComponents.filter((comp) =>
    comp.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    setSearchQuery(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      {/* SECTION HEADER : Marges fluides pour éviter les débordements */}
      <div className="flex flex-col items-start justify-start mx-4 sm:mx-8 md:mx-14 p-4 mt-25 sm:p-6 md:p-8 lg:p-15 font-sans overflow-hidden">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 md:mb-5 wrap-break-word w-full">
          Copiez, Collez, Codez !
        </h1>
        <div className="w-full">
          <p className="text-(--textColor) mb-4 max-w-full sm:max-w-2xl md:max-w-3xl lg:w-125 text-justify text-sm sm:text-base">
            Ici, tu trouveras des exemples de composants réutilisables simples
            et basiques que tu pourras customiser toi-même dans ton code.
            <br />
            On te donne juste un premier petit coup de pouce et à toi de jouer !
          </p>
          <p className="text-(--textColor) max-w-full sm:max-w-2xl md:max-w-3xl lg:w-125 text-justify text-sm sm:text-base mb-4">
            Tu as une vision sur le composant créé et à côté, le code à
            récupérer.
          </p>
          <p className="text-xs sm:text-sm italic border-l-2 border-[#30EDC1] pl-3 sm:pl-4 mt-4 text-(--textColor) max-w-full">
            Composants en JSX pour Next.js/React avec Tailwind CSS <br /> conçus avec une charte graphique unifiée.
          </p>
        </div>
      </div>

      {/* SECTION RECHERCHE ET GALERIE */}
      <section className="flex flex-col items-center px-4 mb-20 w-full overflow-hidden">
        <h2 className="text-xl sm:text-3xl md:text-4xl text-transparent mt-6 [-webkit-text-stroke:1px_rgb(48,237,193,1)] text-center uppercase break-words w-full max-w-full">
          Trouvez vos components
        </h2>
        
       {/* Barre de recherche avec bouton Reset */}
<div className="relative w-full max-w-[90%] sm:max-w-md mt-10 group">
  {/* Bouton Loupe (Gauche) */}
  <button 
    onClick={handleSearch}
    className="absolute inset-y-0 left-0 flex items-center pl-4 cursor-pointer z-10"
  >
    <Search size={18} className="text-[#30EDC1] opacity-70 group-focus-within:opacity-100 transition-opacity" />
  </button>

  <input 
    type="text" 
    placeholder="Rechercher..."
    className="w-full border-2 border-[#30EDC1] rounded-lg py-3 pl-12 pr-24 bg-transparent text-white outline-none focus:shadow-[0_0_15px_rgba(48,237,193,0.3)] transition-all font-sans text-sm sm:text-base"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    onKeyDown={handleKeyDown}
  />

  {/* Bouton Reset (Croix) - Apparaît seulement s'il y a du texte */}
  {inputValue && (
    <button
      onClick={() => {
        setInputValue("");
        setSearchQuery(""); // On réinitialise aussi la recherche validée
      }}
      className="absolute inset-y-0 right-16 flex items-center pr-7 text-[#30EDC1]/50 hover:text-[#30EDC1] transition-colors cursor-pointer"
      title="Effacer la recherche"
    >
      <X size={18} />
    </button>
  )}

  {/* Bouton ENTER */}
  <button 
    onClick={handleSearch}
    className="absolute inset-y-2 right-2 px-2 sm:px-3 flex items-center bg-[#30EDC1]/10 hover:bg-[#30EDC1] text-[#30EDC1] hover:text-black rounded-md transition-all text-[9px] sm:text-[10px] font-bold cursor-pointer border border-[#30EDC1]/30 tracking-widest active:scale-95"
  >
    ENTRER
  </button>
</div>

        {/* Grille de composants */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 sm:gap-10 mt-10 w-full p-2 sm:p-5 text-center">
          {filteredComponents.length > 0 ? (
            filteredComponents.map((comp) => (
              <Card 
                key={comp.id}
                title={comp.title}
                component={comp.component}
                code={comp.code}
              />
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-(--textColor) italic text-sm sm:text-base">
                Aucun composant pour "{searchQuery}"
              </p>
              <button 
                onClick={() => { setInputValue(""); setSearchQuery(""); }}
                className="text-[#30EDC1] underline mt-4 cursor-pointer text-sm"
              >
                Tout afficher
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}