import React, { createContext } from "react";
import B from "./B";
const FirstName = createContext();
function A(props) {
  return (
    <div>
      <FirstName.Provider value="Ram">
        <B />
      </FirstName.Provider>
    </div>
  );
}

export default A;
export { FirstName };
