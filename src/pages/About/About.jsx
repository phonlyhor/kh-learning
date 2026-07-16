import { memo } from "react";
import { FaGraduationCap, FaHeart, FaGlobe, FaShieldAlt, FaBriefcase, FaFacebook } from "react-icons/fa";
import founderImage from "../../assets/images/founder.png";
import "./About.css";

const About = () => {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-hero">
          <FaGraduationCap className="about-hero-icon" />
          <h1>អំពីវេទិកា Khmer Learning</h1>
          <p>ពួកយើងប្តេជ្ញាចិត្តផ្តល់ជូនការអប់រំប្រកបដោយសមធម៌ និងឥតគិតថ្លៃសម្រាប់កុមារកម្ពុជា</p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon text-primary">
              <FaHeart />
            </div>
            <h2>បេសកកម្មរបស់យើង</h2>
            <p>
              ផ្តល់ជូននូវឯកសារសិក្សាផ្លូវការ មេរៀនសង្ខេប និងសៀវភៅជំនួយស្មារតីចាប់ពីថ្នាក់ទី១
              ដល់ទី១២ ដោយឥតគិតថ្លៃ ដើម្បីឱ្យសិស្សានុសិស្សគ្រប់រូបអាចអភិវឌ្ឍខ្លួនបានគ្រប់ពេលវេលា
              និងគ្រប់ទីកន្លែង។
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon text-success">
              <FaGlobe />
            </div>
            <h2>ចក្ខុវិស័យ</h2>
            <p>
              ក្លាយជាបណ្ណាល័យឌីជីថលឈានមុខគេមួយក្នុងការជួយសម្រួលដល់ការសិក្សាអនឡាញរបស់សិស្សានុសិស្ស
              និងគាំទ្រដល់ការអភិវឌ្ឍធនធានមនុស្សនៅក្នុងប្រទេសកម្ពុជា។
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon text-warning">
              <FaShieldAlt />
            </div>
            <h2>គុណតម្លៃស្នូល</h2>
            <p>
              ភាពងាយស្រួល គុណភាពខ្ពស់ និងភាពស្មោះត្រង់។ ឯកសារទាំងអស់ត្រូវបានជ្រើសរើស
              និងផ្ទៀងផ្ទាត់យ៉ាងហ្មត់ចត់ស្របតាមកម្មវិធីសិក្សារបស់ក្រសួងអប់រំ យុវជន និងកីឡា។
            </p>
          </div>
        </div>

        <div className="about-history glass">
          <h2>ប្រវត្តិនៃការបង្កើត</h2>
          <p>
            Khmer Learning ត្រូវបានបង្កើតឡើងក្នុងគោលបំណងដោះស្រាយការលំបាករបស់សិស្សក្នុងការស្វែងរក
            និងទទួលបានសៀវភៅសិក្សា និងមេរៀនគុណភាពខ្ពស់ជាភាសាខ្មែរ។ វេទិកានេះត្រូវបានរចនាឡើងយ៉ាងសាមញ្ញ
            ដើម្បីឱ្យងាយស្រួលប្រើប្រាស់នៅលើទូរស័ព្ទដៃ និងកុំព្យូទ័រ សូម្បីតែសិស្សនៅតំបន់ដាច់ស្រយាលក៏អាចទាញយក
            និងសិក្សាបានដោយងាយ។
          </p>
        </div>

        {/* Founder Section */}
        <div className="about-founder glass">
          <div className="founder-image-container">
            <img src={founderImage} alt="Phon Lyhor - Founder" className="founder-image" />
          </div>
          <div className="founder-details">
            <span className="founder-badge">ស្ថាបនិក & អ្នកអភិវឌ្ឍន៍</span>
            <h2>ផុន លីហ័រ (Phon Lyhor)</h2>
            <p className="founder-bio">
              ខ្ញុំបាទជាស្ថាបនិក និងជាអ្នកអភិវឌ្ឍន៍នៃគេហទំព័រ Khmer Learning។ គោលបំណងធំបំផុតរបស់ខ្ញុំគឺ
              ការបង្កើតឡើងនូវប្រព័ន្ធសិក្សាឌីជីថលមួយ ដែលជួយសិស្សានុសិស្សខ្មែរគ្រប់រូបឲ្យទទួលបាននូវ
              ឯកសារសិក្សាផ្លូវការ ក៏ដូចជាលំហាត់អនុវត្តផ្សេងៗ ដោយសេរី និងគ្មានដែនកំណត់។
            </p>
            <div className="founder-socials">
              <a href="https://web.facebook.com/profile.php?id=61583303827823" target="_blank" rel="noopener noreferrer" className="social-icon fb">
                <FaFacebook />
              </a>
              <a href="https://phonlyhorcoding.vercel.app/" target="_blank" rel="noopener noreferrer" className="social-icon tg">
                <FaBriefcase />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
