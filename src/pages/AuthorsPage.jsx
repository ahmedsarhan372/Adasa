import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { posts, siteInfo } from '../data/site';
import { SectionBadge } from '../components/UI';
import { NewsletterSection } from '../components/Newsletter';
import Footer from '../components/Footer';

export default function AuthorsPage() {
  const authors = useMemo(() => {
    const unique = new Map();
    posts.forEach((post) => unique.set(post.author.name, post.author));
    return [...unique.values()];
  }, []);

  return (
    <>
      <section className="authors-section section">
        <div className="container-xl">
          <div className="center-heading authors-heading">
            <SectionBadge>فريقنا</SectionBadge>
            <h1>تعرف على كتابنا</h1>
            <p>فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p>
          </div>

          <div className="authors-grid">
            {authors.map((author) => <AuthorCard key={author.name} author={author} />)}
          </div>
        </div>
      </section>
      <NewsletterSection />
      <Footer />
    </>
  );
}

function AuthorCard({ author }) {
  return (
    <article className="author-card">
      <div className="author-avatar-wrap">
        <img src={author.avatar} alt={author.name} />
        <span className="verified"><FontAwesomeIcon icon={faCheck} /></span>
      </div>
      <h3>{author.name}</h3>
      <p>{author.role}</p>
      <div className="social-row">
        <a href={siteInfo.social.linkedin} aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href={siteInfo.social.github} aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
        <a href={siteInfo.social.twitter} aria-label="X"><FontAwesomeIcon icon={faXTwitter} /></a>
      </div>
    </article>
  );
}
