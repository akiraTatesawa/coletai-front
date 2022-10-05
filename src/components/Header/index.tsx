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
  return (
    <Container>
      <Title>
        <RecycleIcon weight="bold" />
        <Name>Coletaí</Name>
      </Title>
      <Logout>
        <Button>
          <LogoutIcon weight="bold" />
        </Button>
      </Logout>
    </Container>
  );
}
