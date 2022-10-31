import React from 'react'
import style from './index.module.css'
import TasksContainer from '../TasksContainer'

export default function Worker({ id, firstname, lastname, position, in_office, avatar, tasks, done }) {

    const card_style = {
        backgroundColor: in_office ? 'lightgreen' : 'lightgray',

        color: in_office ? '' : 'blue'

        // fontSize: firstname === 'Ivan' ? '25px' : ''
    }

    const img_url = avatar ?? './media/no_face.png'; // оператор нулевого слияния





  return (
    <div className={style.worker_card} style= {card_style}>
        <p>ID: { id }</p>
        <p>First name: { firstname }</p>
        <p>Last name: { lastname }</p>
        <p>Position: { position }</p>
        <img alt='worker' src={img_url} />
        <TasksContainer tasks={tasks}/>

    </div>
  )
}