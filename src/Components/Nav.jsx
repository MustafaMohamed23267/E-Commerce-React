import { MdLocalPhone } from "react-icons/md"
import cart from '../assets/shopping-cart.png'
import { Theme } from "./Theme"
import { Links, NavLink } from "react-router-dom"
import { GoSearch } from "react-icons/go"
import { FiUser } from "react-icons/fi"
import { BsCart, BsCartPlus } from "react-icons/bs"

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
        ]
        return(
            <>
            <div>
                 <div  className="bg-[#003d29] text-white flex justify-between w-full py-1.5 px-10">
                <div className="flex space-x-1.5"> 
                    <MdLocalPhone className="mt-1"/>
                    <span>+201110792037</span>
                </div>

                <div className="space-x-5">
                    <span>Get 50% Off on Selected Items</span>
                    <span>|</span>
                    <span>Shop Now</span>
                </div>

                <div className="space-x-4">
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

                <div className="flex justify-between py-5 px-8">
                    <div className="flex space-x-1.5">
                        <img src={cart} className="w-10"/>
                    <h1 className="text-[#003d29] text-3xl font-bold">ShopCart </h1>
                    </div>

                    <div className="flex space-x-4 mt-1.5">
                        {navlinks.map(link=><NavLink>{link.name}</NavLink>)}
                    </div>

                    <div className=" flex ">
                        
                            <input type="text" className="rounded-full outline-1 outline-gray-300 focus:outline-indigo-500 px-2 w-70"
                            placeholder="Search product"
                            />  
                    </div>

                    <div className="flex space-x-6 mt-1.5">
                        <div className="flex space-x-2 font-semibold">
                            <FiUser className="mt-1"/>
                            <span>Account</span>
                        </div>

                        <div className="flex space-x-2 font-semibold">
                            <BsCartPlus className="mt-1"/>
                            <span>Cart</span>
                        </div>
                        
                    </div>

                    <div className="mt-1"><Theme/></div>
                </div>
            </div>
           
            </>
        )
    }