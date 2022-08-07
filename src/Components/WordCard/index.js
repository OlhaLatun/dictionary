import React from "react";

export default function WordCard({ data }) {
  return (
    <div className="word-card">
      <h2> {data.word} </h2>
      <p>{data.phonetic}</p>
    </div>
  );
}
