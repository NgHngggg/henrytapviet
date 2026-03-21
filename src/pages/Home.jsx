import React from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../data';

function Home() {
  return (
    <>
      <header className="site-header">
        <h1>Henry Tập Viết</h1>
        <p className="site-subtitle">Nơi lưu giữ khoảng lặng bình yên</p>
      </header>

      <main>
        {ARTICLES.map((article) => (
          <Link to={`/article/${article.id}`} key={article.id} style={{ display: 'block', textDecoration: 'none' }}>
            <section 
              className="article-section"
              style={{ backgroundImage: `url(${article.image})` }}
            >
              <div className="article-overlay"></div>
              <div className="article-content">
                <span className="article-category">{article.category}</span>
                <h2 className="article-title">{article.title}</h2>
                <div className="article-meta">
                  <span>{article.date}</span>
                </div>
              </div>
            </section>
          </Link>
        ))}
      </main>


    </>
  );
}

export default Home;
