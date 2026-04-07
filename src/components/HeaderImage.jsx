import Image from "next/image";

export default function HeaderImage({ month }) {
  return (
    <div className="relative h-56 w-full overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Calendar"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

      <div className="absolute bottom-4 right-4 text-white">
        <h1 className="text-2xl font-bold">{month}</h1>
      </div>
    </div>
  );
}