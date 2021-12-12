import { useCallback, useState } from "react";

type UsePassword = [ boolean, () => void, 'text' | 'password' ]

export function usePassword(): UsePassword {
    const [ isVisible, setIsVisible ] = useState(false)

    const toggle = useCallback(() => {
        setIsVisible(prevState => !prevState)
    }, [])

    return [ isVisible, toggle, isVisible ? 'text' : 'password' ]
}