import { useEffect, useState } from "react"

const usePhone = () => {
    const [isPhone, setIsPhone] = useState(false);

    const handlePhone = () => {
        setIsPhone(window.innerWidth <= 400);
    };

    useEffect(() => {
        window.addEventListener('resize', handlePhone);
        handlePhone();

        return () => window.removeEventListener('resize', handlePhone);
    }, []);

    return isPhone;
}

export default usePhone;