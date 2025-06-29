import { notification } from 'antd';
import { useState } from 'react';

const TodoAdd = (props) => {

    const { addNewTask } = props;

    const [nameValue, setNameValue] = useState("");

    const handleOnChange = (name) => {
        setNameValue(name);
    }

    const handleOnClick = () => {
        addNewTask(nameValue);
        setNameValue("");
    }


    return (
        <div className="todo-add">
            <input type="text" placeholder="Enter your task"
                onChange={(e) => handleOnChange(e.target.value)}
                value={nameValue}
            />
            <button onClick={handleOnClick}>Add</button>
        </div>


    )
}

export default TodoAdd;