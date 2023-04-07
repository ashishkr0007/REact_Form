import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [hadingText, setHading] = useState("");

  function handleChange(event) {
    // console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHading(name);
    // console.log(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {hadingText} </h1>

      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
