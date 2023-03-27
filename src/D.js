import React, { useContext } from "react";
import { FirstName } from "./A";
function D(props) {
  const firstName = useContext(FirstName);
  return <div>{firstName}</div>;
}

export default D;
