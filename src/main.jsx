import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const RootApp = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const preloader = document.getElementById("preloader");

    if (!preloader) {
      return;
    }

    if (!isLoading) {
      preloader.classList.add("hide");
      const timeout = window.setTimeout(() => preloader.remove(), 400);
      return () => window.clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <StrictMode>
      <App isLoading={isLoading} />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<RootApp />);
