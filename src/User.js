import Navigation from './Navigation';
import React, {useEffect, useState, useContext} from 'react';
import {UserInfoContext} from './Context'
import Command from './command';

const User=()=>{
    const userInfo = useContext(UserInfoContext)
    const [user,setUser]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(a=> a.json())
        .then(data=>{
            setUser(data);
            userInfo.setUserData(data)
        })
    },[])
  
    console.log("@tm comments data in users", userInfo.commentsData )
    return(
        <>
        
        <Navigation/>
        <h1>users</h1>
        <ul>
            <div className='a2'>
                {user.map(user => (
                    <div className='a3'>
                    <div key={user.id} className='a1'>
                        
                        <h3>{user.name}</h3>
                        <p> {user.email}</p>
                        <p> {user.username}</p>
                        <p> {user.phone}</p>
                        <p> {user.website}</p>
                        </div>
                    </div>
                
                ))}
                </div>
            </ul>
        
        </>
    )
}
export default User