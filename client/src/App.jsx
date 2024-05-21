import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Login from "../pages/Login";
// import MainLayout from "./components/MainLayout";
// import Swal from "sweetalert2";
// import ChatPage from "./pages/ChatPage";
// import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    // loader: () => {
    //   if (localStorage.getItem("access_token")) {
    //     Swal.fire({
    //       icon: "error",
    //       text: "Already logged in!",
    //     });
    //     return redirect("/");
    //   }
    //   return null;
    // },
  },
  // {
  //   path: "/register",
  //   element: <RegisterPage />,
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
  // },
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
