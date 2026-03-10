import { useContext, useState } from "react"
import { AppContext } from "../Context/AppContext";
import login from "../assets/login.jpg";
import { Link } from "react-router-dom";

export default function Login()
    {
       
            

            const Api_url = import.meta.env.VITE_API_URL;
            const {setToken} = useContext(AppContext);

            const[loginMassage , setLoginMassage] = useState("");
            const[form , setForm] = useState(
                {
                    email:"",
                    password:""
                }
            );

            const handleLogin = async (e)=>
                {
                    e.preventDefault();
                    const LoginData = new FormData();
                    LoginData.append("email",form.email);
                    LoginData.append("password",form.password);

                    const Login = await fetch(`${Api_url}/login`,{
                        method:"POST",
                        body:LoginData,
                        headers: {
                                    Accept: "application/json"
                                }
                      })

                      const res = await Login.json();
                      console.log(res);
                      localStorage.setItem("token",res.token);
                      setToken(res.token);
                      setLoginMassage("Successfull Login");
                }


        return <>
         <div>
                <img src={login} className="absolute w-full h-full z-0" />
            </div>
        <main className="flex justify-center items-center p-5">

            {loginMassage&&<p className="bg-green-400 text-2xl text-white ">{loginMassage}</p>}

           
             
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

             <section></section>

        </main>
        </>
        
    }