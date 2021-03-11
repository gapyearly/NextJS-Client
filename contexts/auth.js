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

    useEffect(() =>{
        async function loadUserFromCookies(){
            // Gets token from browser cookie
            const token = Cookies.get('token')
            if (token){
                strapi.defaults.headers.Authorization = `Bearer ${token}`
                const { data:user } = await strapi.get('users/me')
                if(user) setUser(user);
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])
    
    const providerLogin = async (params) =>{
        const {data:user} = await strapi.get(`auth/${provider}/callback`,{
            params
        })
    }
    

}