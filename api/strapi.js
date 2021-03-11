'use strict'
import Axios from 'axios'

const api = Axios.create({
    baseURL: process.env.BACKEND_API,
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default api