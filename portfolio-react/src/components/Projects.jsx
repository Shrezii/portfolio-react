import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Insurance Claim Analyzer",
    desc: "Gemini-powered AI system that analyzes insurance claims and suggests next steps.",
    tech: "React • Python • Gemini API"
  },
  {
    title: "Clinical AI Assistant",
    desc: "Transforms doctor-patient conversations into structured clinical notes.",
    tech: "React • Whisper • Flask • Python "
  },
  {
    title: "UI Design System",
    desc: "Reusable UI components built for scalability and consistency.",
    tech: "HTML • CSS • JavaScript • React"
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 0" }}>
      <div className="container">
        <h2 style={{ color: "var(--primary)", fontFamily: "Poppins" }}>
          Projects
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            marginTop: "40px"
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                boxShadow: "0 0 30px rgba(124,124,255,0.4)"
              }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                background: "var(--card)",
                padding: "28px",
                borderRadius: "16px",
                width: "320px"
              }}
            >
              <h3 style={{ fontFamily: "Poppins" }}>{project.title}</h3>
              <p style={{ color: "var(--muted)", margin: "10px 0" }}>
                {project.desc}
              </p>
              <small style={{ color: "var(--secondary)" }}>
                {project.tech}
              </small>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
