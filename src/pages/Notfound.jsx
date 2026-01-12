import { Link } from 'react-router-dom'
// import bladerunner from '../assets/not.jpg'

export default function NotFound()
// export const NotFound = ()=>
    {
        return(
            <div className='relative h-screen w-screen overflow-hidden'>
                {/* <img src={bladerunner} className=' absolute w-screen h-screen z-0'  /> */}
                <div className='absolute w-full h-full bg-black/80'></div>
                    <div className="text-center relative h-screen flex flex-col items-center justify-center">
                        <p className=" font-bold text-[#036846] text-7xl">404</p>
                        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Page not found</h1>
                        <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link to="/" className="rounded-md bg-[#036846] px-6 py-4 text-sm font-semibold text-white shadow-xs hover:bg-[#06aa73] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 duration-500">Go back home</Link>
                        <a href="#" className="text-sm font-semibold text-white">Contact support <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                
            </div>
        )
    }