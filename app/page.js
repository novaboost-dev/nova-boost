export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-extrabold leading-tight">
          Boostez votre présence en ligne avec{" "}
          <span className="text-blue-600">NovaBoost</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Nous aidons les entreprises à attirer plus de clients grâce à des stratégies digitales modernes, efficaces et mesurables.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
        >
          Demander un devis
        </a>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos services</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Création de sites web</h3>
              <p className="text-gray-600">
                Sites modernes, rapides et optimisés pour convertir vos visiteurs en clients.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Gestion des réseaux sociaux</h3>
              <p className="text-gray-600">
                Contenu professionnel, calendrier éditorial et croissance organique.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Publicité en ligne</h3>
              <p className="text-gray-600">
                Campagnes Facebook Ads & Google Ads pour maximiser votre visibilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à développer votre business ?</h2>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
        >
          Contactez-nous
        </a>
      </section>
    </div>
  );
}
