import { IAccountData } from "../../@types/AccountTypes";
import { CreateCollectionWidget } from "../../components/CreateCollectionWidget";
import { Header } from "../../components/Header";
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
      <Header />
      <CollectionsContainer>
        <CollectionsTitle>Suas coletas</CollectionsTitle>
      </CollectionsContainer>
      {accountData?.account === "user" && <CreateCollectionWidget />}
    </Main>
  );
}
