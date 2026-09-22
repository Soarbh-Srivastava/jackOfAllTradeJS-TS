import type { RootState } from '../lib/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../feature/counterSlice';
import { useState } from 'react';

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number>(0);

  return (
    <div>
      <span>{count}</span>
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.valueAsNumber || 0)}
      ></input>
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increase By
      </button>
      <br />
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
