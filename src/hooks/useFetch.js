import { useEffect, useState } from "react";
import { axiosInstance } from "../utils";

export function usFetch(url){
    const [data, setData]= useState(null)
    const [isPending, setIspending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fechData = async ()=>{
            setIspending(true)
            try{
                const req = await axiosInstance(url)
                console.log(req)
                setData(req)
            } catch (error){
                console.log(error)
                setError(error)
            } finally{
                setIspending(false)
            }
        }
        fechData()
    }, [url])
    return { data, isPending, error}
}