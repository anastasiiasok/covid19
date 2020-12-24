import React from "react";
import Covid19 from "./Covid19";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

function Homepage() {
  return (
    <div>
      <Link to="/covid19"> click here to track</Link>
      <br></br>
      <Link to="/homepage"> Home Page</Link>
      <Switch>
        <Route exact path="/">
          <Redirect to="/homepage" />
        </Route>

        <Route exact path="/covid19">
          <Covid19 />
        </Route>
      </Switch>
    </div>
  );
}
export default Homepage;
