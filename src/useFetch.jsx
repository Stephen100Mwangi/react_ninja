import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url) => {
    const [data,setBlog]  = useState(null);
    const [is_pending,setPending] = useState(true);
    const [_error,setError] = useState(null);

    try {
        useEffect(()=>{

            // To prevent automatic calling
            const abortCont = new AbortController();

            setTimeout(() => {
                fetch(url,{signal: abortCont.signal})
                // response object
                .then(response => {
                    if (!response.ok) {
                        throw Error("Could not fetch data from this resource");
                    }
                    return response.json();
                })
                .then(data => {
                    // console.log(data);
    
                    // update data
                    setBlog(data);
    
                    setPending(false);
                })
            }, 5000);
          
        },[])
    } catch (error) {
        console.log(error.message);
        setError(error.message);
        setPending(false);
        
    }

  return (
    {data,is_pending,_error}
  )
}

export default useFetch
