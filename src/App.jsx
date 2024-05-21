import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar.component";
import { UserAuthForm } from "./pages/userAuthForm.page";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}     >
                <Route path="/signIn" element={<UserAuthForm type="signIn" />}      />
                <Route path="/signUp" element={<UserAuthForm type="signUp" />}      />
            </Route>
        </Routes>

    )
}

export default App;