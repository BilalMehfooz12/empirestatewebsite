import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Router from "../src/Router";
function App() {
  return (
    <div className="App">
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
