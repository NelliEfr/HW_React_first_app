import React from 'react'
import s from './index.module.css'

export default function Worker({id, firstname, lastname, position}) {

  return (
    
    <div className={s.worker_card}>
        <p>ID: {id}</p>
        <p>Fist name: {firstname} </p>
        <p>Last name: {lastname} </p>
        <p>Position: {position} </p>
    </div>
  )
}
