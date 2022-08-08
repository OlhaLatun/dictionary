import React from "react";

export default function WordSynonyms({ data }) {
  return (
    <div className="meanings">
      {data.map((el, i) => (
        <MeaningCard meaning={el} key={i} />
      ))}
    </div>
  );
}

function MeaningCard({ meaning }) {
  return (
    <div className="meaning-card">
      <h3>{meaning.partOfSpeech}</h3>
      <ul>
        {meaning.synonyms.length === 0
          ? "No synonyms provided"
          : meaning.synonyms.map((el, i) => <li key={i}>{el}</li>)}
      </ul>
    </div>
  );
}
