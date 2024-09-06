import {Link} from "react-router-dom"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import LoginPage from "./Components/LoginPage"
import HomePage from "./Components/HomePage"
import SignUpPage from "./Components/SignUpPage"
import Dashboard from "./Components/Dashboard"
import './App.css'
function App(){
    return(
        <>
        <Router>
        <nav className="nav1">
            <Link to="/" className="navele1">Home</Link>
            <Link to="/login" className="navele1">Login</Link>
            <Link to="/signup" className="navele1">Sign Up</Link>
            <Link to="/dashboard" className="navele1">Dashboard</Link>
        </nav>

        
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
        
        
        
        
        </>



    )
}
export default App