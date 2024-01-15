import { useState } from 'react';

const Article = ({ title, img, link, text, uid, removeArticle }) => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div
      className="article"
      onClick={(e) => {
        if (e.target.classList.contains('btn')) {
          e.currentTarget.classList.add('hide');
        }
      }}
    >
      <div className="article-title">{title}</div>
      <div className="article-img">
        <a href={link}>
          <img src={img} alt="post img" />
        </a>
      </div>
      <div className="article-text">
        {showFullText ? text : text.substring(0, 250) + ' '}
        <span
          className="expand"
          onClick={() => {
            setShowFullText(!showFullText);
          }}
        >
          {' '}
          show {showFullText ? 'Less' : 'More'}..
        </span>
      </div>
      <button
        type="button"
        className="btn"
        onClick={() => {
          if (showFullText) setShowFullText(false);
          setTimeout(() => {
            removeArticle(uid);
          }, 600);
        }}
      >
        Not Interested
      </button>
    </div>
  );
};

export default Article;
