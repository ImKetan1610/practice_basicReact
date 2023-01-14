import React, { useState } from "react";
import data from "./data";

import "./App.css";

function App() {
  let [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length}</h3>
        <button onClick={()=>setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
