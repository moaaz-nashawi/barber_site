import { FC, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Box1 from "./components/Box1/Box1";
import CounterComp from "./components/CounterComp/CounterComp";

interface App1Props {}

const App: FC<App1Props> = () => {
  let [f, setF] = useState(true);
  const logMessage = (message: string) => {
    console.log("This " + message);
    setF(false);
  };

  return <div>{f && <CounterComp></CounterComp>}</div>;
};

export default App;
