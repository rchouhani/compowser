import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start justify-start mx-4 sm:mx-8 md:mx-14 p-6 sm:p-8 md:p-10 font-sans">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-5">
          Copiez, Collez, Codez !
        </h1>
        <div className="w-100">
          <p className="text-(--textColor) mb-4 sm:max-w-2xl md:max-w-3xl lg:w-125 text-justify">
            Ici, tu trouveras des exemples de composants réutilisables simples et
            basiques que tu pourras customiser toi-même dans ton code.
            <br/>
            On te donne juste un premier petit coup de pouce et à toi de jouer !
          </p>
          <p className="text-(--textColor) max-w-full sm:max-w-2xl md:max-w-3xl lg:w-125 text-justify">
            Tu as une vision sur le composant créé et à côté, le code à récupérer.
          </p>
        </div>
      </div>
      <section className="flex flex-col items-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-transparent mt-6 [-webkit-text-stroke:1px_rgb(48,237,193,1)] text-center">
          TROUVEZ VOS COMPONENTS
        </h2>
      </section>
    </>
  );
}