import { SignUpForms } from "../../components/SignUpForms";
import { Title } from "../../components/Title";
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
      <Title />
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
