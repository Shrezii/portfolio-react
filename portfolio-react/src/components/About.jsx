import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      style={{ padding: "100px 0" }}
    >
      <div className="container">
        <h2 style={{ color: "var(--primary)", fontFamily: "Poppins" }}>
          About Me
        </h2>

        <p style={{ color: "var(--muted)", marginTop: "15px", fontSize: "1.05rem" }}>
          I’m a Computer Science Engineering student from Tamil Nadu with a strong
          interest in full-stack development and AI-powered applications.
          I enjoy building scalable systems and solving real-world problems
          using clean code and modern technologies.
        </p>
      </div>
    </motion.section>
  );
}
