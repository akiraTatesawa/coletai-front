import AnimateHeight from "react-animate-height";

import { Header } from "../../components/Header";
import { LoginForms } from "../../components/LoginForms";
import { LoginTypeButton } from "../../components/LoginTypeButton";
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
      <Header />
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

        <AnimateHeight
          height={isCooperative || isUser ? "auto" : 0}
          duration={500}
          style={{ width: "100%" }}
        >
          <LoginForms route={route} />
        </AnimateHeight>
      </LoginContainer>
    </Main>
  );
}
