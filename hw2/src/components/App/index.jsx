import s from './index.module.css';
import Workers from '../Workers';
import {workers} from '../data/workers'

function App() {
  return (
    <div>
      <Workers workers = {workers} />
    </div>
  );
}

export default App;
