import { useState } from 'react';

const useFetch = (url, applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            const data = await response.json();

            applyData(data);

        } catch (fetchError) {
            setError(fetchError.message);
        }

        setIsLoading(false);
    };

    return { isLoading, error, fetchData };
};

export default useFetch;