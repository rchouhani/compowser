
import Card from "./components/Card";
import CardNavbar from "./components/CardNavbar";
import CardNavbarBurger from "./components/CardNavbarBurger";
import CardNavbarIcon from "./components/CardNavbarIcon";
import CardButton from "./components/CardButton";
import CardInputClassic from "./components/CardInputClassic";
import CardInputPassword from "./components/CardInputPassword";
import CardInputCyberpunk from "./components/CardInputCyberpunk";
import CardFooter from "./components/CardFooter";
import { codeSnippets } from "./data/componentsData";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-start justify-start mx-4 sm:mx-8 md:mx-14 p-4 sm:p-6 md:p-8 lg:p-10 font-sans">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 md:mb-5">
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
          {/* Paragraphe optionnel */}
          <p className="text-xs sm:text-sm italic border-l-2 border-[#30EDC1] pl-3 sm:pl-4 mt-4 text-(--textColor) max-w-full">
            Composants en JSX pour Next.js/React avec Tailwind CSS, conçus avec une charte graphique unifiée pour une intégration harmonieuse.
          </p>
        </div>
      </div>

      <section className="flex flex-col items-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-transparent mt-6 [-webkit-text-stroke:1px_rgb(48,237,193,1)] text-center">
          TROUVEZ VOS COMPONENTS
        </h2>

          <div className="flex flex-row flex-wrap items-center justify-center gap-10 mt-10 w-full p-5 text-center">
          <Card
            title="Responsive Navbar"
            component={<CardNavbar />}
            code={codeSnippets.CardNavbar}
          />

          <Card 
            title="Mobile Navbar"
            component={<CardNavbarIcon/>}
            code={codeSnippets.CardNavbarIcon}
          />

          <Card
            title="Burger Navbar"
            component={<CardNavbarBurger />}
            code={codeSnippets.CardNavbarBurger}
          />

          <Card
            title="Button"
            component={<CardButton />}
            code={codeSnippets.cardButton} 
          />

          <Card
            title="Input Classic"
            component={<CardInputClassic />}
            code={codeSnippets.CardInputClassic}
          />
            
          <Card
            title="Input Cyberpunk"
            component={<CardInputCyberpunk />}
            code={codeSnippets.CardInputCyberpunk}
          />

          <Card
            title="Input Password"
            component={<CardInputPassword />}
            code={codeSnippets.cardInputPassword}
          />

          <Card
            title="Footer Classic"
            component={<CardFooter/>}
            code={codeSnippets.CardFooter}
          />

          {/* Cartes vides à remplir plus tard */}
          <Card title="Prochainement" />
          <Card title="Prochainement" />
        </div>
      </section>
    </>
  );
}
