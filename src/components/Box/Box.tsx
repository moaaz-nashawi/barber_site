import React, { useEffect } from "react";
import PropTypes from "prop-types";

function Box(props: any) {
  useEffect(() => {
    console.log(props);
  }, []);
  useEffect(() => {
    return () => {
      console.log("Bye");
    };
  }, []);
  return <div>Box</div>;
}

//Box.propTypes = { id: "sf" };

export default Box;
