import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "../../App.css";

export const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const { data } = await axios.get(
        "https://anon-server.dwriz.com/messages",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      console.log(data);
      setMessages(data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Sorry Ya!",
        text: error.response.data.message,
        icon: "error",
      });
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <>
      <div className="chat_window">
        <div className="top_menu">
          <div className="buttons">
            <div className="button close" />
            <div className="button minimize" />
            <div className="button maximize" />
          </div>
          <div className="title">Chat</div>
        </div>
        <div className="d-flex justify-content-center my-5">
          {messages.map((messages) => {
            return <messages key={messages.message} course={messages} />;
          })}
        </div>
        <ul className="messages"> {messages.message}</ul>
        <div className="bottom_wrapper clearfix">
          <div className="message_input_wrapper">
            <input
              className="message_input"
              placeholder="Type your message here..."
            />
          </div>
          <div className="send_message">
            <div className="icon" />
            <div className="text">Send</div>
          </div>
        </div>
      </div>
      <div className="message_template">
        <li className="message">
          <div className="avatar" />
          <div className="text_wrapper">
            <div className="text" />
          </div>
        </li>
      </div>
    </>
  );
};
