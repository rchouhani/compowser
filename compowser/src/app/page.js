import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#171926]" >
    <Navbar />
    <div className="bg-[#171926] flex flex-col items-start justify-start mx-14 p-10 font-sans">
      <h1 className="text-white text-5xl font-semibold mb-5">Copiez, Collez, Codez !</h1>
      <p className="text-[#777EA8] mb-4 w-120">
        Ici, tu trouveras des exemples de composants réutilisables, simples et
        basiques, que tu pourras customiser toi-même dans ton code ! On te donne
        juste un premier petit coup de pouce, à toi de jouer !
      </p>
      <p className="text-[#777EA8] w-120">
        Tu as une vision sur le visuel, et à côté le code du component à
        récupérer directement.
      </p>
    </div>
    <section className="flex flex-col items-center">
      <h2 className="flex text-4xl text-transparent mt-6 [-webkit-text-stroke:1px_rgb(48,237,193,1)]">
        TROUVEZ COS COMPONENTS
      </h2>

    </section>
    </div>
  );
}
