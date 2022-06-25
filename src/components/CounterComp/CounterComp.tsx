import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../features/counter/counterSlice";
import { setUser } from "../../features/user/userSlice";

export default function CounterComp() {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter.value);
  const user = useSelector((state: any) => state.user.name);

  return (
    <div>
      {counter}
      {user}
      <button onClick={() => dispatch(setUser({ name: "ff", id: "dd" }))}>
        setUser
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
}
