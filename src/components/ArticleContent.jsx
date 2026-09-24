import React from 'react';

export default function ArticleContent({ content }) {
  return (
    <article className="article-body">
      {content.split(/\n\n/).map((block, index) => {
        if (block.startsWith('## ')) return <h2 key={index}>{block.slice(3)}</h2>;
        return <p key={index}>{block.split('\n').join(' ')}</p>;
      })}
    </article>
  );
}
