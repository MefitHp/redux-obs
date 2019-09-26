import React from "react";
import "./App.css";
import Beers from "./components/Beers";

const App = ({ loading, data, loadBeers }) => {
  return (
    <div className="App">
      <Beers />
    </div>
  );
};

export default App;
