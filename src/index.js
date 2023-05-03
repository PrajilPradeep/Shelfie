import React from "react";
import ReactDOM from "react-dom/client";
import { Logo } from "./components/logo.js";
import Modal from "./components/Modal.js";
import { useState } from "react";
import LoginForm from "./components/LoginForm.js";

function App() {
  function login(formData) {
    console.log("login", formData);
  }

  function register(formData) {
    console.log("register", formData);
  }
  const [openModal, setOpenModal] = useState("none");

  return (
    <div>
      {openModal === "login" && (
        <Modal title={"Login"} closeModal={setOpenModal}>
          <LoginForm onSubmit={login} buttonText="Login" />
        </Modal>
      )}
      {openModal === "register" && (
        <Modal title={"Register"} closeModal={setOpenModal}>
          <LoginForm onSubmit={register} buttonText="Register" />
        </Modal>
      )}
      <Logo width="80" height="80" />
      <h1>Shelfie</h1>
      <div>
        <button onClick={() => setOpenModal("login")}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal("register")}>Register</button>
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
