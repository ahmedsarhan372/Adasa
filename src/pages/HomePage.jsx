import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faCameraRetro,
  faCircleInfo,
  faClock,
  faImage,
  faLayerGroup,
  faMobileScreenButton,
  faNewspaper,
  faPenNib,
  faSliders,
  faStar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { categories, posts, scrollTop } from '../data/site';
import { BackgroundGrid, SectionBadge, StatCard } from '../components/UI';
import PostCard, { FeaturedPostCard } from '../components/PostCard';
import { NewsletterSection } from '../components/Newsletter';
import Footer from '../components/Footer';

const categoryIcons = [faSliders, faImage, faCameraRetro, faMobileScreenButton];

export default function HomePage() {
  const featured = posts.filter((post) => post.featured).slice(0, 3);
  const featuredCategories = categories.slice(0, 4);
  const latest = [...posts]
    .filter((post) => !post.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <>
      <BackgroundGrid className="home-hero">
        <div className="ambient ambient-left" />
        <div className="ambient ambient-right" />
        <div className="home-hero-content container-xl">
          <SectionBadge>مرحباً بك في عدسة</SectionBadge>
          <h1>اكتشف <span>فن</span><br />التصوير الفوتوغرافي</h1>
          <p>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>

          <div className="hero-actions">
            <NavLink className="primary-btn" to="/blog" onClick={scrollTop}>
              استكشف المقالات <FontAwesomeIcon icon={faArrowLeft} />
            </NavLink>
            <a className="ghost-btn" href="#about-home">
              اعرف المزيد <FontAwesomeIcon icon={faCircleInfo} />
            </a>
          </div>

          <div className="stats-row">
            <StatCard icon={faNewspaper} value="50+" label="مقالة" />
            <StatCard icon={faUsers} value="10k+" label="قارئ" />
            <StatCard icon={faLayerGroup} value="4" label="تصنيفات" />
            <StatCard icon={faPenNib} value="6" label="كتاب" />
          </div>
        </div>
      </BackgroundGrid>

      <section className="section featured-section">
        <div className="container-xl">
          <div className="section-heading split-heading">
            <div>
              <SectionBadge icon={faStar}>مميز</SectionBadge>
              <h2>مقالات <span>مختارة</span></h2>
              <p>محتوى منتقى لبدء رحلة تعلمك.</p>
            </div>
            <NavLink to="/blog" onClick={scrollTop} className="inline-link">عرض الكل <FontAwesomeIcon icon={faArrowLeft} /></NavLink>
          </div>

          <div className="featured-stack">
            {featured.map((post) => <FeaturedPostCard key={post.id} post={post} />)}
          </div>
        </div>
      </section>

      <section className="section topic-section">
        <div className="container-xl">
          <div className="center-heading topic-heading">
            <SectionBadge>التصنيفات</SectionBadge>
            <h2>استكشف حسب <span>الموضوع</span></h2>
            <p>اعثر على محتوى مصمم حسب اهتماماتك</p>
          </div>

          <div className="topic-grid">
            {featuredCategories.map((category, index) => (
              <NavLink
                key={category.name}
                to={`/blog?category=${encodeURIComponent(category.name)}`}
                onClick={scrollTop}
                className="topic-card"
              >
                <div className="topic-icon">
                  <FontAwesomeIcon icon={categoryIcons[index]} />
                </div>
                <h3>{category.name}</h3>
                <span>{category.count} مقالات</span>
                <FontAwesomeIcon className="topic-arrow" icon={faArrowLeft} />
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section latest-section" id="about-home">
        <div className="container-xl">
          <div className="section-heading split-heading">
            <div>
              <SectionBadge icon={faClock}>الأحدث</SectionBadge>
              <h2>أحدث <span>المقالات</span></h2>
              <p>محتوى جديد طازج من المطبعة</p>
            </div>
            <NavLink to="/blog" onClick={scrollTop} className="inline-link">عرض جميع المقالات <FontAwesomeIcon icon={faArrowLeft} /></NavLink>
          </div>

          <div className="cards-grid three-col">
            {latest.map((post) => <PostCard key={post.id} post={post} compact />)}
          </div>
        </div>
      </section>
      <NewsletterSection />
      <Footer />
    </>
  );
}
