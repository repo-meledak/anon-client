import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Swal from "sweetalert2";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import MainLayout from "./components/MainLayout";
// import ChatPage from "./pages/ChatPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        Swal.fire({
          icon: "error",
          text: "Already logged in!",
        });
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <Register />,
    //   loader: () => {
    //     if (localStorage.getItem("access_token")) {
    //       Swal.fire({
    //         icon: "error",
    //         text: "Already logged in!",
    //       });
    //       return redirect("/");
    //     }
    //     return null;
    //   },
  },
  // {
  //   element: <MainLayout />,
  //   loader: () => {
  //     if (!localStorage.getItem("access_token")) {
  //       Swal.fire({
  //         icon: "error",
  //         text: "Please log in first!",
  //       });
  //       return redirect("/login");
  //     }
  //     return null;
  //   },
  //   children: [
  //     {
  //       path: "/",
  //       element: <ChatPage />,
  //     },
  //   ],
  // },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
