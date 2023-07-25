import { useEffect, useState, useRef } from 'react';

const PageUp = () => {
    const [clazz, setClazz] = useState<string>('');

    const bodyRef = useRef(document.body);

    useEffect(() => {
        window.addEventListener('scroll', scrollPage);
        return () => window.removeEventListener('scroll', scrollPage);
    }, []);

    const scrollPage = () => {
        const newClazz = document.documentElement.scrollTop >= 1500 ? 'page-up_active' : '';
        setClazz(newClazz);
    };

    const scrollToTop = () => {
        bodyRef.current.style.overflow = 'hidden';

        const interval = setInterval(() => {
            if (document.documentElement.scrollTop <= 0) {
                bodyRef.current.style.overflow = '';
                clearInterval(interval);
            }

            document.documentElement.scrollTop -= 45;
        }, 1);
    };

    return (
        <button className={`page-up ${clazz}`} onClick={scrollToTop}>
            &uarr;
        </button>
    );
};

export default PageUp;
