import { MdLocalPhone } from "react-icons/md"
import cart from '../assets/shopping-cart.png'
import { Theme } from "./Theme"
import { Links, NavLink, useNavigate } from "react-router-dom"
import { GoSearch } from "react-icons/go"
import { FiUser } from "react-icons/fi"
import { BsCart, BsCartPlus } from "react-icons/bs"
import {  useContext, useState } from "react"
import { Menu, X, XCircle } from "lucide-react"
import { AppContext } from "../Context/AppContext"
import { useDispatch } from "react-redux"

import {GetUser} from '../pages/Login/AuthSlice';

import {logout} from '../pages/Login/AuthSlice';
import { CiWarning } from "react-icons/ci"
import { FcCancel } from "react-icons/fc"

export const Nav = ()=>
    {

        const [logoutBanner , setLogoutBanner] = useState(false);

        const [profileBanner , setprofileBanner] = useState(false);

        const [cartSlide , setCartSlide] = useState(false);

        const [cartAnimat , setCartAnimate] = useState("cart");

        const dispatch = useDispatch();

        const profilehover = "text-sky-500 bg-sky-300/50";

   


        const {user} = useContext(AppContext);
       
        const navigate = useNavigate();

        


        const navlinks = [
            {
                name:"Category",
                path:""
            },
            {
                name:"Deals",
                path:""
            },
            { 
                name:"What's New",
                path:""
            },
            {
                name:"Delivery",
                path:""
            }
        ];
         const [menu , setMenu] = useState(false);
        return(
            <>

{/* logout banner */}

{logoutBanner&&
             <div className="z-100 fixed top-60 md:right-95 max-sm:right-5 bg-white/50 dark:bg-white/10 backdrop-blur-sm w-60 h-70 rounded-md  flex justify-center overflow-hidden  ">
                    <div className="flex flex-col items-center  space-y-6 p-5">
                        <div><CiWarning className="text-5xl text-red-600"/></div>
                        <p className="text-center ">Are you sure toy want to Logout?</p>
                        <div className=" flex flex-col justify-center space-y-3">
                        <button className="bg-indigo-600 px-20 py-2 rounded-full text-white hover:bg-red-800 duration-500 cursor-pointer"
                        onClick={()=>{
                            dispatch(logout());
                            navigate('/login');
                        
                        }
                        }
                        >Logout</button>
                        <button
                        className="bg-gray-00 px-20 py-2 rounded-full text-gray-900 border border-indigo-500 hover:bg-indigo-500 hover:text-gray-200 duration-500 cursor-pointer"
                        onClick={()=>setLogoutBanner(false)}
                        >Cancle</button>
                    </div>
                    </div>
                     
                </div>
}
{/* logout banner end */}



{/* profile banner */}

{profileBanner&&
<div className="z-100 fixed top-20 md:right-45 max-sm:right-5 bg-white/50 dark:bg-white/10 backdrop-blur-sm p-10 rounded-md  flex justify-center overflow-hidden  ">
 
<div className="flex flex-col space-y-4">

    <div className="flex flex-col space-y-1.5">
        <span className="max-sm:hidden"> hello</span>
           <span className="max-sm:hidden font-bold">{user.first_name} {user.last_name}</span>
         <span className="max-sm:hidden">{user.email}</span>
    </div>
    

  <hr/>
                              <button 
                              className="px-4 py-1.5 bg-red-500 rounded-full text-white hover:bg-red-700 duration-500 cursor-pointer" 
                              onClick={()=>setLogoutBanner(true)}
                              >Logout</button>
 
</div>
 
 </div>
}
 
{/* profile banner  end */}


{/* cart side */}


{cartSlide&&
<div className={`w-100 h-full bg-gray-200 fixed right-0 z-10 ${cartAnimat}  `}>
    
    <div className="relative left-2 top-20  z-20 h-screen">
        <div className="absolute  ">
             <button className="bg-red-60 cursor-pointer text-2xl text-red-600 " onClick={()=>{
            setCartAnimate("cartout")
            }}><XCircle/></button>
        </div>
       

            <h2 className=" text-center z-30">My Cart</h2>

            <div className="absolute bottom-30 w-full">
                <div className="flex flex-col space-y-2.5 px-5">
                    <div className="flex justify-between text-[#003d29] font-bold">
                        <p>SUBTOTAL</p>
                        <p>$28.00</p>
                    </div>
                    <button className="rounded-md border border-[#003d29] hover:bg-[#003d29] duration-500 hover:text-white cursor-pointer py-2 font-bold">VIEW CART</button>
                    <button className="rounded-md font-bold border text-white bg-[#003d29] cursor-pointer py-2">CHECK OUT</button>
                    
                </div>
                

            </div>
    </div>
    

</div>
}




           

            <div className="fixed bg-background z-60 w-full">
                {/* <div  className="bg-[#003d29] text-white flex justify-between space-x-8 w-full py-1.5 px-2 md:px-10">
                <div className="flex space-x-1.5 max-sm:text-sm"> 
                    <MdLocalPhone className="mt-1"/>
                    <span>+201110792037</span>
                </div>

                <div className="space-x-5 max-sm:space-x-2 max-sm:text-sm w-fit">
                    <span>Get 50% Off on Selected Items</span>
                    <span>|</span>
                    <span>Shop Now</span>
                </div>

                <div className="space-x-4 max-sm:text-sm">
                    <select>
                        <option>eng</option>
                        <option>arb</option>
                    </select>

                    <select>
                        <option>location</option>
                        <option>Eg</option>
                        <option>usa</option>
                    </select>
                </div>
                </div> */}





{/* mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm */}

                <div className="flex justify-between py-5 px-8 max-sm:px-2">
                    <div className="flex space-x-1.5">
                        <img src={cart} className="w-10"/>
                    <h1 className="text-[#003d29] text-3xl font-bold">ShopCart </h1>
                    </div>

                    <div className="flex space-x-4 mt-1.5 max-lg:hidden">
                        {navlinks.map(link=><NavLink to={link.path}>{link.name}</NavLink>)}
                    </div>

                    <div className=" flex ">
                        
                            <input type="text" className="rounded-full outline-1 outline-gray-300 focus:outline-indigo-500 px-2 w-70 max-sm:hidden"
                            placeholder="Search product"
                            />  
                    </div>

                    <div className="flex space-x-6  max-sm:space-x-3 mt-1.5 ">
                       
                           
                            {user&&user.id?
                            <div className="font-semibold">
                                <button 
                                className={`p-1 rounded-full bg-gray-200 cursor-pointer dark:bg-gray-800 ${profileBanner?profilehover:""}`}
                                onClick={()=>setprofileBanner(prev=>!prev)}
                                >
                                    <FiUser className="text-2xl"/>
                                </button>
                             
                             
                        </div>
                            :
                            
                            <NavLink className="hover:text-[#036846] duration-500 hover:scale-115 max-lg:hidden" to={'/login'}>Login</NavLink>
                           }
                            
                            
                        

                        <button className="flex space-x-2 font-semibold cursor-pointer"
                        onClick={()=>
                            {setCartSlide(true);
                            setCartAnimate("cart")}}
                        >
                            <BsCartPlus className="mt-1"/>
                            <span  className="max-sm:hidden">Cart</span>
                        </button>
                        
                    </div>

                    

                    <div className="mt-1 max-sm:hidden "><Theme/></div>
                    <div className="relative">

                        <button onClick={()=>setMenu((prev)=>!prev)} className="absolute z-50 right-1 top-1">
                    {menu?<X className="hover:text-red-500 duration-500 cursor-pointer md:hidden"  />:<Menu  
                    className={`md:hidden  hover:text-indigo-500 duration-500 cursor-pointer`}/>
                    }
                 </button>
                    </div>
                      
                </div>
            </div>


            <div className={` fixed inset-0 space-y-6 bg-background/70 backdrop-blur-md flex flex-col items-center justify-center z-40  transition-all duration-400 md:hidden ${menu? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                          
                        <div className=" flex flex-col space-y-8">
                         <div className="mt-1 "><Theme/></div>
                        {navlinks.map(items =>
                            (
                            
                                <NavLink className="px-3  text-center hover:bg-indigo-500 rounded-full fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50 duration-400" to={items.path} >{items.name}</NavLink>
                            ))}

                           
                           
                    
                    
                        </div>
                   </div>
           
            </>
        )
    }