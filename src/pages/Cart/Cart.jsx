import { Nav } from "../../Components/Nav";

export default function Cart()
{

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

                        <tbody>
                            <tr>
                                <td>image</td>
                                <td></td>
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