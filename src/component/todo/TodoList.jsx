const TodoList = (props) => {

    return (
        <div className="todo-list">
            <div>Learning English </div>
            <div>Learning Spanish </div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoList;