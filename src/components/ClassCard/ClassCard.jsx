import { memo } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import classes from "../../data/Classes";
import "./ClassCard.css";

const ClassCard = () => {
  return (
    <section className="class-section">
      <div className="section-title">
        <h2>📚 ជ្រើសរើសថ្នាក់រៀន</h2>
        <p>ជ្រើសរើសថ្នាក់ដែលអ្នកចង់សិក្សា</p>
      </div>

      <div className="class-grid">
        {classes.map((item) => (
          <div
            key={item.id}
            className="class-card"
            style={{ borderTop: `6px solid ${item.color}` }}
          >
            <div className="class-icon" style={{ backgroundColor: item.color }}>
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <Link to={`/subjects/${item.id}`} className="class-btn">
              ចូលរៀន
              <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(ClassCard);
