import Worker from "../Worker";
import { workers } from '../../data/Workers'

function App() {

  const in_office_workers = workers.filter(el => el.in_office);

  return (
    <div>
     {
      in_office_workers.map(el=> <Worker {...el} key={workers.id}/>)
     }
    </div>
  );
}

export default App;
