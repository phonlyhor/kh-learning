import { memo } from "react";
import {
  FaBookOpen,
  FaFilePdf,
  FaLaptop,
  FaSearch,
  FaRocket,
  FaGift,
} from "react-icons/fa";

import "./WhyChooseUs.css";

const features = [
  {
    icon: <FaBookOpen />,
    title: "មេរៀនគ្រប់ថ្នាក់",
    desc: "ចាប់ពីថ្នាក់ទី១ ដល់ទី១២",
  },
  {
    icon: <FaFilePdf />,
    title: "PDF គុណភាពខ្ពស់",
    desc: "អានច្បាស់ និងងាយស្រួល",
  },
  {
    icon: <FaLaptop />,
    title: "រៀនគ្រប់ឧបករណ៍",
    desc: "Computer, Tablet និង Phone",
  },
  {
    icon: <FaGift />,
    title: "ឥតគិតថ្លៃ",
    desc: "មិនចាំបាច់បង់ប្រាក់",
  },
  {
    icon: <FaRocket />,
    title: "ល្បឿនលឿន",
    desc: "Website បើកបានរហ័ស",
  },
  {
    icon: <FaSearch />,
    title: "ស្វែងរកងាយស្រួល",
    desc: "រកមេរៀនបានលឿន",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="container">
        <div className="section-title">
          <h2>⭐ ហេតុអ្វីត្រូវជ្រើសរើសយើង?</h2>
          <p>Website សិក្សាដែលងាយស្រួល និងឥតគិតថ្លៃ</p>
        </div>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(WhyChooseUs);
