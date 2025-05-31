const TodoAdd = (props) => {

    const { addNewTask } = props;
    return (
        <div className="todo-add">
            <input type="text" placeholder="Enter your task" />
            <button onClick={() => addNewTask("Tri")}>Add</button>
        </div>
    )
}

export default TodoAdd;