export default function Spinner() {
  return (
    <div className="flex items-center justify-center relative w-full h-full">
      <div className="relative w-10 h-10">
        {[...Array(10)].map((_, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 w-[3px] h-[12px] bg-(--logoColor) origin-bottom animate-pulse"
          style={{
            transform: `rotate(${i * 36}deg) translateY(-140%)`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
      </div>
    </div>
  );
}