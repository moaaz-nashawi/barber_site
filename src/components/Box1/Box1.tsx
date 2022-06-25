import Button from "@mui/material/Button";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../features/counter/counterSlice";

interface Box1Props {
  id: string;
  isVisited?: boolean;
  doSomething: (params: string) => any;
}

const Box1: FC<Box1Props> = (props) => {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter.value);

  const ff = (ss: string) => {
    //console.log("fff");
    props.doSomething(ss);
  };

  useEffect(() => {
    console.log("Behavior before the component is added to the DOM");
  }, []);

  useEffect(() => {
    console.log("Behavior when the component receives new state or props.");
  });

  useEffect(() => {
    console.log("Behavior when the value of 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    return () => {
      console.log(
        "Behavior right before the component is removed from the DOM."
      );
    };
  }, []);

  return (
    <div>
      {counter}

      <Button
        variant="contained"
        onClick={() => {
          dispatch(decrement());
          props.doSomething("ss");
        }}
      >
        Hello World
      </Button>
    </div>
  );
};

export default Box1;
