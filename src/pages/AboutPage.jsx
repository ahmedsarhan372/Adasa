import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBookOpen, faBolt, faBullseye, faCamera, faHandshake, faNewspaper, faPenNib, faRotate, faUsers } from '@fortawesome/free-solid-svg-icons';
import { scrollTop } from '../data/site';
import { BackgroundGrid, SectionBadge, StatCard } from '../components/UI';
import { NewsletterSection } from '../components/Newsletter';
import Footer from '../components/Footer';

const values = [
  { icon: faBullseye, title: 'الجودة أولاً', desc: 'محتوى مدروس ومكتوب بخبرة' },
  { icon: faBolt, title: 'تركيز عملي', desc: 'أمثلة واقعية يمكنك تطبيقها اليوم' },
  { icon: faHandshake, title: 'المجتمع', desc: 'نتعلم مع آلاف المصورين' },
  { icon: faRotate, title: 'دائماً محدث', desc: 'أحدث الاتجاهات وأفضل الممارسات' },
];

export default function AboutPage() {
  return (
    <>
      <BackgroundGrid className="about-hero">
        <div className="container-xl about-hero-content">
          <SectionBadge>من نحن</SectionBadge>
          <h1>مهمتنا هي <span>الإعلام والإلهام</span></h1>
          <p>مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.</p>

          <div className="stats-row about-stats">
            <StatCard icon={faUsers} value="2m+" label="قارئ شهرياً" />
            <StatCard icon={faNewspaper} value="500+" label="مقالة منشورة" />
            <StatCard icon={faPenNib} value="50+" label="كاتب خبير" />
            <StatCard icon={faBookOpen} value="15+" label="تصنيف" />
          </div>
        </div>
      </BackgroundGrid>

      <section className="values-section section">
        <div className="container-xl">
          <div className="center-heading">
            <h2>قيمنا</h2>
            <p>المبادئ التي توجه كل ما نقوم بإنشائه</p>
          </div>
          <div className="values-grid">
            {values.map((item) => (
              <article className="value-card" key={item.title}>
                <div className="value-icon"><FontAwesomeIcon icon={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-strip section">
        <div className="container-xl">
          <BackgroundGrid className="mission-panel">
            <div>
              <SectionBadge icon={faCamera}>رحلة التعلم</SectionBadge>
              <h2>التصوير ليس مجرد صورة،<br /><span>إنه طريقة لرؤية العالم.</span></h2>
            </div>
            <NavLink to="/blog" onClick={scrollTop} className="primary-btn">ابدأ رحلتك <FontAwesomeIcon icon={faArrowLeft} /></NavLink>
          </BackgroundGrid>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </>
  );
}
