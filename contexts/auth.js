/* 
Used to setup the context system for user authentication and user info.
*/

import { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'

import strapi from '../api/strapi'

const AuthContext = createContext({})

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    async function revalidateUserFromStorage(){
        // Gets token from browser cookie
        const token = Cookies.get('token')
        if (token){
            strapi.defaults.headers.Authorization = `Bearer ${token}`
            const { data:user } = await strapi.get('users/me')
            if(user) setUser(user);
        }
        setLoading(false)
    }

    // First Load
    useEffect(() =>{
        revalidateUserFromStorage()
    }, [])
    
    const providerLogin = async (params) =>{
        const {data:user} = await strapi.get(`auth/${provider}/callback`,{
            params
        })
    }
    
    return <AuthContext.Provider value={{isAuthenticated: !!user, user, login, loading, logout}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)