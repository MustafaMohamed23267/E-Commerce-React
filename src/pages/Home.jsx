import { Nav } from "../Components/Nav";
import commerce from '../assets/commerce11.jpg';
import sneakers from '../assets/sneak.png';
import travel from '../assets/travel.png';
import tech from '../assets/tech.png';
import books from '../assets/books.png';
import hand from '../assets/hand.png';
import fu from '../assets/fu.png';
import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';
import four from '../assets/4.png';
import five from '../assets/5.png';

import b1 from '../assets/b1.png';
import b2 from '../assets/b2.png';
import b3 from '../assets/b3.png';
import b4 from '../assets/b4.png';
import b5 from '../assets/b5.png';
import b6 from '../assets/b6.png';
import b7 from '../assets/b7.png';
import b8 from '../assets/b8.png';

import off1 from '../assets/off1.png';
import off2 from '../assets/off2.png';
import off3 from '../assets/off3.png';
import off4 from '../assets/off4.png';

import room from '../assets/room2.jpg';

import { BiHeart } from "react-icons/bi";
import { Footer } from "../Components/Footer";





export default function Home()
{
    const images = [
        {name:"Sneakers",
         image:sneakers
        },
        {name:"Travel",
         image:travel},
        {name:"Tech",
         image:tech},   
        {name:"Books",
         image:books},
        {name:"Hand Bag",
         image:hand},
        {name:"Furniture",
         image:fu},
    ];

     const products = [
        {
        name:"HomePod mini",
        price:"239",
        desc:"Table with air purifier, stained venner,black",
        image:one
        },
        {
        name:"Instax Mini 9",
        price:"99",
        desc:"Selfie mode and selfie mirror, Macro mode ",
        image:two
        },
        {
        name:"Base Camp Duffel M",
        price:"159",
        desc:"Table with air purifier, stained venner,black",
        image:three
        },
        {
        name:"Base Camp Duffel M",
        price:"159",
        desc:"Table with air purifier, stained venner,black",
        image:four
        },
        {
        name:"Base Camp Duffel M",
        price:"159",
        desc:"Table with air purifier, stained venner,black",
        image:five
        },
        
    ]

    const brand =[
        {
            name:"Staples",
            image:b1
        },
        {
            name:"Sprouts",
            image:b2
        },
        {
            name:"Grocery outlet",
            image:b3
        },
        {
            name:"Mollie stones",
            image:b4
        },
        {
            name:"Sports Basement",
            image:b5
        },
        {
            name:"Container Store",
            image:b6
        },
        {
            name:"Target",
            image:b7
        },
        {
            name:"Bevmo!",
            image:b8
        },
    ]

    const off= [
        {off:"100",
            img:off1,
            bg:"teal"
        },
        {off:"29",
            img:off2,
            bg:"purple"
        },
        {off:"67",
            img:off3,
            bg:"lime"
        },
        {off:"50",
            img:off4,
            bg:"rose"
        },
    ]

    const filter = [
        {name:"Gadgets"},
        {name:"Fashion"},
        {name:"Toys"},
        {name:"Education"},
        {name:"Beauty"},
        {name:"Fitness"},
        {name:"Sneakers"},
    ]

    return(
    <>
    <Nav/>
    <main className="max-sm:w-full">
        <section className=" flex flex-col max-sm:w-screen">
        <img src={commerce} className=" w-full max-sm:w-full h-screen z-0" />
        <div className="absolute z-10 pt-40 max-sm:pt-20 pl-10 max-sm:w-60">
            <h2 className="text-[#003d29] text-7xl font-bold max-sm:text-4xl">shopping and <br/>
                department store.</h2>

                <p className="py-10 text-xl max-sm:text-sm text-gray-600">Shopping is a bit of a relaxing hobby for me, which<br/>
                 is sometimes troubling for the bank balance.</p>

                 <button className="px-8 py-4 rounded-full bg-[#003d29] text-white cursor-pointer hover:bg-[#036846] duration-500">Learn More</button>
        </div>
        </section>
        
        <section className="md:px-10 px-4 py-30 ">
            <h2 className="font-bold text-4xl z-10">Shop our top categories</h2>

            <div className="grid grid-cols-6 py-6 gap-5 max-sm:grid-cols-2">

                {images.map(cat=>
                <button className="rounded-2xl appear w-fit overflow-hidden relative cursor-pointer">
                    <p className="absolute left-12 top-2.5 font-bold text-xl z-10 text-white">{cat.name}</p>
                    <img src={cat.image} className="hover:scale-120 duration-500 rounded-2xl" />
                </button>)}

            </div>
        </section>

        <section className="px-10 pb-10 appear">
             <h2 className="font-bold text-4xl z-10">Weekly Popular Products</h2>

             <div className="flex flex-nowrap gap-4 overflow-x-scroll space-x-4 p-5 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
                {products.map(pro=>
                    <div className="space-y-6 shrink-0 ">
                    <div className="bg-gray-200 dark:bg-gray-950 rounded-md relative px-8 ">
                        <img src={pro.image} className="hover:scale-110 duration-500 cursor-pointer"/>
                        <div className="absolute bg-amber-50 rounded-full p-1 top-2 right-2 text-2xl hover:text-rose-600 cursor-pointer duration-700 dark:bg-gray-900"><BiHeart/></div>
                        
                    </div>
                    <div className="flex justify-between text-lg font-semibold">
                        <p>{pro.name}</p>
                        <p><sup className="text-sm ">$</sup>{pro.price} <sup className="text-sm ">.00</sup></p>
                    </div>
                    <p className="text-sm">{pro.desc}</p>

                    <button className="px-6 py-2 border duration-500 rounded-full cursor-pointer hover:bg-[#036846] hover:text-white hover:border-[#036846]">Add to Cart</button>
                    </div>
                )}
                

             </div>

            
        </section>

         <section className="px-10 py-10 space-y-5 ">
             <h2 className="font-bold text-4xl z-10">Choose By Brand</h2>

             <div className="grid grid-cols-4 gap-4 space-x-4 max-sm:grid-cols-2 ">
                {brand.map(bra=>
                    <div className="flex w-full space-x-3 border border-background items-center hover:border hover:border-foreground rounded-lg px-3 py-5 bg-gray-100 duration-500 dark:bg-gray-950 appear">
                        <div><img src={bra.image} className="hover:scale-130 duration-500" /></div>
                        <div className="space-y-2">
                            <p className="font-bold">{bra.name}</p>
                            <p className="text-sm">Delivery with in 24 hours</p>
                        </div>
                    </div>
                )}
                

             </div>

            
        </section >

        <section className="px-10 py-10 space-y-10 ">
            <h2 className="font-bold text-4xl z-10">Get Up to 70% off</h2>

            <div className="grid grid-cols-4 gap-6 max-sm:grid-cols-1">
                {off.map(o=>
                <div className={` overflow-hidden rounded-2xl space-y-4 bg-${o.bg}-100 appear`}>
                    <div className={` p-5  space-y-4` }>
                        <p className="font-bold text-3xl text-gray-700">Save</p>
                        <p className={`text-${o.bg}-900 font-bold text-5xl`}><sup className="text-lg">$</sup>{o.off}</p>
                        <p className="font-medium text-gray-950">Explore Our Furniture & Home Furnishing Range</p>
                    </div>
                    <div className="overflow-hidden">
                       <img src={o.img} className="w-full hover:scale-125 duration-700" />

                    </div>
                </div>
               )}
            </div>
        </section>

        <section className="my-10  relative ">
                <img src={room} className="w-full h-full appear2 max-sm:h-120" />
            
            

            <div className="absolute bg-[#003d29] md:w-130 md:h-110 max-sm:mx-3  top-20 right-10 max-sm:top-5 max-sm:right-1 p-14 max-sm:p-8 space-y-10">
                <h2 className="text-5xl text-white font-bold max-sm:text-4xl">Get 5% Cash back on $200</h2>
                <p className="text-xl max-sm:text-xl text-white">Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                <button className="rounded-full py-3 px-8 text-white border border-white hover:bg-gray-800 hover:border-gray-800 duration-500 text-xl max-sm:text-md cursor-pointer">Learn More</button>
            </div>
        </section>

        <section className="space-y-10 p-5">
              <h2 className="font-bold text-4xl z-10">Todays Best Deals for you!</h2>

              <div className="flex space-x-3">
                {filter.map(fi=>
                <button className="outline outline-gray-300 rounded-full px-4 py-2 font-medium cursor-pointer">{fi.name}</button>
                )}
              </div>

             <div className="flex flex-wrap gap-4  space-x-4 p-5 ">
                {products.map(pro=>
                    <div className="space-y-6 shrink-0 appear ">
                    <div className="bg-gray-200 dark:bg-gray-950 rounded-md relative px-8 ">
                        <img src={pro.image} className="hover:scale-110 duration-500 cursor-pointer"/>
                        <div className="absolute bg-amber-50 rounded-full p-1 top-2 right-2 text-2xl hover:text-rose-600 cursor-pointer duration-700 dark:bg-gray-900"><BiHeart/></div>
                        
                    </div>
                    <div className="flex justify-between text-lg font-semibold">
                        <p>{pro.name}</p>
                        <p><sup className="text-sm ">$</sup>{pro.price} <sup className="text-sm ">.00</sup></p>
                    </div>
                    <p className="text-sm">{pro.desc}</p>

                    <button className="px-6 py-2 border duration-500 rounded-full cursor-pointer hover:bg-[#036846] hover:text-white hover:border-[#036846]">Add to Cart</button>
                    </div>
                )}
                

             </div>
        </section>
    </main>

    <Footer/>
    
    </>
    
)
    
}