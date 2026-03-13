export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">

      <h1 className="text-4xl font-extrabold text-center mb-10">
        À propos de NovaBoost
      </h1>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
        NovaBoost est une agence spécialisée dans le marketing digital. 
        Notre mission est d’aider les entreprises à développer leur visibilité, 
        attirer plus de clients et renforcer leur présence en ligne grâce à des stratégies modernes et efficaces.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mt-10">

        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4">Notre vision</h3>
          <p className="text-gray-600">
            Offrir aux entreprises des solutions digitales performantes, accessibles et adaptées à leurs besoins.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4">Notre expertise</h3>
          <p className="text-gray-600">
            Création de sites web, gestion des réseaux sociaux, publicité en ligne et optimisation de la visibilité.
          </p>
        </div>

      </div>
    </div>
  );
}
