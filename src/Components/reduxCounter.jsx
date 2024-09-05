import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../lib/features/counterSlice";

export default function Counter(){
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch(); 

    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(increment())} className="btn btn-primary">Increment</button>
            <button onClick={()=>dispatch(decrement())} className="btn btn-danger">Decrement</button>
        </div>
    )
}