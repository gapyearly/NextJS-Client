/* 
Used to setup the context system for user authentication and user info.
*/

import { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import strapi from '../api/strapi'

Cookies.defaults = {
    secure:true,
    sameSite:"Strict"
}
const AuthContext = createContext({})

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    async function revalidateUserFromStorage(){
        // Gets token from browser cookie
        const token = Cookies.get('token')
        // TODO: Setup Error handling and handle cookie
        if (token){
            strapi.defaults.headers.Authorization = `Bearer ${token}`
            try{
                const {data} = await strapi.get('users/me')
                if(data.user) setUser(user);
            }
            catch(e){

            }
            
            
        }
        setLoading(false)
    }

    // First Load
    useEffect(() =>{
        revalidateUserFromStorage()
    }, [])
    
    /**
     * Takes in an object of parameters with token values along with the correct provider.
     * Logs in the user.
     * @param  {Object} params
     * @param  {String} provider
     */
    const providerLogin = async (params,provider) =>{
        return new Promise((resolve,reject) =>{
            const {data} = strapi.get(`auth/${provider}/callback`,{
                params
            })
            .then(()=>{
                setUser(data.user)
                Cookies.set('token',data.jwt)
                resolve()
            })
            .catch((err) =>{
                reject(err)
            })
        })
            
    }
    
    return <AuthContext.Provider value={{isAuthenticated: !!user, user, providerLogin, loading}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)