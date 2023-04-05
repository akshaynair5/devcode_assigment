import { Link } from "react-router-dom";
import './navbar.css'
import { useContext,useEffect } from "react";
import { Authcontext } from "../../contextprovider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig";

function Navbar(){
    const {currentUser} = useContext(Authcontext)

    return(
        <div className="Navbar">
            <Link to='/Home' className="links">Home</Link>
            <Link to='/About'  className="links">About</Link>
            <img src={currentUser.photoURL} className="dp"></img>
            <button onClick={()=>signOut(auth)} className="logout">Logout</button>
        </div>
    )
}

export default Navbar