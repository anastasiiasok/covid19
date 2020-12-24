import React from "react";
import Covid19 from "./Covid19";
import Homepage from "./Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

function Main() {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/covid19">
            <Covid19 />
          </Route>
        </Switch>
      </div>
    </>
  );
}
export default Main;
