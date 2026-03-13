export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-10">Portfolio</h1>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-gray-100 h-56 rounded-lg"></div>
        <div className="bg-gray-100 h-56 rounded-lg"></div>
        <div className="bg-gray-100 h-56 rounded-lg"></div>
      </div>

      <p className="text-gray-500 mt-6">
        (Tu pourras remplacer ces blocs par de vrais projets plus tard.)
      </p>
    </div>
  );
}
