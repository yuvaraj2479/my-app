import React from 'react'
import { useNavigate } from "react-router-dom";


export default function Newuser() {
  let navigate = useNavigate();

const handleregister=()=>{
  
  navigate('/login')
}

  return (
    <div className='bg-[#38bdf81a] h-[100vh]'>
    <div class="">
      <div className='flex justify-center '>

      <div className='p-5 justify-center border bg-[#fff] mt-[150px]  border-[#ccc] w-[30%] rounded-lg'>

      <div className='w-[100%] pb-4'>
      <label  class="form-label inline-block mb-2 text-gray-700">User ID:</label>
      <input
        type="text"
        class="form-control block w-full  py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
        placeholder="user id"
             />
      </div>
      <div className='w-[100%]'>
      <label  class="form-label inline-block mb-2 text-gray-700">User Name:</label>
  <input
    type="text"
    class=" form-control block w-full py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    placeholder="User Name"
  />
      </div>
      <div className='w-[100%] pt-4'>
      <label  class="form-label inline-block mb-2 text-gray-700">Email :</label>
  <input
    type="email"
    class=" form-control block w-full py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    placeholder="E-mail"
  />
      </div>
      <div className='w-[100%] pt-4'>
      <label  class="form-label inline-block mb-2 text-gray-700">password :</label>
  <input
    type="password"
    class=" form-control block w-full py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    placeholder="Password"
  />
      </div>
      <div className='flex justify-center m-5 mb-0 w-[100%]'>
      <div class="bg-blue-600 flex justify-center py-1 w-28 rounded text-[#fff]">
<button  onClick={()=>handleregister()}>New Register</button>
</div>
      </div>
      </div>

      </div>
   
  </div>
  </div>
  )
}
