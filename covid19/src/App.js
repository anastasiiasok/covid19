import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage />
      </Router>
    </div>
  );
}

export default App;
