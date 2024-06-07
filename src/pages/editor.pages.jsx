import { UserContext } from "../App"
import { useContext, useState } from "react"
import { Link, Navigate, Outlet } from "react-router-dom";
import { BlogEditor } from "../components/blog-editor.component";
import { PublishFormEditor } from "../components/publish-form.component";

const Editor = () =>{
    const [editorState , setEditorState] = useState("editor")


    // check user log in or not
    let {userAuth : {accessToken},setUserAuth}= useContext(UserContext)
    // console.log(accessToken)



    return(
        accessToken == null || undefined

        ?
        // if accessToken is persent then it will navigate to home 
        // otherwise it will navigate to sign-in
        <Navigate to="/signIn" />

        :

        <>
            {
            editorState =="editor" 
            ?
            <BlogEditor />
            :
            <PublishFormEditor />
            }
        </>
    )
}

export {Editor}