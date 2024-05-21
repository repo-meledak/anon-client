import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../pages/Register.css";

function Register() {
  const navigate = useNavigate();

  const [input, setInput] = useState({});

  function handleChangeInput(event) {
    const { name, value } = event.target;

    setInput({ ...input, [name]: value });
  }

  async function handleForm(event) {
    event.preventDefault();

    try {
      await axios({
        method: "post",
        url: "https://anon-server.dwriz.com/register",
        data: input,
      });

      Swal.fire({
        text: "Successfully registered!",
        icon: "success",
      });

      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: `${error.response.data.message}`,
      });
    }
  }
  return (
    <>
      <div className="register-box">
        <form onSubmit={handleForm}>
          <div className="user-box">
            <input
              type="text"
              id="username"
              autoComplete="off"
              name="username"
              onChange={handleChangeInput}
            />
            <label htmlFor="">username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChangeInput}
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

export default Register;
