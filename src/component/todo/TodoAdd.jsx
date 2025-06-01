import { useState } from 'react';

const TodoAdd = (props) => {

    const { addNewTask } = props;

    const handleOnChange = (name) => {
        console.log(name);
        setNameValue(name);
    }

    const name = "Tri";

    const [nameValue, setNameValue] = useState(name);

    return (
        <div className="todo-add">
            <input type="text" placeholder="Enter your task"
                onChange={(e) => handleOnChange(e.target.value)}
            />
            <button onClick={() => addNewTask(nameValue)}>Add</button>

            <div>
                My text is: {nameValue}
            </div>
        </div>


    )
}

export default TodoAdd;