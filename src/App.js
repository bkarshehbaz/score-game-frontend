import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/home";
import Sports from "./pages/sports";
import Share from "./pages/share";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/scoreboard/:sport" exact component={Sports} />
          <Route path="/share/:scoreboardId" exact component={Share} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
