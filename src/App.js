import "./App.css";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Router from "../src/Router";
import gif from "../src/Image/gif.gif";
function LoadingScreen() {
  return (
    <div className="loading-screen">
      <h1>Loading...</h1>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          {/* <h1>Loading...</h1> */}
          <img src={gif} />
        </div>
      ) : (
        <Router />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
