import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Avis() {
  const router = useRouter();
  const avisClients = [
    {
      nom: "Monsieur Herman.",
      message:
        "Une expérience incroyable ! Les photos de ma Dot sont sublimes. Merci à Monsieur Edo pour son professionnalisme et sa douceur.",
      photo: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556506/IMG-20250417-WA0049_avbktu.jpg",
    },
    {
      nom: "Madame Altha.",
      message:
        "Smart DRC Photography a su capturer chaque émotion. Les images sont naturelles et pleines de vie. Je recommande à 100%.",
      photo: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556503/IMG-20250417-WA0043_ptpljv.jpg",
    },
    {
      nom: "Gloria K.",
      message:
        "Service impeccable du début à la fin. Monsieur Edo met vraiment les gens à l’aise devant la caméra. Un artiste passionné !",
      photo: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556485/IMG-20241223-WA0015_lav18n.jpg",
    },
  ];

  return (

    <div className="p-6 bg-[#011826]">

    <section
      style={{ padding: "100px 20px", textAlign: "center" }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "orange" }}>
        💬 Avis de nos Clients
      </h1>
      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto 60px",
          lineHeight: "1.7",
          color: "white",
          fontSize: "1.1rem",
        }}
      >
        Chez <strong>Smart Light DRC Photography</strong>, chaque instant capturé
        raconte une histoire. Voici ce que nos clients disent de leur expérience
        avec nous.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {avisClients.map((avis, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            style={{
              background: "#022133",
              borderRadius: "20px",
              padding: "30px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                gap: "15px",
              }}
            >
              <motion.img
                src={avis.photo}
                alt={avis.nom}
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #ff6f61",
                  boxShadow: "0 0 10px rgba(255, 111, 97, 0.5)",
                }}
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              <div>
                <h3 style={{ margin: "0", color: "orange" }}>{avis.nom}</h3>
                <p style={{ color: "white", fontSize: "0.9rem" }}>Client(e)</p>
              </div>
            </div>
            <p
              style={{
                fontStyle: "italic",
                lineHeight: "1.6",
                color: "white",
              }}
            >
              “{avis.message}”
            </p>
          </motion.div>
        ))}
      </div>
  
        <p style={{ marginTop: "60px", fontSize: "0.9rem", color: "#777" }}>
          Vous avez travaillé avec nous ? Laissez votre avis sur{" "}
          <a
            href="https://wa.me/243841029002?text=Bonjour%20l'équipe%20Smart,%20je%20souhaite%20laisser%20mon%20avis%20sur%20vos%20services."
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#25D366", fontWeight: "bold" }}
          >
            WhatsApp 📞
          </a>
        </p>
      </section>
    </div>
    );
  }
  