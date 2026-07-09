import {  useState } from "react"
//import { AppContext } from "../../Context/AppContext";
import login from "../../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUser } from './AuthSlice';

export default function Login()
    {
       
            

            const Api_url = import.meta.env.VITE_API_URL;
             const navigate = useNavigate();

             
            const dispatch = useDispatch();
            const[loginMassage , setLoginMassage] = useState("");
            const[form , setForm] = useState(
                {
                    email:"",
                    password:""
                }
            );
        const handleLogin = async (e) => {
            e.preventDefault();

            const result = await dispatch(loginUser(form));

                console.log(result);
                console.log(result.payload);

            if (loginUser.fulfilled.match(result)) {
                setLoginMassage(
                    `Successful Login welcome ${result.payload.user.first_name} `
                );

                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }

            else
                {
                    setLoginMassage(
                    ` ${result.payload.message}  `
                );
                }
        };


        return <>
         <div>
                <img src={login} className="absolute w-full h-full z-0" />
            </div>
            <div className="absolute w-full top-2 z-100 flex justify-center">
                 {loginMassage&&<p className="absolute bg-green-800 text-xl text-white px-4 py-2 rounded-full">{loginMassage}</p>}
            </div>
            
        <main className="flex flex-col justify-center items-center p-5">

             

           
             
            <section className="p-10 flex flex-col space-y-10 z-10 bg-orange-700/30 backdrop-blur-sm rounded-xl ">
            <h1 className="text-white text-4xl text-center p-5">Login</h1>
            
            <input type="email" 
            value={form.email} 
            onChange={(e)=>{setForm({...form,email:e.target.value})}} 
            className="outline-1 outline-gray-300 rounded-lg px-2 py-2 w-100 text-white focus:outline-indigo-500"
            placeholder="please enter your email...."
            />
            <input type="password" 
            value={form.password} 
            onChange={(e)=>{setForm({...form,password:e.target.value})}}
            className="outline-1 outline-gray-300 rounded-lg px-2 py-2  w-100 text-white focus:outline-indigo-500" 
            placeholder="please enter your password...."
            />

            <button onClick={handleLogin} className="py-1.5 px-5 rounded-xl bg-red-500 hover:bg-orange-700 duration-500 text-white cursor-pointer"> Login</button>

            <p className="text-white text-sm">if you don't have an account you can <Link to='/register' className="text-indigo-400 hover:text-indigo-600 duration-500">Register</Link></p>
             </section>

             <section>
              
             </section>

        </main>
        </>
        
    }