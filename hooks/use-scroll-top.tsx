import { useState,useEffect } from "react";

export const useScrollTop =(threshold=10)=>{
    const [scrollTop, setScrollTop] = useState(false);
    useEffect(()=>{
        const handleScroll = ()=>{
            setScrollTop(window.scrollY > threshold);
        }
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, [threshold]);
    return scrollTop;
    
}