import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        marginTop: "80px",
        padding: "25px",
        textAlign: "center",
        background: "rgba(0,0,0,0.6)",
        color: "var(--muted)"
      }}
    >
      Designed & Built by{" "}
      <span style={{ color: "var(--primary)" }}>Cibi Chakravarthy</span> © 2026
      <div style={{ marginTop: "10px", fontSize: "0.9rem" }}>
      </div>
    </motion.footer>
  );
}