import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "React",
  "Python", "Java", "Git", "GitHub","SQL",
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 0" }}>
      <div className="container">
        <h2 style={{ color: "var(--primary)", fontFamily: "Poppins" }}>
          Skills
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            marginTop: "25px"
          }}
        >
          {skills.map(skill => (
            <motion.span
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              style={{
                padding: "10px 22px",
                background: "var(--card)",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
