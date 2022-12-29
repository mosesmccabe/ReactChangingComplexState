import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <div className="container">
      <h1>Hello {submit ? fName + " " + lName : null}</h1>
      <form
        onSubmit={(event) => {
          setSubmit(true);
          event.preventDefault();
        }}
      >
        <input
          onChange={(event) => setFName(event.target.value)}
          name="fName"
          placeholder="First Name"
          value={fName}
        />
        <input
          onChange={(event) => setLName(event.target.value)}
          name="lName"
          placeholder="Last Name"
          value={lName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
