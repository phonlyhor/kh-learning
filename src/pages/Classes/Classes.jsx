import { memo } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import classes from "../../data/Classes";

import "./Classes.css";

const Classes = () => {
  return (
    <section className="classes">
      <div className="container">
        <div className="page-header">
          <h1>📚 ថ្នាក់សិក្សា</h1>

          <p>ជ្រើសរើសថ្នាក់ដែលអ្នកចង់សិក្សា</p>
        </div>

        <div className="class-grid">
          {classes.map((item) => (
            <Link
              key={item.id}
              to={`/subjects/${item.id}`}
              className="class-card"
              style={{
                "--theme": item.color,
              }}
            >
              <div
                className="class-icon"
                style={{
                  background: item.color,
                }}
              >
                {item.icon}
              </div>

              <h2>{item.title}</h2>

              <p>{item.description}</p>

              <button>
                ចូលរៀន
                <FaArrowRight />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Classes);
