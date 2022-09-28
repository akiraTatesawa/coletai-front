import { Routes, Route } from "react-router-dom";

import { Pages } from "../../pages";

export function RouterNavigator() {
  return (
    <Routes>
      <Route path="/" element={<Pages.FrontPage />} />
    </Routes>
  );
}
