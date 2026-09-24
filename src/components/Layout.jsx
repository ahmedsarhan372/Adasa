import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { scrollTop, siteInfo } from '../data/site';

export function Logo() {
  return (
    <div className="brand" aria-label="عدسة">
      <div className="brand-mark" aria-hidden="true">
        <span className="brand-lens-ring" />
        <span className="brand-lens-core" />
      </div>
      <div className="brand-copy">
        <strong>{siteInfo.name}</strong>
        <small>{siteInfo.tagline}</small>
      </div>
    </div>
  );
}

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isBlog = location.pathname.startsWith('/blog');
  const isAbout = location.pathname.startsWith('/about');

  return (
    <header className="site-header">
      <div className="header-inner container-xl">
        <NavLink to="/" className="brand-link" onClick={scrollTop}>
          <Logo />
        </NavLink>

        <nav className="nav-pill" aria-label="التنقل الرئيسي">
          <NavLink className={isHome ? 'active' : ''} to="/" onClick={scrollTop}>الرئيسية</NavLink>
          <NavLink className={isBlog ? 'active' : ''} to="/blog" onClick={scrollTop}>المدونة</NavLink>
          <NavLink className={isAbout ? 'active' : ''} to="/about" onClick={scrollTop}>من نحن</NavLink>
        </nav>

        <div className="header-actions">
          <button className="header-icon-btn" aria-label="البحث" onClick={() => navigate('/blog')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button className="start-reading-btn" onClick={() => { navigate('/blog'); setTimeout(scrollTop, 0); }}>
            ابدأ القراءة
          </button>
        </div>
      </div>
    </header>
  );
}

export function PageShell({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <main>{children}</main>
    </div>
  );
}
