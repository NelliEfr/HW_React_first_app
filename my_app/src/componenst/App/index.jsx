import Cards from '../Cards'
import { workers } from '../../data/workers'

export default function App() {

  // const active_workers = workers.filter(el => el.in_office)

  return (
    <div>
      <Cards workers={workers}/>
    </div>
  )
}
