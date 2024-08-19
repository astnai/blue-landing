import { ArrowRightIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-4xl font-bold mb-4">Dive into Style with all blue</h2>
      <p className="text-xl text-blue-200 mb-8">
        Experience the serenity and sophistication of our blue collection
      </p>
      <a
        href="#"
        className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition-colors"
      >
        Shop Now
        <ArrowRightIcon className="ml-2 h-5 w-5" />
      </a>
    </section>
  );
}
