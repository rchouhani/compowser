export default function Card (props){
    return(
        <article className="border-2 rounded-2xl  w-130 border-(--borderCard)">
            <h2 className="uppercase font-black pb-3 p-5"> {props.title} </h2>
                <div className="mb-5 h-10 m-2">
                    {props.component}
                </div>
   
           <div className="bg-(--borderCard) rounded-b-2xl p-2 mt-10">
                <span className="cursor-pointer transition-all hover:scale-110 hover:opacity-70 inline-block">
                    {props.code}
                </span>
            </div>
        </article>
    )
}