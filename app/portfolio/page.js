export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">

      <h1 className="text-4xl font-extrabold text-center mb-12">
        Portfolio
      </h1>

      <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
        Découvrez quelques exemples de projets réalisés pour nos clients : sites web, branding et campagnes digitales.
      </p>

      <div className="grid md:grid-cols-3 gap-10">

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold">Site vitrine</h3>
          <p className="text-gray-600 text-sm mt-2">Design moderne et responsive.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold">E‑commerce</h3>
          <p className="text-gray-600 text-sm mt-2">Boutique optimisée pour la conversion.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold">Branding</h3>
          <p className="text-gray-600 text-sm mt-2">Identité visuelle professionnelle.</p>
        </div>

      </div>
    </div>
  );
}
