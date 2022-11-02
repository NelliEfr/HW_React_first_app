import Cards from '../Cards'
import { workers } from '../../data/workers'

export default function App() {

 
  return (
    <div>
      <Cards workers={workers}/>
    </div>
  )
}
