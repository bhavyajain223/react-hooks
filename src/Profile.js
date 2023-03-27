import React from "react";

function Profile(prop) {
  const red = () => {
    alert("hello");
  };
  return (
    <div onClick={red}>
      {prop.text.name}Function component{prop.data}
    </div>
  );
}
export default Profile;
