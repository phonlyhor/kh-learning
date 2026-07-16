import { memo } from "react";
import { Link } from "react-router-dom";
import { FaBook, FaCalculator, FaAtom, FaFlask } from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi";
import "./SubjectCart.css";

const subjects = [
  {
    id: 1,
    name: "ភាសាខ្មែរ",
    icon: <FaBook />,
    available: true,
  },
  {
    id: 2,
    name: "គណិតវិទ្យា",
    icon: <FaCalculator />,
    available: true,
  },
  {
    id: 3,
    name: "រូបវិទ្យា",
    icon: <FaAtom />,
    available: false,
  },
  {
    id: 4,
    name: "គីមីវិទ្យា",
    icon: <FaFlask />,
    available: false,
  },
  {
    id: 5,
    name: "ជីវវិទ្យា",
    icon: <GiPlantRoots />,
    available: false,
  },
];

const SubjectCard = () => {
  return (
    <section className="subject-section">
      <div className="section-title">
        <h2>📚 មុខវិជ្ជាទាំងអស់</h2>
        <p>ជ្រើសរើសមុខវិជ្ជាដែលអ្នកចង់សិក្សា</p>
      </div>

      <div className="subject-grid">
        {subjects.map((subject) => (
          <div className="subject-card" key={subject.id}>
            {/* Badge */}

            {!subject.available && <span className="badge">Coming Soon</span>}

            {/* Icon */}

            <div className="subject-icon">{subject.icon}</div>

            {/* Name */}

            <h3>{subject.name}</h3>

            {/* Status */}

            {subject.available ? (
              <>
                <p className="available">✅ មានមេរៀនរួចរាល់</p>

                <Link to="/subjects" className="learn-btn">ចូលរៀន</Link>
              </>
            ) : (
              <>
                <p className="coming">🚧 នឹងបន្ថែមក្នុងពេលឆាប់ៗ</p>

                <button className="coming-btn">Coming Soon</button>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(SubjectCard);
