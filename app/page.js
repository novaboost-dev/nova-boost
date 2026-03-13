export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Boostez votre présence en ligne avec{" "}
          <span className="text-blue-600">NovaBoost</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Nous aidons les entreprises à attirer plus de clients grâce à des stratégies digitales modernes, efficaces et mesurables.
        </p>

        <a
          href="/contact"
          className="mt-10 inline-block bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
        >
          Demander un devis
        </a>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14">
            Nos services
          </h2>

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
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Prêt à développer votre business ?
        </h2>

        <a
          href="/contact"
          className="bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
        >
          Contactez-nous
        </a>
      </section>
    </div>
  );
}
