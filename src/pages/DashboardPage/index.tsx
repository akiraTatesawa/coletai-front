import { CreateCollectionWidget } from "../../components/CreateCollectionWidget";
import { Title } from "../../components/Title";
import { Main } from "../FrontPage/styles";
import { CollectionsContainer, CollectionsTitle } from "./styles";

export function DashboardPage() {
  return (
    <Main>
      <Title />
      <CollectionsContainer>
        <CollectionsTitle>Suas coletas</CollectionsTitle>
      </CollectionsContainer>
      <CreateCollectionWidget />
    </Main>
  );
}
