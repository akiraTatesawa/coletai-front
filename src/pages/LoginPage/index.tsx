import { LoginForms } from "../../components/LoginForms";
import { LoginTypeButton } from "../../components/LoginTypeButton";
import { Title } from "../../components/Title";
import { useLoginType } from "../../hooks/useLoginType/index";
import { Main, LoginContainer, LoginTitle, LoginTypeContainer } from "./styles";

export function LoginPage() {
  const {
    isUser,
    isCooperative,
    handleCooperativeClick,
    handleUserClick,
    route,
  } = useLoginType();

  return (
    <Main>
      <Title />
      <LoginContainer>
        <LoginTitle>Logar como:</LoginTitle>
        <LoginTypeContainer>
          <LoginTypeButton
            onClick={handleCooperativeClick}
            isSelected={isCooperative}
            loginType="cooperative"
          />
          <LoginTypeButton
            onClick={handleUserClick}
            isSelected={isUser}
            loginType="user"
          />
        </LoginTypeContainer>
        {(isUser || isCooperative) && <LoginForms />}
      </LoginContainer>
    </Main>
  );
}
