import React from 'react'
import style from './index.module.css'

export default function Worker({ id, firstname, lastname, position }) {


  return (
    <div className={style.worker_card}>
        <p>ID: { id }</p>
        <p>First name: { firstname }</p>
        <p>Last name: { lastname }</p>
        <p>Position: { position }</p>
    </div>
  )
}