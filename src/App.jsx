import "./component/todo/todo.css";
import reactLogo from "./assets/react.svg";
import TodoAdd from "./component/todo/TodoAdd";
import TodoList from "./component/todo/TodoList";

const App = () => {

  const listTasks = {
    name: "Learning English",
    completed: false,
    id: 1,
  }

  const addNewTask = (name) => {
    alert(`New task ${name} added!`);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoAdd
        addNewTask={addNewTask}
      />
      <TodoList
        tasks={listTasks}
      />
      <div className="todo-img">
        <img src={reactLogo} className="logo react" alt="React Logo" />
      </div>
    </div>
  )
}

export default App
