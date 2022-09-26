import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FilterTodo from '../FilterTodo';
import './styles.scss';


function Todolist(props) {
    const { todos, todoClick, addTodo, deleteTodo, filterTodo } = props;
    const [inputValue, setInputValue] = useState({
        id: uuidv4(),
        todo: '',
        status: 'new',
    });


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
        setInputValue({ id: uuidv4(), todo: '', status: 'new' });
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
                        value={inputValue.todo}
                        onChange={(e) => handleInputChange(e.target.value)}
                    />
                    <button
                        className='add'
                        onClick={handleAdd}
                    >Add</button>
                </div>
                <FilterTodo filterTodoo={filterTodo} />
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
    filterTodo: PropTypes.func,
}

Todolist.defaultProps = {
    todos: [],
    todoClick: () => { },
    addTodo: () => { },
    deleteTodo: () => { },
    filterTodo: () => { },
}


export default Todolist;
