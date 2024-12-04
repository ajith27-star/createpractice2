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