import Sidebar from "./Sidebar.jsx";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function App() {
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
        damping: 10,  // A little wobble at the end
        mass: 0.5     // Feels lightweight
      } 
    },
  };
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <motion.section
          id="about"
          className="section"
          style={{ paddingTop: "4rem" }}
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
            style={{ color: "#6b7280", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            I build things for the web.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            style={{ maxWidth: "600px", fontSize: "1.1rem" }}
          >
            I am a Junior Frontend Developer based in Lagos, Nigeria. I
            specialize in building exceptional digital experiences using{" "}
            <span className="text-accent">React</span>.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a href="mailto:tomiwaausi@gmail.com" className="btn-primary">
              Get In Touch
            </a>
          </motion.div>
        </motion.section>

        <motion.section
          id="experience"
          className="section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>
            <span className="text-accent">01.</span> Where I've Worked
            <span className="separator"></span>
          </h2>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h3>Software Engineering Intern</h3>
            <p className="text-accent text-mono" style={{ fontSize: "0.9rem" }}>
              Teens Can Code • 2025 (SIWES)
            </p>

            <ul
              style={{
                listStyle: "disc",
                marginLeft: "1.5rem",
                color: "#9ca3af",
              }}
            >
              <li style={{ marginBottom: "0.5rem" }}>
                Collaborated with a team of student developers to build
                web-based solutions.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                Assisted in writing clean, maintainable code using HTML, CSS,
                JavaScript and React.
              </li>
              <li>Participated in code reviews and debugging sessions.</li>
            </ul>
          </div>
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
              image="src\assets\img\port.png" 
              link="https://github.com/Tomiwa011/my-portfolio" // <--- Add your real link here
              description="You are looking at it! A responsive personal site built with React. It features a custom dark mode system and Framer Motion animations." 
              tags={['React', 'CSS3', 'Vite']} 
            />

            <ProjectCard 
              index={1}
              title="Teens Can Code (Internship)" 
              image="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=full"
              
              link="https://github.com/Tomiwa011" // <--- Add real link
              description="Collaborated with a team to build web layouts. I learned how to debug JavaScript, manage code versions, and work in a professional dev environment." 
              tags={['HTML5', 'JavaScript', 'Teamwork']} 
            />

            <ProjectCard 
              index={2}
              title="E-Commerce Store" 
              image="src\assets\img\cart.png"
               link="#" // <--- Use # if it's not ready yet
              description="I am currently planning a fully functional shopping cart application to practice advanced JavaScript state management." 
              tags={['Planning', 'Frontend Logic']} 
            />
            <ProjectCard 
              index={2}
              title="E-Commerce Store" 
              image="src\assets\img\Santiago.png"
               link="#" // <--- Use # if it's not ready yet
              description="I am currently planning a fully functional shopping cart application to practice advanced JavaScript state management." 
              tags={['Planning', 'Frontend Logic']} 
            />
          </div>
         
          
        </section>

        <footer
          style={{
            textAlign: "center",
            color: "#4b5563",
            fontSize: "0.8rem",
            marginTop: "4rem",
          }}
        >
          <p>Designed & Built by Ausi Ayooluwatomiwa David</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
