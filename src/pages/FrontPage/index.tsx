import { Link, useNavigate } from "react-router-dom";

import { PrimaryButton } from "../../components/Button";
import { HomepageImage } from "../../components/HomepageImage/index";
import { Title } from "../../components/Title";
import { Main, Content, Buttons, Redirect } from "./styles";

export function FrontPage() {
  const navigate = useNavigate();

  return (
    <Main>
      <Title />
      <Content>
        <HomepageImage />
        <Buttons>
          <PrimaryButton handleClick={() => navigate("/sign-up/cooperative")}>
            Cadastrar uma nova cooperativa
          </PrimaryButton>
          <PrimaryButton handleClick={() => navigate("sign-up/user")}>
            Cadastrar um novo usuário
          </PrimaryButton>
        </Buttons>
        <Redirect>
          Já possui cadastro? <Link to="/sign-in">Login</Link>
        </Redirect>
      </Content>
    </Main>
  );
}
