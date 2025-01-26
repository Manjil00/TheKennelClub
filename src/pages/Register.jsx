import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LandingNav from '../components/LandingNav';
import LeftPatch from '../components/LeftPatch';

const Register = () => {

const [fullname,setFullname] = useState("");
const [username,setUsername] = useState("");
const [phoneNo,setPhoneNo] = useState("");
const [password,setPassword] = useState("");

const handleRegister=()=>{
    e.preventDefault();
    console.log(fullname,username,phoneNo,password);

    setFullname("");
    setUsername("");
    setPhoneNo("");
    setPassword("");
}

return (
<div className='mainContainer w-full h-auto'>
    <LandingNav/>

    
    <div className="InnerContainer w-full h-auto md:px-20 p-5 flex flex-col md:flex-row justify-center items-center">
        <LeftPatch/>

        <div className="rightPatch  p-5 w-[90%]  md:w-[30%] h-auto  rounded-xl  border-2 border-slate-400 flex justify-center items-center">
        <form onSubmit={handleRegister}
        className="inputContainer w-[300px] h-full flex flex-col justify-center items-center gap-5">
                <button className="bg-blue-700 text-white font-bold p-1 w-full h-[40px] rounded-lg flex justify-center items-center gap-10">
                <img src='/icons/GIcon.png' className='h-[30px] w-[30px] rounded-md' alt='google'/>
                <h2 className="signup font-sans">Signup with Google</h2>
                </button>
        
                <h1 className='text-slate-500 font-bold'>OR</h1>
        
                <div className="inputs  text-black flex flex-col gap-5 w-full">
                <input onChange={(e)=>setFullname(e.target.value)} value={fullname}
                className='w-full h-[40px] p-5 rounded-xl  placeholder-slate-500 border-slate-300 border-2' placeholder='Fullname'/>
                <input onChange={(e)=>setUsername(e.target.value)} value={username}
                className='w-full h-[40px] p-5 rounded-xl  placeholder-slate-500 border-slate-300 border-2' placeholder='Email'/>
                <input onChange={(e)=>setPhoneNo(e.target.value)} value={phoneNo}
                className='w-full h-[40px] p-5 rounded-xl  placeholder-slate-500 border-slate-300 border-2' placeholder='PhoneNumber'/>
                <input onChange={(e)=>setPassword(e.target.value)} value={password}
                type='password'  className='w-full h-[40px] p-5 rounded-xl placeholder-slate-500  border-slate-300 border-2' placeholder='Password'/>
                </div>
                
                <label className='font-sans text-sm'>By logging in, you are agreeing to TheKennel Club's <span className='underline text-blue-700 cursor-pointer'>Terms of Service</span> and <span className='underline text-blue-700 cursor-pointer'>privacy policy</span></label>
        
                <button type='submit' className='mx-auto bg-purple-700 w-full h-[40px] rounded-lg text-white'>Get started for free</button>
        
                <div className="label text-sm">Already have an account? <span className='underline text-blue-700 cursor-pointer'><Link to="/login">Log In</Link></span></div>
        </form>
        </div>

    </div>
</div>
)
}

export default Register;