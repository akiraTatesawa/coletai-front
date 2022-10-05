import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { useRouterRedirect } from "../../hooks/useRouterRedirect/index";
import { Pages } from "../../pages";

export function RouterNavigator() {
  const { setCurrentPage } = useRouterRedirect();
  const { pathname } = useLocation();

  useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Pages.FrontPage />} />
      <Route
        path="/sign-up/cooperative"
        element={<Pages.CooperativeRegistrationPage />}
      />
      <Route path="/sign-up/user" element={<Pages.UserRegistrationPage />} />
      <Route path="/sign-in" element={<Pages.LoginPage />} />
      <Route path="/dashboard" element={<Pages.DashboardPage />} />
    </Routes>
  );
}
