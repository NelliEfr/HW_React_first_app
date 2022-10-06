import React from 'react'
import s from './index.module.css'

function Worker ({firstname, lastname, position, in_office, avatar}) {

  const worker_style = {
    backgroundColor: in_office ? 'none' : 'lightgray'
  }

 const img_url = avatar ?? 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'


  return (
    <div className={s.card} style={worker_style}> 
        <p> First name: {firstname} </p>
        <p> Last name: {lastname}</p>
        <p> Position: {position}</p>
        <img src={img_url} alt="avatar" className={s.avatar}/>
    </div>
  )
}

export default Worker
