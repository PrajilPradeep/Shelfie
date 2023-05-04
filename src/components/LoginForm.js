// The below line is known as a pragma, and it informs the transpiler (usually Babel) that the JSX
// syntax should be transformed into Emotion's CSS-in-JS syntax.
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { FormGroup, Input } from "./lib";

export default function LoginForm({ onSubmit, submitButton }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  }
  return (
    <form
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        "> div": {
          margin: "10px auto",
          width: "100%",
          maxWidth: "300px",
        },
      }}
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input id="username" type="text" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </FormGroup>
      <div>{submitButton}</div>
    </form>
  );
}
