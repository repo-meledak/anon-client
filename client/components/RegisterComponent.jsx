import { useContext } from "react";
import { RegisterContext } from "../pages/Register";

export default function RegisterComponent() {
  const Register = useContext(RegisterContext);
  return (
    <>
      <div className="register-box">
        <form onSubmit={Register.handleForm}>
          <div className="user-box">
            <input
              type="text"
              id="username"
              autoComplete="off"
              name="username"
              onChange={Register.handleChangeInput}
            />
            <label htmlFor="">username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              id="password"
              name="password"
              onChange={Register.handleChangeInput}
            />
            <label htmlFor="">password</label>
          </div>
          <button type="submit" className="register-button">
            <span />
            <span />
            <span />
            <span />
            Register
          </button>
        </form>
      </div>
    </>
  );
}
