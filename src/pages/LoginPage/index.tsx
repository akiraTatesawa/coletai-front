import { LoginTypeButton } from "../../components/LoginTypeButton";
import { Title } from "../../components/Title";
import { Main, LoginContainer, LoginTitle, LoginTypeContainer } from "./styles";

export function LoginPage() {
  return (
    <Main>
      <Title />
      <LoginContainer>
        <LoginTitle>Logar como:</LoginTitle>
        <LoginTypeContainer>
          <LoginTypeButton loginType="cooperative" />
          <LoginTypeButton loginType="user" />
        </LoginTypeContainer>
      </LoginContainer>
    </Main>
  );
}
