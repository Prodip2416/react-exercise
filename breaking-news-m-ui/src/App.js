import React, { useState, useEffect} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const api = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-29&sortBy=publishedAt&apiKey=e0da4c2ca6404062b50c1950f4513e88';
    fetch(api)
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles)
      })
  }, [])

  return (
    <div>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      
      {
        articles.map(article => <News key={article.publishedAt + Math.random()} article={article} />)
      }
      
    </div>
  );
}

export default App;
