import {useRouter} from 'next/router'
import {useAuth} from '@contexts/auth'
import {useEffect} from 'react'

const provider = "google"
export default function Redirect() {
    const router = useRouter()
    const { providerLogin, user } = useAuth()
    console.log(user)
    // When the router is ready, it'll attempt to login with parameters
    useEffect(()=>{
        if(router.isReady){
            providerLogin(router.query, provider)
                .then(()=>{
                    // TODO: Redirect them somewhere lmao
                    // Make sure to check if full account setup has been completed
                    console.log("Success")
                })
                .catch((err)=>{
                    // TODO Eventually push to an error page
                    router.push('/')
                    console.log(err)
                })
        }
    },[router])
    return(
        <p>
            Hey { (user  ? user.email : "")}
        </p>
    )
}
