import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "100px 0", textAlign: "center" }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: "var(--primary)", fontFamily: "Poppins" }}
        >
          Get In Touch
        </motion.h2>

        <p style={{ color: "var(--muted)", marginTop: "10px" }}>
          Open to internships, collaborations & opportunities
        </p>

        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "40px",
            flexWrap: "wrap"
          }}
        >
          {/* Email */}
          <motion.a
            href="mailto:cibichakravarthyg@gmail.com"
            whileHover={{ scale: 1.05 }}
            style={{
              background: "var(--card)",
              padding: "20px 30px",
              borderRadius: "14px",
              color: "var(--secondary)",
              textDecoration: "none"
            }}
          >
            Email
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/cibi-chakravarthy-g-52920a311"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            style={{
              background: "var(--card)",
              padding: "20px 30px",
              borderRadius: "14px",
              color: "var(--secondary)",
              textDecoration: "none"
            }}
          >
            LinkedIn
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Shrezii"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            style={{
              background: "var(--card)",
              padding: "20px 30px",
              borderRadius: "14px",
              color: "var(--secondary)",
              textDecoration: "none"
            }}
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}