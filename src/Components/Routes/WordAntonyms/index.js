import React from "react";

export default function WordAntonyms({ data }) {
  return (
    <div className="meanings">
      {data.map((el, i) => (
        <Card meaning={el} key={i} />
      ))}
    </div>
  );
}

function Card({ meaning }) {
  return (
    <div className="meaning-card">
      <h3>{meaning.partOfSpeech}</h3>
      <ul>
        {meaning.antonyms
          ? "No antonyms provided"
          : meaning.antonyms.map((el, i) => <li key={i}>{el}</li>)}
      </ul>
    </div>
  );
}
