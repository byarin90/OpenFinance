import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../components/home";
import Layout from "../layout/user/layout";
import Transactions from "../../components/transactions/transactions";
import NotFound from "../components/not-found/notFound";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/transactions", element: <Transactions /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
