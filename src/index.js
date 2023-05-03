import React from "react";
import ReactDOM from "react-dom/client";
import { Logo } from "./components/logo.js";

function App() {
  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Shelfie</h1>
      <div>
        <button onClick={() => alert("Login clicked")}>Login</button>
      </div>
      <div>
        <button onClick={() => alert("Register clicked")}>Register</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
