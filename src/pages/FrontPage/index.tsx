import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IAccountContext } from "../../@types/AccountTypes";
import { PrimaryButton } from "../../components/Button";
import { Header } from "../../components/Header";
import { HomepageImage } from "../../components/HomepageImage/index";
import { AccountContext } from "../../contexts/AccountContext";
import {
  Main,
  Content,
  Buttons,
  Redirect,
  ButtonContainer,
  IntroductionText,
} from "./styles";

export function FrontPage() {
  const navigate = useNavigate();
  const { accountData } = useContext(AccountContext) as IAccountContext;

  const frontPageButtons = !accountData ? (
    <>
      <PrimaryButton
        data-cy="sign-up-cooperative"
        handleClick={() => navigate("/sign-up/cooperative")}
      >
        Cadastrar cooperativa
      </PrimaryButton>
      <PrimaryButton
        data-cy="sign-up-user"
        handleClick={() => navigate("/sign-up/user")}
      >
        Cadastrar usuário
      </PrimaryButton>
    </>
  ) : (
    <PrimaryButton handleClick={() => navigate("/dashboard")}>
      Ir para dashboard
    </PrimaryButton>
  );

  return (
    <Main>
      <Header />
      <Content>
        <HomepageImage />

        <ButtonContainer>
          <IntroductionText>
            <h2>Dê um destino correto para o seu lixo reciclável</h2>
            <p>
              Conectamos cooperativas de reciclagem com pessoas que reciclam o
              lixo em casa
            </p>
          </IntroductionText>

          <Buttons>{frontPageButtons}</Buttons>

          {!accountData && (
            <Redirect>
              Já possui cadastro? <Link to="/sign-in">Login</Link>
            </Redirect>
          )}
        </ButtonContainer>
      </Content>
    </Main>
  );
}
