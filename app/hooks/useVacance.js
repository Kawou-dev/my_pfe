
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useVacance = () => {
            const [loading, setLoading] = useState(false) ; 
            const [vacances , setVacances] = useState([]) ; 
            const [favorisVac, setFavorisVacance ] = useState([]) ; 


            const fetchVacance = async() => {
                setLoading(true) ; 
                try {
                    const res = await fetch("/api/vacance") ; 
                    const data = await res.json() ; 
                    if(data.error) throw new Error(data.error)
                    setVacances(data.vacances)
                } catch (error) {
                    console.log("frontent-Erreur getting data " , error.message)
                    toast.error(error.message)
                }finally{
                    setLoading(false)
                }

            }
            const fetchFavoriVacance = async() => {
                setLoading(true) ; 
                try {
                    const res = await fetch("/api/vacance/favori") ; 
                    const data = await res.json() ; 
                    if(data.error) throw new Error(data.error)
                    setFavorisVacance(data.favoris)
                } catch (error) {
                    console.log("frontent-Erreur getting favoris vacances " , error.message)
                    toast.error(error.message)
                }finally{
                    setLoading(false)
                }
            }

            const addVacance = async({cityName , experience , images , publicId}) => {
                  if (!cityName || !images)  {
                             toast.error("fields are required!");
                             return;
                         }
                         setLoading(true);
                         try {
                             const res = await fetch("/api/vacance", {
                                 method: "POST",
                                 headers: { "Content-Type": "application/json" },
                                 body: JSON.stringify({cityName , experience , images , publicId}),
                             });
                 
                             const data = await res.json();
                             if (data.error) throw new Error(data.error);
                 
                             toast.success("Vacance added successfully");
                             fetchVacance() ; 
                            
                         } catch (error) {
                             console.error("frontent-Erreur sending data:", error.message);
                             toast.error(error.message)
                         } finally {
                             setLoading(false);
                         }
            }

            const setFavori = async(id) => {
                setLoading(true) ; 
                try {
                    const res = await fetch("/api/vacance", {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({id}),
                    });
                    const data = await res.json( ) ; 
                    if(data.error) throw new Error(data.message) ; 
                    if(res.ok){
                        toast.success("Vacance updated!")
                        fetchVacance() ; 
                    }
                } catch (error) {
                    console.log("Error while setting favori ")
                    toast.error(error.message)
                }finally{
                    setLoading(false) ; 
                }
            }


            const onDelete = async(publicId) => {
                setLoading(true) ; 
                try {
                    const res = await fetch("/api/vacance", {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({publicId}),
                    });
                    const data = await res.json( ) ; 
                    if(data.error) throw new Error(data.message) ; 
                    if(res.ok){
                        toast.success("Vacance deleted !")
                        fetchVacance() ; 
                    }
                } catch (error) {
                    console.log("Error while deleting vacance favori ")
                    toast.error(error.message)
                }finally{
                    setLoading(false) ; 
                }
            }


            return {loading , vacances , fetchVacance, addVacance , setFavori, fetchFavoriVacance, favorisVac , onDelete}
}

export default useVacance
