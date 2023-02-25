import React, { useEffect, useState } from 'react'

export const useWindowDemension = () => {
    const [windowDemension, setWindowDemension] = useState<number>(0);

    useEffect(() => {
        setWindowDemension(window.innerWidth);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowDemension(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return windowDemension;
};