import React, {useState} from "react";
import Signup from "./Signup";
import Menu from "./Menu";
import "./overall.css"

function Login(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [signup,setSignup] = useState('NSignup')
    
    if(signup === 'NSignup'){
        return(
            <div>
            <h2 className="tit">LogIn</h2>
            <form className="handle">
                <label className="ema"><b>Email</b></label>
                <input onChange={(e) => {setEmail(e.target.value)}} type="email" value={email} className="emailacc"/>
                <br />
                <br/>
                <label className="pass"><b>Password</b></label>
                <input onChange={(e) => {setPassword(e.target.value)}} type="password" value={password} className="acc"/>
                <br />
                <br />
                <button onClick={(e) => {e.preventDefault(); if(email === '' || password === ''){alert("Enter all Fields")} else{setSignup('handled')}}} className="SubButton">Submit</button>
            </form>
            <br />
            <div className="text">Don't have an account? <button onClick={() => setSignup('Signup')} className="SignupButton">SignUp</button></div>
        </div>
        )  
    }
    else if (signup === 'Signup'){
        return(
            <Signup />
        )
    }
    else if (signup === 'handled'){
        return(
            <Menu />
        )
    }
}

export default Login