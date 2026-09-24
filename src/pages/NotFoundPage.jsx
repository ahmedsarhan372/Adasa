import React from 'react';
import { NavLink } from 'react-router-dom';
import { scrollTop } from '../data/site';
import { SectionBadge } from '../components/UI';

export default function NotFoundPage() {
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
