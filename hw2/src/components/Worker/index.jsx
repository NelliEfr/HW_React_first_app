import React from 'react'
import s from './index.module.css'

export default function Worker({worker}) {

    return (
    <div className={s.worker_card}>
        <p>First name: {worker.firstname}</p>
        <p>Last name: {worker.lastname}</p>
        <p>Position: {worker.position}</p>
    </div>
  )
}
