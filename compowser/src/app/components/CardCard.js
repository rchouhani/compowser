import Image from "next/image";

export default function CardCard() {
  return (
    <div className="border-solid border-2 border-[#30EDC1] p-3 rounded-lg">
      <div className="flex items-center justify-center w-full flex-shrink-0">
        <Image src="/penguin.png" alt="image" width={100} height={100} />
      </div>

      <div className="flex flex-col flex-grow">
        <h2 className="uppercase font-black py-3 px-5 text-(--logoColor) text-center">
          Titre
        </h2>
        <p className="px-5 pb-5 text-center text-(--textColor) flex-grow">
          Ceci est un exemple de carte pour afficher ce que vous voulez.
        </p>
      </div>
    </div>
  );
}
