import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

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
    <main className="content">
      <div className="container p-0">
        <h1 className="h3 mb-3">Messages</h1>

        <div className="card">
          <div className="row g-0">
            <div className="col-12 col-lg-5 col-xl-3 border-right">
              <div className="px-4 d-none d-md-block">
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control my-3"
                      placeholder="Search..."
                    />
                  </div>
                </div>
              </div>
              {/* Add your list of users here */}
            </div>

            <div className="col-12 col-lg-7 col-xl-9">
              {/* Add your chat messages here */}
              <div className="position-relative">
                <div className="chat-messages p-4">
                  {/* Add your chat message components here */}
                </div>
              </div>

              <div className="flex-grow-0 py-3 px-4 border-top">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message"
                  />
                  <button className="btn btn-primary">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
