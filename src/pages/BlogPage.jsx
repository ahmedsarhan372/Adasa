import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faNewspaper, faSearch, faTableCells } from '@fortawesome/free-solid-svg-icons';
import { categories, posts, scrollTop } from '../data/site';
import { BackgroundGrid, SectionBadge } from '../components/UI';
import PostCard from '../components/PostCard';
import { NewsletterSection } from '../components/Newsletter';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

export default function BlogPage() {
  const [params, setParams] = useSearchParams();
  const requestedCategory = params.get('category') || 'الكل';
  const requestedPage = Number(params.get('page') || 1);
  const requestedSearch = params.get('search') || '';
  const [search, setSearch] = useState(requestedSearch);
  const [view, setView] = useState('grid');

  const filtered = useMemo(() => {
    let list = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
    if (requestedCategory !== 'الكل') list = list.filter((post) => post.category === requestedCategory);
    const term = requestedSearch.trim().toLowerCase();
    if (term) {
      list = list.filter((post) => `${post.title} ${post.excerpt} ${post.category} ${post.tags.join(' ')}`.toLowerCase().includes(term));
    }
    return list;
  }, [requestedCategory, requestedSearch]);

  const perPage = 6;
  const pageCount = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = Math.min(Math.max(Number.isFinite(requestedPage) ? requestedPage : 1, 1), pageCount);
  const pageItems = filtered.slice((safePage - 1) * perPage, safePage * perPage);

  const setFilters = ({ category = requestedCategory, page = 1, searchValue = requestedSearch }) => {
    const next = new URLSearchParams();
    if (category !== 'الكل') next.set('category', category);
    if (searchValue.trim()) next.set('search', searchValue.trim());
    if (page > 1) next.set('page', String(page));
    setParams(next);
    scrollTop();
  };

  const submitSearch = (event) => {
    event.preventDefault();
    setFilters({ searchValue: search, page: 1 });
  };

  return (
    <>
      <BackgroundGrid className="blog-heading-wrap">
        <div className="container-xl blog-heading">
          <SectionBadge icon={faNewspaper}>مدونتنا</SectionBadge>
          <h1>استكشف <span>مقالاتنا</span></h1>
          <p>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
        </div>
      </BackgroundGrid>

      <section className="blog-toolbar-section">
        <div className="container-xl">
          <div className="blog-toolbar">
            <form className="search-box" onSubmit={submitSearch}>
              <button type="submit" aria-label="بحث"><FontAwesomeIcon icon={faSearch} /></button>
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="ابحث في المقالات..." />
            </form>

            <div className="category-filters">
              {['الكل', ...categories.map((category) => category.name)].map((category) => (
                <button
                  key={category}
                  className={requestedCategory === category ? 'active' : ''}
                  onClick={() => setFilters({ category, page: 1 })}
                >
                  {category === 'الكل' ? 'جميع المقالات' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="blog-results section">
        <div className="container-xl">
          <div className="results-head">
            <div className="view-toggle">
              <button className={view === 'list' ? 'active' : ''} onClick={() => setView('list')} aria-label="قائمة"><FontAwesomeIcon icon={faBars} /></button>
              <button className={view === 'grid' ? 'active' : ''} onClick={() => setView('grid')} aria-label="شبكة"><FontAwesomeIcon icon={faTableCells} /></button>
            </div>
            <div className="results-count">عرض <strong>{filtered.length}</strong> مقالات</div>
          </div>

          {pageItems.length ? (
            <div className={view === 'grid' ? 'cards-grid three-col blog-grid' : 'list-view blog-list'}>
              {pageItems.map((post) => <PostCard key={post.id} post={post} />)}
            </div>
          ) : (
            <div className="empty-state">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <h3>لا توجد نتائج</h3>
              <p>جرّب كلمة بحث أو تصنيفاً مختلفاً.</p>
              <button className="primary-btn" onClick={() => { setSearch(''); setFilters({ category: 'الكل', page: 1, searchValue: '' }); }}>إعادة الضبط</button>
            </div>
          )}

          {pageCount > 1 && <Pagination page={safePage} pageCount={pageCount} onPage={(page) => setFilters({ page })} />}
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </>
  );
}
