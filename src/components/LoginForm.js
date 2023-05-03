export default function LoginForm({ onSubmit, buttonText }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">username</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input id="password" type="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  );
}
