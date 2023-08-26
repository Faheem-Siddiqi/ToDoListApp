import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [output, setOutput] = useState([]);
  const [disabled, setDisable] = useState(false);
  const [inputField, setInput] = useState("");
  useEffect(() => {
    if (inputField === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [inputField]);
  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  const formHandler = (event) => {
    event.preventDefault();
    setOutput((prevData) => {
      return [inputField, ...prevData];
      setOutput("");
      // after submit clearing the placeholder
    });
  };
  const RemoveHandler = (index) => {
    const updatedListAfterRemove = output.filter((element, id) => {
      return index != id;
    });
    setOutput(updatedListAfterRemove);
  };
  const orderList = output.map((prevData, index) => {
    return (
      <div className="PData" key={index}>
        <li>{prevData}</li>
        {/* remove ka lia anoynomous function ka return ma function name wih parameter index ai ga */}
        <button className="Remove" onClick={() => RemoveHandler(index)}>
          Remove
        </button>
      </div>
    );
  });
  return (
    <>
      <div className="parent">
        <form action="" onSubmit={formHandler}>
          <h1>WHATS ON YOUR MIND ? </h1> <br />
          <input type="text" onChange={inputHandler} />
          <br />
          <button className="submitBtn" disabled={disabled} type="submit">
            SUBMIT
          </button>
        </form>
        <div className="data">
          {output.length == 0 ? (
            <center>
              <h2 style={{ marginTop: "15%" }}>Empty List</h2>
            </center>
          ) : (
            <ol>{orderList}
             <button className="RemoveAll " style={{text:"center"}} onClick={()=>setOutput([])}> Remove ALL </button>
            </ol>
          )}
        </div>
      </div>
    </>
  );
}
export default App;
