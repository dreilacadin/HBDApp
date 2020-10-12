import axios from "axios";

export const getLanguages = async () => {
  let languages = undefined;
  const options = {
    method: "GET",
    url: "https://rapidapi.p.rapidapi.com/language/translate/v2/languages",
    headers: {
      "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
      "x-rapidapi-key": "7f737ae59emsh8adcac78706b59dp15d24ajsn3e6958d29d30"
    }
  };

  await axios
    .request(options)
    .then(function (response) {
      languages = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return languages;
};
