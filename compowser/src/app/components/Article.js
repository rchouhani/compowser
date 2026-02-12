
import Image from "next/image";

export default function Article({ image, name, text }) {
  return (
    <article className="border-2 rounded-2xl w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] border-(--borderCard) flex flex-col overflow-hidden">
      <div className="relative h-48 sm:h-56 lg:h-64 w-full shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="uppercase font-black py-3 px-5 text-(--logoColor) text-center text-sm sm:text-base">
          {name}
        </h2>
        <p className="px-5 pb-5 text-justify text-(--textColor) text-sm sm:text-base">
          {text}
        </p>
      </div>
    </article>
  );
}