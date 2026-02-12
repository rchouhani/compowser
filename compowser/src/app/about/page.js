
import Article from "../components/Article";

export default function About() {

    const members = [
        {
            id: 1,
            image: "/assets/camille.jpeg",
            name: "Camille",
            text: `Mon parcours a débuté dans les métiers de l'image et de l'audiovisuel. Cette expérience a forgé ma sensibilité visuelle, 
                    mon sens du détail et ma capacité à raconter des histoires à travers des supports techniques complexes.
                    Aujourd'hui, je donne un nouveau sens à ma carrière en devenant dev web fullstack.
                    Ce choix me permet de fusionner ma créativité avec la rigueur du code.`
        },
        {
            id: 2,
            image: "/assets/Faty.jpeg",
            name: "Faty",
            text: `J’ai choisi de me reconvertir dans la tech pour créer des projets concrets et utiles. 
                   À Ada Tech School, j’ai appris à travailler sur des applications fullstack en équipe et à structurer ma logique autant côté front que back.  
                   Compowser reflète ma vision : créer des composants clairs, réutilisables et pensés pour faciliter la vie des développeurs juniors. 
                   J’aime apprendre, expérimenter et progresser chaque jour pour devenir une dev fullstack complète.`
        },
        {
            id: 3,
            image: "/assets/romain.jpeg",
            name: "Romain",
            text: `Après 20 ans de carrière dans la vente et le management, j'ai choisi de revenir à ma passion de toujours : le développement web. 
                   Formé à Ada Tech School, j'ai consolidé mes compétences à travers des projets intensifs, souvent fullstack (JS, CSS, architecture serveur). 
                   Curieux et proactif, je continue d'explorer de nouvelles technologies en attendant de relever mon prochain défi en entreprise.`
        },
]
    return(
        <section>
            <div className="text-justify w-full max-w-4xl text-(--textColor) px-5 md:px-10 my-10">
                <article className="mb-5">
                    <h3 className="uppercase text-white">L'histoire derrière Compowser</h3>
                    <p>Tout commence en janvier 2025, sur les bancs de l'école Ada Tech School. C'est là que nos trois chemins se sont croisés, 
                        portés par une ambition commune : réussir notre reconversion professionnelle dans le monde du développement.
                    </p>
                </article>
    
                <article className="mb-5">
                    <h3 className="uppercase text-white">Le déclic</h3>
                    <p>
                        En tant que jeunes développeurs, nous avons rapidement remarqué un schéma répétitif. À chaque nouveau projet, nous nous 
                        retrouvions face aux mêmes besoins : une barre de navigation, un bouton spécifique, un formulaire de contact...
                    </p>
                    <p>
                        On passait alors un temps fou à rouvrir nos anciens dépôts GitHub en se demandant :  
                    </p>
                        <br/>  
                        <p className="italic">
                            "Attends, comment j'avais codé ça déjà ?"
                        </p>
                        <br/>
                    <p>
                        On s'est rendu compte que le copier-coller sauvage d'un projet à l'autre n'était ni efficace, ni satisfaisant. 
                        Il nous manquait un outil simple pour centraliser, organiser et réutiliser nos composants favoris sans perdre le fil de notre créativité.
                    </p>
                </article>

                <article className="mb-5">
                    <h3 className="uppercase text-white">La naissance de compowser</h3>
                    <p>
                        C'est de ce besoin de clarté qu'est né Compowser. Plus qu'un simple outil, c'est notre réponse collaborative pour gagner en productivité. 
                        Nous avons voulu créer l'outil que nous aurions aimé avoir dès notre premier jour de formation : une bibliothèque intelligente pour ne plus 
                        jamais repartir de zéro.
                    </p>
                </article>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl text-transparent m-6 [-webkit-text-stroke:1px_rgb(48,237,193,1)] text-center">
                La COMPo
            </h2>

            <div className="flex flex-row flex-wrap justify-center items-stretch gap-5 px-5 max-w-7xl mx-auto">
                {members.map(member => (
                    <Article key={member.id} {...member} />
                ))}
            </div>
        </section>
    )
}

