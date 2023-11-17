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
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      </div>
    </main>
  );
}

export default App;
