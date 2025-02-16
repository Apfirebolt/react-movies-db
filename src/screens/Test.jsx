import { useReducer, useRef } from "react";

const Test = () => {
  // Define the reducer function
  const counterReducer = (state, action) => {
    // console.log("Action:", action);
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      case "setValue": // Example of setting a specific value
        return { count: action.payload };
      default:
        return state; // Important: Return the state if action type is not recognized
    }
  };

  // Use the useReducer hook to create a state and dispatch function
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const inputRef = useRef(null);

  return (
    <main className="container">
      <h1>Welcome to React Movies DB</h1>
      <p>This is just a test page for testing React features</p>

      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "setValue", payload: 10 })}>
          Set to 10
        </button>

        <input
          ref={inputRef}
          type="number"
          onChange={(e) =>
            dispatch({ type: "setValue", payload: Number(e.target.value) })
          }
        />

        <button onClick={() => console.log(inputRef.current.value)}>
          Print Input Value
        </button>

        <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      </div>
    </main>
  );
};

export default Test;
