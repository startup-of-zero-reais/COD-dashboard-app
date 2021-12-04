import React, { createContext, ReactNode, useCallback, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useStorage } from "../hooks/use-storage";
import { usersApi } from "../../data/apis";
import { User } from "../../domain/user";

type AuthContextProps = {
    signIn: ( queryToken: string ) => Promise<void>
    signOut: () => void
    user: User.Model
}

type AuthProviderProps = { children?: ReactNode }

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ( { children }: AuthProviderProps ) => {
    const [ token, setToken ] = useStorage<User.Token>('token', '')
    const [ user, setUser ] = useStorage<User.Model>('user', {} as User.Model)

    const navigate = useNavigate()

    const redirectToLogin = useCallback(() => {
        window.location.replace(process.env.REACT_APP_LOGIN_URL || 'http://localhost:3000')
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
            await new Promise(resolve => setTimeout(resolve, 3000))
            navigate("/")
            return responseUser as any;
        } catch (e) {
            console.log(e)
            redirectToLogin()
        }
    }, [ navigate, redirectToLogin, setToken, setUser ])

    const signOut = useCallback(() => {
        setToken('')
        setUser(null)

        redirectToLogin()
    }, [ redirectToLogin, setToken, setUser ])

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (user.id && token) {
            interval = setInterval(checkAuth, 45000)
        }

        return () => {
            clearInterval(interval)
        }
    }, [ user.id, token, checkAuth ])

    return (
        <AuthContext.Provider value={ { signIn, signOut, user } }>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}