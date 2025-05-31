import "./component/todo/todo.css";
import reactLogo from "./assets/react.svg";
import TodoAdd from "./component/todo/TodoAdd";
import TodoList from "./component/todo/TodoList";

const App = () => {

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoAdd />
      <TodoList />
      <div className="todo-img">
        <img src={reactLogo} className="logo react" alt="React Logo" />
      </div>
    </div>
  )
}

export default App
