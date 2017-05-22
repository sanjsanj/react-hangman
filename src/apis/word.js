const RANDOM_WORD_API = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=5&maxLength=8&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

export default {
  get() {
    return fetch(RANDOM_WORD_API, { method: 'GET' })
      .then(response => Promise.all([response, response.json()]));
  },
};
