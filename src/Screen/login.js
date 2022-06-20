import React from 'react';
import  {useState} from 'react';
import { useNavigate } from "react-router-dom";


 function Login(){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    let navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault()
     const myjson={
      email:email,
      password:password
     }
     console.log(myjson)
     navigate('/task')
  }

    return(
      <div>
      <div class="my-60">
      <div class="flex justify-center">
      <div class=" xl:w-96 " >
        <label  class="form-label inline-block mb-2 text-gray-700">Email:</label>
        <input
          type="email"
          class="form-control block w-full  py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      </div>
    <div class="flex justify-center my-4">
    <div class=" xl:w-96">
    <label  class="form-label inline-block mb-2 text-gray-700">Password:</label>
    <input
      type="password"
      class=" form-control block w-full py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
    />
  </div>
  </div>
  <div class="flex justify-center my-14">
    <div class="bg-blue-600 flex justify-center py-1 w-28 rounded">
  <button onClick={(e)=>handleSubmit(e)}>Login</button>
  </div>
  </div>
    </div>
    </div>
    
    )
}
export default Login;