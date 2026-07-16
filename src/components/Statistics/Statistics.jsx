import { memo } from "react";
import CountUp from "react-countup";
import {
  FaUserGraduate,
  FaBookOpen,
  FaFilePdf,
  FaGraduationCap,
} from "react-icons/fa";

import "./Statistics.css";

// Fix CJS/ESM default export interop issues in Vite 8 / React 19
const CountUpComponent = typeof CountUp === "function" ? CountUp : (CountUp.default || CountUp);

const Statistics = () => {
  const stats = [
    {
      id: 1,
      icon: <FaUserGraduate />,
      value: 20000,
      suffix: "+",
      title: "សិស្សកំពុងសិក្សា",
    },
    {
      id: 2,
      icon: <FaGraduationCap />,
      value: 12,
      suffix: "",
      title: "ថ្នាក់សិក្សា",
    },
    {
      id: 3,
      icon: <FaBookOpen />,
      value: 150,
      suffix: "+",
      title: "មេរៀន",
    },
    {
      id: 4,
      icon: <FaFilePdf />,
      value: 500,
      suffix: "+",
      title: "ឯកសារ PDF",
    },
  ];

  return (
    <section className="statistics-section">
      <div className="container">
        <div className="section-title">
          <h3>📊 ស្ថិតិនៃ Website</h3>
          <p>សិក្សាដោយឥតគិតថ្លៃ ជាមួយមេរៀនគុណភាពខ្ពស់</p>
        </div>

        <div className="statistics-grid">
          {stats.map((item) => (
            <div className="stat-card" key={item.id}>
              <div className="stat-icon">{item.icon}</div>

              <h3>
                <CountUpComponent
                  end={item.value}
                  suffix={item.suffix}
                  duration={2.5}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>

              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Statistics);
