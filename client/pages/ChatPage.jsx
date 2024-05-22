import { useState, useEffect, useRef } from "react";
import axios from "axios";
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

    socket.current.on("newMessage", fetchData);

    return () => {
      socket.current.disconnect();
    };
  }, []);

  async function fetchData() {
    try {
      const { data } = await axios.get(
        "https://anon-server.dwriz.com/messages",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      setMessages(data);

      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop =
          messageContainerRef.current.scrollHeight;
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.response
          ? error.response.data.message
          : "An error occurred",
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleForm(event) {
    event.preventDefault();

    try {
      await axios.post("https://anon-server.dwriz.com/add-message", input, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      setInput({ message: "" });

      fetchData();
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.response
          ? error.response.data.message
          : "An error occurred",
      });
    }
  }

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  return (
    <section style={{ backgroundColor: "rgba", minHeight: "100vh" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-5">
            <h5 className="font-weight-bold mb-3 text-center text-md-start">
              Members
            </h5>
            <div className="card">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush">
                  {messages.map((message, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                      style={{
                        backgroundColor: index === 0 ? "#eee" : "transparent",
                      }}
                    >
                      <div className="d-flex flex-row align-items-center">
                        <img
                          src={`https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-${
                            (index % 6) + 1
                          }.webp`}
                          alt="avatar"
                          className="rounded-circle me-3"
                          width={50}
                        />
                        <div>
                          <p className="fw-bold mb-0">
                            {message.User.username}
                          </p>
                          <p className="small text-muted mb-0">
                            {message.message.length > 20
                              ? `${message.message.slice(0, 20)}...`
                              : message.message}
                          </p>
                        </div>
                      </div>
                      <span className="badge bg-danger">1</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div
              className="message-container p-3 bg-white rounded shadow-sm"
              ref={messageContainerRef}
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              {messages.map((message, index) => (
                <div key={index} className="mb-3">
                  <div className="card">
                    <div className="card-body">
                      {message.User.username && (
                        <p className="fw-bold mb-0">{message.User.username}</p>
                      )}
                      <p className="mb-0">{message.message}</p>
                      <p className="small text-muted mb-0">
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <form className="mt-4">
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows={4}
                  name="message"
                  value={input.message}
                  onChange={handleChangeInput}
                  placeholder="Type your message..."
                />
              </div>
              <button
                type="submit"
                className="btn btn-info btn-block"
                onClick={handleForm}
                disabled={!input.message.trim()}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatPage;
