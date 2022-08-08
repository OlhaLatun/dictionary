import axios from "axios";

const API_KEY = `563492ad6f9170000100000138c964b017b94f51bb96b0934d267224`;

export default class DictionaryAPI {
  getWord(word) {
    return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  }

  getImages(word) {
    return axios.get(
      `https://api.pexels.com/v1/search?query=${word}&per_page=10`,
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );
  }
}
