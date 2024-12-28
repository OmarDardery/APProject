import React from "react";



function App(props) {
  return (
    <div className="App">
      <h1>References</h1>
      {props.references.map((reference, index) => {
        return (
          <div key={index}>
            <a href={reference.link}>{reference.title}</a>
          </div>
        );
      })}
    </div>
  );
}

export default App;
