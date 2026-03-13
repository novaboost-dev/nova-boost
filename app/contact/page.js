export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>

      <form className="max-w-xl space-y-6">
        <input
          type="text"
          placeholder="Votre nom"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Votre message"
          className="w-full border p-3 rounded h-40"
        ></textarea>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Envoyer
        </button>
      </form>
    </div>
  );
}
