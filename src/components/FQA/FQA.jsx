import { memo, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./FQA.css";

const faqData = [
  {
    question: "Website នេះប្រើប្រាស់ដោយឥតគិតថ្លៃមែនទេ?",
    answer: "បាទ/ចាស! អ្នកអាចអានមេរៀន និង PDF ដោយឥតគិតថ្លៃ។",
  },
  {
    question: "តើខ្ញុំត្រូវបង្កើតគណនីដែរឬទេ?",
    answer: "បច្ចុប្បន្នមិនចាំបាច់បង្កើតគណនីទេ។",
  },
  {
    question: "តើអាច Download PDF បានទេ?",
    answer: "បាន។ អ្នកអាចអាន Online ឬ Download ទុកបាន។",
  },
  {
    question: "មានមេរៀនគ្រប់ថ្នាក់មែនទេ?",
    answer: "បច្ចុប្បន្នមានភាសាខ្មែរ ហើយមុខវិជ្ជាផ្សេងៗនឹងបន្ថែមនាពេលខាងមុខ។",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-title">
          <h2>❓ សំណួរដែលគេសួរញឹកញាប់</h2>
          <p>ចម្លើយសម្រាប់សំណួរដែលសិស្សសួរញឹកញាប់</p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggle(index)}>
                <h3>{item.question}</h3>

                {active === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              {active === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FAQ);
