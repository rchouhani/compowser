"use client";

import { useState } from "react";
import Card from "./components/Card";
// Imports des composants (nécessaires pour le fichier de données s'ils ne sont pas déjà exportés depuis là-bas)
import { allComponents } from "./data/componentsData";
import { Search } from "lucide-react";

export default function Home() {
  // États pour la recherche
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Logique de filtrage basée sur la validation (clic ou entrée)
  const filteredComponents = allComponents.filter((comp) =>
    comp.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // recherche déclenchée
  const handleSearch = () => {
    setSearchQuery(inputValue);
  };

  // touche entrée
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      {/* SECTION HEADER */}
      <div className="flex flex-col items-start justify-start mx-4 sm:mx-8 md:mx-14 p-4 sm:p-6 md:p-8 lg:p-15 font-sans">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 md:mb-5">
          Copiez, Collez, Codez !
        </h1>
        <div className="w-full">
          <p className="text-(--textColor) mb-4 max-w-full sm:max-w-2xl md:max-w-3xl lg:w-125 text-justify text-sm sm:text-base">
            Ici, tu trouveras des exemples de composants réutilisables simples et basiques que tu pourras customiser toi-même dans ton code.
            <br />
            On te donne juste un premier petit coup de pouce et à toi de jouer !
          </p>
          <p className="text-(--textColor) max-w-full sm:max-w-2xl md:max-w-3xl lg:w-125 text-justify text-sm sm:text-base mb-4">
            Tu as une vision sur le composant créé et à côté, le code à récupérer.
          </p>
          <p className="text-xs sm:text-sm italic border-l-2 border-[#30EDC1] pl-3 sm:pl-4 mt-4 text-(--textColor) max-w-full">
            Composants en JSX pour Next.js/React avec Tailwind CSS,<br />
            conçus avec une charte graphique unifiée pour une intégration harmonieuse.
          </p>
        </div>
      </div>

      {/* SECTION RECHERCHE ET GALERIE */}
      <section className="flex flex-col items-center px-4 mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-transparent mt-6 [-webkit-text-stroke:1px_rgb(48,237,193,1)] text-center uppercase">
          Trouvez vos components
        </h2>
        
        {/* Barre de recherche intégrée */}
        <div className="relative w-full max-w-md mt-10 group">
          <button 
            onClick={handleSearch}
            className="absolute inset-y-0 left-0 flex items-center pl-4 cursor-pointer z-10"
            aria-label="Lancer la recherche"
          >
            <Search 
              size={20} 
              className="text-[#30EDC1] opacity-70 group-focus-within:opacity-100 transition-opacity hover:scale-110" 
            />
          </button>
          <input 
            type="text" 
            placeholder="Rechercher un composant..."
            className="w-full border-2 border-[#30EDC1] rounded-lg py-3 pl-12 pr-20 bg-transparent text-white outline-none focus:shadow-[0_0_15px_rgba(48,237,193,0.3)] transition-all font-sans"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button 
            onClick={handleSearch}
            className="absolute inset-y-2 right-2 px-3 flex items-center bg-[#30EDC1]/10 hover:bg-[#30EDC1] text-[#30EDC1] hover:text-black rounded-md transition-all text-[10px] font-bold cursor-pointer border border-[#30EDC1]/30 tracking-widest active:scale-95"
          >
            ENTER
          </button>
        </div>

        {/* Grille de composants dynamique */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-10 mt-10 w-full p-5 text-center">
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
              <p className="text-(--textColor) italic">
                Aucun composant ne correspond à "{searchQuery}"
              </p>
              <button 
                onClick={() => { setInputValue(""); setSearchQuery(""); }}
                className="text-[#30EDC1] underline mt-4 cursor-pointer"
              >
                Afficher tous les composants
              </button>
            </div>
          )}

          {/* Placeholders visibles uniquement si aucune recherche n'est en cours */}
          {searchQuery === "" && (
            <>
              <Card title="Prochainement" />
              <Card title="Prochainement" />
            </>
          )}
        </div>
      </section>
    </>
  );
}