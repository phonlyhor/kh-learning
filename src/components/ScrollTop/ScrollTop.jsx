import { memo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import "./ScrollTop.css";

const ScrollTop = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // Automatically scroll to top on page transition
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  // Handle visibility of floating scroll button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-top-btn ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to Top"
    >
      <FaChevronUp />
    </button>
  );
};

export default memo(ScrollTop);
