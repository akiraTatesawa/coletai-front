import { CaretDown } from "phosphor-react";
import React from "react";
import AnimateHeight from "react-animate-height";

import { Account, IAccountContext } from "../../@types/AccountTypes";
import { CollectionStatus, CollectionData } from "../../@types/CollectionTypes";
import { AccountContext } from "../../contexts/AccountContext";
import { useCollectionFinish } from "../../hooks/useCollectionFinish/index";
import { CancelDialog } from "../CancelDialog";
import S from "./styles";

interface AccountIconProps {
  accountType: Account;
}

interface CollectionStatusProps {
  status: CollectionStatus;
}

// The accountType props comes from the context/localStorage
function AccountIcon({ accountType }: AccountIconProps) {
  const icon = accountType === "user" ? <S.CooperativeIcon /> : <S.UserIcon />;

  return icon;
}

function StatusContainer({ status }: CollectionStatusProps) {
  let icon: JSX.Element = <S.OngoingIcon weight="fill" />;
  let title = "coleta solicitada";

  function setStatusData(status: CollectionStatus) {
    if (status === "cancelled") {
      icon = <S.CancelledIcon weight="fill" />;
      title = "coleta cancelada";
      return;
    }
    if (status === "finished") {
      icon = <S.FinishedIcon weight="fill" />;
      title = "coleta finalizada";
    }
  }

  setStatusData(status);

  return (
    <S.Status>
      {icon}
      <S.StatusTitle>{title}</S.StatusTitle>
    </S.Status>
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
  const [isDetailsOpen, setIsDetailsOpen] = React.useState<boolean>(false);

  const typesFormatted = types.map(({ name }) => name);

  return (
    <S.CollectionContainer>
      <S.CollectionHeader>
        <S.NameContainer>
          <AccountIcon accountType={accountData?.account || "user"} />
          <S.Name>
            {accountData?.account === "user" ? cooperative.name : user.name}
          </S.Name>

          <S.ViewMoreButton
            type="button"
            isOpen={isDetailsOpen}
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          >
            <CaretDown />
          </S.ViewMoreButton>
        </S.NameContainer>

        <StatusContainer status={status} />
      </S.CollectionHeader>

      <S.Types>
        {`tipos de materiais: `}
        <S.TypeText>{typesFormatted.join(", ")}</S.TypeText>
      </S.Types>

      <AnimateHeight
        height={isDetailsOpen ? "auto" : 0}
        duration={500}
        style={{ width: "100%" }}
      >
        <S.DetailsContainer>
          <S.DescriptionContainer>
            <span>Descrição</span>
            <S.Description>{description}</S.Description>
          </S.DescriptionContainer>

          {accountData?.account === "cooperative" && status === "ongoing" && (
            <S.AddressContainer>
              <span>Endereço</span>
              <S.Address className="text-sm text-brand-text-secondary opacity-90">
                {user.address}
              </S.Address>
            </S.AddressContainer>
          )}
        </S.DetailsContainer>
      </AnimateHeight>

      {accountData?.account === "cooperative" && status === "ongoing" && (
        <S.Options>
          <S.CancelButton
            data-cy="button-cancel-collection"
            type="button"
            onClick={() => setIsDialogOpen(true)}
            disabled={isFinishing}
          >
            Cancelar
          </S.CancelButton>
          <S.FinishButton
            data-cy="button-finish-collection"
            type="button"
            onClick={() => handleFinishCollection(id)}
            disabled={isFinishing}
          >
            Finalizar
          </S.FinishButton>
        </S.Options>
      )}

      <CancelDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        collectionId={id}
      />
    </S.CollectionContainer>
  );
}
