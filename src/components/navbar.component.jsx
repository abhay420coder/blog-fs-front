

import { Link, Outlet } from "react-router-dom";



// if i import any file don't put fileVariableNAme inside currly bracket because that works as default export
import logo from "../imgs/logo.png"
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { UserNavigationPanel } from "./user-navigation.component";

const devlogo = 'https://assets.zyrosite.com/m7VpbKKGQGTllx2l/ai-logo-mk3DJ9vN9Nf7N5xV.svg'

const Navbar =() =>{
    const [searchBoxVisibility , setsearchBoxVisibility ] = useState(false)

    const [userNavPanelVisibility, setUserNavPanelVisibility] = useState(false)
    // getting userdata
    let {userAuth ,userAuth : {accessToken, profileImg},setUserAuth}= useContext(UserContext)


    // handle search box on lower than medium screen
    const handleSearchBoxVisibility = () => setsearchBoxVisibility(!searchBoxVisibility)

    // handle visiblity of User-Nav-Panel
    // const handleUserNavPanelVisibility = () => setUserNavPanelVisibility(!userNavPanelVisibility)
    const handleUserNavPanelVisibility = () => setUserNavPanelVisibility(currentValue => !currentValue)

    const handleBlur = () => {
        setTimeout(()=>{
            setUserNavPanelVisibility(false);
        },200)
    }


    return (
        <>
        <nav className="navbar"> 
            {/* logo */}
            <Link to="/">  
                <img src={devlogo} className={"flex-none w-10"} />
            </Link>

            {/* search */}
            <div className={"absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " + (searchBoxVisibility ? "show" : "hide")}>

                <input type="text" placeholder="Search" className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey  md:pl-12" />

                <i className="fi fi-br-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>

            </div>

            
            <div className=" flex items-center gap-3 md:gap-6 ml-auto">
                <button className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center" onClick={handleSearchBoxVisibility}>

                {/* <button className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center" onClick={()=> setsearchBoxVisibility(!searchBoxVisibility)}> */}

                <i className="fi fi-rr-search text-2xl"></i>
                </button>

                <Link to="/editor" className="hidden md:flex gap-2 link" title="Write">
                    <i className="fi fi-rr-file-edit"></i>
                    {/* <p>write</p> */}
                </Link>

                {
                    accessToken
                    ?
                    <>
                        <Link to="dashboard/notification">
                            <button className="w-12 h-12 rounded-full bg-grey relative hover:bg-black/10">
                                <i className="fi fi-rr-bell text-2xl block mt-1"></i>
                            </button>
                        </Link>

                        <div className="relative" onClick={handleUserNavPanelVisibility} onBlur={handleBlur}>
                            <button className="w-12 h-12 mt-1" >
                                <img src={profileImg} className="w-full h-full object-cover rounded-full" />
                            </button>

                            {
                                userNavPanelVisibility 
                                ? 
                                <UserNavigationPanel  /> 
                                : 
                                ""
                            }
                        </div>
                    </>
                    :
                    <>
                        <Link to="/signIn" className="btn-dark py-2" title="Log In">
                            <i className="fi fi-rr-sign-in-alt"></i>
                            {/* <p>Sign In</p> */}
                        </Link>

                        <Link to="/signUp" className="btn-light py-2 hidden" title="Sign Up">
                            <i className="fi fi-br-exit"></i>
                            {/* <p>Sign Up</p> */}
                        </Link>
                    </>
                }


            </div>

            {/* login */}
        </nav>
        <Outlet />
        </>
    )
}

export {Navbar};