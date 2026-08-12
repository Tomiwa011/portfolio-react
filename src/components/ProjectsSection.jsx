import ProjectCard from "../ProjectCard.jsx";
import portImg from "../assets/img/port.png";
import Santiago from "../assets/img/Santiago.png";
import cartImg from "../assets/img/cart.png";
import audiophile from "../assets/img/audiophile.png";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <h2>
        <span className="text-accent">02.</span> Some Things I've Built
        <span className="separator"></span>
      </h2>

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
          index={3}
          title="Bootstrap Landing Clone"
          image={Santiago}
          link="https://rey-clone-bootstrap.vercel.app/"
          description="A landing page clone built with Bootstrap, showing responsive layout skills and frontend UI polish."
          tags={["Bootstrap", "Responsive", "Frontend"]}
        />
      </div>
    </section>
  );
}
