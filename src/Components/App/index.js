import "./App.css";
import Search from "../Search";
import WordCard from "../WordCard";
import WordMeanings from "../WordMeanings";
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
      {data ? (
        <WordCard data={data} />
      ) : (
        <p class="notification">Enter the word: i.e. cat, run, plum </p>
      )}
      {data ? <WordMeanings meanings={data.meanings} /> : null}
    </div>
  );
}

export default App;
