import { useEffect, useState } from "react";

export function useFetch(url:string):any{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
            const res = await fetch(url);
            if(!res.ok){
                throw new Error("");
            }
            const result = await res.json()
            setData(result);
        } catch (error) {
            setError(error as any);
        }finally{
            setLoading(false);
        }
      } 
      fetchData()
      
    }, [url])
    
    return {data, error, loading};
}