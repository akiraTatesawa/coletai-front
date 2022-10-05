import { Link, useNavigate } from "react-router-dom";

import { IAccountData } from "../../@types/AccountTypes";
import { PrimaryButton } from "../../components/Button";
import { Header } from "../../components/Header";
import { HomepageImage } from "../../components/HomepageImage/index";
import { useLocalStorage } from "../../hooks/useLocalStorage/index";
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
  const [accountData] = useLocalStorage<IAccountData | null>(
    "coletaiAccountData",
    null
  );

  const frontPageButtons = !accountData ? (
    <>
      <PrimaryButton handleClick={() => navigate("/sign-up/cooperative")}>
        Cadastrar cooperativa
      </PrimaryButton>
      <PrimaryButton handleClick={() => navigate("/sign-up/user")}>
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
