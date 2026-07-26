import { memo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaBookOpen, FaArrowLeft, FaFilePdf, FaCheckCircle, FaTimesCircle, FaRedo, FaEye, FaDownload } from "react-icons/fa";

import classes from "../../data/Classes";
import subjects from "../../data/Subjects";
import lessons from "../../data/Lessons";
import generalBooks from "../../data/generalbook";
import grade11 from "../../data/grade11";
import grade10 from "../../data/grade10";
import grade1 from "../../data/grade1";
import grade2 from "../../data/grade2";
import grade3 from "../../data/grade3";
import grade4 from "../../data/grade4";
import grade5 from "../../data/grade5";
import grade6 from "../../data/grade6";
import grade7 from "../../data/grade7";
import grade8 from "../../data/grade8";
import grade9 from "../../data/grade9";
import grade12 from "../../data/grade12";
import exercises from "../../data/Exercises";

import "./Lessons.css";

const getCoverGradient = (id) => {
  const gradients = [
    "linear-gradient(135deg, #1e3a8a, #0f172a)", // Navy blue
    "linear-gradient(135deg, #7f1d1d, #450a0a)", // Crimson
    "linear-gradient(135deg, #134e5e, #2e7d32)", // Emerald Green
    "linear-gradient(135deg, #311b92, #1a237e)", // Deep Violet
    "linear-gradient(135deg, #e65100, #b71c1c)", // Rust Orange
  ];
  return gradients[id % gradients.length];
};

