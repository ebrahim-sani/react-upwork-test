import "./App.css";
import Form from "./Components/Form";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/add-new-book">
            <Form />
          </Route>
          <Route path="/">
            <Gallery />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
