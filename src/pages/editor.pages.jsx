import { UserContext } from "../App"
import { useContext } from "react"
import { Link, Navigate, Outlet } from "react-router-dom";

const Editor = () =>{
    // check user log in or not
    let {userAuth : {accessToken},setUserAuth}= useContext(UserContext)
    console.log(accessToken)



    return(
        accessToken == null || undefined

        ?
        // if accessToken is persent then it will navigate to home 
        // otherwise it will navigate to sign-in
        <Navigate to="/signIn" />

        :

        <>
            <h1> hi I am editor page </h1>
        </>
    )
}

export {Editor}