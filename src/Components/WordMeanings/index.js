import React from "react";

export default function WordMeanings({ meanings }) {
  return (
    <div className="meanings">
      {meanings.map((el, i) => (
        <MeaningCard meaning={el} key={i} />
      ))}
    </div>
  );
}

function MeaningCard({ meaning }) {
  console.log(meaning.partOfSpeech);
  return (
    <div className="meaning-card">
      <h3>{meaning.partOfSpeech}</h3>
      <p>{meaning.definitions[0].definition}</p>
    </div>
  );
}
