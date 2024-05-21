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
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container">
        <div className="panel messages-panel">
          <div className="contacts-list">
            <div className="inbox-categories">
              <div data-toggle="tab" data-target="#inbox" className="active">
                {" "}
                Inbox{" "}
              </div>
              <div data-toggle="tab" data-target="#sent">
                {" "}
                Sent{" "}
              </div>
              <div data-toggle="tab" data-target="#marked">
                {" "}
                Marked{" "}
              </div>
              <div data-toggle="tab" data-target="#drafts">
                {" "}
                Drafts{" "}
              </div>
            </div>
            <div className="tab-content">
              <div
                id="inbox"
                className="contacts-outter-wrapper tab-pane active"
              >
                <form className="panel-search-form info form-group has-feedback no-margin-bottom">
                  <input
                    type="text"
                    className="form-control"
                    name="search"
                    placeholder="Search"
                  />
                  <span className="fa fa-search form-control-feedback" />
                </form>
                <div className="contacts-outter">
                  <ul className="list-unstyled contacts">
                    <li
                      data-toggle="tab"
                      data-target="#inbox-message-1"
                      className="active"
                    >
                      <div className="message-count"> 1 </div>
                      <img
                        alt=""
                        className="img-circle medium-image"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      />
                      <div className="vcentered info-combo">
                        <h3 className="no-margin-bottom name"> John Doe </h3>
                        <h5>
                          {" "}
                          Hah, too late, I already bought it and my team is
                          impleting the new design right now.
                        </h5>
                      </div>
                      <div className="contacts-add">
                        <span className="message-time">
                          {" "}
                          2:32 <sup>AM</sup>
                        </span>
                        <i className="fa fa-trash-o" />
                        <i className="fa fa-paperclip" />
                      </div>
                    </li>
                    <li data-toggle="tab" data-target="#inbox-message-2">
                      <img
                        alt=""
                        className="img-circle medium-image"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      />
                      <div className="vcentered info-combo">
                        <h3 className="no-margin-bottom name"> John Doe </h3>
                        <h5>
                          {" "}
                          Of course, just call me before that, in case I forget.{" "}
                        </h5>
                      </div>
                      <div className="contacts-add">
                        <span className="message-time">
                          {" "}
                          3:56 <sup>AM</sup>
                        </span>
                        <i className="fa fa-trash-o" />
                        <i className="fa fa-paperclip" />
                      </div>
                    </li>
                    <li data-toggle="tab" data-target="#inbox-message-3">
                      <div className="message-count"> 1 </div>
                      <img
                        alt=""
                        className="img-circle medium-image"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      />
                      <div className="vcentered info-combo">
                        <h3 className="no-margin-bottom name"> John Doe</h3>
                        <h5>
                          {" "}
                          Hey, you asked for my feedback, it's brilliant. Damn,
                          I
                        </h5>
                      </div>
                      <div className="contacts-add">
                        <span className="message-time">
                          {" "}
                          5:21 <sup>AM</sup>
                        </span>
                        <i className="fa fa-trash-o" />
                        <i className="fa fa-paperclip" />
                      </div>
                    </li>
                    <li data-toggle="tab" data-target="#inbox-message-4">
                      <div className="message-count"> 2 </div>
                      <img
                        alt=""
                        className="img-circle medium-image"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      />
                      <div className="vcentered info-combo">
                        <h3 className="no-margin-bottom name"> John Doe </h3>
                        <h5> And invite Daniel too, please </h5>
                      </div>
                      <div className="contacts-add">
                        <span className="message-time">
                          {" "}
                          6:13 <sup>AM</sup>
                        </span>
                        <i className="fa fa-trash-o" />
                        <i className="fa fa-paperclip" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="sent" className="contacts-outter-wrapper tab-pane">
                <form className="panel-search-form success form-group has-feedback no-margin-bottom">
                  <input
                    type="text"
                    className="form-control"
                    name="search"
                    placeholder="Search"
                  />
                  <span className="fa fa-search form-control-feedback" />
                </form>
                <div className="contacts-outter">
                  <ul className="list-unstyled contacts success">
                    <li data-toggle="tab" data-target="#sent-message-1">
                      <img
                        alt=""
                        className="img-circle medium-image"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      />
                      <div className="vcentered info-combo">
                        <h3 className="no-margin-bottom name">
                          {" "}
                          David Beckham{" "}
                        </h3>
                        <h5>
                          {" "}
                          I would like to take a look at it this evening, is it
                          possible ?{" "}
                        </h5>
                      </div>
                      <div className="contacts-add">
                        <span className="message-time">
                          {" "}
                          2:24 <sup>AM</sup>
                        </span>
                        <i className="fa fa-trash-o" />
                        <i className="fa fa-paperclip" />
                      </div>
                    </li>
                    <li data-toggle="tab" data-target="#sent-message-2">
                      <div className="message-count"> 7 </div>
                      <img
                        alt=""
                        className="img-circle medium-image"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      />
                      <div className="vcentered info-combo">
                        <h3 className="no-margin-bottom name">
                          {" "}
                          Jeff Williams{" "}
                        </h3>
                        <h5>
                          {" "}
                          Hello, Dennis. I will take a look at it tomorrow,
                          because I'm{" "}
                        </h5>
                      </div>
                      <div className="contacts-add">
                        <span className="message-time">
                          {" "}
                          12:41 <sup>AM</sup>
                        </span>
                        <i className="fa fa-trash-o" />
                        <i className="fa fa-paperclip" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="marked" className="contacts-outter-wrapper tab-pane">
                <form className="panel-search-form warning form-group has-feedback no-margin-bottom">
                  <input
                    type="text"
                    className="form-control"
                    name="search"
                    placeholder="Search"
                  />
                  <span className="fa fa-search form-control-feedback" />
                </form>
                <div className="contacts-outter">
                  <ul className="list-unstyled contacts warning">
                    <li data-toggle="tab" data-target="#marked-message-1">
                      <div className="message-count"> 2 </div>
                      <img
                        alt=""
                        className="img-circle medium-image"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      />
                      <div className="vcentered info-combo">
                        <h3 className="no-margin-bottom name">
                          {" "}
                          Jessica Franco{" "}
                        </h3>
                        <h5>
                          {" "}
                          Hello, Dennis. I wanted to let you know we reviewed
                          your proposal and decided
                        </h5>
                      </div>
                      <div className="contacts-add">
                        <span className="message-time">
                          {" "}
                          1:44 <sup>AM</sup>
                        </span>
                        <i className="fa fa-trash-o" />
                        <i className="fa fa-paperclip" />
                      </div>
                    </li>
                    <li data-toggle="tab" data-target="#marked-message-2">
                      <div className="message-count"> 1 </div>
                      <img
                        alt=""
                        className="img-circle medium-image"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      />
                      <div className="vcentered info-combo">
                        <h3 className="no-margin-bottom name"> Pavel Durov </h3>
                        <h5>
                          {" "}
                          Hey, we need your help for our next Telegram
                          re-design.{" "}
                        </h5>
                      </div>
                      <div className="contacts-add">
                        <span className="message-time">
                          {" "}
                          3:23 <sup>AM</sup>
                        </span>
                        <i className="fa fa-trash-o" />
                        <i className="fa fa-paperclip" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="drafts" className="contacts-outter-wrapper tab-pane">
                <form className="panel-search-form dark form-group has-feedback no-margin-bottom">
                  <input
                    type="text"
                    className="form-control"
                    name="search"
                    placeholder="Search"
                  />
                  <span className="fa fa-search form-control-feedback" />
                </form>
                <div className="contacts-outter">
                  <ul className="list-unstyled contacts dark">
                    <li data-toggle="tab" data-target="#draft-message-1">
                      <img
                        alt=""
                        className="img-circle medium-image"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      />
                      <div className="vcentered info-combo">
                        <h3 className="no-margin-bottom name">
                          {" "}
                          Milla Shiffman{" "}
                        </h3>
                        <h5>
                          {" "}
                          Hello, Mila, can you send me the latest pack of icons,
                          I need{" "}
                        </h5>
                      </div>
                      <div className="contacts-add">
                        <span className="message-time">
                          {" "}
                          4:22 <sup>AM</sup>
                        </span>
                        <i className="fa fa-trash-o" />
                        <i className="fa fa-paperclip" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane message-body active" id="inbox-message-1">
              <div className="message-top">
                <a className="btn btn btn-success new-message">
                  {" "}
                  <i className="fa fa-envelope" /> New Message{" "}
                </a>
                <div className="new-message-wrapper">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Send message to..."
                    />
                    <a className="btn btn-danger close-new-message" href="#">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                  <div className="chat-footer new-message-textarea">
                    <textarea className="send-message-text" defaultValue={""} />
                    <label className="upload-file">
                      <input type="file" required="" />
                      <i className="fa fa-paperclip" />
                    </label>
                    <button
                      type="button"
                      className="send-message-button btn-info"
                    >
                      {" "}
                      <i className="fa fa-send" />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="message-chat">
                <div className="chat-body">
                  <div className="message info">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-info">
                        <h4> Elon Musk </h4>
                        <h5>
                          {" "}
                          <i className="fa fa-clock-o" /> 2:25 PM{" "}
                        </h5>
                      </div>
                      <hr />
                      <div className="message-text">
                        I've seen your new template, Dauphin, it's amazing !
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message my-message">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-body-inner">
                        <div className="message-info">
                          <h4> Dennis Novac </h4>
                          <h5>
                            {" "}
                            <i className="fa fa-clock-o" /> 2:28 PM{" "}
                          </h5>
                        </div>
                        <hr />
                        <div className="message-text">
                          Thanks, I think I will use this for my next dashboard
                          system.
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message info">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-info">
                        <h4> Elon Musk </h4>
                        <h5>
                          {" "}
                          <i className="fa fa-clock-o" /> 2:32 PM{" "}
                        </h5>
                      </div>
                      <hr />
                      <div className="message-text">
                        Hah, too late, I already bought it and my team is
                        impleting the new design right now.
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
                <div className="chat-footer">
                  <textarea className="send-message-text" defaultValue={""} />
                  <label className="upload-file">
                    <input type="file" required="" />
                    <i className="fa fa-paperclip" />
                  </label>
                  <button
                    type="button"
                    className="send-message-button btn-info"
                  >
                    {" "}
                    <i className="fa fa-send" />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="tab-pane message-body" id="inbox-message-2">
              <div className="message-top">
                <a className="btn btn btn-success new-message">
                  {" "}
                  <i className="fa fa-envelope" /> New Message{" "}
                </a>
                <div className="new-message-wrapper">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Send message to..."
                    />
                    <a className="btn btn-danger close-new-message" href="#">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                  <div className="chat-footer new-message-textarea">
                    <textarea className="send-message-text" defaultValue={""} />
                    <label className="upload-file">
                      <input type="file" required="" />
                      <i className="fa fa-paperclip" />
                    </label>
                    <button
                      type="button"
                      className="send-message-button btn-info"
                    >
                      {" "}
                      <i className="fa fa-send" />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="message-chat">
                <div className="chat-body">
                  <div className="message info">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-info">
                        <h4> Mark Zuckerberg </h4>
                        <h5>
                          {" "}
                          <i className="fa fa-clock-o" /> 3:45 PM{" "}
                        </h5>
                      </div>
                      <hr />
                      <div className="message-text">
                        Hi, Dennis. How's it going with your latest project?
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message my-message">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-body-inner">
                        <div className="message-info">
                          <h4> Dennis Novac </h4>
                          <h5>
                            {" "}
                            <i className="fa fa-clock-o" /> 3:52 PM{" "}
                          </h5>
                        </div>
                        <hr />
                        <div className="message-text">
                          Hello. It's going well, thanks, but I may need your
                          help tomorrow evening. Will you be available ?
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message info">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-info">
                        <h4> Mark Zuckerberg </h4>
                        <h5>
                          {" "}
                          <i className="fa fa-clock-o" /> 3:56 PM{" "}
                        </h5>
                      </div>
                      <hr />
                      <div className="message-text">
                        Of course, just call me before that, in case I forget.
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message my-message">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-body-inner">
                        <div className="message-info">
                          <h4> Dennis Novac </h4>
                          <h5>
                            {" "}
                            <i className="fa fa-clock-o" /> 4:01 PM{" "}
                          </h5>
                        </div>
                        <hr />
                        <div className="message-text">Great, thank you.</div>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
                <div className="chat-footer">
                  <textarea className="send-message-text" defaultValue={""} />
                  <label className="upload-file">
                    <input type="file" required="" />
                    <i className="fa fa-paperclip" />
                  </label>
                  <button
                    type="button"
                    className="send-message-button btn-info"
                  >
                    {" "}
                    <i className="fa fa-send" />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="tab-pane message-body" id="inbox-message-3">
              <div className="message-top">
                <a className="btn btn btn-success new-message">
                  {" "}
                  <i className="fa fa-envelope" /> New Message{" "}
                </a>
                <div className="new-message-wrapper">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Send message to..."
                    />
                    <a className="btn btn-danger close-new-message" href="#">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                  <div className="chat-footer new-message-textarea">
                    <textarea className="send-message-text" defaultValue={""} />
                    <label className="upload-file">
                      <input type="file" required="" />
                      <i className="fa fa-paperclip" />
                    </label>
                    <button
                      type="button"
                      className="send-message-button btn-info"
                    >
                      {" "}
                      <i className="fa fa-send" />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="message-chat">
                <div className="chat-body">
                  <div className="message info">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-info">
                        <h4> Evan Williams </h4>
                        <h5>
                          {" "}
                          <i className="fa fa-clock-o" /> 5:07 PM{" "}
                        </h5>
                      </div>
                      <hr />
                      <div className="message-text">
                        Hey, you asked for my feedback, it's brilliant. Damn, I
                        envy you I didn't come up with something this good :D
                        Keep it up, man, it's going to be very popular. Trust me
                        !
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message my-message">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-body-inner">
                        <div className="message-info">
                          <h4> Dennis Novac </h4>
                          <h5>
                            {" "}
                            <i className="fa fa-clock-o" /> 5:16 PM{" "}
                          </h5>
                        </div>
                        <hr />
                        <div className="message-text">
                          Wow, thanks. You'll be my main template tester from
                          now on :)
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message info">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-info">
                        <h4> Evan Williams </h4>
                        <h5>
                          {" "}
                          <i className="fa fa-clock-o" /> 5:21 PM{" "}
                        </h5>
                      </div>
                      <hr />
                      <div className="message-text">
                        I'm all in, as long as you continue to make such great
                        templates.
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
                <div className="chat-footer">
                  <textarea className="send-message-text" defaultValue={""} />
                  <label className="upload-file">
                    <input type="file" required="" />
                    <i className="fa fa-paperclip" />
                  </label>
                  <button
                    type="button"
                    className="send-message-button btn-info"
                  >
                    {" "}
                    <i className="fa fa-send" />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="tab-pane message-body" id="inbox-message-4">
              <div className="message-top">
                <a className="btn btn btn-success new-message">
                  {" "}
                  <i className="fa fa-envelope" /> New Message{" "}
                </a>
                <div className="new-message-wrapper">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Send message to..."
                    />
                    <a className="btn btn-danger close-new-message" href="#">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                  <div className="chat-footer new-message-textarea">
                    <textarea className="send-message-text" defaultValue={""} />
                    <label className="upload-file">
                      <input type="file" required="" />
                      <i className="fa fa-paperclip" />
                    </label>
                    <button
                      type="button"
                      className="send-message-button btn-info"
                    >
                      {" "}
                      <i className="fa fa-send" />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="message-chat">
                <div className="chat-body">
                  <div className="message info">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-info">
                        <h4> Jonahtan Ive </h4>
                        <h5>
                          {" "}
                          <i className="fa fa-clock-o" /> 6:12 PM{" "}
                        </h5>
                      </div>
                      <hr />
                      <div className="message-text">
                        I'm coming to your place at 9 pm and I hope you'll have
                        those tasty brownies again :)
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message my-message">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-body-inner">
                        <div className="message-info">
                          <h4> Dennis Novac </h4>
                          <h5>
                            {" "}
                            <i className="fa fa-clock-o" /> 6:16 PM{" "}
                          </h5>
                        </div>
                        <hr />
                        <div className="message-text">
                          Ye, I still have a bag full of them.
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message info">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-info">
                        <h4> Jonahtan Ive </h4>
                        <h5>
                          {" "}
                          <i className="fa fa-clock-o" /> 6:12 PM{" "}
                        </h5>
                      </div>
                      <hr />
                      <div className="message-text">
                        Great, we have a lot of work to do and we need fuel :D
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message info">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-info">
                        <h4> Jonahtan Ive </h4>
                        <h5>
                          {" "}
                          <i className="fa fa-clock-o" /> 6:13 PM{" "}
                        </h5>
                      </div>
                      <hr />
                      <div className="message-text">
                        And invite Daniel too, please.
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
                <div className="chat-footer">
                  <textarea className="send-message-text" defaultValue={""} />
                  <label className="upload-file">
                    <input type="file" required="" />
                    <i className="fa fa-paperclip" />
                  </label>
                  <button
                    type="button"
                    className="send-message-button btn-info"
                  >
                    {" "}
                    <i className="fa fa-send" />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="tab-pane message-body" id="sent-message-1">
              <div className="message-top">
                <a className="btn btn btn-success new-message">
                  {" "}
                  <i className="fa fa-envelope" /> New Message{" "}
                </a>
                <div className="new-message-wrapper">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Send message to..."
                    />
                    <a className="btn btn-danger close-new-message" href="#">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                  <div className="chat-footer new-message-textarea">
                    <textarea className="send-message-text" defaultValue={""} />
                    <label className="upload-file">
                      <input type="file" required="" />
                      <i className="fa fa-paperclip" />
                    </label>
                    <button
                      type="button"
                      className="send-message-button btn-info"
                    >
                      {" "}
                      <i className="fa fa-send" />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="message-chat">
                <div className="chat-body">
                  <div className="message my-message">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-body-inner">
                        <div className="message-info">
                          <h4> Dennis Novac </h4>
                          <h5>
                            {" "}
                            <i className="fa fa-clock-o" /> 2:05 PM{" "}
                          </h5>
                        </div>
                        <hr />
                        <div className="message-text">
                          Hi, I've just finished the stickers you wanted. I'll
                          send them to you in an archive in 10 minutes.
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message success">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-info">
                        <h4> David Beckham </h4>
                        <h5>
                          {" "}
                          <i className="fa fa-clock-o" /> 2:11 PM{" "}
                        </h5>
                      </div>
                      <hr />
                      <div className="message-text">
                        Hello, Dennis. Thanks. Also how's it going with our
                        latest football website. Do you need any additional help
                        or information?
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message success">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-info">
                        <h4> David Beckham </h4>
                        <h5>
                          {" "}
                          <i className="fa fa-clock-o" /> 2:24 PM{" "}
                        </h5>
                      </div>
                      <hr />
                      <div className="message-text">
                        I would like to take a look at it this evening, is it
                        possible ?
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message my-message">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-body-inner">
                        <div className="message-info">
                          <h4> Dennis Novac </h4>
                          <h5>
                            {" "}
                            <i className="fa fa-clock-o" /> 2:25 PM{" "}
                          </h5>
                        </div>
                        <hr />
                        <div className="message-text">
                          It's going well, no need for any other help, thanks.
                          Sure, send me a message when you'll be ready.
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
                <div className="chat-footer">
                  <textarea className="send-message-text" defaultValue={""} />
                  <label className="upload-file">
                    <input type="file" required="" />
                    <i className="fa fa-paperclip" />
                  </label>
                  <button
                    type="button"
                    className="send-message-button btn-info"
                  >
                    {" "}
                    <i className="fa fa-send" />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="tab-pane message-body" id="sent-message-2">
              <div className="message-top">
                <a className="btn btn btn-success new-message">
                  {" "}
                  <i className="fa fa-envelope" /> New Message{" "}
                </a>
                <div className="new-message-wrapper">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Send message to..."
                    />
                    <a className="btn btn-danger close-new-message" href="#">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                  <div className="chat-footer new-message-textarea">
                    <textarea className="send-message-text" defaultValue={""} />
                    <label className="upload-file">
                      <input type="file" required="" />
                      <i className="fa fa-paperclip" />
                    </label>
                    <button
                      type="button"
                      className="send-message-button btn-info"
                    >
                      {" "}
                      <i className="fa fa-send" />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="message-chat">
                <div className="chat-body">
                  <div className="message my-message">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-body-inner">
                        <div className="message-info">
                          <h4> Dennis Novac </h4>
                          <h5>
                            {" "}
                            <i className="fa fa-clock-o" /> 12:36 PM{" "}
                          </h5>
                        </div>
                        <hr />
                        <div className="message-text">
                          Hi, can you please test my new template Dauphin and
                          tell me if you like it ?
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message success">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-info">
                        <h4> Jeff Williams </h4>
                        <h5>
                          {" "}
                          <i className="fa fa-clock-o" /> 12:41 PM{" "}
                        </h5>
                      </div>
                      <hr />
                      <div className="message-text">
                        Hello, Dennis. I will take a look at it tomorrow,
                        because I'm already fed up with the current project.
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message my-message">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-body-inner">
                        <div className="message-info">
                          <h4> Dennis Novac </h4>
                          <h5>
                            {" "}
                            <i className="fa fa-clock-o" /> 12:46 PM{" "}
                          </h5>
                        </div>
                        <hr />
                        <div className="message-text">Thanks :)</div>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
                <div className="chat-footer">
                  <textarea className="send-message-text" defaultValue={""} />
                  <label className="upload-file">
                    <input type="file" required="" />
                    <i className="fa fa-paperclip" />
                  </label>
                  <button
                    type="button"
                    className="send-message-button btn-info"
                  >
                    {" "}
                    <i className="fa fa-send" />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="tab-pane message-body" id="marked-message-1">
              <div className="message-top">
                <a className="btn btn btn-success new-message">
                  {" "}
                  <i className="fa fa-envelope" /> New Message{" "}
                </a>
                <div className="new-message-wrapper">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Send message to..."
                    />
                    <a className="btn btn-danger close-new-message" href="#">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                  <div className="chat-footer new-message-textarea">
                    <textarea className="send-message-text" defaultValue={""} />
                    <label className="upload-file">
                      <input type="file" required="" />
                      <i className="fa fa-paperclip" />
                    </label>
                    <button
                      type="button"
                      className="send-message-button btn-info"
                    >
                      {" "}
                      <i className="fa fa-send" />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="message-chat">
                <div className="chat-body">
                  <div className="message warning">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-info">
                        <h4> Jessica Fresco </h4>
                        <h5>
                          {" "}
                          <i className="fa fa-clock-o" /> 1:44 PM{" "}
                        </h5>
                      </div>
                      <hr />
                      <div className="message-text">
                        Hello, Dennis. I wanted to let you know we reviewed your
                        proposal and decided you'll start working together with
                        our UI/UX team on Tuesday, January 10th, 2017.
                        Congratulations and thank you!
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message my-message">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-body-inner">
                        <div className="message-info">
                          <h4> Dennis Novac </h4>
                          <h5>
                            {" "}
                            <i className="fa fa-clock-o" /> 1:51 PM{" "}
                          </h5>
                        </div>
                        <hr />
                        <div className="message-text">
                          Hello, great news. I'm sure we're going to make
                          something amazing together!
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
                <div className="chat-footer">
                  <textarea className="send-message-text" defaultValue={""} />
                  <label className="upload-file">
                    <input type="file" required="" />
                    <i className="fa fa-paperclip" />
                  </label>
                  <button
                    type="button"
                    className="send-message-button btn-info"
                  >
                    {" "}
                    <i className="fa fa-send" />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="tab-pane message-body" id="marked-message-2">
              <div className="message-top">
                <a className="btn btn btn-success new-message">
                  {" "}
                  <i className="fa fa-envelope" /> New Message{" "}
                </a>
                <div className="new-message-wrapper">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Send message to..."
                    />
                    <a className="btn btn-danger close-new-message" href="#">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                  <div className="chat-footer new-message-textarea">
                    <textarea className="send-message-text" defaultValue={""} />
                    <label className="upload-file">
                      <input type="file" required="" />
                      <i className="fa fa-paperclip" />
                    </label>
                    <button
                      type="button"
                      className="send-message-button btn-info"
                    >
                      {" "}
                      <i className="fa fa-send" />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="message-chat">
                <div className="chat-body">
                  <div className="message warning">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-info">
                        <h4> Pavel Durov </h4>
                        <h5>
                          {" "}
                          <i className="fa fa-clock-o" /> 3:23 PM{" "}
                        </h5>
                      </div>
                      <hr />
                      <div className="message-text">
                        Hey, we need your help for our next Telegram re-design.
                        Are you available to talk about this tomorrow evening at
                        around 8 PM ?
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message my-message">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-body-inner">
                        <div className="message-info">
                          <h4> Dennis Novac </h4>
                          <h5>
                            {" "}
                            <i className="fa fa-clock-o" /> 3:31 PM{" "}
                          </h5>
                        </div>
                        <hr />
                        <div className="message-text">
                          Hello, yes I will. It's always a pleasure to work with
                          you and your team :)
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="message warning">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-info">
                        <h4> Pavel Durov </h4>
                        <h5>
                          {" "}
                          <i className="fa fa-clock-o" /> 3:35 PM{" "}
                        </h5>
                      </div>
                      <hr />
                      <div className="message-text">
                        Perfect, talk to you tomorrow evening.
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
                <div className="chat-footer">
                  <textarea className="send-message-text" defaultValue={""} />
                  <label className="upload-file">
                    <input type="file" required="" />
                    <i className="fa fa-paperclip" />
                  </label>
                  <button
                    type="button"
                    className="send-message-button btn-info"
                  >
                    {" "}
                    <i className="fa fa-send" />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="tab-pane message-body" id="draft-message-1">
              <div className="message-top">
                <a className="btn btn btn-success new-message">
                  {" "}
                  <i className="fa fa-envelope" /> New Message{" "}
                </a>
                <div className="new-message-wrapper">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Send message to..."
                    />
                    <a className="btn btn-danger close-new-message" href="#">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                  <div className="chat-footer new-message-textarea">
                    <textarea className="send-message-text" defaultValue={""} />
                    <label className="upload-file">
                      <input type="file" required="" />
                      <i className="fa fa-paperclip" />
                    </label>
                    <button
                      type="button"
                      className="send-message-button btn-info"
                    >
                      {" "}
                      <i className="fa fa-send" />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="message-chat">
                <div className="chat-body">
                  <div className="message my-message">
                    <img
                      alt=""
                      className="img-circle medium-image"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                    <div className="message-body">
                      <div className="message-body-inner">
                        <div className="message-info">
                          <h4> Dennis Novac </h4>
                          <h5>
                            {" "}
                            <i className="fa fa-clock-o" /> 4:22 PM{" "}
                          </h5>
                        </div>
                        <hr />
                        <div className="message-text">
                          Hello, Mila, can you send me the latest pack of icons,
                          I need all the source files. Thanks.
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
                <div className="chat-footer">
                  <textarea className="send-message-text" defaultValue={""} />
                  <label className="upload-file">
                    <input type="file" required="" />
                    <i className="fa fa-paperclip" />
                  </label>
                  <button
                    type="button"
                    className="send-message-button btn-info"
                  >
                    {" "}
                    <i className="fa fa-send" />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
