
export const Loading =()=>{


  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white dark:bg-black">


      <div className="mt-6 text-gray-600 dark:text-gray-400 flex space-x-2 animate-pulse">
            <span className="text-xl px-2 text-[#003d29]  animate-bounce [animation-delay:-0.3s] ">Loading</span>
            <div className="flex space-x-2">
            <span className="w-4 h-4 bg-[#003d29]  rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-4 h-4 bg-[#003d29]  rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-4 h-4 bg-[#003d29]  rounded-full animate-bounce"></span>
            </div>
      </div>

    </div>
  );
}
