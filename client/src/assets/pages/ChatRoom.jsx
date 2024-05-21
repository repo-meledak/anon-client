import { useEffect, useState } from "react";
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
  return;
};
