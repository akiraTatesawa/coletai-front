import React from "react";

import { Account, IAccountContext } from "../../@types/AccountTypes";
import { CollectionStatus, CollectionData } from "../../@types/CollectionTypes";
import { AccountContext } from "../../contexts/AccountContext";
import { useCollectionCancel } from "../../hooks/useCollectionCancel";
import {
  CollectionContainer,
  CollectionHeader,
  Name,
  Status,
  Types,
  Description,
  NameContainer,
  CooperativeIcon,
  UserIcon,
  OngoingIcon,
  CancelledIcon,
  FinishedIcon,
  StatusTitle,
  TypeText,
  Options,
  CancelButton,
  FinishButton,
} from "./styles";

interface AccountIconProps {
  accountType: Account;
}

interface CollectionStatusProps {
  status: CollectionStatus;
}

// The accountType props comes from the context/localStorage
function AccountIcon({ accountType }: AccountIconProps) {
  const icon = accountType === "user" ? <CooperativeIcon /> : <UserIcon />;

  return icon;
}

function StatusContainer({ status }: CollectionStatusProps) {
  let icon: JSX.Element = <OngoingIcon weight="fill" />;
  let title = "coleta solicitada";

  function setStatusData(status: CollectionStatus) {
    if (status === "cancelled") {
      icon = <CancelledIcon weight="fill" />;
      title = "coleta cancelada";
      return;
    }
    if (status === "finished") {
      icon = <FinishedIcon weight="fill" />;
      title = "coleta finalizada";
    }
  }

  setStatusData(status);

  return (
    <Status>
      {icon}
      <StatusTitle>{title}</StatusTitle>
    </Status>
  );
}

export function Collection({
  cooperative,
  description,
  status,
  user,
  types,
  id,
}: CollectionData) {
  const { accountData } = React.useContext(AccountContext) as IAccountContext;
  const { handleCancellation, isCancelling } = useCollectionCancel();
  const typesFormatted = types.map(({ name }) => name);

  return (
    <CollectionContainer>
      <CollectionHeader>
        <NameContainer>
          <AccountIcon accountType={accountData?.account || "user"} />
          <Name>
            {accountData?.account === "user" ? cooperative.name : user.name}
          </Name>
        </NameContainer>
        <StatusContainer status={status} />
      </CollectionHeader>
      <Types>
        {`tipos de materiais: `}
        <TypeText>{typesFormatted.join(", ")}</TypeText>
      </Types>
      <Description>{description}</Description>
      <Options>
        {accountData?.account === "cooperative" && status === "ongoing" && (
          <>
            <CancelButton
              type="button"
              disabled={isCancelling}
              onClick={() => handleCancellation(id)}
            >
              Cancelar
            </CancelButton>
            <FinishButton type="button">Finalizar</FinishButton>
          </>
        )}
      </Options>
    </CollectionContainer>
  );
}
