import React from "react";

function App() {
  let a = 20;
  let mystyle = {
    backgroundColor: "cyan",
    color: "red",
    border:"2px solid black"
  };
  return (
    <div style={{ color: "red" }}>
      <h2>Apna college</h2>
      <div style={mystyle}>{a}</div>
    </div>
  );
}

export default App;
