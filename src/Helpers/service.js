import axios from "axios";

export default class DictionaryAPI {
  getWord(word) {
    return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  }
}
