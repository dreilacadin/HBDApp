import { useEffect, useState } from "react";
import { getTranslation } from "../utils/getTranslation";
import { langArray } from "../utils/langArray";

export const useGreeting = () => {
  const [translation, setTranslation] = useState("Happy Birthday");
  const [language, setLanguage] = useState({ name: "English" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const translate = async () => {
      if (language.name !== "English") {
        await getTranslation(language)
          .then((res) => {
            if (res) {
              console.log(res);
              const { translatedText } = res.data.translations;
              setLoading(false);
              setTranslation(translatedText);
            }
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      }
    };
    translate();
  }, [language]);

  const greetMe = () => {
    const random = langArray[Math.floor(Math.random() * langArray.length)];
    setLoading(true);
    setLanguage(random);
  };

  return { translation, language, loading, greetMe };
};
