import { memo, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollTop from "../components/ScrollTop/ScrollTop";

import "./MainLayout.css";

const MainLayout = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="main-layout">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
      <ScrollTop />
    </div>
  );
};

export default memo(MainLayout);
