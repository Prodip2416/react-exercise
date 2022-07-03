import axios from 'axios';
import React, { useEffect, useState } from 'react';

type Quote = {
    author: string,
    content: string
}

const Axios:React.FC = () => {
    const [data, setData] = useState<Quote>();

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://api.quotable.io/random');
            setData(res.data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>Using Axios</h2>
            <h3>Author: {data?.author}</h3>
            <h5>Content: {data?.content}</h5>
        </div>
    );
};

export default Axios;