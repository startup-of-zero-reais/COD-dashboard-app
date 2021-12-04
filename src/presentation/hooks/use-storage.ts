import { useCallback, useState } from "react";

const prefix = '@/cc/dash-'

type UseStorageReturn<T> = [ T, ( newValue: T | null ) => void ];

export function useStorage<T>( key: string, initialValue: T ): UseStorageReturn<T> {
    const stateKey = `${ prefix }${ key }`;

    const [ state, setState ] = useState<T>(() => {
        const storageString = localStorage.getItem(stateKey)

        if (!storageString) {
            return initialValue;
        }

        return JSON.parse(storageString) as T
    })

    const updateStorage = useCallback(( newValue: T | null ) => {
        if (!newValue) {
            localStorage.removeItem(stateKey)
            return;
        }

        localStorage.setItem(stateKey, JSON.stringify(newValue))

        setState(newValue)
    }, [ stateKey ])

    return [ state, updateStorage ]
}