import { memo } from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-box">
          <h2 className="footer-logo">📚 Khmer Learning</h2>

          <p>
            Website សិក្សាសម្រាប់សិស្សចាប់ពីថ្នាក់ទី១ ដល់ទី១២ ដែលផ្តល់ជូនមេរៀន
            និងឯកសារ PDF ដោយឥតគិតថ្លៃ។
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>តំណភ្ជាប់</h3>

          <ul>
            <li>🏠 ទំព័រដើម</li>

            <li>📖 ថ្នាក់សិក្សា</li>

            <li>📚 មុខវិជ្ជា</li>

            <li>📞 ទំនាក់ទំនង</li>
          </ul>
        </div>

        {/* Subjects */}
        <div className="footer-box">
          <h3>មុខវិជ្ជា</h3>

          <ul>
            <li>📘 ភាសាខ្មែរ</li>

            <li>🚧 Coming Soon</li>

            <li>🚧 Coming Soon</li>

            <li>🚧 Coming Soon</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>ទំនាក់ទំនង</h3>

          <p>
            <FaPhoneAlt />
            +855 88 905 9604
          </p>

          <p>
            <FaEnvelope />
            phonlyhor2007@gmail.com
          </p>

          <p>
            <FaMapMarkerAlt />
            Phnom Penh, Cambodia
          </p>

          <div className="footer-social">
            <a href="https://web.facebook.com/profile.php?id=61583303827823">
              <FaFacebookF />
            </a>

            <a href="https://t.me/khmerlearning">
              <FaTelegramPlane />
            </a>

            <a href="https://www.youtube.com/@KhmerLearning">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Khmer Learning | All Rights Reserved.
      </div>
    </footer>
  );
};

export default memo(Footer);
