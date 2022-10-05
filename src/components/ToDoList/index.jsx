import React from 'react'
import ToDoItem from '../ToDoItem'

function ToDoList({ tasks }) {

    return (
    <div>

        <p>Tasks: </p>
        {
        tasks
        ? tasks.map(el => <ToDoItem key={el.id} {...el} />)  
        : <p>No tasks</p>
        }
        
        </div>

    )
}

export default ToDoList