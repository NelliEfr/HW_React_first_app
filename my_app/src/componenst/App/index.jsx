import Worker from '../Worker'
import { workers } from '../../data/workers'

export default function App() {

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
