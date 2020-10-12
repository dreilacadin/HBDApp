import React, { useEffect, useState } from "react";
import { getTranslation } from "./utils/getTranslation";
import { langArray } from "./utils/langArray";
import Spinner from "./components/Spinner";

import "./styles.css";

export default function App() {
  const [translation, setTranslation] = useState("Happy Birthday");
  const [randomLang, setRandomLang] = useState({ name: "English" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const translate = async () => {
      if (randomLang.name !== "English") {
        await getTranslation(randomLang)
          .then((res) => {
            if (res) {
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
  }, [randomLang]);

  const getRandomLanguage = () => {
    if (!langArray.length) {
      return null;
    }

    return langArray[Math.floor(Math.random() * langArray.length)];
  };

  const greetMe = () => {
    setLoading(true);
    setRandomLang(getRandomLanguage());
  };

  const renderGreeting = () => {
    if (!translation) return null;
    if (loading) return <Spinner />;
    return (
      <div className="greetings">
        <h1>{`${translation} Earle Cruz! 🎉`}</h1>
        <p>{`Greeting in ${randomLang.name}`}</p>
        <button onClick={greetMe}>Greet me more!</button>
      </div>
    );
  };

  return <div className="App">{renderGreeting()}</div>;
}
