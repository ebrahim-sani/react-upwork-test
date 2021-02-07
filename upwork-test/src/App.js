import "./App.css";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Header />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
