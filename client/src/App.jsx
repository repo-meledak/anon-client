// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChatRoom } from "./assets/pages/ChatRoom";

const router = createBrowserRouter([
  {
    path: "/chatroom",
    element: <ChatRoom />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
