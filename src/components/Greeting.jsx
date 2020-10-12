import React from "react";

const Greeting = () => {
  return (
    <div className="greetings">
      <h1>{`${translation} Earle Cruz! 🎉`}</h1>
      <p>{`Greeting in ${randomLang.name}`}</p>
      <button onClick={greetMe}>Greet me more!</button>
    </div>
  );
};

export default Greeting;
