import React from "react";

import { IAccountContext } from "../../@types/AccountTypes";
import { AccountContext } from "../../contexts/AccountContext";
import { useLogout } from "../../hooks/useLogout/index";
import {
  Container,
  Title,
  RecycleIcon,
  Name,
  Logout,
  Button,
  LogoutIcon,
} from "./styles";

export function Header() {
  const { handleLogout } = useLogout();
  const { accountData } = React.useContext(AccountContext) as IAccountContext;

  return (
    <Container>
      <Title title="Ir para página inicial" to="/">
        <RecycleIcon weight="bold" />
        <Name>Coletaí</Name>
      </Title>
      {accountData && (
        <Logout title="Log out">
          <Button type="button" onClick={handleLogout}>
            <LogoutIcon weight="bold" />
          </Button>
        </Logout>
      )}
    </Container>
  );
}
