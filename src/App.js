import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import React, { useState, useEffect } from 'react';
import AddToDo from './Components/AddToDo';
import About from './Components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("i am on delete", todo)
    //Deleting this way does not work
    //let idx = todos.indexOf(todo)
    //todos.splice(idx,1)   this does not updates the dom
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addToDo = (title, desc) => {
    console.log("to do has been added", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    // creating mytodo object that is later to be added in todos
    const myTodo = {
      sno: sno,
      title: title,
      description: desc
    }
    console.log(myTodo);
    // pushing new todo into the todos 
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  let containerStyles = {
    width: "1100px",
    margin: "auto",
  }
  return (
    <>
      <Router>
        <Header title="ToDoList" description="description" search={true} />
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <>
                <div className='conatiner' style={containerStyles}>
                  <AddToDo addToDo={addToDo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </div>
              </>)
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
