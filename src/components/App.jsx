import { workers } from '../data/workers'
import Cards from './Cards/index'

function App() {

  return (
    <div className="App">
      {
      workers.map(el => <Cards key={el.id} {...el} />)
      }
    </div>
  );
}

export default App;
