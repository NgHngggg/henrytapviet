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
          <p>{article.content}</p>
          <p>
            Và cứ thế, dòng chảy của thời gian dường như ngưng lại. Trong khoảng không gian tĩnh mịch ấy, chỉ còn lại ta với những suy tư không tên, tựa như những áng văn chưa bao giờ được viết xuống vỏn vẹn trên một trang giấy mục. Những con chữ cứ thế lửng lơ trong tâm trí, tìm đường len lỏi qua từng nếp nhăn của não bộ, để rồi đọng lại thành một cảm giác nghẹn ngào khó tả.
          </p>
          <p>
            Người ta thường sợ hãi sự cô đơn, nhưng với tôi, cô đơn đôi khi lại là một đặc ân. Nó cho phép ta đối thoại với chính mình mà không sợ bị phán xét. Bầu trời đêm tĩnh lặng, những ngọn cỏ đẫm sương mai, hay chỉ là một tia nắng lọt qua khe cửa sổ tồi tàn... tất cả đều có thể trở thành tri kỷ, nếu ta đủ tĩnh lặng để lắng nghe.
          </p>
          <p>
            Đó là những khoảnh khắc làm nên sự vĩnh cửu trong một cuộc sống quá đỗi mong manh.
          </p>
        </article>
      </main>


    </div>
  );
}

export default Article;
