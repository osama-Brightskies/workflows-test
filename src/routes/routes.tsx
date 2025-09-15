import { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { PublicLayout } from "../layouts/PublicLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import Dashboard from "../pages/private/Dashboard";
import Users from "../pages/private/Users";
import UnAuthorized from "../pages/UnAuthorized";
    
export const routePaths = {
  home: '/',
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',
  users: '/dashboard/users',
  unauthorized: '/unauthorized',
} as const;

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: routePaths.login,
        element: <Login />,
      },
      {
        path: routePaths.register,
        element: <Register />,
      },
      {
        path: routePaths.unauthorized,
        element: <UnAuthorized />,
      },
      {
        path: '',
        element: <Navigate to={routePaths.dashboard} replace />,
      },
    ],
  },
  {
    path: routePaths.dashboard,
    element: (
      <ProtectedRoute allowedRoles={['admin', 'user']}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'users',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <Users />
          </ProtectedRoute>
        ),
      },
    ],
  },
];
