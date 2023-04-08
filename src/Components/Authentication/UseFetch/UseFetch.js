import {useState} from 'react'
const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    fetch(url)
    .then(res=>{
        if(!res.ok){
            throw Error ("Couldn't fetch from the source")
        }
        return res.json()
    })
    .then(data=>{
        setData(data);
    })
    .catch(err=>{
        setError(err)
    })
    return {data, error};
}
 
export default useFetch;