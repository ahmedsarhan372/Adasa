import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { categories, scrollTop, siteInfo } from '../data/site';
import { MiniSubscribe } from './Newsletter';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-xl footer-grid">
        <div className="footer-col footer-brand-col">
          <div className="footer-brand-mark">
            <span>ع</span>
            <div>
              <strong>عدسة</strong>
              <small>{siteInfo.tagline}</small>
            </div>
          </div>
          <p>{siteInfo.description}</p>
          <div className="social-row footer-socials">
            <a href={siteInfo.social.youtube} aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href={siteInfo.social.linkedin} aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href={siteInfo.social.github} aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
            <a href={siteInfo.social.twitter} aria-label="X"><FontAwesomeIcon icon={faXTwitter} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>استكشف</h4>
          <NavLink to="/" onClick={scrollTop}>الرئيسية</NavLink>
          <NavLink to="/blog" onClick={scrollTop}>المدونة</NavLink>
          <NavLink to="/about" onClick={scrollTop}>من نحن</NavLink>
        </div>

        <div className="footer-col">
          <h4>التصنيفات</h4>
          {categories.slice(0, 4).map((category) => (
            <NavLink key={category.name} to={`/blog?category=${encodeURIComponent(category.name)}`} onClick={scrollTop}>
              {category.name}
            </NavLink>
          ))}
        </div>

        <div className="footer-col footer-news-col">
          <h4>ابقَ على اطلاع</h4>
          <p>اشترك للحصول على أحدث المقالات والتحديثات.</p>
          <MiniSubscribe />
        </div>
      </div>

      <div className="footer-bottom container-xl">
        <span>© 2026 عدسة. صنع بكل <FontAwesomeIcon icon={faHeart} /> الحقوق محفوظة.</span>
        <div>
          <a href="#privacy">سياسة الخصوصية</a>
          <a href="#terms">شروط الخدمة</a>
        </div>
      </div>
    </footer>
  );
}
