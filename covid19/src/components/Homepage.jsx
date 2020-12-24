import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

function Homepage() {
  return (
    <>
      <img className="image" src="covid.png" width="500"></img>
      <br></br>
      <br></br>
      <h1 class="lead">
        <Link to="/covid19">Worldwide COVID-19 Dashboard</Link>
      </h1>{" "}
      <div className="lead">
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <a
              class="btn  btn-primary"
              href="https://coronavirus.jhu.edu/map.html"
              role="button"
            >
              Resourse Center
            </a>
            <h2 class="featurette-heading">
              Johns Hopkins Coronavirus Resource Center.
            </h2>
            <p class="lead">
              Johns Hopkins experts in global public health, infectious disease,
              and emergency preparedness have been at the forefront of the
              international response to COVID-19.
            </p>
            <p class="lead">
              {" "}
              This website is a resource to help advance the understanding of
              the virus, inform the public, and brief policymakers in order to
              guide a response, improve care, and save lives..{" "}
            </p>

            <br></br>

            <img src="jhopkins.png" width="500"></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default Homepage;
