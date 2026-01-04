import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "cibichakravarthyg@gmail.com";

  return (
    <section
      id="contact"
      style={{
        padding: "140px 0",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div className="container" style={{ display: "flex", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={cardWrapper}
        >
          <div style={card}>
            {/* Badge */}
            <span style={badge}>CONTACT</span>

            <h2 style={title}>Let’s work together</h2>

            <p style={subtitle}>
              I’m open to internships, collaborations, and meaningful projects.
              Feel free to reach out anytime.
            </p>

            <div style={actions}>
              {/* EMAIL */}
              <motion.a
                href={`mailto:${email}`}
                whileHover={hoverGlow}
                whileTap={{ scale: 0.95 }}
                style={actionBtn}
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard?.writeText(email);
                  setCopied(true);
                  window.location.href = `mailto:${email}`;
                  setTimeout(() => setCopied(false), 2000);
                }}
              >
                {copied ? "Email Copied ✓" : "Email"}
              </motion.a>

              {/* LINKEDIN */}
              <motion.a
                href="https://www.linkedin.com/in/cibi-chakravarthy-g-52920a311"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverGlow}
                whileTap={{ scale: 0.95 }}
                style={actionBtn}
              >
                LinkedIn
              </motion.a>

              {/* GITHUB */}
              <motion.a
                href="https://github.com/Shrezii"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverGlow}
                whileTap={{ scale: 0.95 }}
                style={actionBtn}
              >
                GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- SHARED HOVER ANIMATION ---------- */
const hoverGlow = {
  scale: 1.05,
  boxShadow: "0 0 24px rgba(124,124,255,0.35)"
};

/* ---------- STYLES ---------- */

const cardWrapper = {
  padding: "2px",
  borderRadius: "24px",
  background: "linear-gradient(135deg, var(--primary), var(--secondary))",
  maxWidth: "560px",
  width: "100%"
};

const card = {
  background: "rgba(10,10,20,0.92)",
  backdropFilter: "blur(14px)",
  borderRadius: "22px",
  padding: "58px 46px",
  textAlign: "center"
};

const badge = {
  display: "inline-block",
  padding: "6px 16px",
  borderRadius: "999px",
  fontSize: "0.72rem",
  letterSpacing: "1.6px",
  fontWeight: 600,
  color: "var(--secondary)",
  border: "1px solid rgba(255,255,255,0.15)",
  marginBottom: "22px"
};

const title = {
  fontFamily: "Poppins",
  fontSize: "1.95rem",
  lineHeight: 1.25,
  color: "var(--text)"
};

const subtitle = {
  marginTop: "14px",
  color: "var(--muted)",
  fontSize: "1.05rem",
  maxWidth: "440px",
  marginInline: "auto"
};

const actions = {
  display: "flex",
  justifyContent: "center",
  gap: "18px",
  flexWrap: "wrap",
  marginTop: "42px"
};

const actionBtn = {
  padding: "14px 34px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.18)",
  color: "var(--secondary)",
  fontWeight: 500,
  textDecoration: "none",
  cursor: "pointer",
  outline: "none"
};
