import {  CloudSun, Moon, Stars, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { BsCloudsFill, BsStar, BsStars } from "react-icons/bs";
import { WiStars } from "react-icons/wi";

export const Theme =()=>
    {
        const [isDark , setIsDark]=useState(false);

        const themetoggle =()=>{
        if(isDark)
            {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme","light");
                setIsDark(false);
            }
            else
                {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("theme","dark");
                    setIsDark(true);
                }
            }
            useEffect(()=>
              {
                const StoredTheme = localStorage.getItem("theme");
                  if(StoredTheme === "dark")
                    {
                       setIsDark(true);
                       document.documentElement.classList.add("dark");
                    }
                    else
                    {
                        document.documentElement.classList.remove("dark");
                        localStorage.setItem("theme","light");
                    }

               },[])
        

           return(
            <div className="flex space-x-2.5 w-fit">
                <span className={`${isDark?"font-bold":"text-gray-500"}`}>Dark</span>
                 <button className={`cursor-pointer  ${isDark?"pr-6 pl-1 bg-linear-to-r from-slate-400 to-slate-900 ":"pl-6 pr-1 bg-linear-to-l from-sky-200 to-sky-500"} hover:scale-[1.1] duration-700 py-1 transition-colors rounded-full focus:outline-hidden `} onClick={themetoggle}>
                {isDark?
                <div  className="flex space-x-2 duration-500">
                    <div  className="h-6 w-6  bg-white rounded-full  "/> 
                    <BsStars/>
                </div>
                :<div className="flex space-x-2 duration-500">
                    <BsCloudsFill className="text-white"/>
                    
                    <div className="h-6 w-6 -right  duration-500 bg-yellow-400 rounded-full" />
                </div>
                
                }
            </button>
            <span className={`${isDark?" text-gray-500":"font-bold"}`}>Light</span>
            </div>
           
           )

    }