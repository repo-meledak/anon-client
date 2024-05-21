import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
        <h2>Login</h2>
        <form action="">
          <div className="user-box">
            <input type="text" required="" />
            <label htmlFor="">Username</label>
          </div>
          <div className="user-box">
            <input type="password" required="" />
            <label htmlFor="">password</label>
          </div>
          <a href="">
            <span />
            <span />
            <span />
            <span />
            Login
          </a>

          <a href="">
            <span />
            <span />
            <span />
            <span />
            Register
          </a>
        </form>
      </div>
    </>
  );
}

export default Login;
