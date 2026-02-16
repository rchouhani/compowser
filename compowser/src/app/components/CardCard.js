import Image from "next/image";

export default function CardCard() {
  return (
    <>
      <div className="relative center h-40 md:h-80 w-full flex-shrink-0">
        <Image src="/favicon-16x16.png" alt="image" fill className="object-cover" />
      </div>

      <div className="flex flex-col flex-grow">
        <h2 className="uppercase font-black py-3 px-5 text-(--logoColor) text-center">
        Titre  
        </h2>
        <p className="px-5 pb-5 text-justify text-(--textColor) flex-grow">
          Ceci est un exemple de carte pour afficher ce que vous voulez.
        </p>
      </div>
    </>
  );
}
