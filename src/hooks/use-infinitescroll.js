import { useCallback, useEffect, useRef, useState } from 'react';

function useInfiniteScroll(onIntersect, options) {
    const ref = useRef(null);
    const [page, setPage] = useState(1)

    const handleIntersect = useCallback(([entry], observer) => {
        if (entry.isIntersecting) {
            // observer.unobserve(entry.target);
            onIntersect(entry, observer);
            setPage((prev) => prev + 1)
            console.log(page)
            // observer.observe(entry.target)
        }
    }, []);

    useEffect(() => {
        let observer;
        if (ref.current) {
            observer = new IntersectionObserver(handleIntersect, { threshold: 0.6, });
            observer.observe(ref.current);
        }
        return () => observer && observer.disconnect();
    }, [ref, handleIntersect, options]);

    return ref;
}

export default useInfiniteScroll;