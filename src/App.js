import "./App.css";
import { Test } from "./components/Test";
import { HelloPage } from "./components/HelloPage";

function App() {
  return (
    <div className="App">
      <Test />

      <h1>don't press this button</h1>
      <button>tets</button>
      <HelloPage />
    </div>
  );
}

export default App;
