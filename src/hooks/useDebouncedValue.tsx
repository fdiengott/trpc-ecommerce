import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay = 1000) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay, value]);

    return debouncedValue;
};

export default useDebounce;
