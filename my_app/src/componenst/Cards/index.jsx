import React from 'react'
import Worker from '../Worker'

export default function Cards({workers}) {

  // const active_workers = workers.filter(el => el.in_office)

  return (
    <div>
      {
        workers
          // .filter(el => el.in_office)
          .map(el => <Worker key={el.id} {...el}/>)
      }
    </div>
  )
}
