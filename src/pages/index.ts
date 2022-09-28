import { FrontPage } from "./FrontPage/index";
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
};
