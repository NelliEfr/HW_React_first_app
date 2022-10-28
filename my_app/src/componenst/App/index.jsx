import Worker from '../Worker'
import { workers } from '../data/workers'

export default function App() {
  return (
    <div>
      {
        workers.map(el => <Worker key={el.id} {...el}/>)
      }
    </div>
  )
}
