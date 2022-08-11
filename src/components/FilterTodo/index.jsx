import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';



function FilterTodo(props) {
    const { filterTodoo } = props;

    const handleShowAll = () => {
        filterTodoo('all')
    }

    const handleShowCompleted = () => {
        filterTodoo('completed')
    }

    const handleShowNew = () => {
        filterTodoo('new')
    }

    return (
        <div className='filterTodo'>
            <button
                className='btnShow'
                onClick={handleShowAll}
            >Show All</button>
            <button
                className='btnShow'
                onClick={handleShowCompleted}
            >Show Completed</button>
            <button
                className='btnShow'
                onClick={handleShowNew}
            >Show New</button>
        </div>
    )
}

FilterTodo.propTypes = {
    filterTodoo: PropTypes.func,
}

export default FilterTodo;
