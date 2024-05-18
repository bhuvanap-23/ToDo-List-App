import React, { useState,useEffect } from 'react'
import Create from './Create'
import axios from 'axios'

import { BsFillCheckCircleFill, BsCircleFill, BsFillTrashFill } from "react-icons/bs";

function Home() {
    const [todos,setTodos] = useState([])
   
    useEffect(()=>{
        axios.get('http://127.0.0.1:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    },[])

    const handleEdit=(id)=>{
        axios.put('http://127.0.0.1:3001/update/'+id)
        .then(result => location.reload())
        .catch(err => console.log(err))
    }

    const handleDelete=(id)=>{
        axios.delete('http://127.0.0.1:3001/delete/'+id)
        .then(result => location.reload())
        .catch(err => console.log(err))
    }

  return (
    <div className="home">
        <h2>ToDo List</h2>
        <Create/>
        <br/>
        {
            todos.length == 0? <div><h2></h2></div>:
            todos.map(todo=>(
                

                <div className="task">
                    <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                    {todo.done?
                    <BsFillCheckCircleFill className='icon'/>:
                        <BsCircleFill className='icon'/>
                    }
                
                        <p className={todo.done ? "line-through" : ""}>{todo.task}</p>
                    </div>

                    <div>
                        <span><BsFillTrashFill className='icon' onClick={()=>handleDelete(todo._id)}/></span> 
                    </div>
                    
                </div>
            ))
        }
    </div>
  )
}

export default Home
