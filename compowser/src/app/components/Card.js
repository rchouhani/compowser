export default function Card (props) {
  return (
    <article className="border-2 rounded-2xl w-130 border-[var(--borderCard)] flex flex-col">
      
      <h2 className="uppercase font-black pb-3 p-5">
        {props.title}
      </h2>

      <div className="mb-5 m-2 flex-grow">
        {props.component}
      </div>

      <div className="bg-[var(--borderCard)] rounded-b-2xl p-2">
        <span className="cursor-pointer transition-all hover:scale-110 hover:opacity-70 inline-block">
          {props.code}
        </span>
      </div>

    </article>
  );
}