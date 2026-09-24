import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { posts } from '../data/site';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="newsletter-section section">
      <div className="container-lg">
        <div className="newsletter-card">
          <div className="newsletter-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
          <h2>اشترك في <span>نشرتنا الإخبارية</span></h2>
          <p>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>

          <form onSubmit={submit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(event) => { setEmail(event.target.value); setSubmitted(false); }}
              placeholder="أدخل بريدك الإلكتروني"
              aria-label="البريد الإلكتروني"
              required
            />
            <button type="submit">{submitted ? 'تم الاشتراك ✓' : 'اشترك الآن'}</button>
          </form>

          <div className="newsletter-proof">
            <div className="proof-avatars">
              {posts.slice(0, 3).map((post) => <img key={post.id} src={post.author.avatar} alt="" />)}
            </div>
            <span>انضم لـ <strong>10,000+</strong> مصور</span>
            <span>•</span>
            <span>بدون إزعاج</span>
            <span>•</span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MiniSubscribe() {
  const [value, setValue] = useState('');
  return (
    <form className="mini-subscribe" onSubmit={(event) => { event.preventDefault(); setValue(''); }}>
      <input value={value} onChange={(event) => setValue(event.target.value)} placeholder="أدخل بريدك الإلكتروني" type="email" required />
      <button type="submit">اشترك</button>
    </form>
  );
}
