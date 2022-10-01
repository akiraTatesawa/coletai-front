import { Title } from "../../components/Title";
import { Main, LoginContainer, LoginTitle } from "./styles";

export function LoginPage() {
  return (
    <Main>
      <Title />
      <LoginContainer>
        <LoginTitle>Logar como:</LoginTitle>
      </LoginContainer>
    </Main>
  );
}
