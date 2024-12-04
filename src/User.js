import { useEffect, useState } from "react"
import Navigation from "./Navigation"
const User =() =>{
    const [userResponse, setUserRespose] = useState([])

   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(a =>a.json())
        .then(b => {
            setUserRespose(b)
        })
   },[])

    return(
        
        <>
        <Navigation/>
        <h1>user khgdde</h1>
       {userResponse.map((item)=>(
        <>
        <p>{item.id}</p>
        <p>{item.name}</p>
        <p>{item.username}</p>
        <p>{item.email}</p>


        </>

       ))}
        </>
    )
}

export default User