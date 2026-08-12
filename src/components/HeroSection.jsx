import { motion } from "framer-motion";
import LazyImage from "../LazyImage";
import me from "../assets/img/me.jpeg";
import resume from "../assets/img/resume.pdf";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 0.5,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="hero-intro mb-6">
      <motion.section
        id="about"
        className="hero-copy section"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginBottom: "5rem",
          gap: "1rem",
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="text-accent text-mono">
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
        >
          AUSI DAVID.
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          style={{
            color: "var(--text-secondary)",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          style={{
            maxWidth: "600px",
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
          }}
        >
          I am a Frontend Developer based in Lagos, Nigeria. I specialize in
          building exceptional digital experiences using{" "}
          <span className="text-accent">JavaScript</span>,
          <span className="text-accent"> React</span>,
          <span className="text-accent"> Typescript</span>.
        </motion.p>

        <motion.div variants={itemVariants}>
          <a href="mailto:tomiwaausi@gmail.com" className="btn-primary">
            Get In Touch
          </a>{" "}
          <a href={resume} download="resume.pdf" className="btn-primary">
            Download CV
          </a>
        </motion.div>
      </motion.section>

      <div className="hero-visual">
        <div className="profile-frame">
          <LazyImage src={me} alt="Profile" className="profile-image" />
        </div>
      </div>
    </section>
  );
}
