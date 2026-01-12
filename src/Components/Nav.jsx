import { MdLocalPhone } from "react-icons/md"
import cart from '../assets/shopping-cart.png'
import { Theme } from "./Theme"
import { Links, NavLink } from "react-router-dom"
import { GoSearch } from "react-icons/go"
import { FiUser } from "react-icons/fi"
import { BsCart, BsCartPlus } from "react-icons/bs"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export const Nav = ()=>
    {
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
            },
        ];
         const [menu , setMenu] = useState(false);
        return(
            <>
            <div className=" z-60">
                <div  className="bg-[#003d29] text-white flex justify-between space-x-8 w-full py-1.5 px-2 md:px-10">
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
                </div>

{/* mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm */}

                <div className="flex justify-between py-5 px-8 max-sm:px-2">
                    <div className="flex space-x-1.5">
                        <img src={cart} className="w-10"/>
                    <h1 className="text-[#003d29] text-3xl font-bold">ShopCart </h1>
                    </div>

                    <div className="flex space-x-4 mt-1.5 max-sm:hidden">
                        {navlinks.map(link=><NavLink>{link.name}</NavLink>)}
                    </div>

                    <div className=" flex ">
                        
                            <input type="text" className="rounded-full outline-1 outline-gray-300 focus:outline-indigo-500 px-2 w-70 max-sm:hidden"
                            placeholder="Search product"
                            />  
                    </div>

                    <div className="flex space-x-6 max-sm:space-x-3 mt-1.5 ">
                        <div className="flex space-x-2 font-semibold">
                            <FiUser className="mt-1"/>
                            <span className="max-sm:hidden">Account</span>
                        </div>

                        <div className="flex space-x-2 font-semibold">
                            <BsCartPlus className="mt-1"/>
                            <span  className="max-sm:hidden">Cart</span>
                        </div>
                        
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