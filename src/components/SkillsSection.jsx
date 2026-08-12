import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { motion } from "framer-motion";
import LazyImage from "../LazyImage";
import tailwind from "../assets/img/tailwind.webp";
import nextJs from "../assets/img/nextjs.jpg";
import github from "../assets/img/github.png";
import git from "../assets/img/Git.png";
import css from "../assets/img/css.png";
import html from "../assets/img/html.png";
import vercel from "../assets/img/vercel.jpg";
import react from "../assets/img/reactlogo.webp";
import javaScript from "../assets/img/js.png";
import typescript from "../assets/img/typescript.jpg";

const skillsImages = [
  tailwind,
  nextJs,
  github,
  git,
  css,
  html,
  vercel,
  react,
  javaScript,
  typescript,
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="skills section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <h2>
        <span className="text-accent">03.</span> Skills And Technologies
        <span className="separator"></span>
      </h2>

      <Splide
        aria-label="Skills"
        options={{
          type: "loop",
          width: "100%",
          drag: "free",
          arrows: false,
          pagination: false,
          focus: "start",
          autoHeight: true,
          autoWidth: true,
          snap: false,
          gap: "1rem",
          trimSpace: false,
          autoScroll: {
            speed: 1,
            pauseOnHover: false,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {skillsImages.map((image, index) => (
          <SplideSlide key={index}>
            <div className="imgCard">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{
                  y: -10,
                  borderColor: "var(--accent)",
                  boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                }}
                style={{ width: "150px", padding: "1.75rem" }}
                className="card flex flex-col items-center justify-center bg-base-100 shadow-lg overflow-hidden"
              >
                <LazyImage
                  src={image}
                  width="115px"
                  alt="Skill icon"
                  style={{ display: "block", margin: "0 auto" }}
                />
              </motion.div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </motion.section>
  );
}
