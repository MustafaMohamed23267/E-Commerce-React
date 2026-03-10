import { useContext, useState } from "react"
import { AppContext } from "../Context/AppContext";
import register from "../assets/lone-tree.jpg";
import { Link } from "react-router-dom";

export default function Register()
    {
            const Api_url = import.meta.env.VITE_API_URL;
            const {setToken} = useContext(AppContext);

            const input_style = "outline-1 outline-gray-300 rounded-full px-2 py-2 w-50 text-white focus:outline-indigo-500";

            const input_style2 = "outline-1 outline-gray-300 rounded-full px-2 py-2 w-105 text-white focus:outline-indigo-500";

            const[loginMassage , setLoginMassage] = useState("");
            const[form , setForm] = useState(
                {
                    first_name:"",
                    last_name:"",
                    country:"",
                    Birth_Date:"",
                    role:"user",
                    email:"",
                    password:"",
                    password_confirmation:""
                }
            );

            const handleLogin = async (e)=>
                {
                    e.preventDefault();
                    const RegisterDate = new FormData();
                    RegisterDate.append("first_name",form.first_name);
                    RegisterDate.append("last_name",form.last_name);
                    RegisterDate.append("country",form.country);
                    RegisterDate.append("role",form.role);
                    RegisterDate.append("Birth_Date",form.Birth_Date);
                    RegisterDate.append("email",form.email);
                    RegisterDate.append("password",form.password);
                    RegisterDate.append("password_confirmation",form.password_confirmation);

                    const Login = await fetch(`${Api_url}/register`,{
                        method:"POST",
                        body:RegisterDate,
                        headers: {
                                    Accept: "application/json"
                                }
                      })

                      const res = await Login.json();
                      console.log(res);
                      localStorage.setItem("token",res.token);
                      setToken(res.token);
                      setLoginMassage("Successfull Register");
                      setTimeout(() => {
                        setLoginMassage("");
                      }, 3000);
                      
                }


        return <>
         <div>
                <img src={register} className="fixed w-full h-full z-0" />
            </div>
        <main className="flex flex-col justify-center items-center p-5">

            {loginMassage&&<p className="rounded-full px-10 my-3 bg-green-400 text-2xl text-white z-10">{loginMassage}</p>}

           
             
            <section className="p-10 flex flex-col space-y-10 z-10 bg-gray-700/30 backdrop-blur-sm rounded-xl justify-center">
            <h1 className="text-white text-4xl text-center p-5">Register</h1>

            <div className="space-x-6">
                <input type="text" 
            value={form.first_name} 
            onChange={(e)=>{setForm({...form,first_name:e.target.value})}} 
            className={`${input_style}`}
            placeholder="first name...."
            />

            <input type="text" 
            value={form.last_name} 
            onChange={(e)=>{setForm({...form,last_name:e.target.value})}} 
            className={`${input_style}`}
            placeholder="last name...."
            />
            </div>

            <input type="email" 
            value={form.email} 
            onChange={(e)=>{setForm({...form,email:e.target.value})}} 
            className={`${input_style2}`}
            placeholder="please enter your email...."
            />

            <input type="text" 
            value={form.country} 
            onChange={(e)=>{setForm({...form,country:e.target.value})}} 
            className={`${input_style2}`}
            placeholder="country...."
            />

            <input type="date" 
            value={form.Birth_Date} 
            onChange={(e)=>{setForm({...form,Birth_Date:e.target.value})}} 
            className={`${input_style2}`}
            placeholder="Birth Date...."
            />

            {/* <div className="flex space-x-12">
                <div className="space-x-3">
                    <label className="text-white">Admin</label>
                    <input type="radio" name="role" value="admin" 
                    onChange={(e)=>{setForm({...form,role:e.target.value})}} 
                    />
                </div>

                <div className="space-x-3">
                    <label className="text-white">User</label>
                    <input type="radio" name="role" value="user"
                    onChange={(e)=>{setForm({...form,role:e.target.value})}} 
                    />
                </div>
                
            </div> */}

            <input type="password" 
            value={form.password} 
            onChange={(e)=>{setForm({...form,password:e.target.value})}}
            className={`${input_style2}`}
            placeholder="please enter your password...."
            />

            <input type="password" 
            value={form.password_confirmation} 
            onChange={(e)=>{setForm({...form,password_confirmation:e.target.value})}}
            className={`${input_style2}`}
            placeholder="please Confirm your password...."
            />

            <button onClick={handleLogin} className="py-1.5 px-5 rounded-xl bg-teal-500 hover:bg-teal-700 duration-500 text-white cursor-pointer"> Register</button>

            <p className="text-white text-sm">Already have an account you can <Link to='/login' className="text-indigo-400 hover:text-indigo-600 duration-500">Login</Link></p>
             </section>

             <section></section>

        </main>
        </>
        
    }