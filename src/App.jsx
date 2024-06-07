import { Route, Routes } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import { Navbar } from "./components/navbar.component";
import { UserAuthForm } from "./pages/userAuthForm.page";
import { Editor } from "./pages/editor.pages";
import { lookInSession } from "./common/session";
import { useEffect } from "react";

export const UserContext = createContext({}) 
    

const App = () => {
    const [userAuth, setUserAuth] = useState( {}); // initiall null-object set to userAuth


    useEffect(()=>{
        let userInSession = lookInSession("user");

        // if any user saved in session-storage 
        // then we will save userInSession into userAuth by using  setUserAuth method 
        // otherwise we will save {accessToken:null} into userAuth by using  setUserAuth method 
        // userAuth ->       JSON.parse(userInSession) = JSON.parse(lookInSession("user"))         otherwise          {accessToken:null}
        userInSession ? setUserAuth(JSON.parse(userInSession)) : setUserAuth({accessToken:null})   
    },[])

    return (
        <UserContext.Provider value={{userAuth,setUserAuth}}>
            <Routes>
                <Route path="/editor" element={<Editor />}     />
                <Route path="/" element={<Navbar />}     >
                    <Route path="/signIn" element={<UserAuthForm type="signIn" />}      />
                    <Route path="/signUp" element={<UserAuthForm type="signUp" />}      />
                </Route>
            </Routes>
        </UserContext.Provider>


    )
}

export default App;