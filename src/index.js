import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function reducer(state, action) {
  if (action.type === "add") {
    return state + action.value;
  }

  if (action.type === "subtract") {
    return state - action.value;
  }

  return state;
}

function BoringCalculator() {
  /* Pass a reducer and an initial state */
  const [state, dispatch] = useReducer(reducer, 0);

  /* These functions dispatch actions described as obejcts */
  function add3() {
    dispatch({ type: "add", value: 3 });
  }

  function subtract5() {
    dispatch({ type: "subtract", value: 5 });
  }

  function add7() {
    dispatch({ type: "add", value: 7 });
  }

  /* Attach the actions to the buttons and render the state */
  return (
    <div className="calculator">
      <div className="result">{state}</div>
      <button className="add" onClick={add3}>
        Add 3
      </button>
      <button className="subtract" onClick={subtract5}>
        Subtract 5
      </button>
      <button className="add" onClick={add7}>
        Add 7
      </button>
    </div>
  );
}

ReactDOM.render(<BoringCalculator />, document.getElementById("root"));
