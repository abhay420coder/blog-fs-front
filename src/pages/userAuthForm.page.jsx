//  import icon
import googlepng from "../imgs/google.png"

// import component
import {InputBox} from "../components/input.component";
import {AnimationWrapper} from "../common/page-animation"
import { Link, Navigate, Outlet } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";

// alert library
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { storeInSession } from "../common/session";
import { UserContext } from "../App";




const UserAuthForm = ({type}) =>{

    let {userAuth : {accessToken},setUserAuth}= useContext(UserContext)
    console.log(accessToken);

    // http server connected 
    const userAuthThroughServer = (serverRoute , formData) =>{
        axios.post(import.meta.env.VITE_SERVER_DOMAIN+serverRoute , formData)
        .then(({data})=>{
            console.log(data);
            storeInSession("user",JSON.stringify(data))
            console.log(sessionStorage);
            setUserAuth(data)
        })
        .catch(({response})=>{
            toast.error(response.data.error)
        })
    }

    // ex:- email :- ak8294836065@hotmail.com    pass:-Amu@2020    Name:- Abhay Kumar

    let handleSubmit = (e)=>{
        e.preventDefault();

        let serverRoute = "/"+type

        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password




        // getting form data after submitting the form
        let form = new FormData(authFormElement)
        let formData = {}
        console.log("form :- " , form.entries);
        for(let [key,value] of form.entries()){
            formData[key] = value
        }
        console.log("form Data before validation" , formData);






        // form Validation
        let {fullName , email , password , confirmPassword} = formData // it eill destructuirize -> fullName => formData.fullName , email => formData.email
        console.log(`fullName :- ${fullName} email :- ${email}   password  :- ${password}  confirmPassword :- ${confirmPassword} `);

        if(fullName){
            if(fullName.length < 3){
                return toast.error("Fullname must be at least 3 letters long")
                
            }
        }

        if(!email.length){
            return toast.error("Enter Email") 
        }
        // check email pattern is valid or not
        if(!emailRegex.test(email)){
            return toast.error("Enter Valid Email")
            
        }

        if(!password.length){
            return toast.error("Enter Password")
        }
        // check password pattern is valid or not
        if(!passwordRegex.test(password)){
            return toast.error("Password should be 6 to 20 characters long with a numeric , 1 lowercase and 1 uppercase letters")
            
        }

        if(confirmPassword){

            // check password and confirmPassword , both are same
            if(password!==confirmPassword){
                return toast.error("Password And Re-enter password not matching")  
            }
        }

        //  now submitting the data on the server
        userAuthThroughServer(serverRoute,formData)

    }

    return(
        accessToken?
        // if accessToken is persent then it will navigate to home 
        // otherwise it will navigate to sign-in
        
        <Navigate to="/" />
        :
        <AnimationWrapper keyValue={type}>
            <section className="h-cover flex items-center justify-center">
                <Toaster />
                <form id={"authFormElement"} className="w-[80%] max-w-[400px]">
                    <h1 className="text-4xl font=gelasio capitalize text-center mb-24">
                        {type=="signIn" ? "Welcome Back" : "Join Us Today"}
                    </h1>

                    {
                        type!="signIn" ?
                        <InputBox name="fullName"  placeholder="Full Name" type="text" icon="fi-rr-user"/>
                        :
                        ""
                    }

                    <InputBox name="email"  placeholder="Email" type="email" icon="fi-rr-envelope"/>
                    <InputBox name="password"  placeholder="Password" type="password" icon="fi-rr-key"/>
                    {
                        type!="signIn" ?
                        <InputBox name="confirmPassword"  placeholder="Re-Enter Password" type="password" icon="fi-rr-key"/>
                        :
                        ""
                    }

                    <button  className="btn-dark center mt-14"  onClick={handleSubmit}>
                        {type=="signIn" ? "Sign In" : "Sign Up"}
                    </button>


                    <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-block font-bold">
                        <hr className="w-1/2 border-black"/>
                        <p>or</p>
                        <hr className="w-1/2 border-black"/>
                    </div>

                    
                    <button  className="btn-dark flex items-center justify-center gap-4 w-[90%] center"  >
                        <img src={googlepng} className="w-5"/>
                        <span>Continue With Google</span>
                    </button>
                    

                    {
                        type=="signIn" 
                        ? 
                        <p className="mt-6 text-dark-grey text-xl text-center">
                            Don't Have An Account ?
                            <Link to="/signUp" className="underline text-black text-xl ml-1"> Join Us Today</Link>
                        </p> 
                        : 
                        <p className="mt-6 text-dark-grey text-xl text-center">
                            Already A Member ?
                            <Link to="/signIn" className="underline text-black text-xl ml-1"> Sign In Here</Link>
                        </p>
                    }
                    

                </form>
            </section>
        </AnimationWrapper>
    )
}

export {UserAuthForm}