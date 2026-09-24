import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarDays, faClock, faTag } from '@fortawesome/free-solid-svg-icons';
import { formatDate, posts, scrollTop } from '../data/site';
import { SectionBadge } from '../components/UI';
import { AuthorMini, default as PostCard } from '../components/PostCard';
import ArticleContent from '../components/ArticleContent';
import { NewsletterSection } from '../components/Newsletter';
import Footer from '../components/Footer';

export default function ArticlePage() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);
  if (!post) return <NotFoundPage />;

  const related = posts.filter((item) => item.id !== post.id && item.category === post.category).slice(0, 3);

  return (
    <>
      <section className="article-hero section">
        <div className="container-lg article-shell">
          <NavLink to="/blog" onClick={scrollTop} className="back-link">
            <FontAwesomeIcon icon={faArrowRight} /> العودة للمقالات
          </NavLink>

          <div className="article-category-row">
            <span className="category-chip">{post.category}</span>
            <span><FontAwesomeIcon icon={faClock} /> {post.readTime}</span>
            <span><FontAwesomeIcon icon={faCalendarDays} /> {formatDate(post.date)}</span>
          </div>

          <h1>{post.title}</h1>
          <p className="article-excerpt">{post.excerpt}</p>
          <div className="article-author-line"><AuthorMini post={post} /></div>
          <div className="article-cover"><img src={post.image} alt={post.title} /></div>
          <ArticleContent content={post.content} />

          <div className="article-tags">
            {post.tags.map((tag) => <span key={tag}><FontAwesomeIcon icon={faTag} /> {tag}</span>)}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section related-section">
          <div className="container-xl">
            <div className="section-heading">
              <SectionBadge>قد يعجبك</SectionBadge>
              <h2>مقالات <span>ذات صلة</span></h2>
            </div>
            <div className="cards-grid three-col">
              {related.map((item) => <PostCard key={item.id} post={item} />)}
            </div>
          </div>
        </section>
      )}

      <NewsletterSection />
      <Footer />
    </>
  );
}

function NotFoundPage() {
  return (
    <section className="not-found section">
      <div className="container-lg center-heading">
        <SectionBadge>404</SectionBadge>
        <h1>الصفحة غير موجودة</h1>
        <p>يبدو أن الرابط أخذ استراحة تصوير.</p>
        <NavLink to="/" onClick={scrollTop} className="primary-btn">العودة للرئيسية</NavLink>
      </div>
    </section>
  );
}
