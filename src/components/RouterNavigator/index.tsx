import { Routes, Route } from "react-router-dom";

import { Pages } from "../../pages";

export function RouterNavigator() {
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
