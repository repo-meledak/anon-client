import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../pages/Login.css";

function Login() {
  const navigate = useNavigate();

  const [input, setInput] = useState({});

  function handleChangeInput(event) {
    const { name, value } = event.target;

    setInput({ ...input, [name]: value });
  }

  async function handleForm(event) {
    event.preventDefault();

    try {
      const { data } = await axios({
        method: "post",
        url: "https://anon-server.dwriz.com/login",
        data: input,
      });

      localStorage.setItem("access_token", data.access_token);

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: `${error.response.data.message}`,
      });
    }
  }

  return (
    <>
      <div className="login-box">
        <form onSubmit={handleForm}>
          <div className="user-box">
            <input
              type="text"
              id="username"
              autoComplete="off"
              name="username"
              onChange={handleChangeInput}
            />
            <label htmlFor="username">username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChangeInput}
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

export default Login;
