export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">

      <h1 className="text-4xl font-extrabold text-center mb-10">
        Contactez-nous
      </h1>

      <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
        Une question, un projet ou besoin d’un devis ? 
        Notre équipe vous répond rapidement.
      </p>

      <form className="bg-white p-10 rounded-2xl shadow-md space-y-6">

        <div>
          <label className="block font-semibold mb-2">Nom</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Message</label>
          <textarea
            rows="5"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Envoyer
        </button>

      </form>
    </div>
  );
}
