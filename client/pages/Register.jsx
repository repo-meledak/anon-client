import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
      const { data } = await axios({
        method: "post",
        url: "http://localhost:3000/register",
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
      return (
      <>
        <div className="login-box">
          <h2>Register</h2>
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
              Register
            </a>
          </form>
        </div>
      </>
      );
    </>
  );
}

export default Register;