import "./App.css";

import Footer from "./components/Footer/Footer";
import RandomColor from "./components/random-color/randomColorGen";
import Accordian from "./components/Accordian/Accordian";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      <RandomColor />
      <Footer />
    </div>
  );
}

export default App;
