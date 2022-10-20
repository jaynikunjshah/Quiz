import React, {useState} from "react";
import Login from "./Login";
import "./overall.css"

function Signup() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [handleSubmit,sethandleSubmit] = useState('submit')

    if(handleSubmit === 'submit'){
        return(
            <div>
                <h1 className="tit">SignUp</h1>
                <form className="handle">
                    <label className="ema"><b>Name</b></label>
                    <input onChange={(e) => {setName(e.target.value)}} type="text" value={name} className="snacc"/>
                    <br />
                    <label className="ema"><b>Email</b></label>
                    <input onChange={(e) => {setEmail(e.target.value)}} type="email" value={email} className="seacc"/>
                    <br />
                    <label className="ema"><b>Password</b></label>
                    <input onChange={(e) => {setPassword(e.target.value)}} type="password" value={password} className="spacc"/>
                    <br />
                    <br />
                    <button onClick={(e) => {e.preventDefault(); if(name === '' || email === '' || password === ''){alert("Enter all Fields")} else {alert("User"+name+"Created Successfully"); sethandleSubmit('submitted')}}} className="SubButton">Submit</button>
                </form>
            </div>
        )
    }
    else{
        return(
            <Login />
        )
    }
}

export default Signup