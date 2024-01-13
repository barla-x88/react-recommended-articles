const Article = ({ title, img, link, text }) => {
  return (
    <div className="article">
      <div className="article-title">{title}</div>
      <div className="article-img">
        <a href={link}>
          <img src={img} alt="post img" />
        </a>
      </div>

      <div className="article-text">{text}</div>
    </div>
  );
};

export default Article;
