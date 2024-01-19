import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NotFound from "./components/NotFound";

const routes = [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <Home /> },
  { path: "/products/:productId", element: <Product /> },
  { path: "/products", element: <Products /> },
  { path: "*", element: <Navigate to={"/404"} /> },
  { path: "/404", element: <NotFound /> },
];

export default routes;
