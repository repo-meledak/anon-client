import { useContext } from "react";
import { ChatPageContext } from "../pages/ChatPage";
import ChatBubble from "./ChatBubble";

export default function ChatPageComponent() {

    const Chat = useContext(ChatPageContext)

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="chat-box bg-white rounded-3 shadow">
          <div className="message-container" ref={messageContainerRef}>
            <div className="border rounded-3">
              {Chat.messages.map((message) => (
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
    </>
  );
}
