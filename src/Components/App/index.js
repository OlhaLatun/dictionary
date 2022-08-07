import "./App.css";
import Search from "../Search";
import { useEffect, useState } from "react";

import DictionaryAPI from "../../Helpers/service";
const api = new DictionaryAPI();

function App() {
  const [word, setWord] = useState(null);
  const [data, setData] = useState(null);

  console.log(data);

  useEffect(() => {
    if (word) {
      api
        .getWord(word)
        .then((data) => setData(data.data[0]))
        .catch((err) => console.log(err));
    }
  }, [word]);

  return (
    <div className="App">
      <h1 className="heading">Dictionary</h1>
      <Search getWord={setWord} />
    </div>
  );
}

export default App;
