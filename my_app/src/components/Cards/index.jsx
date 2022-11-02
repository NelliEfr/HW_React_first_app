import React from 'react'
import Worker from '../Worker'
import { workers } from '../../data/workers'


export default function Cards() {
  return (
    <div>
    {
      workers
      // .filter(el => el.in_office)
      .map(el => <Worker {...el} key={el.id} />)
    }

    </div>
  )
}
