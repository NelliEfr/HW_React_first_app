import {workers} from '../../data/workers'
import WorkerItem from '../WorkerItem';



function App() {
  const[in_office] = workers.filter(el => el.in_office);
  return (
    <div>
      {workers.map(el => <WorkerItem key={el.id} {...el}/>)}
    </div>
  );
}

export default App;
