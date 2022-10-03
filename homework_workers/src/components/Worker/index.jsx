import React from "react";
import s from './index.module.css'

export default function Worker({ in_office, title, done }) {
    const in_office_style = {
        backgroundColor: 'green'
    }

    const not_in_office = {
        backgroundColor: 'gray'
    }

    const done_style = {
        color: 'gray',
        textDecoration: 'line-through'
    }

    const not_done_style = {
        color: 'red'
    }

    return (
        <div className={s.card} style={in_office ? in_office_style : not_in_office}>
            <p style={done ? done_style : not_done_style}>
                {title}
            </p>
        </div>
    )
}