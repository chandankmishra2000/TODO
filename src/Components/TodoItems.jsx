import React from 'react'
import TodoItem from './TodoItem'
export default function TodoItems({todoitems,onDeleteClick}) {
  return (
    <div>
      <div className="items-container">
      {todoitems.map((item)=>(
        <TodoItem key={item.id} todoName={item.name} todoDate={item.dueDate}
        onDeleteClick={onDeleteClick} />
      ))}
      </div>
    </div>
  )
}
