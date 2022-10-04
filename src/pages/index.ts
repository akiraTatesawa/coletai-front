import { DashboardPage } from "./DashboardPage/index";
import { FrontPage } from "./FrontPage/index";
import { LoginPage } from "./LoginPage/index";
import { RegistrationPage } from "./RegistrationPage/index";

export const Pages = {
  FrontPage,
  CooperativeRegistrationPage: () =>
    RegistrationPage({
      registrationType: "cooperative",
    }),
  UserRegistrationPage: () =>
    RegistrationPage({
      registrationType: "user",
    }),
  LoginPage,
  DashboardPage,
};
