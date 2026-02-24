import Article from "../components/Article";
import { members }  from "../data/membersData";

export default function About() {

  return (
    <section>
      <div className="flex flex-col items-start justify-start mx-4 sm:mx-8 md:mx-14 p-4 sm:p-6 md:p-8 lg:p-10 font-sans">
        <div className="w-full max-w-4xl mt-25 *:text-justify text-(--textColor)">
          <article className="mb-12">
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 md:mb-5">
              L'histoire derrière COMPowser
            </h3>
            <p className="leading-relaxed text-sm sm:text-base">
              Tout commence en janvier 2025, sur les bancs de l'école Ada Tech
              School. <br />
              C'est là que nos trois chemins se sont croisés, portés par une
              ambition commune :<br />
              Réussir notre reconversion professionnelle dans le monde du
              développement.
            </p>
          </article>

          <article className="mb-12">
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 md:mb-5">
              Le déclic
            </h3>
            <div className="space-y-4 leading-relaxed text-sm sm:text-base">
              <p>
                En tant que jeunes développeurs, nous avons rapidement remarqué
                un schéma répétitif.
                <br />
                À chaque nouveau projet, nous nous retrouvions face aux mêmes
                besoins :<br />
                une barre de navigation, un bouton spécifique, un formulaire de
                contact...
              </p>
              <p>
                On passait alors un temps fou à rouvrir nos anciens dépôts
                GitHub en se demandant :
              </p>
              <p className="italic border-l-2 border-[#30EDC1]/30 pl-4 py-1">
                "Attends, comment j'avais codé ça déjà ?"
              </p>
              <p>
                On s'est rendu compte que le copier-coller sauvage d'un projet à
                l'autre n'était <br />
                ni efficace, ni satisfaisant. Il nous manquait un outil simple
                pour centraliser, organiser et réutiliser
                <br /> nos composants favoris sans perdre le fil de notre
                créativité.
              </p>
            </div>
          </article>

          <article className="mb-12 border-l-2 border-[#30EDC1] pl-5">
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 md:mb-5">
              La naissance de COMPowser
            </h3>
            <p className="leading-relaxed text-sm sm:text-base">
              C'est de ce besoin de clarté qu'est né Compowser. <br />
              Plus qu'un simple outil, c'est notre réponse collaborative pour
              gagner en productivité.
              <br />
              Nous avons voulu créer l'outil que nous aurions aimé avoir dès
              notre premier jour de formation :<br />
              Une bibliothèque intelligente pour ne plus jamais repartir de
              zéro.
            </p>
          </article>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl text-transparent m-6 [-webkit-text-stroke:1px_rgb(48,237,193,1)] text-center">
        La COMPo
      </h2>

      <div className="flex flex-row flex-wrap justify-center items-stretch gap-5 px-5 max-w-7xl mx-auto mb-15">
        {members.map((member) => (
          <Article key={member.id} {...member} />
        ))}
      </div>

    </section>
  );
}
