"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginPage(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[loginInProgress,setLoginInProgress]=useState(false);
    async function handleFormSubmit(ev)
    {
        ev.preventDefault();
        setLoginInProgress(true);
       
        await signIn('credentials',{email,password,callbackUrl:'/'});
    
         setLoginInProgress(false);

    }
    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
              Login
            </h1>
            <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit} method="POST ">
            <input type="email" placeholder="email" value={email}
                 disabled={false}
                 onChange={ev=>setEmail(ev.target.value)}/>
                
                <input type="password" name="password" placeholder="password" value={password}
                disabled={loginInProgress} onChange={ev=>setPassword(ev.target.value)} />
                <button disabled={loginInProgress}type="submit">Login</button>
                <div className="my-4 text-center text-gray-500">or login with provider</div>
                <button className="flex gap-4 justify-center">
                <Image  src="/google.png" width={24}  height={24}alt="Google"/>Login with google
                </button>
            </form>
            </section>
        
      
      
    
            
        
    )
}