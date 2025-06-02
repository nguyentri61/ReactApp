const TodoList = (props) => {

    const { todoList } = props;

    return (
        <div className="todo-list">

            {todoList.map((item, index) => (
                <div key={index} className="todo-item">
                    <div>{item.name}</div>
                    <button>Delete</button>
                </div>
            ))}

            {/* <div>Learning English </div>
            <div>Learning Spanish </div>
            <div>
                {JSON.stringify(todoList)}
            </div> */}
        </div>
    )
}

export default TodoList;