import React, { useState, useEffect } from 'react';
import News from '../News/News';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const ShowNews = () => {
    const api = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-29&sortBy=publishedAt&apiKey=e0da4c2ca6404062b50c1950f4513e88';
    const [articles, setArticles] = useState([]);

    // useEffect(() => {
    //     fetch(api)
    //         .then(res => res.json())
    //         .then(data => {
    //             // setArticles(data.articles)
    //             console.log(data)
    //         })
    // }, [])

    useEffect(() => {
        axios(api)
            .then(data => {
                // setArticles(data.articles)
                setArticles(data.data.articles)
            })
    }, [])
    return (
        <div>
            <Box color="success.main" textAlign="center" m={1}>
                <h1>Total Breaking News: {articles.length}</h1>
            </Box>
                {
                    articles.map(article => <News key={article.publishedAt + Math.random()} article={article} />)
                }
        
           
        </div >
    );
};

export default ShowNews;