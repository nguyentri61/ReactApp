const TodoList = (props) => {

    const { todoList, deleteTask } = props;

    const handleDelete = (id) => {
        console.log(`Delete item with id: ${id}`);
        deleteTask(id);
    }

    return (
        <div className="todo-list">
            {todoList.map((item, index) => (
                <div key={item.id} className="todo-item">
                    <div>{item.name}</div>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList;