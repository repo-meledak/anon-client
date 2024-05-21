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

/*
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="border w-75 p-5 my-5 bg-white rounded-3 shadow">
          <div className="align-self-center">
            <form onSubmit={handleForm}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  autoComplete="off"
                  name="username"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleChangeInput}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
              <Link to="/register">
                <button className="mt-2 btn btn-warning w-100">Register</button>
              </Link>
            </form>
          </div>
        </div>
      </div>

*/
