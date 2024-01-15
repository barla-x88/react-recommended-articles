import { useState } from 'react';
import './App.css';
import Article from './Article';
import articles from './articles';
import svg from './assets/18840616_6028968.svg';

function App() {
  const [articleCollection, setArticleCollection] = useState(articles);

  const filterArticles = (uid) => {
    const newArticles = articleCollection.filter((post) => post.uid !== uid);
    setArticleCollection([...newArticles]);
  };

  return (
    <div>
      <h1>Recommended Articles</h1>
      <main className="articles">
        {articleCollection.length === 0 && (
          <p
            style={{
              color: 'white',
              fontSize: '18px',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                backgroundColor: 'white',
              }}
            >
              <img src={svg} alt="empty container" />
              <span>
                <a
                  style={{
                    color: 'grey',
                    background: 'black',
                    padding: '8px',
                  }}
                  href="https://www.freepik.com/free-vector/empty-concept-illustration_18840616.htm#query=empty&position=24&from_view=search&track=sph&uuid=57766158-61da-4ac5-b856-c530beeedd4f"
                >
                  Image by storyset on Freepik
                </a>
              </span>
            </span>
            <span style={{ textAlign: 'center', marginTop: '20px' }}>
              Nothing here. Check back soon.
            </span>
          </p>
        )}
        {articleCollection.map((article) => (
          <Article
            key={article.uid}
            {...article}
            removeArticle={filterArticles}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