const Lessons = () => {
  const { classId, subjectId } = useParams();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("lessons"); // "lessons" or "exercises"

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { questionId: chosenIndex }
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const isGeneralSubject = Number(subjectId) === 7 || Number(subjectId) === 8 || Number(subjectId) === 9;
  const currentClass = classId === "general"
    ? { id: "general", title: "សៀវភៅទូទៅ", icon: "📚" }
    : classes.find((item) => item.id === Number(classId));
  const currentSubject = subjects.find((item) => item.id === Number(subjectId));

  if ((!currentClass && classId !== "general") || !currentSubject) {
    return (
      <div className="lessons-error">
        <h2>ទិន្នន័យរកមិនឃើញ</h2>
        <Link to="/classes" className="back-btn">
          <FaArrowLeft /> ត្រឡប់ទៅថ្នាក់រៀនវិញ
        </Link>
      </div>
    );
  }

  // Determine which database to load from
  const currentDataList = isGeneralSubject ? generalBooks : [...lessons, ...grade12, ...grade11, ...grade10, ...grade9, ...grade8, ...grade7, ...grade6, ...grade5, ...grade4, ...grade3, ...grade2, ...grade1];

  // Filter lessons belonging to this class & subject
  const filteredLessons = currentDataList.filter(
    (lesson) =>
      (classId === "general" || lesson.classId === Number(classId)) &&
      lesson.subjectId === Number(subjectId) &&
      lesson.title.toLowerCase().includes(search.toLowerCase())
  );

  // Find exercise for this class & subject
  const currentExercise = exercises.find(
    (ex) => ex.classId === Number(classId) && ex.subjectId === Number(subjectId)
  );

  const handleOptionClick = (questionId, optionIndex) => {
    if (quizSubmitted) return; // Prevent changing after submit
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  // Calculate score
  const calculateScore = () => {
    if (!currentExercise) return 0;
    let score = 0;
    currentExercise.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) {
        score++;
      }
    });
    return score;
  };

  return (
    <section className="lessons-page">
      <div className="container">
        <div className="lessons-header">
          <div className="breadcrumb">
            {classId === "general" ? (
              <>
                <Link to="/subjects">សៀវភៅទូទៅ និងទ្រឹស្តី</Link>
                <span> / </span>
                <span className="active">{currentSubject.name}</span>
              </>
            ) : (
              <>
                <Link to="/classes">ថ្នាក់រៀន</Link>
                <span> / </span>
                <Link to={`/subjects/${classId}`}>{currentClass.title}</Link>
                <span> / </span>
                <span className="active">{currentSubject.name}</span>
              </>
            )}
          </div>

          <h1>
            {currentSubject.icon} {currentSubject.name} {classId === "general" ? "" : `- ${currentClass.title}`}
          </h1>
          <p>
            {classId === "general"
              ? "អានសៀវភៅទូទៅ ឯកសារយោង និងទ្រឹស្តីសិក្សាស្រាវជ្រាវ"
              : "សិក្សាមេរៀនផ្លូវការ និងវាស់ស្ទង់សមត្ថភាពជាមួយលំហាត់អនុវត្ត"}
          </p>
        </div>

        {/* Tab Selection */}
        <div className="tab-container">
          <button
            className={`tab-btn ${activeTab === "lessons" ? "active" : ""}`}
            onClick={() => setActiveTab("lessons")}
          >
            📖 មេរៀនសិក្សា ({filteredLessons.length})
          </button>
          <button
            className={`tab-btn ${activeTab === "exercises" ? "active" : ""}`}
            onClick={() => setActiveTab("exercises")}
          >
            ✍️ លំហាត់អនុវត្ត ({currentExercise?.questions.length || 0})
          </button>
        </div>

        {activeTab === "lessons" ? (
          <>
            {/* Search */}
            <div className="search-box">
              <input
                type="text"
                placeholder="🔍 ស្វែងរកមេរៀន..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Lessons list */}
            {filteredLessons.length > 0 ? (
              <div className={Number(subjectId) === 7 || Number(subjectId) === 8 || Number(subjectId) === 9 ? "books-grid" : "lessons-grid"}>
                {filteredLessons.map((lesson) => {
                  const isGeneralBook = Number(subjectId) === 7 || Number(subjectId) === 8 || Number(subjectId) === 9;
                  
                  if (isGeneralBook) {
                    return (
                      <div key={lesson.id} className="book-card-item">
                        <Link to={`/viewer/${classId}/${subjectId}/${lesson.id}`} className="book-cover-container">
                          {lesson.cover ? (
                            <img src={lesson.cover} alt={lesson.title} className="book-cover-img" />
                          ) : (
                            <div className="book-cover-placeholder" style={{ background: getCoverGradient(lesson.id) }}>
                              <span className="book-placeholder-label">សៀវភៅទូទៅ</span>
                              <div className="book-placeholder-title">{lesson.title}</div>
                              <div className="book-placeholder-stripe"></div>
                            </div>
                          )}
                        </Link>
                        <div className="book-card-details">
                          <Link to={`/viewer/${classId}/${subjectId}/${lesson.id}`} className="book-title-link">
                            <h3 className="book-title">{lesson.title}</h3>
                          </Link>
                          <p className="book-author">by {lesson.author || "ក្រសួងអប់រំ យុវជន និងកីឡា"}</p>
                          <div className="book-stats">
                            <span className="stat-item">
                              <FaEye /> {lesson.views ? lesson.views.toLocaleString() : "0"}
                            </span>
                            <span className="stat-divider">|</span>
                            <span className="stat-item">
                              <FaDownload /> {lesson.downloads ? lesson.downloads.toLocaleString() : "0"}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div key={lesson.id} className="lesson-card">
                      <div className="lesson-card-icon">
                        <FaFilePdf />
                      </div>
                      <div className="lesson-card-info">
                        <h3>{lesson.title}</h3>
                        <p>មេរៀនផ្លូវការសម្រាប់សិស្ស {currentClass.title}</p>
                      </div>
                      <Link to={`/viewer/${classId}/${subjectId}/${lesson.id}`} className="read-btn">
                        <FaBookOpen /> អានមេរៀន
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="no-lessons">
                <div className="no-lessons-icon">🚧</div>
                <h3>មិនទាន់មានមេរៀនសម្រាប់មុខវិជ្ជានេះទេ</h3>
                <p>ក្រុមការងារយើងខ្ញុំកំពុងរៀបចំ និងបន្ថែមមេរៀនថ្មីៗក្នុងពេលឆាប់ៗ។</p>
                <Link to={classId === "general" ? "/subjects" : `/subjects/${classId}`} className="back-btn">
                  <FaArrowLeft /> ត្រឡប់ទៅមុខវិជ្ជា
                </Link>
              </div>
            )}
          </>
        ) : (
          /* Exercises Tab */
          <div className="exercises-container">
            {currentExercise && currentExercise.questions.length > 0 ? (
              <div className="quiz-box glass">
                <h2 className="quiz-title">✍️ {currentExercise.title}</h2>

                {currentExercise.questions.map((q, index) => {
                  const chosenOption = selectedAnswers[q.id];
                  const isCorrect = chosenOption === q.answer;

                  return (
                    <div key={q.id} className="quiz-question-card">
                      <h3>
                        សំនួរទី {index + 1}: {q.question}
                      </h3>
                      <div className="options-grid">
                        {q.options.map((option, optIdx) => {
                          const isSelected = chosenOption === optIdx;
                          const showCorrect = quizSubmitted && optIdx === q.answer;
                          const showIncorrect = quizSubmitted && isSelected && !isCorrect;

                          let optionClass = "";
                          if (isSelected) optionClass = "selected";
                          if (showCorrect) optionClass = "correct";
                          if (showIncorrect) optionClass = "incorrect";

                          return (
                            <button
                              key={optIdx}
                              className={`option-btn ${optionClass}`}
                              onClick={() => handleOptionClick(q.id, optIdx)}
                              disabled={quizSubmitted}
                            >
                              <span className="option-letter">
                                {String.fromCharCode(65 + optIdx)}.
                              </span>
                              <span className="option-text">{option}</span>
                              {showCorrect && <FaCheckCircle className="result-icon-correct" />}
                              {showIncorrect && <FaTimesCircle className="result-icon-incorrect" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                {/* Score Section */}
                {quizSubmitted ? (
                  <div className="quiz-result-section">
                    <h3>
                      លទ្ធផលរបស់អ្នក៖{" "}
                      <span className="score-badge">
                        {calculateScore()} / {currentExercise.questions.length}
                      </span>
                    </h3>
                    <button className="reset-quiz-btn" onClick={handleResetQuiz}>
                      <FaRedo /> ធ្វើម្តងទៀត
                    </button>
                  </div>
                ) : (
                  <div className="quiz-action-section">
                    <button
                      className="submit-quiz-btn"
                      onClick={handleSubmitQuiz}
                      disabled={
                        Object.keys(selectedAnswers).length < currentExercise.questions.length
                      }
                    >
                      ពិនិត្យចម្លើយ
                    </button>
                    {Object.keys(selectedAnswers).length < currentExercise.questions.length && (
                      <p className="quiz-hint">សូមឆ្លើយសំណួរទាំងអស់ដើម្បីពិនិត្យចម្លើយ</p>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="no-lessons">
                <div className="no-lessons-icon">🚧</div>
                <h3>មិនទាន់មានលំហាត់អនុវត្តសម្រាប់ថ្នាក់នេះទេ</h3>
                <p>ក្រុមការងារយើងខ្ញុំកំពុងរៀបចំសំណួរអនុវត្តសម្រាប់មុខវិជ្ជានេះ។</p>
                <Link to={classId === "general" ? "/subjects" : `/subjects/${classId}`} className="back-btn">
                  <FaArrowLeft /> ត្រឡប់ទៅមុខវិជ្ជា
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Lessons);
