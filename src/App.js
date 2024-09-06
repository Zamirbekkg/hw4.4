import { useState } from "react";
import { Form, TodoList } from "./components";
import './style.css';

function App() {
  const [todo, setTodo] = useState([]);

  const deleteTodo = (id) => {
    setTodo(todo.filter((item) => item.id !== id))
  }

  const complateTodo = (id) => {
    setTodo(todo.map((item) => item.id === id ? {...item, complete: !item.complete} : item))
  }

  const editTodo = (id) => {
    setTodo(todo.map((item) => item.id === id ? {...item, isEdit: !item.isEdit} : item))
  }

  const changeText = (text, id) =>{
        setTodo(todo.map((item) => item.id === id ? {...item, text: text, isEdit: !item.isEdit} : item))
  }
  return (
    <div className="container">
      <Form todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} deleteTodo={deleteTodo} complateTodo={complateTodo} editTodo={editTodo} changeText={changeText} />
    </div>
  );
}

export default App;

