import React, { useEffect, useState } from 'react';

type Quote = {
    author: string,
    content: string
}

const Fetch: React.FC = () => {
    const [data, setData] = useState<Quote>();
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            fetch('http://api.quotable.io/random')
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw new Error('Something went wrong');
                })
                .then(data => setData(data))
                .catch(error => {
                    setError(error);
                })
                .finally(() => { setIsLoading(false) })

            // const res = await fetch('http://api.quotable.io/random');
            // const result = await res.json();
            // setData(result);
        }
        fetchData();
    }, []);

    if (isLoading) {
        return <h1>Loading .....</h1>
    }
    if (error) {
        return <h1>Something went wrong ....</h1>
    }

    return (
        <div>
            <h2>Using Fetch</h2>
            <h3>Author: {data?.author}</h3>
            <h5>Content: {data?.content}</h5>
        </div>
    );
};

export default Fetch;