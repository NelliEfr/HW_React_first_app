import React from "react";
import s from './index.module.css'

export default function User ({ id, firstname, lastname, position, in_office, avatar })
{
    const user_style = {
        backgroundColor: in_office ? 'lightgreen' : 'lightgray'
    }
    const img_url = avatar ?? 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';
     
return (
    <div className={s.card} style={user_style}>
        <p>id: {id} </p>
        <p>First name: {firstname} </p>
        <p>Last name: {lastname} </p>
        <p>Position: {position} </p>
        <img src={img_url} alt='avatar' className={s.avatar}/>


    </div>
)
}