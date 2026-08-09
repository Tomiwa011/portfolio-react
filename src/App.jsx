import { useEffect, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import portImg from "./assets/img/port.png";
import Santiago from "./assets/img/Santiago.png";
import cartImg from "./assets/img/cart.png";
import audiophile from "./assets/img/audiophile.png";
import javaScript from "./assets/img/js.png";
import react from "./assets/img/reactlogo.webp";
import tailwind from "./assets/img/tailwind.webp";
import css from "./assets/img/css.png";
import html from "./assets/img/html.png";
import nextJs from "./assets/img/nextjs.jpg";
import vercel from "./assets/img/vercel.jpg";
import typescript from "./assets/img/typescript.jpg";
import git from "./assets/img/Git.png";
import github from "./assets/img/github.png";
import me from "./assets/img/me.jpeg";
import resume from "./assets/img/resume.pdf";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

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

  return (
    <div className="app-container">
      <Sidebar theme={theme} toggleTheme={toggleTheme} />

      <main className="main-content">
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
              </a>
              {" "}
              <a href={resume} download="resume.pdf" className="btn-primary">
                Download CV
              </a>
            </motion.div>
          </motion.section>

          <div className="hero-visual">
            <div className="profile-frame">
              <img src={me} alt="Profile" className="profile-image" />
            </div>
          </div>
        </section>

        <motion.section
          id="experience"
          className="section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>
            <span className="text-accent">01.</span> What I Do
            <span className="separator"></span>
          </h2>
          <div className="cardCont flex flex-wrap gap-6 justify-center mt-8">
            <motion.div
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -10,
                borderColor: "var(--accent)",
                boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
              }}
              style={{ padding: "2rem", backgroundColor: "var(--bg-card)" }}
              className="card flex flex-col   w-80 h-fit bg-base-100 shadow-lg"
            >
              <div style={{ marginBottom: "2rem" }} className="card-header ">
                <h3>React Development</h3>
              </div>
              <div className="card-body">
                <p>
                  Developing scalable single-page applications with API
                  integration and reusable components.
                </p>
              </div>
            </motion.div>
            <motion.div
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -10,
                borderColor: "var(--accent)",
                boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
              }}
              style={{ padding: "2rem", backgroundColor: "var(--bg-card)" }}
              className="card  flex flex-col  w-80 h-fit bg-base-100 shadow-lg"
            >
              <div style={{ marginBottom: "2rem" }} className="card-header">
                <h3>UI Implementation</h3>
              </div>
              <div className="card-body">
                <p>
                  Converting design files from Figma into pixel-perfect,
                  responsive web interfaces.
                </p>
              </div>
            </motion.div>
            <motion.div
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -10,
                borderColor: "var(--accent)",
                boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
              }}
              style={{ padding: "2rem", backgroundColor: "var(--bg-card)" }}
              className="card flex flex-col items-center  w-80 h-fit bg-base-100 shadow-lg"
            >
              <div
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -10,
                  borderColor: "var(--accent)",
                  boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                }}
                style={{ marginBottom: "2rem" }}
                className="card-header"
              >
                <h3>Performance Optimization</h3>
              </div>
              <div className="card-body">
                <p>
                  Improving website performance, responsiveness, and
                  accessibility for better user experience.
                </p>
              </div>
            </motion.div>
          </div>

          {/* <div className="timeline-item">
            <div className="timeline-dot"></div>
            <p className="">
              Building responsive and interactive user interfaces using modern
              JavaScript frameworks and clean CSS.
            </p>

            <ul
              style={{
                listStyle: "disc",
                marginLeft: "1.5rem",
                color: "var(--text-secondary)",
              }}
            >
              <li style={{ marginBottom: "0.9rem" }}>
                <p>React Development </p>
                <p>
                  {" "}
                  Developing scalable single-page applications with API
                  integration and reusable components.
                </p>
              </li>
              <li style={{ marginBottom: "0.9rem" }}>
                <p>UI Implementation</p>
                <p>
                  Converting design files from Figma into pixel-perfect,
                  responsive web interfaces.
                </p>
              </li>
              <li style={{ marginBottom: "0.9rem" }}>
                <p>Performance Optimization</p>
                <p>
                 Improving website performance, responsiveness, and accessibility for better user experience.
                </p>
              </li>
            </ul>
          </div> */}
        </motion.section>

        <section id="projects" className="section">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-accent">02.</span> Some Things I've Built
            <span className="separator"></span>
          </motion.h2>

          <div className="project-grid">
            <ProjectCard
              index={0}
              title="My Portfolio"
              image={portImg}
              link="https://github.com/Tomiwa011/my-portfolio"
              description="You are looking at it! A responsive personal site built with React. It features a custom dark mode system and Framer Motion animations."
              tags={["React", "CSS3", "Vite"]}
            />

            <ProjectCard
              index={1}
              title="Audiophile E-Commerce"
              image={audiophile}
              link="https://audiophile-gilt-eight.vercel.app/"
              description="A responsive e-commerce website built with React and TailwindCSS. It features a shopping cart, product pages, and a checkout process."
              tags={[
                "HTML5",
                "JavaScript",
                "React",
                "CSS3",
                "TailwindCSS",
                "Vercel",
              ]}
            />

            <ProjectCard
              index={2}
              title="E-Commerce Store"
              image={cartImg}
              link="https://github.com/Tomiwa011/cart"
              description="I am currently planning a fully functional shopping cart application to practice advanced React state management."
              tags={["Planning", "Frontend Logic"]}
            />
            <ProjectCard
              index={2}
              title="E-Commerce Store"
              image={Santiago}
              link="https://rey-clone-bootstrap.vercel.app/"
              description="I am currently planning a fully functional shopping cart application to practice advanced React state management."
              tags={["Planning", "Frontend Logic"]}
            />
          </div>
        </section>
        <section id="skills" className="skills">
          <h2>
            <span className="text-accent">03.</span> Skills And Technologies
            <span className="separator"></span>
          </h2>
          <div className="skills-container ">
            <div className="skillsImgCont justify-center flex gap-5 flex-wrap">
              <div className="imgCard">
                <motion.div
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    borderColor: "var(--accent)",
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                  }}
                  style={{ padding: "2rem" }}
                  className="card flex flex-col items-center overflow-hidden bg-base-100 shadow-lg"
                >
                  <img src={tailwind} width="185px" alt="" />
                </motion.div>
              </div>
              <div className="imgCard">
                <motion.div
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    borderColor: "var(--accent)",
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                  }}
                  style={{ padding: "2rem" }}
                  className="card flex flex-col items-center  bg-base-100 shadow-lg"
                >
                  <img src={nextJs} alt="" width="185px" />
                </motion.div>
              </div>
              <div className="imgCard">
                <motion.div
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    borderColor: "var(--accent)",
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                  }}
                  style={{ padding: "2rem" }}
                  className="card flex flex-col items-center  bg-base-100 shadow-lg"
                >
                  <img src={github} alt="" width="185px" />
                </motion.div>
              </div>
              <div className="imgCard">
                <motion.div
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    borderColor: "var(--accent)",
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                  }}
                  style={{ padding: "2rem" }}
                  className="card flex flex-col items-center  bg-base-100 shadow-lg"
                >
                  <img src={typescript} alt="" width="185px" />
                </motion.div>
              </div>
              <div className="imgCard">
                <motion.div
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    borderColor: "var(--accent)",
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                  }}
                  style={{ padding: "2rem" }}
                  className="card flex flex-col items-center   bg-base-100 shadow-lg"
                >
                  <img src={git} alt="" width="185px" />
                </motion.div>
              </div>
              <div className="imgCard">
                <motion.div
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    borderColor: "var(--accent)",
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                  }}
                  style={{ padding: "2rem" }}
                  className="card flex flex-col items-center bg-base-100 shadow-lg"
                >
                  <img src={css} alt="" width="185px" />
                </motion.div>
              </div>
              <div className="imgCard">
                <motion.div
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    borderColor: "var(--accent)",
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                  }}
                  style={{ padding: "2rem" }}
                  className="card flex flex-col items-center  bg-base-100 shadow-lg"
                >
                  <img src={html} alt="" width="185px" />
                </motion.div>
              </div>
              <div className="imgCard">
                <motion.div
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    borderColor: "var(--accent)",
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                  }}
                  style={{ padding: "2rem" }}
                  className="card flex flex-col items-center   bg-base-100 shadow-lg"
                >
                  <img src={vercel} alt="" width="185px" />
                </motion.div>
              </div>
              <div className="imgCard">
                <motion.div
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    borderColor: "var(--accent)",
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                  }}
                  style={{ padding: "2rem" }}
                  className="card flex flex-col items-center  bg-base-100 shadow-lg"
                >
                  <img src={react} alt="" width="185px" />
                </motion.div>
              </div>
              <div className="imgCard">
                <motion.div
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    borderColor: "var(--accent)",
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                  }}
                  style={{ padding: "2rem" }}
                  className="card flex flex-col items-center  bg-base-100 shadow-lg"
                >
                  <img src={javaScript} alt="" width="185px" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <footer
          style={{
            textAlign: "center",
            color: "var(--text-muted)",
            fontSize: "0.8rem",
            marginTop: "4rem",
          }}
        >
          <p>Copyright © 2026 Ausi Ayooluwatomiwa David</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
