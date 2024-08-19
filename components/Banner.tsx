import Image from "next/image";

export default function Banner() {
  return (
    <section className="mb-16 relative overflow-hidden rounded-lg">
      <Image
        src="/banner3.png"
        alt="New Summer Collection - Featuring cool blue tones for hot days"
        width={1200}
        height={400}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex items-center">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">Summer Blues</h2>
          <p className="mb-4">Cool tones for hot days</p>
          <a
            href="#"
            className="inline-flex items-center bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition-colors"
          >
            Explore Collection
          </a>
        </div>
      </div>
    </section>
  );
}
