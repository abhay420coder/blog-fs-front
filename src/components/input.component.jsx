import { useState } from "react"


const InputBox = ({name , placeholder , type , id , vlaue , icon}) =>{
    const [passwordVisible, setPasswordVisible] = useState(false)

    let handlePasswordVisibility = () =>{
        setPasswordVisible(!passwordVisible);
    }

    return (
        <>
            <div className="relative w-[100%] mb-4">
                <input 
                    name={name} 
                    type={type=="password" ? passwordVisible ? "password" : "text" : type}
                    placeholder= {placeholder}
                    defaultValue={vlaue}
                    id={id}
                    className="input-box"
                    
                />

                <i className={"fi "+ icon + " input-icon"}></i>

                {
                    type == "password" ?
                    <i className={ (passwordVisible?"fi-rr-eye-crossed" :"fi-rr-eye")+ " fi input-icon left-[auto] right-4 cursor-pointer"} onClick={handlePasswordVisibility}></i>
                    :
                    ""
                }
            </div>
        
        </>
    )
}

export {InputBox}