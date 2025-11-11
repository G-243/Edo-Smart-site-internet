import { useRouter } from "next/router";

export default function Contact() {
    const router = useRouter(); // ✅ Définition du router
    return (
        <div className="p-20">

        <div style={{ textAlign: "center", padding: "150px" }}>
        <h1>Contactez Smart Light DRC Photography</h1>
        <p>
          Pour vos réservations ou demandes, contactez-moi directement sur{" "}
          <a
            href="https://wa.me/243841029002"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#25D366", fontWeight: "bold", textDecoration: "none" }}
          >
            WhatsApp 📞
          </a>
        </p>
      </div>
      </div>
    );
  }
  