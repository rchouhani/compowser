import Image from "next/image";

export default function Article({ image, name, text }) {
  return (
    <article className="border-2 rounded-2xl w-[30%] border-(--borderCard) flex flex-col overflow-hidden">
      <div className="relative h-100 w-full ">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <h2 className="uppercase font-black py-3 px-5 text-(--logoColor) text-center">
        {name}
      </h2>
      <p className="px-5 pb-5 text-justify text-(--textColor)">
        {text}
      </p>

    </article>
  );
}