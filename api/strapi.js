'use strict'
import Axios from 'axios'
// Have to use NEXT_PUBLIC because the browser can't get enviroment variables
const api = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default api