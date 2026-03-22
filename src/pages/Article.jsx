import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '../data';
import './Article.css';

function Article() {
  const { id } = useParams();
  const article = ARTICLES.find(a => a.id === parseInt(id));

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) return <div className="article-not-found" style={{padding: '5rem', textAlign: 'center'}}>Bài viết không tồn tại.</div>;

  return (
    <div className="article-page">
      <nav className="article-nav">
        <Link to="/" className="back-link">← Trở về trang chính</Link>
      </nav>
      
      <main className="article-container">
        <header className="article-header">
          <p className="article-category-text">{article.category}</p>
          <h1 className="article-title-text">{article.title}</h1>
          <p className="article-date-text">{article.date}</p>
        </header>

        {article.image && (
          <figure className="article-figure">
            <img src={article.image} alt={article.title} />
          </figure>
        )}

        <article className="article-body">
          {article.content
            .split('\n')
            .map(p => p.trim())
            .filter(Boolean)
            .map((text, index) => (
              <p key={index}>{text}</p>
            ))}
        </article>
      </main>


    </div>
  );
}

export default Article;
