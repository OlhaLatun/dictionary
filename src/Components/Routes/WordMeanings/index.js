import React from "react";

export default function WordMeanings({ meanings, route }) {
  return (
    <div className="meanings">
      {meanings.map((el, i) => (
        <MeaningCard meaning={el} key={i} />
      ))}
    </div>
  );
}

function MeaningCard({ meaning }) {
  return (
    <div className="meaning-card">
      <h3>{meaning.partOfSpeech}</h3>
      <p>{meaning.definitions[0].definition}</p>
    </div>
  );
}
