import "./component/todo/todo.css";
import reactLogo from "./assets/react.svg";
import TodoAdd from "./component/todo/TodoAdd";
import TodoList from "./component/todo/TodoList";
import { useState } from 'react';

const App = () => {

  const addNewTask = (name) => {
    alert(`New task ${name} added!`);
    setTodoList((prevState) => {
      return [
        ...prevState,
        {
          id: prevState.length + 1,
          name: name,
          completed: false,
        }
      ]
    })
  }

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Learning English",
      completed: false,
    },
    {
      id: 2,
      name: "Learning React",
      completed: false,
    },
    {
      id: 3,
      name: "Learning NodeJS",
      completed: false,
    },
    {
      id: 4,
      name: "Learning NextJS",
      completed: false,
    },
    {
      id: 5,
      name: "Learning TypeScript",
      completed: false,
    },
    {
      id: 6,
      name: "Learning Redux",
      completed: false,
    },
  ]);

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoAdd
        addNewTask={addNewTask}
      />
      <TodoList
        todoList={todoList}
      />
      <div className="todo-img">
        <img src={reactLogo} className="logo react" alt="React Logo" />
      </div>
    </div>
  )
}

export default App
