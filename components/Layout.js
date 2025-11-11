import Navigation from "./Navigation"; 
import Footer from "./Footer";
// components/Layout.jsx
export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation /> {/* <-- utilisation du composant */}
      {/* Contenu principal */}
      <main className="flex-grow">{children}</main>

      {/* Footer commun */}
      <Footer />
    </div>
  );
}

