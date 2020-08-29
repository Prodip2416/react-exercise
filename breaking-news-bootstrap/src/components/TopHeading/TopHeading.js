import React, { useState, useEffect} from 'react';
import News from '../news/News';

const TopHeading = () => {

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
            <h2 className="text-info">Total Heading : {articles.length}</h2>
            {
                articles.map(article => <News key={article.publishedAt + Math.random()} article={article} /> )
            }
        </div>
    );
};

export default TopHeading;