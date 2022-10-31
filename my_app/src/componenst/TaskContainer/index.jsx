import React from 'react'
import Task from '../Task'

export default function TaskContainer({tasks}) {
  return (
    <div>
        Tasks:
        {
            tasks.length !==0
            ? tasks.map(el => <Task key={el.id} {...el}/>)
            : <p>No tasks</p>
        }
        
    </div>
  )
}
