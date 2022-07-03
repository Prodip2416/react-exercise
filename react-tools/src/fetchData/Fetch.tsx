import React, { useEffect, useState } from 'react';

const Fetch = () => {
    const [data, setData] = useState<Object>({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://api.quotable.io/random');
            const result = await res.json();
            setData(result);
        }
    }, []);

    return (
        <div>
            {/* <h3>{data?.content}</h3> */}
        </div>
    );
};

export default Fetch;