import Navigation from "./Navigation";

export default function Commands()
{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(a =>a.json())
        .then(b => {
            console.log(b)
        })
    return(
        <>
        <Navigation/>
        <h1>commands</h1>
        </>
    )
}