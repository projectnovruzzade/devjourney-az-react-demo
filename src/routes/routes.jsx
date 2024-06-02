import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DiscoverPage from "../Discover";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/discover",
    element: <DiscoverPage />
  }
]);

