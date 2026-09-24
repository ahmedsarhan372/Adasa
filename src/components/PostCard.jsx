import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import { formatDate, scrollTop } from '../data/site';

export function AuthorMini({ post }) {
  return (
    <div className="author-mini">
      <img src={post.author.avatar} alt={post.author.name} />
      <div>
        <strong>{post.author.name}</strong>
        <span>{post.author.role}</span>
      </div>
    </div>
  );
}

export function FeaturedPostCard({ post }) {
  return (
    <article className="featured-post-card">
      <div className="featured-media-wrap">
        <img src={post.image} alt={post.title} className="featured-media" />
        <span className="featured-label"><FontAwesomeIcon icon={faStar} /> مميز</span>
      </div>

      <div className="featured-content">
        <div className="post-meta">
          <span className="category-chip">{post.category}</span>
          <span><FontAwesomeIcon icon={faClock} /> {post.readTime}</span>
        </div>

        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>

        <div className="featured-bottom">
          <AuthorMini post={post} />
          <NavLink to={`/blog/${post.slug}`} onClick={scrollTop} className="read-link">
            اقرأ المقال <span aria-hidden="true">←</span>
          </NavLink>
        </div>
      </div>
    </article>
  );
}

export default function PostCard({ post, compact = false }) {
  return (
    <article className={`post-card ${compact ? 'compact' : ''}`}>
      <div className="post-image-wrap">
        <img src={post.image} alt={post.title} />
        <span className="category-badge">{post.category}</span>
      </div>

      <div className="post-card-body">
        <div className="post-meta">
          <span><FontAwesomeIcon icon={faClock} /> {post.readTime}</span>
          <span>•</span>
          <span>{formatDate(post.date)}</span>
        </div>

        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>

        <div className="post-card-footer">
          <AuthorMini post={post} />
          <NavLink to={`/blog/${post.slug}`} onClick={scrollTop} className="circle-arrow" aria-label="قراءة المقال">
            <FontAwesomeIcon icon={faChevronLeft} />
          </NavLink>
        </div>
      </div>
    </article>
  );
}
