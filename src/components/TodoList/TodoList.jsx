import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { EditTodo } from "../EditTodo/EditTodo";

export const TodoList = ({ todo, deleteTodo, complateTodo, editTodo, changeText}) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    };

    const filteredTodos = todo.filter(item => 
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="todoCont">
            <h1>Todo List</h1>
            <input
                id="search"
                placeholder="search todos"
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            {
                filteredTodos.length > 0 ? (
                    filteredTodos.map((item, index) => (
                        <div key={index} className="todoItem">
                            {
                                item.isEdit ? (
                                    <EditTodo text={item.text} id={item.id} changeText={changeText} />
                                ) : (
                                    <>
                                        <p 
                                            className={item.complete ? 'complete' : ''} 
                                            onClick={() => complateTodo(item.id)}
                                        >
                                            {item.text}
                                        </p>
                                        <div>
                                            <button 
                                                className="editBtn" 
                                                onClick={() => editTodo(item.id)}
                                                aria-label={`Edit ${item.text}`}
                                            >
                                                <MdEditSquare color="green" />
                                            </button>
                                            <button 
                                                className="deleteBtn" 
                                                onClick={() => deleteTodo(item.id)}
                                                aria-label={`Delete ${item.text}`}
                                            >
                                                <MdDelete color="white" />
                                            </button>
                                        </div>
                                    </>
                                )
                            }
                        </div>  
                    ))
                ) : (
                    <p className="noy">No todos found</p>
                )
            }
        </div>
    );
};
