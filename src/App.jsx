import React, { useState } from 'react'
import AppName from './Components/AppName'
import AddTodo from './Components/AddTodo'
// import TodoItem from './Components/TodoItem'
import "./App.css"
import TodoItems from './Components/TodoItems'
import Message from './Components/Message'
export default function App() {
  
  const handleNewItem=(itemName,itemDueDate)=>{
    console.log(`New Item Added: ${itemName} Date :${itemDueDate}`)
    const newTodoItems=[...todoitems,{name : itemName , dueDate : itemDueDate}]
    settodoitems(newTodoItems)
  }

  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoitems.filter(item =>item.name !== todoItemName)
    settodoitems(newTodoItems)
  }
  const [todoitems,settodoitems]=useState([])
  return (
    <center className='todo-container'>
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoitems.length===0 && <Message/>}
      <TodoItems todoitems={todoitems}
      onDeleteClick={handleDeleteItem}/>
    </center>
  )
}
