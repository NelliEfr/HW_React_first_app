import React from 'react'
import Worker from '../Worker'
import s from './index.module.css'

export default function CardsContainer({cards}) {
    return (
        <div className={s.cards_container}>
        {
            cards ?
            cards.map(card => <Worker key={card.id} {...card}/>)
            :  <p>No tasks</p>
        }
        </div>
    )
}