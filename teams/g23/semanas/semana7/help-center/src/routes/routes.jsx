import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Category from "../components/Category";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/categorias/:slug',
    element: <Category />
  }
]);