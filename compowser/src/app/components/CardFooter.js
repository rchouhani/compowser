import Link from "next/link";

export default function CardFooter () {
  return (
    <footer className="flex flex-col items-start text-left w-full bg-[var(--logoColor)] p-3">
      <p className="text-white font-bold mb-3">COMPowser</p>

      <div className="text-white flex flex-col gap-1">
        <Link className="hover:underline hover:font-bold" href="#">Accueil</Link>
        <Link className="hover:underline hover:font-bold" href="#">GitHub</Link>
        <Link className="hover:underline hover:font-bold" href="#">À propos</Link>
      </div>
    </footer>
  );
}