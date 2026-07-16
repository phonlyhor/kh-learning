import { memo } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found-page">
      <div className="container">
        <div className="not-found-content glass">
          <div className="not-found-icon">
            <FaExclamationTriangle />
          </div>
          <h1>404</h1>
          <h2>រកមិនឃើញទំព័រនេះទេ</h2>
          <p>សុំទោស! ទំព័រដែលអ្នកកំពុងស្វែងរកប្រហែលជាត្រូវបានលុប ឬប្តូរឈ្មោះទៅកាន់ទីតាំងផ្សេងហើយ។</p>
          <Link to="/" className="home-btn">
            <FaHome /> ត្រឡប់ទៅទំព័រដើមវិញ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(NotFound);
