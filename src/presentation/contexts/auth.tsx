import React, { createContext, ReactNode, useCallback, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useStorage } from "../hooks/use-storage";
import { usersApi } from "../../data/apis";
import { User } from "../../domain/user";

type AuthContextProps = {
    signIn: ( queryToken: string ) => Promise<void>
    signOut: () => void
}

type AuthProviderProps = { children?: ReactNode }

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ( { children }: AuthProviderProps ) => {
    const [ token, setToken ] = useStorage<User.Token>('token')
    const [ user, setUser ] = useStorage<User.Model>('user')

    const navigate = useNavigate()

    const redirectToLogin = useCallback(() => {
        window.location.href = process.env.REACT_APP_LOGIN_URL || 'http://localhost:3000'
    }, [])

    const checkAuth = useCallback(async () => {
        try {
            console.log('checking auth...')
            await usersApi.get<User.Model>("/auth/me", {
                headers: { Authorization: `Bearer ${ token }` }
            })
            console.log('auth!')
        } catch (e) {
            redirectToLogin()
        }
    }, [ redirectToLogin, token ])

    const signIn = useCallback(async ( queryToken: string ) => {
        try {
            const { data: responseUser } = await usersApi.get<User.Model>("/auth/me", {
                headers: {
                    'Authorization': `Bearer ${ queryToken }`,
                }
            })

            setToken(queryToken)
            setUser(responseUser)
            navigate("/", { replace: true })
        } catch (e) {
            redirectToLogin()
        }
    }, [ navigate, redirectToLogin, setToken, setUser ])

    const signOut = useCallback(() => {
    }, [])

    useEffect(() => {
        if (!user || !user.id) {
            setUser(null)
            setToken(null)
            redirectToLogin()
            return;
        }
    }, [ redirectToLogin, setToken, setUser, user ])

    useEffect(() => {
        let interval = setInterval(checkAuth, 10000)

        return () => {
            clearInterval(interval)
        }
    }, [ checkAuth ])

    return (
        <AuthContext.Provider value={ { signIn, signOut } }>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}