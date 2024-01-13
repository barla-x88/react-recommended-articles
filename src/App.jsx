import { useState } from 'react';
import './App.css';
import Article from './Article';
import articles from './articles';

function App() {
  const [articleCollection, setArticleCollection] = useState(articles);
  return (
    <main className="articles">
      <h1>Recommended Articles</h1>
      {articleCollection.map((article, index) => (
        <Article key={index} {...article} />
      ))}
    </main>
  );
}

export default App;
