import { memo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import classes from "../../data/Classes";
import subjects from "../../data/Subjects";

import "./Subjects.css";

const Subjects = () => {
  const { classId } = useParams();

  const [search, setSearch] = useState("");

  const currentClass = classes.find((item) => item.id === Number(classId));

  if (!currentClass) {
    return <h2>Class Not Found</h2>;
  }

  const filteredSubjects = subjects.filter(
    (subject) =>
      ![7, 8, 9].includes(subject.id) &&
      subject.classes.includes(Number(classId)) &&
      subject.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="subjects">
      <div className="subjects-header">
        <h1>
          {currentClass.icon} {currentClass.title}
        </h1>

        <p>{currentClass.description}</p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 ស្វែងរកមុខវិជ្ជា..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="subjects-grid">
        {filteredSubjects.map((subject) => (
          <div key={subject.id} className="subject-card">
            <div className="subject-icon">{subject.icon}</div>

            <h3 className="subject-name">{subject.name}</h3>

            {subject.available ? (
              <>
                <p className="available">✅ អាចសិក្សាបាន</p>

                <Link to={`/lessons/${classId}/${subject.id}`} className="learn-btn">
                  📖 ចូលរៀន
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
    </section>
  );
};

export default memo(Subjects);
