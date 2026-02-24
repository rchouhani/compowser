export default function ButtonPortfolio({ lien, label, className }) {
  return (
    <a
      href={lien}
      className={className}
    >
      {label}
    </a>
  );
}
