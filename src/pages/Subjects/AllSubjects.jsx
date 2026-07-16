import { memo, useState } from "react";
import { Link } from "react-router-dom";
import subjects from "../../data/Subjects";
import classes from "../../data/Classes";
import "./AllSubjects.css";

const AllSubjects = () => {
  return (
    <section className="all-subjects-page">
      <div className="container">
        <div className="page-header">
          <h1>📚 សៀវភៅទូទៅ និងទ្រឹស្តី</h1>
          <p>ជ្រើសរើសប្រភេទសៀវភៅដើម្បីចាប់ផ្តើមអាន</p>
        </div>

        <div className="subjects-grid">
          {subjects
            .filter((subject) => [7, 8, 9].includes(subject.id))
            .map((subject) => (
            <div key={subject.id} className="subject-card">
              <div className="subject-icon">{subject.icon}</div>
              <h3>{subject.name}</h3>
              {subject.available ? (
                <>
                  <p className="available">✅ មានមេរៀនរួចរាល់</p>
                  <Link to={`/lessons/general/${subject.id}`} className="learn-btn">
                    📖 ចូលអានសៀវភៅ
                  </Link>
                </>
              ) : (
                <>
                  <p className="coming">🚧 នឹងមានក្នុងពេលឆាប់ៗនេះ</p>
                  <button className="coming-btn" disabled>
                    Coming Soon
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(AllSubjects);
