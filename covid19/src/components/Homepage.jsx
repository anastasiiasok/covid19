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
      <Link to="/covid19"> Click to track</Link>
      <Route exact path="/info">
        <Covid19 />
      </Route>
    </div>
  );
}
export default Homepage;
