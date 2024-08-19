import { StarIcon } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="bg-blue-700 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
              ))}
            </div>
            <p className="mb-4">
              "The quality and style of all blue's clothing is unmatched. I love
              how everything fits perfectly!"
            </p>
            <p className="font-semibold">- Happy Customer {index + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
