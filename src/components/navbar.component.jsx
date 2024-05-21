

import { Link, Outlet } from "react-router-dom";



// if i import any file don't put fileVariableNAme inside currly bracket because that works as default export
import logo from "../imgs/logo.png"
import { useState } from "react";

const devlogo = 'https://assets.zyrosite.com/m7VpbKKGQGTllx2l/ai-logo-mk3DJ9vN9Nf7N5xV.svg'

const Navbar =() =>{
    const [searchBoxVidibility , setSearchBoxVidibility ] = useState(false)
    const handleSearchBoxVilisbility = () => setSearchBoxVidibility(!searchBoxVidibility)
    return (
        <>
        <nav className="navbar">
            {/* 
                    // component store in variable
                    login = <LoginForm />;
                    signUp = <SignUp />
                    user = {name:"Abhay" , loginComponent:<LoginForm />  , signUpComponent:<SignUp />}

                    // Conditional rendering
                    if (isLoggedIn) {
                                        content = <AdminPanel />;
                                    } else {
                                        content = <LoginForm />;
                                    }

                    content = isLoggedIn : <AdminPanel /> ? <LoginForm />

                    const products = [
                                        { title: 'Cabbage', id: 1 },
                                        { title: 'Garlic', id: 2 },
                                        { title: 'Apple', id: 3 },
                                    ];
                    const listItems = products.map(product =>
                                                        <li key={product.id}>
                                                            {product.title}
                                                        </li>
                                                    );


                    // className , style , attribute , rendring value and component
                    <tag 
                            attribute={variableName} attribute="value" attribute={"value"} attribute={"value1 " + "value 2"}
                            className={variableName} className="value" className={"value"} className={"value1 " + "value 2"} 
                            style={{"proprties":"value" , "proprties":variableName}}
                    >    
                            
                            {user.name} Kumar // Displaying data 

                            {user.loginComponent} // render component by using variable

                            <MyComponent /> // render component

                            

                    </tag>
                    <ul>{listItems}</ul>
                    */
                    
                    
                }


            {/* logo */}
            <Link to="/">
                
                <img src={devlogo} className={"flex-none w-10"} />
            </Link>
            {/* search */}
        
            <div className={"absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " + (searchBoxVidibility ? "show" : "hide")}>

                <input type="text" placeholder="Search" className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey  md:pl-12" />

                <i className="fi fi-br-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>

            </div>

            <div className=" flex items-center gap-3 md:gap-6 ml-auto">
                <button className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center" onClick={handleSearchBoxVilisbility}>

                {/* <button className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center" onClick={()=> setSearchBoxVidibility(!searchBoxVidibility)}> */}

                <i className="fi fi-rr-search text-2xl"></i>
                </button>

                <Link to="/editor" className="hidden md:flex gap-2 link" title="Write">
                    <i className="fi fi-rr-file-edit"></i>
                    {/* <p>write</p> */}
                </Link>

                <Link to="/signIn" className="btn-dark py-2" title="Log In">
                    <i class="fi fi-rr-sign-in-alt"></i>
                    {/* <p>Sign In</p> */}
                </Link>

                <Link to="/signUp" className="btn-light py-2 hidden" title="Sign Up">
                    <i class="fi fi-br-exit"></i>
                    {/* <p>Sign Up</p> */}
                </Link>
            </div>

            {/* login */}
        </nav>
        <Outlet />
        </>
    )
}

export {Navbar};