import axios from 'axios'
// 'https://zachpage.onrender.com/'


const instance = axios.create({
    baseURL: 'https://zachpage.onrender.com/'
    ,
    withCredentials: true
})
export default instance