import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage, { AuthPageProps } from "./pages/AuthPage";
import { useState } from "react";
import Dashboard, { DashboardProps } from "./pages/Dashboard";

const USER_ROLES = {
  HRManager: "HR Manager",
  ProjectMAnager: "Project Manager",
  Employee: "Employee",
};

export default function App() {
  const [currentUserRole, setCurrentUserRole] = useState<string>("");

  const getAuthPageProps = (): AuthPageProps => {
    return {
      userRoles: USER_ROLES,
      setCurrentUserRole: setCurrentUserRole,
    };
  };

  const getDashboardProps = (): DashboardProps => {
    return {
      currentUserRole: currentUserRole,
    };
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: AuthPage(getAuthPageProps()),
    },
    {
      path: "/dashboard",
      element: Dashboard(getDashboardProps()),
    },
  ]);

  return <RouterProvider router={router} />;
}
