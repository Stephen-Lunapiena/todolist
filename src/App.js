import "./App.css"
import React, { useState } from 'react'


 function App() {
    const [todos, setTodos] = useState([
      { id: 1, text: "Wash dishes", complete: false },
      { id: 2, text: "work out", complete: false },
    ]);
    
  

  return (
    <div className="App">
      <h1>To Do List </h1>
      <TodoList todos={todos} setTodos = {setTodos} />
      <AddTodo setTodos = {setTodos}/>
    </div>
  )
 
  }
  //this function takes todos (which is an object) as an argument. Then "maps" (or loops) through each object of the array to display it as a list. In order to choose the properties to display, React uses a key


  //if todo.complete = true, then it will receive a style element for strikethrough
  function TodoList({ todos, setTodos }) {
    function handleToggleTodo(todo) {
      console.log(todo)
      const styling = todos.map((t) => 
        t.id === todo.id ? {
          ...t,
          complete: !t.complete
        }
        : t
        )
        setTodos(styling)
      }

    return(
    <ul>
      {todos.map((todo) => (
      <li onClick={() => handleToggleTodo(todo)} 
      style= {{ textDecoration: todo.complete ? "line-through" : ""}} 
      
      key={todo.id}> {todo.text} <DeleteTodo todo={todo} setTodos={setTodos} /> </li>  ))} 
      </ul>
      )
    }

function AddTodo({ setTodos }) {
  const inputRef = React.useRef();

  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: 3,
      text,
      complete: false
    }
     setTodos(list => [...list, todo]) 
  }

      return (
        <form onSubmit={handleAddTodo}>
          <input id="addTodo" placeholder="Add task to complete" ref={inputRef} />
          <button type="submit">Submit </button>
        </form>
      );  
      }
      
      
      
      function DeleteTodo({ todo, setTodos }) {
        function handleDeleteTodo() {
          const confirmed = window.confirm("Are you sure you want to delete this?")
          if (confirmed) {
            setTodos((prevTodos) => {
              console.log(prevTodos + "prevtodos")
              return prevTodos.filter((t) => t.id !== todo.id)
            })
          } 
        }
      
      
        return (
          <span onClick={handleDeleteTodo} role="button" style={{
            color: 'black',
            marginLeft: 10,
            cursor: "pointer"
          }} >Delete </span>
        )
      }

    
export default App;
