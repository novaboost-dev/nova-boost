export const metadata = {
  title: "NovaBoost Agency",
  description: "Agence de marketing digital moderne et performante",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900">
        <header className="w-full py-6 border-b">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">NovaBoost</h1>
            <nav className="space-x-6">
              <a href="/" className="hover:text-blue-600">Accueil</a>
              <a href="/services" className="hover:text-blue-600">Services</a>
              <a href="/about" className="hover:text-blue-600">À propos</a>
              <a href="/portfolio" className="hover:text-blue-600">Portfolio</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-20 py-10 border-t">
          <div className="max-w-6xl mx-auto text-center text-gray-500">
            © 2024 NovaBoost Agency — Tous droits réservés.
          </div>
        </footer>
      </body>
    </html>
  );
}
