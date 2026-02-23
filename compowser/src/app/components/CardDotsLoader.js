export default function Loader() {
  const delays = [-0.3, -0.1, 0.1, 0.3, 0.5];

  return (
    <section className="flex items-center justify-center gap-4 h-full w-full">
      {delays.map((delay, i) => (
        <div
          key={i}
          className="h-5 w-5 rounded-full bg-(--logoColor) animate-dot"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </section>
  );
}