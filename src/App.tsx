import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./Routes/main.routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map(({ path, exact, Component }, index) => {
            return (
              <Route
                key={index}
                path={path}
                exact={exact}
                render={(props) => <Component {...props} />}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
