import Link from "next/link";

export default function () {
    return (
        <nav className="flex flex-col md:flex-row
        justify-between items-center md:items-end
        bg-background p-10 ">
            <div className="text-2xl md:text-3xl
                font-light tracking-widest text-transparent [-webkit-text-stroke:1px_rgb(48,237,193,1)]
                mb-4 md:mb-0 ">
                <Link href="/">COMPowser</Link>
            </div>
            <div className="flex flex-col sm:flex-row
                gap-4 sm:gap-10 text-lg md:text-xl text-(--textColor)">
                <Link href="/">COMPONENTS</Link>
                <Link href="https://github.com/rchouhani/compowser/tree/main/compowser" target="__blank">GITHUB</Link>
                <Link href="/about">ABOUT <span className="text-(--logoColor)">US</span></Link>
            </div>
        </nav>
    )
}

 