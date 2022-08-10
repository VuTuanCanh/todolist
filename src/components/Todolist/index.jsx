import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
import './styles.scss';
import { v4 as uuidv4 } from 'uuid';


function Todolist(props) {
    const { todos, todoClick, addTodo, deleteTodo } = props;
    const [inputValue, setInputValue] = useState('');


    const handleTodoClick = (index) => {
        todoClick(index);
    }

    const handleInputChange = (text) => {
        setInputValue(() => {
            return { id: uuidv4(), todo: text, status: 'new' };
        })
    }

    const handleAdd = () => {
        addTodo(inputValue);
    }

    const handleDelete = (index) => {
        deleteTodo(index);
    }

    return (
        <div className='containTodo'>
            <div className="todolist">
                <h1>Todolist</h1>
                <div className="inputAdd">
                    <input
                        type="text"
                        onChange={(e) => handleInputChange(e.target.value)}
                    />
                    <button
                        className='add'
                        onClick={handleAdd}
                    >Add</button>
                </div>
                <div className="list">
                    <ul>
                        {
                            todos.map((todo, index) => {
                                return (
                                    <div key={todo.id} className="item">
                                        <li
                                            className={classNames({
                                                completed: todo.status === 'completed',
                                            })}
                                            onClick={() => handleTodoClick(index)}
                                        >{todo.todo}</li>
                                        <button
                                            className='delete'
                                            onClick={() => handleDelete(index)}
                                        >delete</button>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

Todolist.propTypes = {
    todos: PropTypes.array,
    todoClick: PropTypes.func,
    addTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
}

Todolist.defaultProps = {
    todos: [],
    todoClick: () => { },
    addTodo: () => { },
    deleteTodo: () => { },
}


export default Todolist;
