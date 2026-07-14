import { useState } from "react";
import { Nav } from "../../Components/Nav";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Cart()
{

    const[count , setCount] = useState(1);

    const price  = 100;
    const total = price*count;

    const countfun = ()=>
        {
             if(count>1){setCount(count-1)}
                                            else{setCount(1)}
        }

    return(
        <>
        <Nav/>

        <main className="pt-20 space-y-5">
            <div className="flex space-x-2 py-5 px-10">
                <span className="text-[#003d29] dark:text-[#01a770] text-md font-bold">Home {'>'}</span>
                <span className="text-orange-500 text-md font-bold">Your Shopping Cart</span>
            </div>
            <div className="px-10">
                <hr className="text-gray-300"/>
            </div>

            <div className=" flex px-10 pt-5 space-x-4">
                <section className="space-y-5 w-[65%]">
                    <h2 className="text-[#003d29] text-4xl">
                        Your Cart
                    </h2>

                    <table className="w-full px-6">
                        <thead className="border-b border-gray-300">
                            <tr className="flex space-x-16 text-[#003d29] font-semibold pb-2">
                                <td className="w-80">products</td>
                                <td>Price</td>
                                <td className="w-30">Quantity</td>
                                <td>total</td>
                            </tr>
                        </thead>

                        <tbody className="pt-4">
                            <tr className="flex space-x-16 text-[#003d29] font-semibold py-4">
                                <td className="w-80">image</td>
                                <td>{price}</td>

                                <td className="w-30 flex  space-x-4">
                                    <div className="flex justify-around w-15 rounded-full outline outline-gray-400">
                                        <button 
                                        className="cursor-pointer "
                                        onClick={()=>setCount(count+1)}
                                        >+</button>
                                        <span>{count}</span>
                                        <button
                                        className="cursor-pointer "
                                        onClick={countfun}
                                        >-</button>

                                    </div>
                                    <button 
                                    className="rounded-full p-1 outline outline-gray-400 cursor-pointer  "
                                    ><RiDeleteBin5Line/></button>
                                </td>

                                <td>
                                    {total}
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </section>


                <section className="space-y-5 w-[30%] h-90 rounded-xl bg-[#003d29]">

                </section>
            </div>
            
        </main>
        
        </>
    )
}