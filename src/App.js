/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Logo } from "./components/logo.js";
import Modal from "./components/Modal.js";
import { useState } from "react";
import LoginForm from "./components/LoginForm.js";

import "bootstrap/dist/css/bootstrap-reboot.css";
import { Button } from "./components/lib.js";

function App() {
  function login(formData) {
    console.log("login", formData);
  }

  function register(formData) {
    console.log("register", formData);
  }
  const [openModal, setOpenModal] = useState("none");

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Logo width="80" height="80" />
      <h1>Shelfie</h1>
      <div
        css={{
          display: "grid",
          gridGap: "0.75rem",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        }}
      >
        <Button onClick={() => setOpenModal("login")}>Login</Button>

        <Button variant="secondary" onClick={() => setOpenModal("register")}>
          Register
        </Button>
      </div>
      {openModal === "login" && (
        <Modal title={"Login"} closeModal={setOpenModal}>
          <LoginForm onSubmit={login} submitButton={<Button>Login</Button>} />
        </Modal>
      )}
      {openModal === "register" && (
        <Modal title={"Register"} closeModal={setOpenModal}>
          <LoginForm
            onSubmit={register}
            submitButton={<Button variant="secondary">Register</Button>}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
