import { IoStorefront } from "react-icons/io5";
import { Nav } from "../../../Components/Nav";
import InputButton from "../../../Components/InputButton";
import { MdDelete } from "react-icons/md";

export default function AddProducts()
{


    

    const inputstyle = " px-2 py-3 bg-gray-200 dark:bg-white/25 rounded-lg focus:outline-sky-300";
    return(
        <>
        <Nav/>
        <main className="pt-30 px-5 space-y-12 pb-10">
            <div className="flex justify-between ">
                 <h2 className="flex space-x-2 text-xl font-bold items-baseline">
                    <span><IoStorefront/></span>
                    <span >Add New Product</span>
                </h2>

                <button 
                className="px-4 py-3 rounded-full bg-green-300 cursor-pointer hover:scale-[1.03] duration-500 text-gray-900"
                >
                    ✓ Add Product 
                </button>
            </div>
            
            <div className=" flex justify-around max-sm:flex-col space-y-6">
            <section className="px-5 space-y-6 lg:w-[60%] h-screen bg-gray-100 rounded-lg  dark:bg-white/5">
               
                <div className="px-3 flex flex-col space-y-6 p-4">
                    <div className="space-y-4">
                         <h3 className="font-semibold text-lg">General Information</h3>

                    <form className="flex flex-col space-y-3">
                        <div className="flex flex-col space-y-1.5">
                             <label>Product Name </label>
                             <input 
                             type="text" 
                             name="productName" 
                             placeholder="enter name of product........"
                             className={inputstyle}
                             />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                             <label>Product Description </label>
                             <textarea 
                              
                             name="description" 
                             placeholder="enter description of product........"
                             className={inputstyle}
                             ></textarea>
                        </div>
                       
                    </form>
                    </div>

                    <div className="space-y-3 overflow-hidden">
                        <h3 className="font-semibold text-lg">Pricing and Stock</h3>
                         <form className="flex justify-between space-x-2">
                        <div className="flex flex-col space-y-1.5">
                             <label>Price </label>
                             < input
                              type="number"
                             name="price" 
                             className={`${inputstyle} lg:w-xs`}
                             />
                        </div>

                        <div className="flex flex-col space-y-1.5">
                             <label>Stock </label>
                             < input
                              type="number"
                             name="stock" 
                             className={`${inputstyle} lg:w-xs max-w-md`}
                             />
                        </div>
                       
                    </form>
                    </div>
                   
                </div>


              
                


            </section>

            <section className="lg:w-[30%] bg-gray-100 h-screen rounded-lg dark:bg-white/5 p-5 space-y-6">
            <h2 className="font-bold text-xl">Upload Image</h2>

            <div className="overflow-hidden relative w-full h-90 bg-gray-200 dark:bg-white/15 rounded-lg flex justify-center items-center">
            <InputButton/>
            </div>
            
            
            
            


            <div className="flex space-x-3">
                {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="overflow-hidden relative w-18 h-18 rounded-lg bg-gray-200 dark:bg-white/15 flex justify-center items-center">
                <InputButton/>
                </div>
                ))}

                
            </div>
                
            
               
                
            

            </section>
            </div>
            
        </main>
        </>
    )
}