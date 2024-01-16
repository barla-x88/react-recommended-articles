const Article = ({ title, img, link, text, uid, removeArticle }) => {
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
      <div className="article-text">{text.substring(0, 250)}</div>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setTimeout(() => {
            removeArticle(uid);
          }, 600);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Article;
