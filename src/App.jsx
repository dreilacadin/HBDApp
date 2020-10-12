import React from "react";
import Spinner from "./components/Spinner";
import { useGreeting } from "./hooks/useGreeting";
import "./styles.css";

export default function App() {
  const { translation, language, loading, greetMe } = useGreeting();
  const celebrant = "Earle Cruz";

  const renderGreeting = () => {
    if (!translation) return;
    if (loading) return <Spinner />;
    return (
      <div className="greetings">
        <h1>{`${translation} ${celebrant}! 🎉`}</h1>
        <p>{`Greeting in ${language.name}`}</p>
        <button onClick={greetMe}>Greet me more!</button>
      </div>
    );
  };

  return <div className="App">{renderGreeting()}</div>;
}
