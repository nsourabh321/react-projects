import React from 'react'

const TodoItem = ({todo,onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <h6>{todo.description}</h6>
      <button className="btn btn-sm btn-danger " onClick={()=>{onDelete(todo)}}>DELETE</button>
    </div>
  )
}

export default TodoItem
