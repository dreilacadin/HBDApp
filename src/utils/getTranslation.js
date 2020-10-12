import axios from "axios";

export const getTranslation = async (target) => {
  console.log(target);
  const options = {
    method: "POST",
    url: "https://rapidapi.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
      "x-rapidapi-key": "7f737ae59emsh8adcac78706b59dp15d24ajsn3e6958d29d30"
    },
    data: { q: "Happy Birthday", source: "en", target: target.language }
  };

  const res = await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return res;
};
