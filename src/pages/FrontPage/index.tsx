import { Link, useNavigate } from "react-router-dom";

import { PrimaryButton } from "../../components/Button";
import { HomepageImage } from "../../components/HomepageImage/index";
import { Title } from "../../components/Title";
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

  return (
    <Main>
      <Title />
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

          <Buttons>
            <PrimaryButton handleClick={() => navigate("/sign-up/cooperative")}>
              Cadastrar cooperativa
            </PrimaryButton>
            <PrimaryButton handleClick={() => navigate("/sign-up/user")}>
              Cadastrar usuário
            </PrimaryButton>
          </Buttons>

          <Redirect>
            Já possui cadastro? <Link to="/sign-in">Login</Link>
          </Redirect>
        </ButtonContainer>
      </Content>
    </Main>
  );
}
