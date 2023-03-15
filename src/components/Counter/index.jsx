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
  // const decr = useSelector((state) => state.counter.d);
  // console.log(decr, "decr");
  const dispatch = useDispatch();

  const [incrementByAmount, setIncrementByAmount] = useState(0);
  const addValue = Number(incrementByAmount) || 0;
  const resetAll = () => {
    setIncrementByAmount(0);
    dispatch(recent());
  };

  // const a = useRef("");
  // const b = useRef("");
  // const c = useRef("");

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

      {/* <div>
        <h1>Determenet {decr} </h1>
        <input type="text" ref={a} />
        <input type="text" ref={b} />
        <input type="text" ref={c} />
        <button onClick={() => dispatch(discremenant())}>Add</button>
      </div> */}
    </div>
  );
};
export default Counter;
