import React from "react";

export default function Search({ getWord }) {
  function handleSubmit(e) {
    e.preventDefault();
    getWord(e.target[0].value);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input type="text" />
      <button>🔍</button>
    </form>
  );
}
