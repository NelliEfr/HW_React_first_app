import React from 'react'
import TaskContainer from '../TaskContainer';
import s from './index.module.css'

export default function Worker({id, firstname, lastname, position, in_office, avatar, tasks}) {

  const card_style = {
    backgroundColor: in_office ? 'lightgreen' : 'lightgray',
    color : in_office ? '' : 'blue'
  }

  const img_url = avatar ?? './media/no_face.png'; // оператор нулевого слияния


  
  return (
    
    <div className={s.worker_card} style={card_style} >
        <p>ID: {id}</p>
        <p>Fist name: {firstname} </p>
        <p>Last name: {lastname} </p>
        <p>Position: {position} </p>
        <img src={img_url} alt="Worker" />
        
        <TaskContainer tasks={tasks}/>
    </div>
  )
}

// У работников с in_office false поменять цвет текста на синий

