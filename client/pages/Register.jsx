import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../pages/Register.css";
import RegisterComponent from "../components/RegisterComponent";

export const RegisterContext = createContext(null);

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
      <RegisterContext.Provider value={{ handleChangeInput, handleForm }}>
        <RegisterComponent />
      </RegisterContext.Provider>
    </>
  );
}

export default Register;
