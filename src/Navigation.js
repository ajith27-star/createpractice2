import {NavLink, navlink} from"react-router-dom"
export default function Navigation()
{
    return(
        <>
       <NavLink to="/user">User</NavLink><br/>
       <NavLink to="/command">command</NavLink><br/>
        </>
    )
}
// import Navigation from "./Navigation";

// export default function Commands()
// {
//     fetch("https://jsonplaceholder.typicode.com/comments")
//     .then(a =>a.json())
//         .then(b => {
//             console.log(b)
//         })
//     return(
//         <>
//         <Navigation/>
//         <h1>//         <h1>commands</h1>
//         <h1>commands</h1>


//         <h1>commands</h1>
//         <h1>commands</h1>
//         </>
//     )
// }