
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, set } from "./action";

export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button
         onClick={() => dispatch(increment(count + 1))}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(set(0))}
        >
          Reset
        </button>
        <button
          onClick={() => dispatch(decrement(count - 1))}
        >
          Decrement
        </button>
      </section>
    </main>
  );
};

export default Counter;
