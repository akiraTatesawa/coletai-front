import React from "react";

import { Account, IAccountContext } from "../../@types/AccountTypes";
import { CollectionStatus, CollectionData } from "../../@types/CollectionTypes";
import { AccountContext } from "../../contexts/AccountContext";
import { useCollectionFinish } from "../../hooks/useCollectionFinish/index";
import { CancelDialog } from "../CancelDialog";
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
  const { handleFinishCollection, isFinishing } = useCollectionFinish();
  const { accountData } = React.useContext(AccountContext) as IAccountContext;
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
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

      {accountData?.account === "cooperative" && status === "ongoing" && (
        <span className="text-sm text-brand-text-secondary opacity-90">
          {user.address}
        </span>
      )}

      <Options>
        {accountData?.account === "cooperative" && status === "ongoing" && (
          <>
            <CancelButton
              data-cy="button-cancel-collection"
              type="button"
              onClick={() => setIsDialogOpen(true)}
              disabled={isFinishing}
            >
              Cancelar
            </CancelButton>
            <FinishButton
              data-cy="button-finish-collection"
              type="button"
              onClick={() => handleFinishCollection(id)}
              disabled={isFinishing}
            >
              Finalizar
            </FinishButton>
          </>
        )}
      </Options>

      <CancelDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        collectionId={id}
      />
    </CollectionContainer>
  );
}
