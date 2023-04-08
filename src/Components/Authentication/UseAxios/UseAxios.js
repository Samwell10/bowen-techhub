import axios from 'axios'
import { useState } from 'react'
const useAxios = (api, data) => {
    const [error, setError] = useState("")
    axios.post(api, {data})
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{
        setError(error)
    })
    return {error};
}
 
export default useAxios;