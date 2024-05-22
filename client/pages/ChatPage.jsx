import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ChatBubble from "../components/ChatBubble";
import Swal from "sweetalert2";
import { io } from "socket.io-client";

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
        messageContainerRef.current.scrollTop =
          messageContainerRef.current.scrollHeight;
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
    <div style={styles.container}>
      <div style={styles.chatBox}>
        <div style={styles.messageContainer} ref={messageContainerRef}>
          <div style={styles.messageBorder}>
            {messages.map((message) => (
              <ChatBubble key={message.id} message={message} />
            ))}
          </div>
        </div>
        <form style={styles.inputGroup} onSubmit={handleForm}>
          <input
            type="text"
            name="message"
            value={input.message}
            onChange={handleChangeInput}
            placeholder="Type a message..."
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#f0f2f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  chatBox: {
    width: "90%",
    maxWidth: "600px",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1rem",
    background: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  messageContainer: {
    flexGrow: 1,
    overflowY: "auto",
    padding: "1rem",
    marginBottom: "1rem",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    background: "#f9f9f9",
  },
  messageBorder: {
    borderRadius: "10px",
  },
  inputGroup: {
    display: "flex",
    borderRadius: "10px",
    overflow: "hidden",
  },
  input: {
    flexGrow: 1,
    border: "none",
    padding: "1rem",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    outline: "none",
    boxShadow: "none",
    fontSize: "16px",
  },
  button: {
    border: "none",
    background: "#28a745",
    color: "white",
    padding: "1rem 2rem",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ChatPage;
