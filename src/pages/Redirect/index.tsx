import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Redirect: FC = () => {
    const location = useLocation();

    useEffect(() => {
        const url = location.state !== null ? location.state.url : '';
        const urlId = location.pathname.replace('/url/', '');        
        const urlFromStorage = localStorage.getItem(urlId);

        setTimeout(() => {
            window.location.href = urlFromStorage || url;
        }, 3000)
    }, [])

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    )
}

export default Redirect;