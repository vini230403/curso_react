import { useState, useEffect } from "react";

// 4 - custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // 5 - refatorando post

    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // 6 - Loading
    const [loading, setLoading] = useState(false)

    // 7 - tratando erros
    const[error, setError] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "aplication/json",
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }
    }

    useEffect(()=> {
        const fetchData = async () => {
            // 6
            setLoading(true)

            try{
                
                const res = await fetch(url)

                const json = await res.json()
                setData(json)

            } catch(error){
                setError("Houve um erro ao carregar os dados!")
            }
            

            

            setLoading(false)
        }

        fetchData()
    }, [url, callFetch])

    // 5 

    useEffect(()=> {
        const httpRequest = async () => {

            if(method === "POST"){

                let fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions)
    
                const json = await res.json()
    
                setCallFetch(json)
    
            }

        }

        httpRequest()
    }, [config,method, url])

    return {data, httpConfig, loading, error}
}