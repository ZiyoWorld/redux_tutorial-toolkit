import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  recent,
  addNumber,
} from "../../feauters/counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementByAmount, setIncrementByAmount] = useState(0);
  const addValue = Number(incrementByAmount) || 0;
  const resetAll = () => {
    setIncrementByAmount(0);
    dispatch(recent());
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <div>
        <input
          type="text"
          value={incrementByAmount}
          onChange={(e) => setIncrementByAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => dispatch(addNumber(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  );
};
export default Counter;
