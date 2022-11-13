import { useState, useEffect } from 'react'

const useScrolling = () => {
    const [isScroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY >= 50)
        })
        return () => {
            window.removeEventListener('scroll', () => setScroll(false))
        }
    }, [])

    return { isScroll }
}

export default useScrolling
