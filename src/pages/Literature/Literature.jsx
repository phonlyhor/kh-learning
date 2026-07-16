import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaAward } from "react-icons/fa";

import literatureData from "../../data/Literature";
import classes from "../../data/Classes";
import "./Literature.css";

const Literature = () => {
  const [search, setSearch] = useState("");

  // Filter story books
  const filteredStories = literatureData.filter(
    (story) =>
      story.title.toLowerCase().includes(search.toLowerCase()) ||
      story.author.toLowerCase().includes(search.toLowerCase())
  );

  const getClassTitle = (classId) => {
    const cls = classes.find((c) => c.id === classId);
    return cls ? cls.title : "";
  };

  return (
    <section className="literature-page">
      <div className="container">
        <div className="literature-header">
          <FaAward className="header-icon" />
          <h1>📚 អក្សរសិល្ប៍ និងសៀវភៅអានរឿង</h1>
          <p>ប្រមូលផ្តុំរាល់ស្នាដៃអក្សរសិល្ប៍ខ្មែរល្បីៗ រឿងព្រេងនិទាន និងប្រលោមលោកសម្រាប់អានកម្សាន្ត និងសិក្សា</p>
        </div>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 ស្វែងរកស្នាដៃអក្សរសិល្ប៍ ឬអ្នកនិពន្ធ (ឧទាហរណ៍៖ ទុំទាវ, ផ្កាស្រពោន...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Literature Grid */}
        {filteredStories.length > 0 ? (
          <div className="literature-grid">
            {filteredStories.map((story) => (
              <div key={story.id} className="literature-card glass">
                <span className="class-tag">{getClassTitle(story.classId)}</span>
                <h3>{story.title}</h3>
                <p className="author-tag">និពន្ធដោយ៖ {story.author}</p>
                <p className="description-text">{story.description || story.content?.intro}</p>
                <Link to={`/viewer/literature/${story.subjectId}/${story.id}`} className="read-btn">
                  <FaBookOpen /> អានសៀវភៅរឿង
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>រកមិនឃើញស្នាដៃអក្សរសិល្ប៍ដែលអ្នកចង់ស្វែងរកទេ</h3>
            <p>សូមព្យាយាមស្វែងរកពាក្យគន្លឹះផ្សេងទៀត។</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Literature);
