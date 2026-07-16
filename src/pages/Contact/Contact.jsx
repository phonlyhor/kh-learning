import { memo, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>📞 ទំនាក់ទំនងមកយើងខ្ញុំ</h1>
          <p>មានចម្ងល់ ឬចង់សួរព័ត៌មានបន្ថែម? សូមផ្ញើសារមកយើងខ្ញុំឥឡូវនេះ</p>
        </div>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info">
            <div className="info-card glass">
              <div className="info-icon">
                <FaPhoneAlt />
              </div>
              <div className="info-text">
                <h3>លេខទូរស័ព្ទ</h3>
                <p>+855 88 905 9604</p>
              </div>
            </div>

            <div className="info-card glass">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-text">
                <h3>សារអេឡិចត្រូនិច</h3>
                <p>phonlyhor2007@gmail.com</p>
              </div>
            </div>

            <div className="info-card glass">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <h3>អាសយដ្ឋាន</h3>
                <p>រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container glass">
            <h2>ផ្ញើសារមកកាន់យើង</h2>
            {submitted && (
              <div className="form-success">
                🎉 សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ! យើងនឹងឆ្លើយតបវិញក្នុងពេលឆាប់ៗ។
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">ឈ្មោះសិស្ស/អាណាព្យាបាល</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="សូមបញ្ចូលឈ្មោះរបស់អ្នក"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">សារអេឡិចត្រូនិច (Email)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="សូមបញ្ចូលអ៊ីមែលរបស់អ្នក"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">ប្រធានបទ</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="តើអ្នកចង់សួរអំពីអ្វី?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">សារលម្អិត</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="សូមសរសេរសារលម្អិតរបស់អ្នកនៅទីនេះ..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FaPaperPlane /> ផ្ញើសារឥឡូវនេះ
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
