import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route to="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
