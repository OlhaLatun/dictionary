import React, { useEffect, useState } from "react";
import DictionaryAPI from "../../../Helpers/service";
const api = new DictionaryAPI();

export default function WordImages({ word }) {
  const [pics, setPics] = useState(null);

  useEffect(() => {
    api
      .getImages(word)
      .then((res) => setPics(res.data.photos))
      .catch((err) => console.log(err));
  }, [word]);
  return (
    <div className="gallery">
      {pics
        ? pics.map((pic, i) => (
            <img src={`${pic.src.small}`} alt="img" key={i} />
          ))
        : null}
    </div>
  );
}
