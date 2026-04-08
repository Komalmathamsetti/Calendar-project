import Image from "next/image";

export default function HeaderImage({ monthIndex, month }) {
  const images = [
    "/jan.jpg",
    "/feb.jpg",
    "/mar.jpg",
    "/apr.jpg",
    "/may.jpg",
    "/jun.jpg",
    "/jul.jpg",
    "/aug.jpg",
    "/sep.jpg",
    "/oct.jpg",
    "/nov.jpg",
    "/dec.jpg",
  ];

  const currentImage = images[monthIndex];

  return (
    <div className="relative h-56 w-full overflow-hidden">
      <Image
        src={currentImage}
        alt="Calendar"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      <div className="absolute bottom-4 right-4 text-white">
        <h1 className="text-2xl font-bold">{month}</h1>
      </div>
    </div>
  );
}