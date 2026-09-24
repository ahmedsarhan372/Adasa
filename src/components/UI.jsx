import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SectionBadge({ children, icon = null }) {
  return (
    <div className="section-badge">
      {icon && <FontAwesomeIcon icon={icon} />}
      <span>{children}</span>
      <i />
      <i />
    </div>
  );
}

export function BackgroundGrid({ children, className = '' }) {
  return <div className={`grid-bg ${className}`}>{children}</div>;
}

export function StatCard({ icon, value, label }) {
  return (
    <div className="stat-card">
      <FontAwesomeIcon icon={icon} className="stat-icon" />
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
