import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { PublicLayout } from "../layouts/PublicLayout";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import Dashboard from "../pages/private/Dashboard";
import Users from "../pages/private/Users";
import { routePaths } from "./routePaths";
import About from "../pages/public/About";
import NotFound from "../pages/NotFound";
import Home from "../pages/public/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: routePaths.register,
        element: <Register />,
      },
      {
        path: routePaths.about,
        element: <About />,
      },
      {
        path: routePaths.unauthorized,
        element: <div>Unauthorized Access</div>,
      },
    ],
  },
  {
    path: routePaths.dashboard.index,
    element: (
      <ProtectedRoute allowedRoles={["admin", "user"]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: routePaths.dashboard.users,
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <Users />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
