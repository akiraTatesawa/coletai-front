import { IAccountData } from "../../@types/AccountTypes";
import { CreateCollectionWidget } from "../../components/CreateCollectionWidget";
import { Title } from "../../components/Title";
import { useLocalStorage } from "../../hooks/useLocalStorage/index";
import { Main } from "../FrontPage/styles";
import { CollectionsContainer, CollectionsTitle } from "./styles";

export function DashboardPage() {
  const [accountData] = useLocalStorage<IAccountData | null>(
    "coletaiAccountData",
    null
  );

  return (
    <Main>
      <Title />
      <CollectionsContainer>
        <CollectionsTitle>Suas coletas</CollectionsTitle>
      </CollectionsContainer>
      {accountData?.account === "user" && <CreateCollectionWidget />}
    </Main>
  );
}
