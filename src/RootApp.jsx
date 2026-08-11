import { useEffect, useState } from "react";
import App from "./App.jsx";

export default function RootApp() {
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

  return <App isLoading={isLoading} />;
}
