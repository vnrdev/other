import { useState } from "react";
import TodoItem from "./todoItem";

const Table = () => {
    const [todos, setTodos] = useState([]);

    const addTodoItem = () => {
        setTodos((prevTodoItems) => [
            ...prevTodoItems,
            {id: todos.length}
        ])
    }

    return (
        <>
        <div className="flex max-w-xl w-full mx-auto border-2 items-stretch p-6">         
            <p className="flex pl-4 items-center bg-blue-900 w-[80%]">TodoList 3</p>
            <button className="px-4 py-2 flex-row" onClick={() => addTodoItem()}>click</button>
        </div>
        
        <div className="flex flex-col border-2 max-w-md w-full box-border overflow-hidden">
            {todos.map((todo, idKey) => <TodoItem id={todo.id} key={idKey}/>)}
        </div>
        
        </>
    )

}

export default Table;