
import React from "react";
import { useState } from "react";
import "./../css/taskstyle.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'tw-elements';

export default function Taskdata() {

    const [selectedDate, setselecteDdate]=useState(new Date())
    const[task,SetTask]=useState('');
    const[status,SetStatus]=useState('');
    const[remarks,SetRemarks]=useState(''); 
    console.log("page refresh")
    const [get,setGet]=useState([])
    console.log(get)

    const saveData=(e)=>{
        e.preventDefault()
        const myjson={
            selectedDate:selectedDate.toDateString(),
            task:task,
            status:status,
            remarks:remarks
        }
      
        setGet(current => [...current, myjson])
    }


    const handledelete=(index,e)=>{
       const dleteditem=get.filter((v,i) =>i!==index);
    setGet(dleteditem)
    }
    

    const handleedit=(item)=>{

    setselecteDdate(item.selectedDate)
    SetTask(item.task)
    SetStatus(item.status)
    SetRemarks(item.remarks)
    }
  return (
    <div>
          <div class=" flex justify-center my-8 m-12">
        <div class=" bg-blue-600 flex justify-center py-1 w-28 rounded ">
          <button
            type="button"
            class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Addnew
          </button>
        </div>
      </div>
      <div className="my-8">
        <div className="TableDiv" style={{ margin: "5px 20px;" }}>
          <div className="table-responsive">
            <table className="Table">
              <thead>
                <tr>
                  <th className="TableThShort">Date</th>
                  <th className="TableThLong">Task</th>
                  <th className="TableThShort">Status</th>
                  <th className="TableThLong">Remarks</th>
                  <th className="TableThShort" style={{ textAlign: "center" }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {get.map((item,index)=>
                <tr
                  key={index}
                >
                  <td className="TableTdShort">
                    {item.selectedDate}
                  </td>
                  <td className="TableTdLong">
                    <div className="TableCss">
                      {item.task} 
                    </div>
                  </td>
                  <td className="TableTdShort">
                    {item.status}
                  </td>
                  <td className="TableTdLong">
                    <div className="TableCss">
                      {item.remarks}
                    </div>
                  </td>
                  <td className="TableTdShort" style={{ textAlign: "center" }}>
                    <AiFillEdit className="EditIcon"  data-bs-dismiss="modal"  onClick={()=>handleedit(item,index)} />
                    <AiFillDelete className="DeleteIcon" onClick={(e)=>handledelete(index,e)} />
                  </td>
                </tr>
                 )}      
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='bg-[#38bdf81a] h-[100vh]'>
    <div class="">
      <div className='flex justify-center '>

      <div className='p-5 justify-center border bg-[#fff] mt-[150px]  border-[#ccc] w-[30%] rounded-lg'>

      <div className='w-[100%] pb-4'>
      <label  class="form-label inline-block mb-2 text-gray-700">Choose Date:</label>
      <div className="border-solid border-2 ml-5 border-[#ccc]  ">
                <DatePicker className='inputtext' 
                    selected={selectedDate}
                    onChange={date=>setselecteDdate(date)}
                    dateFormat='dd/MM/yyyy'
                    value={selectedDate} 
                     />
                </div>
      </div>
      <div className='w-[100%]'>
      <label  class="form-label inline-block mb-2 text-gray-700">Task:</label>
  <input
    type="text"
    class=" form-control block w-full py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    placeholder="Task"
    value={task} onChange={e=>SetTask(e.target.value)}
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
<button>New Register</button>
</div>
      </div>
      </div>

      </div>
   
  </div>
  </div>
    </div>
  )
}
