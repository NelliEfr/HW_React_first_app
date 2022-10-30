import Worker from "./Worker";
import { workers } from '../data/workers'

export default function App() {

  return (
    <div>

      {
        workers.map(el => <Worker {...el} key={el.id} />)
      }

    </div>
  );
}

