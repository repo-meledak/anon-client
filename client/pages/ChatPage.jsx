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
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
            <h5 className="font-weight-bold mb-3 text-center text-lg-start">
              Member
            </h5>
            <div className="card">
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {messages.map((message, index) => (
                    <li
                      key={index}
                      className="p-2 border-bottom"
                      style={{
                        backgroundColor: index === 0 ? "#eee" : "transparent",
                      }}
                    >
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="d-flex flex-row">
                          <img
                            src={`https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-${
                              (index % 6) + 1
                            }.webp`}
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width={60}
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">{message.user}</p>
                            <p className="small text-muted">
                              {message.message}
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">
                            {new Date(message.timestamp).toLocaleTimeString()}
                          </p>
                          {index === 0 && (
                            <span className="badge bg-danger float-end">1</span>
                          )}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 col-xl-8">
            <ul className="list-unstyled">
              {messages.map((message, index) => (
                <li className="d-flex justify-content-between mb-4" key={index}>
                  <img
                    src={`https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-${
                      (index % 6) + 1
                    }.webp`}
                    alt="avatar"
                    className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                    width={60}
                  />
                  <div className="card w-100">
                    <div className="card-header d-flex justify-content-between p-3">
                      <p className="fw-bold mb-0">{message.user}</p>
                      <p className="text-muted small mb-0">
                        <i className="far fa-clock" />{" "}
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">{message.message}</p>
                    </div>
                  </div>
                </li>
              ))}
              <li className="bg-white mb-3">
                <div data-mdb-input-init="" className="form-outline">
                  <textarea
                    className="form-control"
                    id="textAreaExample2"
                    rows={4}
                    name="message"
                    value={input.message}
                    onChange={handleChangeInput}
                  />
                  <label className="form-label" htmlFor="textAreaExample2">
                    Message
                  </label>
                </div>
              </li>
              <button
                type="button"
                data-mdb-button-init=""
                data-mdb-ripple-init=""
                className="btn btn-info btn-rounded float-end"
                onClick={handleForm}
              >
                Send
              </button>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatPage;
