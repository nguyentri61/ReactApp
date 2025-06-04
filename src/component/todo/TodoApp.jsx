import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';
import "./todo.css";

const TodoApp = () => {
    const addNewTask = (name) => {
        alert(`New task ${name} added!`);

        // setTodoList có thể sử dụng hàm callback để lấy giá trị hiện tại của todoList
        // và biến trong hàm callback này sẽ nhận vào giá trị hiện tại của todoList do react mặc định cung cấp
        setTodoList(prevState =>
            [
                ...prevState,
                {
                    id: prevState.length + 1,
                    name: name,

                }
            ]
        )
    }

    const deleteTask = (id) => {
        setTodoList((prevState) => {
            return prevState.filter(item => item.id !== id);
        });
    }

    const [todoList, setTodoList] = useState([
        // {
        //   id: 1,
        //   name: "Learning English",
        // },
        // {
        //   id: 2,
        //   name: "Learning React",
        // },
        // {
        //   id: 3,
        //   name: "Learning NodeJS",
        // }
    ]);

    return (
        <div className="todo-container">
            <div className="todo-title">Todo list</div>
            <TodoAdd
                addNewTask={addNewTask}
            />

            {todoList.length > 0 ?
                <TodoList
                    deleteTask={deleteTask}
                    todoList={todoList}
                />
                :
                <div className="todo-img">
                    <img src={reactLogo} className="logo react" alt="React Logo" />
                </div>
            }
        </div>
    )
}

export default TodoApp;