import { createContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../pages/Login.css";
import LoginComponent from "../components/LoginComponent";

export const LoginContext = createContext(null)

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
    <LoginContext.Provider value={{handleChangeInput, handleForm}}>
     <LoginComponent />
    </LoginContext.Provider>
    </>
  );
}

export default Login;
