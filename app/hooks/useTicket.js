import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useTicket = () => {

    const  [loadingTicket , setLoadingTicket] = useState(false)

    const sendTicket = async({email , content}) =>{
        const success = handleInputsError({email , content})
        if(!success) return ; 
        setLoadingTicket(true)
        try {
            const res = await fetch("/api/ticket" , {
                method : "POST" , 
                headers : {"Content-type" : "application/json"} , 
                body : JSON.stringify({email, content}) 
             })
             const data = await res.json() ; 
             if(!res.ok){
                throw new Error(data.message) ; 
             }
             toast.success("Thank you, we will respond you later") ; 
        } catch (error) {
            toast.error(error.message)
            console.log("Error while sending request" , error.message)
        }finally{
            setLoadingTicket(false) ; 
        }
    }
 

    return {sendTicket , loadingTicket}
}

export default useTicket

const handleInputsError = ({email, content}) =>{
    if(!email){
        toast.error("Try later, need your email") ; 
        return false ; 
    }
    if(!content){
        toast.error("Enter your request") ; 
        return false ; 
    }
    return true  ; 
}