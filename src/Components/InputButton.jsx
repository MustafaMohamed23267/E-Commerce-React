// import { useRef } from "react"

// export default function InputButton()
// {
//     const inputRef = useRef();
    
    
//     return(
//     <>
//                 <input
//                 ref={inputRef}
//                 type="file"
//                 className="hidden"
//                 />

//                 <button
//                     type="button"
//                     onClick={() => inputRef.current.click()}
//                     className="bg-green-600 hover:bg-green-700 cursor-pointer text-white w-8 h-8 flex justify-center  rounded-full duration-500 "
//                 >
//                 <span className="text-xl">+</span>
//                 </button>
//     </>
//    )
// }


// import { MdDelete } from "react-icons/md";

// import { useRef, useState } from "react";

// export default function UploadImage() {
//   const inputRef = useRef();
//   const [preview, setPreview] = useState(null);

//   const handleImage = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <>
//       <input
//         ref={inputRef}
//         type="file"
//         accept="image/*"
//         hidden
//         onChange={handleImage}
//       />

//       {/* <div className="w-full h-70 bg-gray-200 dark:bg-white/15 rounded-lg overflow-hidden relative"></div> */}
//         {preview ? (
//              <div className="overflow-hidden relative w-full h-full ">
//                  <button className="w-full h-full opacity-0 hover:opacity-100 cursor-pointer absolute flex justify-center items-center hover:bg-gray-400/30 duration-500 text-red-500  text-4xl"
//                             onClick={()=>setPreview(null)}
//                             >
                               
//                                 <MdDelete/>
//                             </button>
//           <img
//             src={preview}
//             alt="Preview"
//             className="w-full h-full object-cover"
//           />
          
//           </div>
//         ) : (
//           <div className="w-full h-full flex justify-center items-center">
//             <button
//               type="button"
//               onClick={() => inputRef.current.click()}
//               className="w-12 h-12 rounded-full bg-green-500 cursor-pointer text-white text-2xl hover:bg-green-700 duration-500"
//             >
//               +
//             </button>
//           </div>
//         )}
      
//     </>
//   );
// }


import { useRef, useState } from "react";
import { MdDelete } from "react-icons/md";

export default function UploadImage() {
  const inputRef = useRef();
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (preview) URL.revokeObjectURL(preview);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleImage}
      />

      {preview ? (
        <div className="relative w-full h-full overflow-hidden group">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover"
          />

          <button
            type="button"
            onClick={removeImage}
            className="absolute inset-0 flex items-center justify-center
                       opacity-0 group-hover:opacity-100
                       bg-black/40 duration-500
                       text-red-500 text-4xl cursor-pointer"
          >
            <MdDelete />
          </button>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center ">
          <button
            type="button"
            onClick={() => inputRef.current.click()}
            className="w-12 h-12 rounded-full bg-green-500
                       hover:bg-green-700 duration-500
                       text-white text-2xl cursor-pointer"
          >
            +
          </button>
        </div>
      )}
    </>
  );
}