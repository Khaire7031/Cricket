
import React, { createContext, useEffect, useState } from 'react'

const PhoneContext = createContext()

export const PhoneProvider = ({ children }) => {
    const [isPhone, setIsPhone] = useState(false);

    const handlePhone = () => {
        setIsPhone(window.innerWidth <= 500);
    };

    useEffect(() => {
        window.addEventListener('resize', handlePhone);
        handlePhone();

        return () => window.removeEventListener('resize', handlePhone);
    }, []);

    return (
        <PhoneContext.Provider value={{ isPhone }}>
            {children}
        </PhoneContext.Provider>
    )
}

export default PhoneContext;