import { createUserWithEmailAndPassword, updateProfile ,signInWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { auth } from "../../firebaseconfig";
import { storage } from "../../firebaseconfig";
import { getDownloadURL } from "firebase/storage";
import {Link, useNavigate } from "react-router-dom";
import ProfilePicIcon from "../../images/user.png"
import { db } from "../../firebaseconfig";
import { doc, setDoc } from "firebase/firestore"; 
import './login-register.css'


function Login(){
    const navigate = useNavigate()
    const [err,setErr] = useState(false)
    const HandleSubmit= async (e)=>{
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        try{
            await signInWithEmailAndPassword(auth,email,password)
            navigate("/home")
        }
        catch(err){
            setErr(true)
        }

    }
    return(
        <div className="FormBox" onSubmit={(e)=>HandleSubmit(e)}>
            <form>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <input type="submit" id="S"></input>
                {err && <span style={{alignSelf:'center'}}><b>Username or Password is wrong, Try Again!</b></span>}
                <p style={{width:'34%'}}>Do not have an Account?<b><Link style={{marginLeft:'2%',textDecoration:'none'}} to="/Register">Register Now</Link></b></p>
            </form>
        </div>
    )
}

function Register (){
    const navigate = useNavigate()
    const [err,setErr] = useState(false)
    const HandleSubmit= async (e)=>{
        e.preventDefault();
        const displayName = e.target[0].value
        const email = e.target[1].value
        const number = e.target[2].value
        const password = e.target[3].value
        const DP = e.target[4].files[0]
        const storageid = new Date().getTime()
        const User = await createUserWithEmailAndPassword(auth,email,password)
        const storageRef = ref(storage,`${storageid}`)
        await uploadBytesResumable(storageRef,DP)
            .then(()=>{
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try{
                        await updateProfile(User.user,{
                            displayName,
                            photoURL:downloadURL,
                        })
                        await setDoc(doc(db, "users", User.user.uid), {
                            uid: User.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                            phoneNumber:number,
                        });
                    }
                    catch(err){
                        setErr(true)
                    }
                navigate("/home")
            })
        })
        

    }
    return(
        <div className="FormBox">
            <form onSubmit={(e)=>HandleSubmit(e)}>
                <input type="text" placeholder="Name" required></input>
                <input type="email" placeholder="Email-ID" required></input>
                <input type="number" placeholder="Mobile Number" required></input>
                <input type="password" placeholder="Password" required></input>
                <label htmlFor="Fl"><img src={ProfilePicIcon} style={{height:'50px',alignSelf:'center'}}></img><p style={{marginLeft:'5%'}}>Add Profile Photo</p></label>
                <input id="Fl" type="file" placeholder="file" style={{display:'none'}} required></input>
                <input type="submit" id="S" value="Register"></input>
                {err && <span style={{alignSelf:'center'}}>Something went wrong, Try Again</span>}
                <p style={{width:'26%'}}>Have an Account? <b><Link style={{marginLeft:'2%',textDecoration:'none'}} to="/devcode_assigment">Login Now</Link></b></p>
            </form>
        </div>
    )
}

export {Register,Login}
