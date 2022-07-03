import axios from 'axios';
import React from 'react';
import useSWR from 'swr';

type Quote = {
    author: string,
    content: string
}

const fatcher = async (url: string) => {
    const res = await axios.get(url);
    return res.data;
}

const SWR: React.FC = () => {
    const { data, error } = useSWR<Quote>('http://api.quotable.io/random', fatcher, {
        suspense: true
    })

    if (error) {
        return <h1>There was an error.</h1>
    }
    return (
        <div>
            <h2>Using SWR</h2>
            <h3>Author: {data?.author}</h3>
            <h5>Content: {data?.content}</h5>
        </div>
    );
};

export default SWR;