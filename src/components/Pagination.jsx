import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Pagination({ page, pageCount, onPage }) {
  const items = Array.from({ length: pageCount }, (_, index) => index + 1);
  return (
    <div className="pagination-wrap" aria-label="صفحات المقالات">
      <button disabled={page === 1} onClick={() => onPage(page - 1)} aria-label="الصفحة السابقة">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      {items.map((item) => (
        <button key={item} className={item === page ? 'active' : ''} onClick={() => onPage(item)}>{item}</button>
      ))}
      <button disabled={page === pageCount} onClick={() => onPage(page + 1)} aria-label="الصفحة التالية">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </div>
  );
}
