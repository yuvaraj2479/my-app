import React from "react";
import { useState } from "react";
import "./../css/taskstyle.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'tw-elements';

function Task() {
 
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

      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                class="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                Task
              </h5>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body relative p-4">
            <div class=" xl:w-96  flex py-3 pt-8 ">
            <label class="form-label inline-block mb-2 text-gray-700">
                  Choose Date:
                </label>   
                <div className="border-solid border-2 ml-5 border-[#ccc]  ">
                <DatePicker className='inputtext' 
                    selected={selectedDate}
                    onChange={date=>setselecteDdate(date)}
                    dateFormat='dd/MM/yyyy'
                    value={selectedDate} 
                     />
                </div>

            </div>
              <div class=" xl:w-96 py-3">
                <label class="form-label inline-block mb-2 text-gray-700">
                  Task Name:
                </label>
                <input
                  type="text"
                  class="form-control block w-full  py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                  placeholder="Task"
                  value={task} onChange={e=>SetTask(e.target.value)}
                />
              </div>
              <div class=" xl:w-96 ">
     <label class="form-label inline-block mb-2 text-gray-700">Status:</label>
     <div className="flex">
    <div class="form-check px-4 pb-6">
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="Done"  value="DONE"
        checked={status==="DONE"}
        onChange={(e)=>SetStatus(e.target.value)}/>
      <label class="form-check-label inline-block text-gray-800" for="Done">
        Done
      </label>
    </div>
    <div class="form-check  px-4">
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="Inprogress"
        value="INPROGRESS"
        checked={status==="INPROGRESS"}
        onChange={(e)=>SetStatus(e.target.value)}
      />
      <label class="form-check-label inline-block text-gray-800" for="Inprogress">
        Inprogress
      </label>
    </div>
    <div class="form-check px-4">
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="ONHold"
       value="ONHOLD"
        checked={status==="ONHOLD"}
        onChange={(e)=>SetStatus(e.target.value)}
      />
      <label class="form-check-label inline-block text-gray-800" for="ONHold">
        ONHold
      </label>
    </div>
  </div>
  </div>
    
<div class=" xl:w-96">
<label  class="form-label inline-block mb-2 text-gray-700">Description:</label>
<textarea
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder="Your message"
      value={remarks} onChange={e=>SetRemarks(e.target.value)}
    ></textarea>
    
</div>
            </div>
            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                class="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
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
      ease-in-out
      ml-1"
      data-bs-dismiss="modal"
      onClick={(e)=>saveData(e)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Task;
