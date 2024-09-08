import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../lib/features/counterSlice";
import CodePreview from "./snippetPreview/codePreview";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count ?? 0}</h2>
      <button onClick={() => dispatch(increment())} className="btn btn-primary">
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} className="btn btn-danger">
        Decrement
      </button>
      <div></div>
      <h6 style={{marginTop:"4rem"}}>component code</h6>
      <CodePreview path="src/Components/reduxCounter.jsx" />
      <h6>slice code</h6>
      <CodePreview path="src/lib/features/counterSlice.js" />
      <h6>store code</h6>
      <CodePreview path="src/lib/store.js" />
    </div>
  );
}
