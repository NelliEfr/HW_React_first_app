import React from 'react'
import CardsContainer from '../CardsContainer'
import s from './index.module.css'

function WorkerItem({ id, firstname, lastname, avatar, position, todo }) {
    const img_url = avatar ?? 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'

    return (
        <div className={s.card}>
            <p>ID: {id}</p>
            <p>First name: {firstname}</p>
            <p>Last name: {lastname}</p>
            <CardsContainer cards={position} />
            <CardsContainer cards={todo} />
            <img src={img_url} alt="#" className={s.avatar} />
        </div>
    )
}


export default WorkerItem
