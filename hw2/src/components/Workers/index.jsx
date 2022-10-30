import React from 'react'
import Worker from '../Worker'
import s from './index.module.css'

export default function Workers({workers}) {

  return (
    
    <div className={s.workers_container}>
      {
        workers.map(el => <Worker worker = {el} key={el.id}/>)
      }
    </div>
  )
}
