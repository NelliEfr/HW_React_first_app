import Worker from "../worker/worker";
import Worker2 from "../worker2/worker2";
import { workers } from "../../data/workers";
function App() {
  return (
    <div>
      {workers.map((el) => (
        <Worker2 {...el} key={el.id} />
      ))}
      <Worker id={1} firstname={"Aigars"} last={"Alutis"} position={false} />
      <Worker id={2} firstname={"Raimonds"} last={"Pauls"} position={true} />
      <Worker id={3} firstname={"Sandra"} last={"Balode"} position={false} />
    </div>
  );
}

export default App;
