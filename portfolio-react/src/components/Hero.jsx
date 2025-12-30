import { motion } from "framer-motion";

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

        {/* Resume Button */}
        <motion.a
          href="https://drive.google.com/file/d/1RKcaIYNbYflBqd8hWWKZW01NizLBvDRq/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-block",
            marginTop: 30,
            padding: "14px 36px",
            borderRadius: 999,
            background:
              "linear-gradient(90deg, var(--primary), var(--secondary))",
            color: "#000",
            fontWeight: 600,
            textDecoration: "none"
          }}
        >
          View Resume
        </motion.a>
      </div>
    </section>
  );
}