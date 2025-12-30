import { motion } from "framer-motion";
import resumePdf from "../assets/Cibi_Chakravarthy.pdf";

export default function Hero() {
  return (
    <section id="home" style={{ padding: "160px 0" }}>
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "Poppins",
            fontSize: "2.8rem",
            fontWeight: 700
          }}
        >
          Hi, I’m{" "}
          <span style={{ color: "var(--primary)" }}>Cibi Chakravarthy</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            color: "var(--secondary)",
            marginTop: "10px"
          }}
        >
          Full Stack & AI Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            maxWidth: "600px",
            marginTop: "18px",
            color: "var(--muted)"
          }}
        >
          I build intelligent, scalable web applications that solve real-world
          problems.
        </motion.p>

        {/* Resume buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ display: "flex", gap: "18px", marginTop: "30px", flexWrap: "wrap" }}
        >
          {/* VIEW RESUME */}
          <motion.a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -4,
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(124,124,255,0.45)"
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            style={btnPrimary}
          >
            View Resume
          </motion.a>

          {/* DOWNLOAD RESUME */}
          <motion.a
            href={resumePdf}
            download
            whileHover={{
              y: -3,
              scale: 1.04,
              boxShadow: "0 8px 24px rgba(124,124,255,0.25)"
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={btnSecondary}
          >
            Download
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

const btnPrimary = {
  padding: "14px 36px",
  borderRadius: 999,
  background: "linear-gradient(90deg, var(--primary), var(--secondary))",
  color: "#000",
  fontWeight: 600,
  textDecoration: "none",
  display: "inline-block"
};

const btnSecondary = {
  padding: "14px 36px",
  borderRadius: 999,
  border: "1px solid var(--primary)",
  color: "var(--primary)",
  fontWeight: 600,
  textDecoration: "none",
  display: "inline-block"
};