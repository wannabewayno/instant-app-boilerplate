import React, { useEffect }  from "react";
import { useSkipEffect, useMountEffect } from './hooks'; 
import "./App.css";
import API from "./API";

function App() {
  useMountEffect(() => API.getCurrent().then(data => console.log(data)))
  useSkipEffect(() => API.getLegacy().then(data => console.log(data)));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Example App header</h1>
      </header>
      <section>
        I am a section tag
      </section>
    </div>
  );
}

export default App;
