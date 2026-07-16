import { memo } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBookOpen, FaStar } from "react-icons/fa";
import heroImage from "../../assets/images/hero.png";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-badge">📚 វេទិកាសិក្សាអនឡាញ</span>

        <h1>
          រៀនពី
          <span> ថ្នាក់ទី១ </span>
          ដល់
          <span> ថ្នាក់ទី១២</span>
        </h1>

        <p>
          សិក្សាមេរៀនតាមកម្មវិធីសិក្សារបស់ក្រសួងអប់រំ ជាមួយឯកសារ PDF ងាយស្រួលអាន
          និងឥតគិតថ្លៃ។
        </p>

        <div className="hero-btns">
          <Link to="/classes" className="primary-btn">
            <FaBookOpen />
            ចាប់ផ្តើមរៀន
          </Link>

          <Link to="/classes" className="outline-btn">
            មើលថ្នាក់ទាំងអស់
            <FaArrowRight />
          </Link>
        </div>

        <div className="hero-rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <span>សិស្សជាង 20,000 នាក់កំពុងសិក្សា</span>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default memo(Hero);
