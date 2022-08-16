import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todolist from '../../components/Todolist';
import './styles.scss';


function TodolistFeature() {
    const initTodolist = [
        {
            id: uuidv4(),
            todo: 'Eat',
            status: 'completed',
        },
        {
            id: uuidv4(),
            todo: 'Sleep',
            status: 'completed',
        },
        {
            id: uuidv4(),
            todo: 'Code',
            status: 'new',
        },
        {
            id: uuidv4(),
            todo: 'Toilet',
            status: 'new',
        },
    ];

    const [todolist, setTodolist] = useState(initTodolist);
    const [filterStatus, setFilterStatus] = useState('all');


    const handleTodoClicked = (index) => {
        const newTodolist = [...todolist];
        newTodolist[index] = {
            ...newTodolist[index],
            status: newTodolist[index].status === 'completed' ? 'new' : 'completed',
        }
        setTodolist(newTodolist);
    }


    const handleAddTodo = (value) => {
        if (value.todo === '') {
            return;
        }
        setTodolist((prevTodo) => {
            return [...prevTodo, value];
        })
    }


    const handleDeleteTodo = (index) => {
        const newTodolist = [...todolist];
        newTodolist.splice(index, 1);
        setTodolist(newTodolist)
    }


    const renderTodolist = todolist.filter((todo) => {
        return filterStatus === 'all' || filterStatus === todo.status;
    })

    // localStorage save pending...
    localStorage.setItem('todos', JSON.stringify(renderTodolist));
    const renderLocalStorage = JSON.parse(localStorage.getItem('todos'));


    return (
        <div>
            <Todolist todos={renderLocalStorage} todoClick={handleTodoClicked} addTodo={handleAddTodo} deleteTodo={handleDeleteTodo} filterTodo={setFilterStatus} />
        </div>
    )
}

export default TodolistFeature;