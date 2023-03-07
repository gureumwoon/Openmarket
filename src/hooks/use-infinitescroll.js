import { useEffect, useRef, useState } from 'react';

function useInfiniteScroll(onIntersect, options) {
    const ref = useRef(null);

    const handleIntersect = ([entry], observer) => {
        if (entry.isIntersecting) {
            // observer.unobserve(entry.target);
            // setPage(() => page + 1)
            onIntersect(entry, observer);
            // observer.observe(entry.target)
        }
    };

    useEffect(() => {
        let observer;
        if (ref.current) {
            observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(ref.current);
        }
        return () => observer && observer.disconnect();
    }, [ref]);

    return ref;
}

export default useInfiniteScroll;