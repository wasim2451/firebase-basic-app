import React, { useState } from 'react'
import { app } from '../firebase';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';

function Card() {
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const auth=getAuth(app);

    const emailHandler=(e)=>{
        const val=e.target.value;
        setEmail(val);
    }
    const passHandler=(e)=>{
        const val=e.target.value;
        setPass(val);
    }

    const formHandler=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,pass)
        .then((val)=>{
            console.log(val);
            alert("Sign Up Success !");
        })
        .catch((err)=>{
            console.error(err.message);
        });
    }

    return (
        <>
            <form action="" onSubmit={formHandler}>
                <p>Enter Email Id </p>
                <input type="text" placeholder='user@example.com' value={email} onChange={emailHandler}/>
                <p>Enter Password</p>
                <input type="password" placeholder='*****' value={pass} onChange={passHandler}/>
                <button type='submit'>Sign Up </button>
            </form>
        </>
    )
}

export default Card;
