import { motion } from "framer-motion";

const services = [
  {
    title: "React Development",
    description:
      "Developing scalable single-page applications with API integration and reusable components.",
  },
  {
    title: "UI Implementation",
    description:
      "Converting design files from Figma into pixel-perfect, responsive web interfaces.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving website performance, responsiveness, and accessibility for better user experience.",
  },
];

export default function WhatIDoSection() {
  return (
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
        {services.map((service) => (
          <motion.div
            key={service.title}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -10,
              borderColor: "var(--accent)",
              boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
            }}
            style={{ padding: "2rem", backgroundColor: "var(--bg-card)" }}
            className="card flex flex-col w-80 h-fit bg-base-100 shadow-lg"
          >
            <div style={{ marginBottom: "2rem" }} className="card-header">
              <h3>{service.title}</h3>
            </div>
            <div className="card-body">
              <p>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
