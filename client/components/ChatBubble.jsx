import React from "react";

function ChatBubble({ message }) {
  let date = new Date(message.createdAt);

  let year = date.getUTCFullYear();
  let month = String(date.getUTCMonth() + 1).padStart(2, "0");
  let day = String(date.getUTCDate()).padStart(2, "0");
  let hours = String(date.getUTCHours()).padStart(2, "0");
  let minutes = String(date.getUTCMinutes()).padStart(2, "0");
  let seconds = String(date.getUTCSeconds()).padStart(2, "0");

  let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return (
    <div className="row mb-2">
      <div className="col-3 p-2 bg-secondary border border-dark">
        {message.User.username}
      </div>
      <div className="col-5 p-2 border border-dark">{message.message}</div>
      <div className="col-4 p-2 border border-dark">{formattedDate}</div>
    </div>
  );
}

export default ChatBubble;
