import User from "../User";
import s from './index.module.css';
import { workers } from "../../data/workers";

function App () {



    return (
        <div>
            {
        workers.map(user => <User key = {user.id} {...user}/>)

            }
        </div>
    );
}

export default App;
