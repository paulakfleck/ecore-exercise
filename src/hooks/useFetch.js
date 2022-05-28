import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                setIsLoading(true);

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Something went wrong');
                }

                const data = await response.json();

                setData(data);
                setIsLoading(false);

            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, isLoading };
};

export default useFetch;