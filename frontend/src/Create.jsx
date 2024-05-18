import React,{useState} from 'react'
import axios from 'axios'

function Create() {
    const [task,setTask] = useState()
    const handleTask = () =>{
        axios.post('http://127.0.0.1:3001/add',{task:task})
        .then(result => location.reload())
        .catch(err => console.log(err))

    } 

  return (
    <div className="create_form">
        <input type="text" placeholder="Enter the task" onChange={(e)=>setTask(e.target.value)}/>
        <button type="button" onClick={handleTask}>Add Task</button>
    </div>
  )
}

export default Create
