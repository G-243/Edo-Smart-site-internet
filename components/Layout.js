import Navigation from "./Navigation"; 
import Footer from "./Footer";
// components/Layout.jsx
export default function Layout({ children }) {
  return (
    <div className="w-full overflow-x-hidden flex flex-col min-h-screen">
      <Navigation /> {/* <-- utilisation du composant */}
      {/* Contenu principal */}
      <main className="flex-grow">{children}</main>

      {/* Footer commun */}
      <Footer />
    </div>
  );
}

