import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ChatBubble from "../components/ChatBubble";
import Swal from "sweetalert2";
import { io } from "socket.io-client";
import "../pages/ChatPage.css";

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
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="chat-box bg-white rounded-3 shadow">
        <div className="message-container" ref={messageContainerRef}>
          <div className="border rounded-3">
            {messages.map((message) => (
              <ChatBubble key={message.id} message={message} />
            ))}
          </div>
        </div>
        <form className="input-group mt-2" onSubmit={handleForm}>
          <input
            type="text"
            className="form-control"
            name="message"
            value={input.message}
            onChange={handleChangeInput}
          />
          <div className="input-group-append">
            <button className="btn btn-success" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;
