import Image from "next/image";

export default function Article({ image, name, text }) {
  return (
    <article className="border-2 rounded-2xl w-full md:w-[30%] border-(--borderCard) flex flex-col overflow-hidden h-full md:h-[600px]">
      <div className="relative h-64 md:h-80 w-full flex-shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <h2 className="uppercase font-black py-3 px-5 text-(--logoColor) text-center">
          {name}
        </h2>
        <p className="px-5 pb-5 text-justify text-(--textColor) flex-grow">
          {text}
        </p>
      </div>
    </article>
  );
}