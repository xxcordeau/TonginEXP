import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import LoadingScreen from "./components/loading-screen";
import ProtectedRouteUser from "./components/protected-route-user";
import Admin from "./routes/admin";
import ProtectedRouteAdmin from "./components/protected-route-admin";
import AdminLayout from "./components/adminLayout";
import "./static/fonts/font.css";
import Detail from "./routes/detail";
import "react-day-picker/dist/style.css";
import Signiture from "./routes/signiture";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouteUser>
        <Layout></Layout>
      </ProtectedRouteUser>
    ),
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "detail/:id",
        element: <Detail></Detail>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRouteAdmin>
        <AdminLayout></AdminLayout>
      </ProtectedRouteAdmin>
    ),
    children: [
      {
        path: "",
        element: <Admin></Admin>,
      },
      {
        path: "create-account",
        element: <CreateAccount></CreateAccount>,
      },
    ],
  },
  {
    path: "/signiture/:id",
    element: <Signiture></Signiture>,
  },
]);

const GlobalStyles = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
  }
body {
  background-color: #fafafa;
  color: black;
  font-family: 'Pretendard';
}
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <GlobalStyles />
      {isLoading ? (
        <LoadingScreen></LoadingScreen>
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
    </>
  );
}
export default App;
