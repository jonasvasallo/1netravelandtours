import { useLocation } from 'react-router-dom';
import React, {useEffect} from 'react';

export const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;
}