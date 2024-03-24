import React from 'react'
import { useState } from 'react'
export default function AddTodo({onNewItem}) {
  const [todoName,setTodoName]=useState("")
  const [dueDate,setDueDate]=useState("")

  const handleNameChange=(event)=>{
    setTodoName(event.target.value)
  }

  const handleDateChange=(event)=>{
    setDueDate(event.target.value)
  }

  const handleAddButtonClicked=()=>{
    onNewItem(todoName,dueDate)
    setDueDate("")
    setTodoName("")
  }
  return (
    <div>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" value={todoName}
             placeholder='Enter Todo Here' onChange={handleNameChange} />
          </div>
          <div className="col-4">
            <input type="date" value={dueDate} onChange={handleDateChange}/>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}>Add</button></div>
        </div>
      </div>
    </div>
  )
}
