import { Link } from 'react-router-dom'
import cart from '../assets/shopping-cart.png'
import pay1 from '../assets/pay1.png'
import pay2 from '../assets/pay2.png'
import pay3 from '../assets/pay3.png'
import pay4 from '../assets/pay4.png'
import pay5 from '../assets/pay5.png'
import pay6 from '../assets/pay6.png'
import pay7 from '../assets/pay7.png'
import pay8 from '../assets/pay8.png'
import { FaBriefcase, FaGift } from 'react-icons/fa'
import { IoMdHelpCircleOutline } from 'react-icons/io'
import { PiGiftFill } from 'react-icons/pi'
import { BsGiftFill } from "react-icons/bs";



export const Footer = ()=>
    {

        const departments =[
            {name:"Fashion"},
            {name:"Education Product"},
            {name:"Frozen Food"},
            {name:"Beverages"},
            {name:"Organic Grocery"},
            {name:"Office Supplies"},
            {name:"Beauty Products"},
            {name:"Books"},
            {name:"Electronics & Gadget"},
            {name:"Travel Accessories"},
            {name:"Fitness"},
            {name:"Furniture"},
            {name:"Sneakers"},
            {name:"Toys"},
        ];

         const about =[
            {name:"About shopcart"},
            {name:"Careers"},
            {name:"News & Blog"},
            {name:"Help"},
            {name:"Press Center"},
            {name:"Shop by location"},
            {name:"Shopcart brands"},
            {name:"Affiliate & Partners"},
            {name:"Ideas & Guides"},
        ];

        const Services =[
            {name:"Gift Card"},
            {name:"Mobile App"},
            {name:"Shipping & Delivery"},
            {name:"Order Pickup"},
            {name:"Account Signup"},
        ];

        const help =[
            {name:"Shopcart Help"},
            {name:"Returns"},
            {name:"track orders"},
            {name:"contact us"},
            {name:"feedback"},
             {name:"Security & Fraud"},
        ];

        const payments =[
            {img:pay1},
            {img:pay2},
            {img:pay3},
            {img:pay4},
            {img:pay5},
             {img:pay6},
             {img:pay7},
             {img:pay8},
        ];

        return(
        <>
        <hr className='mx-30 text-gray-300' />
        <footer className='py-5'>
            <div className="grid grid-cols-6 gap-4 p-10 space-x-10">
            <div className='space-y-6 col-span-2'>
                 <div className="flex space-x-1.5">
                    <img src={cart} className="w-10"/>
                    <h1 className="text-[#003d29] text-3xl font-bold">ShopCart </h1>
                </div>

                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                <div className='space-y-4'>
                    <h2 className='font-bold text-lg'>Accepted Payments</h2>
                    <div className='grid grid-cols-4 gap-2 w-60'>
                        {payments.map(pay=>
                        <div className='p-1.5 flex justify-center outline outline-gray-300 dark:outline-gray-600 bg-amber-50 rounded-sm'>
                            <img src={pay.img}className='' />
                        </div>)}
                    </div>
                </div>
            </div>
           

            <div className='space-y-6'>
                <h2 className='font-bold text-xl'>Department</h2>
                <div className='flex flex-col space-y-2'>
                    {departments.map(dep=><Link className='hover:text-red-400 hover:translate-x-4 duration-500 hover:font-semibold'>{dep.name}</Link>)}
                </div>
            </div>

            <div className='space-y-6'>
                <h2 className='font-bold text-xl'>About us</h2>
                <div className='flex flex-col space-y-2'>
                    {about.map(dep=><Link className='hover:text-red-400 hover:translate-x-4 duration-500 hover:font-semibold '>{dep.name}</Link>)}
                </div>
            </div>

            <div className='space-y-6'>
                <h2 className='font-bold text-xl'>Services</h2>
                <div className='flex flex-col space-y-2'>
                    {Services.map(dep=><Link className='hover:text-red-400 hover:translate-x-4 duration-500 hover:font-semibold'>{dep.name}</Link>)}
                </div>
            </div>

            <div className='space-y-6'>
                <h2 className='font-bold text-xl'>Help</h2>
                <div className='flex flex-col space-y-2'>
                    {help.map(dep=><Link className='hover:text-red-400 hover:translate-x-4 duration-500 hover:font-semibold'>{dep.name}</Link>)}
                </div>
            </div>

        </div>
        <hr className='mx-10 text-gray-300'/>
        <div className='flex justify-between p-10 space-x-12 font-semibold'>

            <div className='space-x-6 flex'>

                <div className='flex space-x-1.5'>
                    <FaBriefcase className='text-[#c34482]'/>
                    <Link className='hover:text-red-400 duration-500'>Become Seller</Link>
                </div>

                <div className='flex space-x-1.5'>
                    <BsGiftFill className='text-[#c34482]' />
                    <Link className='hover:text-red-400 duration-500'>Gift Cards</Link>
                </div>
            
                <div className='flex space-x-1.5'>
                    <IoMdHelpCircleOutline className='text-[#c34482]'/>
                    <Link className='hover:text-red-400 duration-500'>Help Canter</Link>
                </div>
            </div>
           

            <div className='space-x-4'>
                <Link className='hover:text-red-400 duration-500'>Terms of Service</Link>
                <Link className='hover:text-red-400 duration-500'>Privacy & Policy</Link>
            </div>

            <div>
                <p>All Right reserved by Mustafa-Mohamed design agency | 2026</p>
            </div>
        </div>
        </footer>
        
        </>
        )
    }