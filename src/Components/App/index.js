import "./App.css";
import Search from "../Search";
import { useState } from "react";

function App() {
  const [word, setWord] = useState(null);

  console.log(word);
  return (
    <div className="App">
      <h1 className="heading">Dictionary</h1>
      <Search getWord={setWord} />
    </div>
  );
}

export default App;
