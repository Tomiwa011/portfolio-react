import { useEffect, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import WhatIDoSection from "./components/WhatIDoSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import FooterSection from "./components/FooterSection.jsx";

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

  return (
    <div className="app-container">
      <Sidebar theme={theme} toggleTheme={toggleTheme} />

      <main className="main-content">
        <HeroSection />
        <WhatIDoSection />
        <ProjectsSection />
        <SkillsSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
