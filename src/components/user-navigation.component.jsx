import { Link, useNavigate  } from "react-router-dom"
import { AnimationWrapper } from "../common/page-animation"
import { UserContext } from "../App"
import { useContext } from "react"
import { removeFromSession } from "../common/session"

const UserNavigationPanel = () =>{

    // get userName from UserContext
    const {userAuth:{userName},setUserAuth} = useContext(UserContext)
    const navigate = useNavigate();

    // if user want to signout then we will remove user from session storage and user will set to null
    let handleSignOutUser = () => {
        console.log("sign out");
        removeFromSession("user");
        setUserAuth({accessToken:null});
        navigate("/");
    }
    


    return (
        <AnimationWrapper 
            transition={   {  duration:0.2, y:{duration:0.1}   }   }
            className="absolute right-0 z-50"
            
            >

            <div className="bg-white absolute right-0 border border-grey w-60 overflow-hidden duration-200">
                <Link to="/editor" className="flex gap-2 link md:hidden pl-8 py-4">
                    <i className="fi fi-rr-file-edit"></i>
                    <p>write</p>
                </Link>

                <Link to={`/user/${userName}`} className="link pl-8 py-4">
                    Profile
                </Link>

                <Link to={`/dashboard/blogs`} className="link pl-8 py-4">
                    Dashboard
                </Link>

                <Link to={`/settings/editProfile`} className="link pl-8 py-4">
                    Settings
                </Link>

                <span className="absolute border-t border-grey -ml-6 w-[200%]"></span>

                <button 
                    className="text-left p-4 hover:bg-grey w-full pl-8 py-4"
                    onClick={handleSignOutUser}>
                    <h1 className="font-bold text-xl mg-1">Sign Out</h1>
                    <p className="text-dark-grey">@{userName}</p>
                </button>

            </div>

        </AnimationWrapper>
    )
}

export {UserNavigationPanel}