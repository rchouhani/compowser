import Link from "next/link";

export default function () {
    return (
        <nav className="flex flex-row justify-between items-end bg-[#171926] p-10 inter">
            <div className="text-3xl text-transparent [-webkit-text-stroke:1px_rgb(48,237,193,1)]">
                <Link href="/">COMPowser</Link>
            </div>
            <div className="flex text-[#777EA8] gap-10 text-xl">
            <Link href="/components.js">COMPONENTS</Link>
            <Link href="/github.js">GITHUB</Link>
            <Link href="/about_us.js">ABOUT <span className="text-[#30EDC1]">US</span></Link>
            </div>
        </nav>
    )
}