import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "../src/pages/Search";

function App() {
  return (
    <Router>
      <div>
       <Search />
      </div>
    </Router>
  );
}

export default App;