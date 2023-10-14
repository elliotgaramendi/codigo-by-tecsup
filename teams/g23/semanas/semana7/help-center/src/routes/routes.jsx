import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Category from "../components/Category";
import PrimaryLayout from "../layouts/PrimaryLayout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: '/categorias/:slug',
        element: <Category />
      }
    ]
  },
]);