
import Card from "./components/Card";
import CardNavbar from "./components/CardNavbar";
import CardNavbarBurger from "./components/CardNavbarBurger";
import CardNavbarIcon from "./components/CardNavbarIcon";
import CardButton from "./components/CardButton";
import CardInputClassic from "./components/CardInputClassic";
import CardInputPassword from "./components/CardInputPassword";
import CardInputCyberpunk from "./components/CardInputCyberpunk";
import CardFooter from "./components/CardFooter";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-start justify-start mx-4 sm:mx-8 md:mx-14 p-6 sm:p-8 md:p-10 font-sans">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-5">
          Copiez, Collez, Codez !
        </h1>
        <div className="w-100">
          <p className="text-(--textColor) mb-4 sm:max-w-2xl md:max-w-3xl lg:w-125 text-justify">
            Ici, tu trouveras des exemples de composants réutilisables simples
            et basiques que tu pourras customiser toi-même dans ton code.
            <br />
            On te donne juste un premier petit coup de pouce et à toi de jouer !
          </p>
          <p className="text-(--textColor) max-w-full sm:max-w-2xl md:max-w-3xl lg:w-125 text-justify">
            Tu as une vision sur le composant créé et à côté, le code à
            récupérer.
          </p>
        </div>
      </div>
      <section className="flex flex-col items-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-transparent mt-6 [-webkit-text-stroke:1px_rgb(48,237,193,1)] text-center">
          TROUVEZ VOS COMPONENTS
        </h2>

        <div className="flex flex-row flex-wrap items-center justify-center gap-10 mt-10 w-full p-5 text-center">
          <Card
            title="classic Navbar"
            component={<CardNavbar />}
            code="Affichez le code"
          />

          <Card 
            title="Mobile Navbar"
            component={<CardNavbarIcon/>}
            code="Affichez le code"/>

          <Card
            title="Burger Navbar"
            component={<CardNavbarBurger />}
            code="Affichez le code"
            className="cursor-pointer transition-all hover:scale-110 hover:opacity-70"
          />

          <Card
            title="Button"
            component={<CardButton />}
            code="Affichez le code"
            className="cursor-pointer transition-all hover:scale-110 hover:opacity-70"
          />

          <Card
            title="Input Classic"
            component={<CardInputClassic />}
            code="Affichez le code"
          />
            
          <Card
            title="Input Cyberpunk"
            component={<CardInputCyberpunk />}
            code="Affichez le code"
          />
          <Card
            title="Input Password"
            component={<CardInputPassword />}
            code="Affichez le code"
          />

          <Card
            title="Footer classic"
            component={<CardFooter/>}
            code="Affichez le code"/>
            
          <Card title="Button" />
          <Card title="Button" />
          <Card title="Button" />
          <Card title="Button" />
        </div>
      </section>
    </>
  );
}
