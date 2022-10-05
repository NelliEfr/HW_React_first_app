import React from 'react'
import s from './index.module.css'
import ToDoList from '../ToDoList'

function Cards({id, firstname, lastname, position, avatar, in_office, tasks}) {
  const color = in_office ? 'lightyellow' : 'lightgray';
  const no_avatar = avatar ?? 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
  
  const card_style = {
  backgroundColor: color,
}

  return (
    <div style={card_style} className={s.card}>
      <p>ID: {id}</p>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Position: {position}</p>
      <ToDoList tasks={tasks}/>
      <img src={no_avatar} alt='#' className={s.avatar}></img>
    
    </div>
  )
}

export default Cards
