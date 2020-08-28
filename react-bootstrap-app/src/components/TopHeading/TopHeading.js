import React, { useState, useEffect} from 'react';

const TopHeading = () => {
    const [heading, setHeading] = useState([]);
    useEffect(() => {     
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e0da4c2ca6404062b50c1950f4513e88')
        .then(res => res.json())
        .then(data => {
            setHeading(data.articles)
            console.log(data)
        })
    }, [])
    return (
        <div>
            <h2>Total Heading : {heading.length}</h2>
        </div>
    );
};

export default TopHeading;