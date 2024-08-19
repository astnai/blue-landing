export default function Newsletter() {
  return (
    <section className="mb-16 bg-blue-700 rounded-lg p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
      <p className="mb-6 text-blue-200">
        Subscribe to our newsletter for exclusive offers and updates
      </p>
      <form className="flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-64 px-4 py-2 rounded-full text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Email for newsletter"
        />
        <button
          type="submit"
          className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
