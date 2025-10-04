export default function HeroSection() {
  return (
    <section className="w-full bg-blue-50 py-20 flex flex-col items-center text-center px-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Learn New Skills Online
      </h1>
      <p className="text-gray-600 max-w-2xl mb-6 text-lg">
        Join thousands of learners and level up your career with our curated online courses.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
        Get Started
      </button>
    </section>
  );
}
