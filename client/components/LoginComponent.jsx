import { useContext } from "react";
import { LoginContext } from "../pages/Login";

export default function LoginComponent() {
  const Login = useContext(LoginContext);
  return (
    <>
      <div className="login-box">
        <form onSubmit={Login.handleForm}>
          <div className="user-box">
            <input
              type="text"
              id="username"
              autoComplete="off"
              name="username"
              onChange={Login.handleChangeInput}
            />
            <label htmlFor="username">username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              id="password"
              name="password"
              onChange={Login.handleChangeInput}
            />
            <label htmlFor="password">password</label>
          </div>
          <button type="submit" className="login-button">
            <span />
            <span />
            <span />
            <span />
            Login
          </button>
        </form>
      </div>
    </>
  );
}
