import { useState } from "react"
import { useEffect } from "react"
export const useFetch = (url) => {
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)

    useEffect(() => {
        const fetchedData = async () => {
            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error('Network Error');
                }
                const data = await response.json();
                setData(data);
            
            } catch(error) {
                setError(error)
            } finally {
                setLoading(false)
            }

        }     
        fetchedData();
    } , [url]);


return { data, loading, error };
};