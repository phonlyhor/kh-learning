import { memo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt, FaDownload, FaBookOpen, FaFilePdf } from "react-icons/fa";

import classes from "../../data/Classes";
import subjects from "../../data/Subjects";
import lessons from "../../data/Lessons";
import generalBooks from "../../data/generalbook";
import grade11 from "../../data/grade11";
import grade10 from "../../data/grade10";
import grade2 from "../../data/grade2";
import Literature from "../../data/Literature";

import "./PdfViewer.css";

const PdfViewer = () => {
  const { classId, subjectId, lessonId } = useParams();
  const [activeMode, setActiveMode] = useState("text"); // "text" or "pdf"

  let currentLesson = null;
  if (classId === "general") {
    currentLesson = generalBooks.find((item) => item.id === Number(lessonId));
  } else if (classId === "literature") {
    currentLesson = Literature.find((item) => item.id === Number(lessonId));
  } else if (classId) {
    const cid = Number(classId);
    const lid = Number(lessonId);
    currentLesson = 
      lessons.find((item) => item.id === lid && item.classId === cid) ||
      grade11.find((item) => item.id === lid && item.classId === cid) ||
      grade10.find((item) => item.id === lid && item.classId === cid) ||
      grade2.find((item) => item.id === lid && item.classId === cid);
  } else {
    // Fallback for direct /viewer/:lessonId access
    const lid = Number(lessonId);
    currentLesson = lessons.find((item) => item.id === lid) ||
      generalBooks.find((item) => item.id === lid) ||
      grade11.find((item) => item.id === lid) ||
      grade10.find((item) => item.id === lid) ||
      grade2.find((item) => item.id === lid) ||
      Literature.find((item) => item.id === lid);
  }

  if (!currentLesson) {
    return (
      <div className="viewer-error">
        <h2>រកមិនឃើញមេរៀននេះទេ</h2>
        <Link to="/classes" className="btn gray">
          <FaArrowLeft /> ត្រឡប់ទៅថ្នាក់រៀន
        </Link>
      </div>
    );
  }

  const currentClass = classes.find((item) => item.id === currentLesson.classId);
  const currentSubject = subjects.find((item) => item.id === currentLesson.subjectId);

  const isMobile = window.innerWidth <= 768;

  const backPath = classId === "general"
    ? `/lessons/general/${subjectId || currentLesson.subjectId}`
    : classId === "literature"
      ? `/literature`
      : `/lessons/${classId || currentLesson.classId}/${subjectId || currentLesson.subjectId}`;

  return (
    <section className="pdf-viewer-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          {classId === "general" ? (
            <>
              <Link to="/subjects">សៀវភៅទូទៅ និងទ្រឹស្តី</Link>
              <span> / </span>
              <Link to={`/lessons/general/${subjectId || currentLesson.subjectId}`}>
                {currentSubject?.name || "មុខវិជ្ជា"}
              </Link>
              <span> / </span>
              <span className="active">{currentLesson.title}</span>
            </>
          ) : classId === "literature" ? (
            <>
              <Link to="/literature">អក្សរសិល្ប៍ និងសៀវភៅអានរឿង</Link>
              <span> / </span>
              <span className="active">{currentLesson.title}</span>
            </>
          ) : (
            <>
              <Link to="/classes">ថ្នាក់រៀន</Link>
              <span> / </span>
              <Link to={`/subjects/${classId || currentLesson.classId}`}>
                {currentClass?.title || "ថ្នាក់សិក្សា"}
              </Link>
              <span> / </span>
              <Link to={`/lessons/${classId || currentLesson.classId}/${subjectId || currentLesson.subjectId}`}>
                {currentSubject?.name || "មុខវិជ្ជា"}
              </Link>
              <span> / </span>
              <span className="active">{currentLesson.title}</span>
            </>
          )}
        </div>

        <div className="viewer-header">
          <h1>
            {classId === "general" ? "📜" : classId === "literature" ? "📚" : currentClass?.icon} {currentLesson.title}
          </h1>
          <p>
            ថ្នាក់៖ {classId === "general" ? "សៀវភៅទូទៅ" : classId === "literature" ? "អក្សរសិល្ប៍" : currentClass?.title} | មុខវិជ្ជា៖ {currentSubject?.name || (classId === "literature" ? "ភាសាខ្មែរ" : "")}
          </p>
        </div>

        {/* View Mode Tabs */}
        <div className="viewer-tabs">
          <button
            className={`tab-btn ${activeMode === "text" ? "active" : ""}`}
            onClick={() => setActiveMode("text")}
          >
            <FaBookOpen /> អានអត្ថបទមេរៀន
          </button>
          <button
            className={`tab-btn ${activeMode === "pdf" ? "active" : ""}`}
            onClick={() => setActiveMode("pdf")}
          >
            <FaFilePdf /> មើលឯកសារ PDF
          </button>
        </div>

        {/* Action Controls */}
        <div className="viewer-actions">
          <a
            href={currentLesson.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn blue"
          >
            <FaExternalLinkAlt /> បើក PDF ផ្ទាំងថ្មី
          </a>

          <a href={currentLesson.pdf} download className="btn green">
            <FaDownload /> ទាញយកឯកសារ
          </a>

          <Link
            to={backPath}
            className="btn gray"
          >
            <FaArrowLeft /> ត្រឡប់ក្រោយ
          </Link>
        </div>

        {/* Render content based on active mode */}
        {activeMode === "text" ? (
          /* Rich Text Lesson Content */
          <div className="lesson-text-content glass">
            {currentLesson.content ? (
              <div className="article-body">
                <p className="article-intro">{currentLesson.content.intro}</p>

                {currentLesson.content.sections.map((section, idx) => (
                  <div key={idx} className="article-section">
                    <h2>{section.title}</h2>
                    {section.body && <p className="article-paragraph">{section.body}</p>}

                    {/* Rendering custom Grid (e.g. consonants) */}
                    {section.grid && (
                      <div className="article-grid">
                        {section.grid.map((char, charIdx) => (
                          <div key={charIdx} className="grid-item">
                            {char}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Rendering custom List */}
                    {section.list && (
                      <ul className="article-list">
                        {section.list.map((item, listIdx) => (
                          <li key={listIdx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-text-content">
                <p>មិនទាន់មានអត្ថបទសម្រាប់មេរៀននេះទេ។ សូមមើលក្នុងផ្ទាំង "មើលឯកសារ PDF"!</p>
              </div>
            )}
          </div>
        ) : (
          /* PDF Mode */
          <>
            {!isMobile && (
              <div className="viewer-card">
                <iframe src={currentLesson.pdf} title={currentLesson.title} />
              </div>
            )}

            {isMobile && (
              <div className="mobile-message">
                <div className="phone-icon">📱</div>
                <h2>អាន PDF នៅលើទូរស័ព្ទដៃ</h2>
                <p>ដើម្បីទទួលបានបទពិសោធន៍អានកាន់តែល្អ សូមចុចប៊ូតុង "បើក PDF ផ្ទាំងថ្មី" ខាងលើ។</p>
                <iframe
                  src={`${currentLesson.pdf}#toolbar=1&navpanes=0`}
                  title={currentLesson.title}
                  width="100%"
                  height="600"
                  style={{
                    width: "100%",
                    height: "600px",
                    border: "none",
                    background: "#fff",
                    borderRadius: "12px",
                    marginTop: "20px"
                  }}
                />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default memo(PdfViewer);
