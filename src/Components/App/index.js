import "./App.css";
import Search from "../Search";
import WordCard from "../WordCard";
import WordMeanings from "../Routes/WordMeanings";
import Navigation from "../Navigation";
import WordSynonyms from "../Routes/WordSynonyms";
import WordAntonyms from "../Routes/WordAntonyms";
import WordImages from "../Routes/WordImages";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <>
      <BrowserRouter>
        <div className="App">
          <h1 className="heading">Dictionary</h1>
          <Search getWord={setWord} />

          {data ? (
            <>
              <WordCard data={data} />
              <Navigation />

              <Routes>
                <Route path="/" element={null} />
                <Route
                  path="meanings"
                  element={
                    <WordMeanings
                      meanings={data.meanings}
                      route={"definition"}
                    />
                  }
                />
                <Route
                  path="synonyms"
                  element={<WordSynonyms data={data.meanings} />}
                />
                <Route
                  path="antonyms"
                  element={<WordAntonyms data={data.meanings} />}
                />
                <Route path="images" element={<WordImages />} />
              </Routes>
            </>
          ) : (
            <p className="notification">Enter the word: i.e. cat, run, plum </p>
          )}
        </div>

        <div className="footer">
          {" "}
          Source code on{" "}
          <a href="https://github.com/OlhaLatun/dictionary">Github</a>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
