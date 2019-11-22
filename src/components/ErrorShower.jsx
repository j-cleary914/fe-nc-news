import React from "react";

const ErrorShower = props => {
  console.log(props.err);
  let errorMsg = "Invalid URL";
  if (props.err) {
    errorMsg = JSON.stringify(props.err);
  }
  return (
    <div>
      <h1>OH NO AN ERROR</h1>
      <h2>error message: </h2>
      <p>{errorMsg}</p>
    </div>
  );
};

export default ErrorShower;
