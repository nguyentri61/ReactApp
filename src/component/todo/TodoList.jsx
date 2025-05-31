const TodoList = (props) => {

    const { name, completed, id } = props.tasks;
    return (
        <div className="todo-list">
            <div>Learning English {name}</div>
            <div>Learning Spanish {id}</div>
        </div>
    )
}

export default TodoList;