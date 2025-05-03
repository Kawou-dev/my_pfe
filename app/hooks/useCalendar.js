
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useCalendar = () => {

    const [upcomingEvent, setUpcomingEvent] = useState([])
    const [events, setEvents] = useState([]) ; 
    const [loadingCalendar , setLoadingCalendar] = useState(false) ; 



    const fetchEvents = async() => {
        setLoadingCalendar(true) ; 
        try {
            const res = await fetch('/api/calendar') ; 
            const data = await res.json() ; 
            if(data.error) throw new Error(data.error) ; 
             setEvents(data.events) ; 
        } catch (error) {
              console.log("Erreur getting calendar events")
        }finally{
            setLoadingCalendar(false)
        }
    }

    const addEvent = async({eventName, eventDate}) => {
        setLoadingCalendar(true) ; 
        try {
            const success = handleInputsError({eventName, eventDate}) ; 
            if(!success) return ; 

            const res = await fetch("/api/calendar" , {
                method : "POST" , 
                headers : {"Content-type" : "application/json"} , 
                body : JSON.stringify({eventName, eventDate})
            })
             const data = await res.json() ; 
             if(data.error) throw new Error(data.message)
                if(res.ok){
                    toast.success("Event added successfully") ; 
                    fetchEvents() ; 
                }
        } catch (error) {
            toast.error(error.message) ; 
            console.log(error.message) ; 
        }finally{
            setLoadingCalendar(false)
        }
    }


    const fetchUpcoming = async() => {
        setLoadingCalendar(true) ; 
        try {
            const res = await fetch('/api/calendar/upcoming') ; 
            const data = await res.json() ; 
            if(data.error) throw new Error(data.error) ; 
             setUpcomingEvent(data.events) ; 
        } catch (error) {
              console.log("Erreur getting calendar events")
        }finally{
            setLoadingCalendar(false)
        }
    }

    const deleteEvent = async(id) => {
        setLoadingCalendar(true) ; 
        try {
            // const success = handleInputsError({eventName, eventDate}) ; 
            // if(!success) return ; 

            const res = await fetch("/api/calendar" , {
                method : "DELETE" , 
                headers : {"Content-type" : "application/json"} , 
                body : JSON.stringify({id})
            })
             const data = await res.json() ; 
             if(data.error) throw new Error(data.message)
                if(res.ok){
                    toast.success("Event deleted successfully") ; 
                    fetchEvents() ; 
                }
        } catch (error) {
            toast.error(error.message) ; 
            console.log(error.message) ; 
        }finally{
            setLoadingCalendar(false)
        }
    }


    return {fetchEvents , events , addEvent,fetchUpcoming ,  upcomingEvent , loadingCalendar  , deleteEvent} ; 

}

export default useCalendar

const handleInputsError = ({eventName, eventDate}) => {
     if(!eventName){
        toast.error("Enter the event Name") ; 
        return false ; 
     }
     if(!eventDate) {
        toast.error("Click a date") ; 
        return false ; 
     }
     return true ;
}
