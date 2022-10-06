import React from "react";

import { IAccountContext } from "../../@types/AccountTypes";
import { Collection } from "../../components/Collection";
import { CreateCollectionWidget } from "../../components/CreateCollectionWidget";
import { Header } from "../../components/Header";
import { AccountContext } from "../../contexts/AccountContext";
import { useCollectionList } from "../../hooks/useCollectionList/index";
import { Main } from "../FrontPage/styles";
import { Collections, CollectionsContainer, CollectionsTitle } from "./styles";

export function DashboardPage() {
  const { collections, isFetching } = useCollectionList();
  const { accountData } = React.useContext(AccountContext) as IAccountContext;

  return (
    <Main>
      <Header />
      <CollectionsContainer>
        <CollectionsTitle>Suas coletas</CollectionsTitle>
        <Collections>
          {!isFetching &&
            collections?.map(({ ...data }) => (
              <Collection key={data.id} {...data} />
            ))}
        </Collections>
      </CollectionsContainer>
      {accountData?.account === "user" && <CreateCollectionWidget />}
    </Main>
  );
}
