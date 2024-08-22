import React from 'react'
import ToDoItem from './TodoItem'
const Todos = (props) => {
  let AddtoDoStyle = {
    minHeight : "46.6vh",
    margin : "5px auto"
}
  return (
    <div className='container' style={AddtoDoStyle}>
      <h3 className='text-center my-10 '>Todo list</h3>
      {props.todos.length === 0? "No Todos to display":
      props.todos.map((todo)=>{
          return <ToDoItem todo = {todo}  key={todo.sno} onDelete={props.onDelete}/>
      })}

   {/* <ToDoItem todo = {props.todos[0]}/> */}


    </div>
  )
}

export default Todos
