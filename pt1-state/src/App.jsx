import { useState } from "react";
import Button from "./Button";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="example-container">
        <h1>State and Props</h1>
        <p>Count: {count}</p>
        {/* We use a callback function so that we tell React to save the function for later when the button is clicked */}
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      </div>
    </main>
  );
}

export default App;
