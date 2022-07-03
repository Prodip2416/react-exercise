import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';


const getQuote = async () => {
    const res = await axios.get('http://api.quotable.io/random');
    return res.data;
}
const ReactQuery: React.FC = () => {
    const { data, isLoading } = useQuery("Quote", () => getQuote());
    return (
        <div>
            <h2>Using React Query</h2>
            <h3>Author: {data.author}</h3>
            <h5>Content: {data.content}</h5>
        </div>
    );
};

export default ReactQuery;
