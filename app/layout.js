import "./globals.css";

export const metadata = {
  title: "NovaBoost Agency",
  description: "Agence de marketing digital moderne et performante",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900">

        {/* HEADER */}
        <header className="w-full py-6 border-b bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-blue-600">
              NovaBoost
            </h1>

            <nav className="space-x-6 text-lg font-medium">
              <a href="/" className="hover:text-blue-600 transition">Accueil</a>
              <a href="/services" className="hover:text-blue-600 transition">Services</a>
              <a href="/about" className="hover:text-blue-600 transition">À propos</a>
              <a href="/portfolio" className="hover:text-blue-600 transition">Portfolio</a>
              <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="pt-10">{children}</main>

        {/* FOOTER */}
        <footer className="mt-20 py-10 border-t bg-white/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto text-center text-gray-600">
            © 2024 NovaBoost Agency — Tous droits réservés.
          </div>
        </footer>

      </body>
    </html>
  );
}
