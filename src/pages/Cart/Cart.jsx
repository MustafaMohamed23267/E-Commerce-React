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

            <div className="px-10 pt-5">
                <section >
                    <h2 className="text-[#003d29] text-4xl">
                        Your Cart
                    </h2>
                </section>
            </div>
            
        </main>
        
        </>
    )
}