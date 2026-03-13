export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">

      <h1 className="text-4xl font-extrabold text-center mb-12">
        Nos services
      </h1>

      <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
        NovaBoost vous accompagne dans votre croissance digitale grâce à des solutions modernes, efficaces et adaptées à vos objectifs.
      </p>

      <div className="grid md:grid-cols-3 gap-10">

        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4">Création de sites web</h3>
          <p className="text-gray-600">
            Sites modernes, rapides et optimisés pour convertir vos visiteurs en clients.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4">Gestion des réseaux sociaux</h3>
          <p className="text-gray-600">
            Contenu professionnel, calendrier éditorial et croissance organique.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4">Publicité en ligne</h3>
          <p className="text-gray-600">
            Campagnes Facebook Ads & Google Ads pour maximiser votre visibilité.
          </p>
        </div>

      </div>
    </div>
  );
}
