import Navigation from "./Navigation";
import React, {useEffect, useState, useContext} from 'react';
import {UserInfoContext} from './Context'

const Command=()=>{
    const commentsInfo = useContext(UserInfoContext)
    const [comment,setComment]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(a=> a.json())
        .then(data=>{
            setComment(data);
            commentsInfo.setCommentsData
        })
    },[])
    console.log("@tm user data in commnets",commentsInfo.userData )
    return(
        <>
        <Navigation />
        <h1 className="center">commands</h1>
        <div className="b1">
        {comment.map(item => (
            <>
           <div className="b">
           <h3>{item.id}</h3>
           <p>{item.name}</p>
           <p>{item.email}</p>
           <p>{item.postid}</p>
           <p>{item.body}</p>
           </div>
           </>
           
        ))}
         </div>
        </>
    
           
    )
    
    } 
    

    
export default Command

