import { Header } from "../../components/Header";
import { SignUpForms } from "../../components/SignUpForms";
import { Main, RegistrationContainer, RegistrationTitle } from "./styles";

interface RegistrationPageProps {
  registrationType: "cooperative" | "user";
}

interface IRegistrationPageTitle {
  cooperative: {
    title: "cooperativa";
  };
  user: {
    title: "usuário";
  };
}

export function RegistrationPage({ registrationType }: RegistrationPageProps) {
  const registrationPageType: IRegistrationPageTitle = {
    cooperative: {
      title: "cooperativa",
    },
    user: {
      title: "usuário",
    },
  };

  return (
    <Main>
      <Header />
      <RegistrationContainer>
        <RegistrationTitle>
          {`Cadastrar ${registrationPageType[registrationType].title}`}
        </RegistrationTitle>
        <SignUpForms
          registrationName={registrationPageType[registrationType].title}
        />
      </RegistrationContainer>
    </Main>
  );
}
