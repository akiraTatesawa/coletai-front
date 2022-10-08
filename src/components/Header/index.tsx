import React from "react";

import { IAccountContext } from "../../@types/AccountTypes";
import { AccountContext } from "../../contexts/AccountContext";
import { LogoutDialog } from "../LogoutDialog";
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
  const { accountData } = React.useContext(AccountContext) as IAccountContext;
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Container>
      <Title data-cy="logotype" title="Ir para página inicial" to="/">
        <RecycleIcon weight="bold" />
        <Name>Coletaí</Name>
      </Title>
      {accountData && (
        <Logout title="Log out">
          <Button type="button" onClick={() => setIsOpen(true)}>
            <LogoutIcon weight="bold" />
          </Button>
        </Logout>
      )}
      <LogoutDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </Container>
  );
}
