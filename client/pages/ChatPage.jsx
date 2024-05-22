import { useState, useEffect, useRef, createContext } from "react";
import axios from "axios";
import ChatBubble from "../components/ChatBubble";
import Swal from "sweetalert2";
import { io } from "socket.io-client";
import "../pages/ChatPage.css";
import ChatPageComponent from "../components/ChatPageComponent";

export const ChatPageContext = createContext(null)

function ChatPage() {
  const messageContainerRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState({ message: "" });

  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("https://anon-server.dwriz.com");

    socket.current.on("newMessage", () => {
      fetchData();
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  async function fetchData() {
    try {
      const { data } = await axios({
        method: "get",
        url: "https://anon-server.dwriz.com/messages",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      setMessages(data);

      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop = 0;
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: `${error.response.data.message}`,
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  async function handleForm(event) {
    event.preventDefault();

    try {
      await axios({
        method: "post",
        url: "https://anon-server.dwriz.com/add-message",
        data: input,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      setInput({ message: "" });

      fetchData();
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: `${error.response.data.message}`,
      });
    }
  }

  return (
   <>
   <ChatPageContext.Provider value={{messages, handleChangeInput, handleForm}}>
   <ChatPageComponent/>
   </ChatPageContext.Provider>
   </>
  );
}

export default ChatPage;
