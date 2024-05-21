//  import icon
import googlepng from "../imgs/google.png"

// import component
import {InputBox} from "../components/input.component";
import {AnimationWrapper} from "../common/page-animation"
import { Link, Outlet } from "react-router-dom";


const UserAuthForm = ({type}) =>{
    const authForm = userRef();


    let handleSubmit = (e)=>{
        e.preventDefault();

        // form data
        let form = new FormData(authForm.current)
        let formData = {}
        console.log(form.entries());

        for(let [key,value] of form.entries()){
            formData[key] = value
        }
        console.log(formData);
    }

    return(
        <AnimationWrapper keyValue={type}>
            <section className="h-cover flex items-center justify-center">
                <form ref={authForm} className="w-[80%] max-w-[400px]">
                    <h1 className="text-4xl font=gelasio capitalize text-center mb-24">
                        {type=="signIn" ? "Welcome Back" : "Join Us Today"}
                    </h1>

                    {
                        type!="signIn" ?
                        <InputBox name="fullname"  placeholder="Full Name" type="text" icon="fi-rr-user"/>
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