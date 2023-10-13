import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/category',
    element: <h1>Categoría</h1>
  }
]);