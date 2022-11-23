import React, { useEffect, useState } from "react";

export const useShadow = () => {
    const [showShadow, setShowShadow] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const newShowShadow = window.scrollY > 40;
            showShadow !== newShowShadow && setShowShadow(newShowShadow)
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showShadow])

    return { showShadow }

}