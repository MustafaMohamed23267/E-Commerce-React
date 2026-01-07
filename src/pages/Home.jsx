import { Nav } from "../Components/Nav";
import commerce from '../assets/commerce11.jpg';
export default function Home()
{
    return(
    <>
    <Nav/>
    <section>
        <img src={commerce} className=" w-fit h-full absolute z-0" />
        <div className="absolute z-10 pt-40 pl-10">
            <h2 className="text-[#003d29] text-7xl font-bold">shopping and <br/>
                department store.</h2>

                <p className="py-10 text-xl">Shopping is a bit of a relaxing hobby for me, which<br/>
                 is sometimes troubling for the bank balance.</p>

                 <button className="px-8 py-4 rounded-full bg-[#003d29] text-white cursor-pointer hover:bg-[#036846] duration-500">Learn More</button>
        </div>
    </section>
    </>
    
)
    
}