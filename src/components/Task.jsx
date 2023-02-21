import React, { useState } from "react";
import { v4 as id} from "uuid";
import Todo from "./Todo";
import './todoContainer.css'

const Task = () => {
  const [tasks, setTask] = useState("");
  const [todos, setTodos] = useState([])


  const handleChanged = (e) => {
    const result = e.target.value;
    setTask(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        id: id(),
        title : tasks,
        complete:false
    }

   setTodos([...todos,newTodo]) 
   setTask("")
  };

  const handleUpdate = (id,value) => {
    const temp = [...todos]
    const items = temp.find(item => item.id === id)
    items.title = value
    setTodos(temp)
  }

  const handleDelete = (id) => {
    const temp = todos.filter( item => item.id !== id)
    setTodos(temp)
  }

  return (
    <div className="todoContainer">
      <form onSubmit={handleSubmit} className="todoCreateform">
        <input type="text" name="task" placeholder="writer your Homework" onChange={handleChanged} className="todoInput" value={tasks}/>
        <button type="submit" className="buttonCreate" >
          Add Task
        </button>
      </form>

    <div className="todosContainer">
        {
            todos.map(todo => (
                <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete}/>
            ))
        }
    </div>

    </div>
  );
};

export default Task;
