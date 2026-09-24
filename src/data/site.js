import data from './posts.json';

export const posts = data.posts;
export const categories = data.categories;
export const siteInfo = data.siteInfo;

export function formatDate(value) {
  return new Intl.DateTimeFormat('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(new Date(value));
}

export function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
