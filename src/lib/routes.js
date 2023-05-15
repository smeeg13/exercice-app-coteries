import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import Create from "../components/developer/Create";

export const ROOT = "/";
export const TEAM = "/team";
export const CREATE = "/create";
export const DEVELOPPER = "/developer/:id";

export const fetchURL = "https://dev.coteries.com/exercice.php";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/* Others Pages Here */}
      <Route path="/create" element={<Create />} />

      {/* 401 Error Page -> redirect to Home */}
      <Route path="*" element={<Home />} />

    </Route>
  )
);
