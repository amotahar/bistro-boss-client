import {
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
