import {
  CheckCircle,
  DotsThreeCircle,
  Factory,
  User,
  XCircle,
} from "phosphor-react";
import styled, { css } from "styled-components";

const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  background-color: var(--surface-secondary);
  box-shadow: 0px 0px 12px rgba(108, 124, 128, 0.2);

  padding: 1rem 0.875rem;

  border-radius: 4px;
`;

const CollectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  gap: 1rem;

  padding-bottom: 0.375rem;
  border-bottom: 1px solid rgba(108, 124, 128, 0.2);

  position: relative;
`;

const ViewMoreButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  right: 0;
  color: var(--text-primary);

  font-size: 1.2rem;

  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "unset")};

  transition: transform 500ms ease-in-out;

  &:focus {
    outline-color: var(--text-secondary);
  }
`;

const accountIconCSS = css`
  font-size: 2rem;
  color: var(--text-primary);

  flex-shrink: 0;
`;

const UserIcon = styled(User)`
  ${accountIconCSS}
`;

const CooperativeIcon = styled(Factory)`
  ${accountIconCSS}
`;

const Name = styled.span`
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 500;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Status = styled.div`
  display: flex;
  align-items: flex-end;

  gap: 0.6rem;
`;

const statusIconCSS = css`
  font-size: 1.2rem;
`;

const CancelledIcon = styled(XCircle)`
  ${statusIconCSS}
  fill: #DB282C;
`;

const OngoingIcon = styled(DotsThreeCircle)`
  ${statusIconCSS}
  fill: #FFC700;
`;

const FinishedIcon = styled(CheckCircle)`
  ${statusIconCSS}
  fill: #31BB6F;
`;

const StatusTitle = styled.span`
  font-size: 0.875rem;
  line-height: 1rem;
  color: var(--text-secondary);
`;

const Types = styled.span`
  color: var(--text-primary);
  font-size: 0.875rem;
  line-height: 1rem;
`;

const TypeText = styled.span`
  color: var(--text-secondary);
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  > span {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-primary);
  }
`;

const Description = styled.p`
  color: var(--text-primary);
  opacity: 0.8;
  font-size: 0.9rem;
  line-height: 1.3rem;

  white-space: pre-line;
`;

const AddressContainer = styled(DescriptionContainer)``;

const Address = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: 0.9;
  color: var(--text-secondary);
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  align-self: center;

  max-width: 400px;
  width: 200px;

  gap: 1rem;
`;

const CancelButton = styled.button`
  color: var(--danger-error);
  font-weight: 500;

  &:focus {
    outline-color: #e9635a;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const FinishButton = styled.button`
  color: var(--brand);
  font-weight: 500;

  border-radius: 4px;

  &:focus {
    outline-color: var(--brand);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export default {
  CollectionContainer,
  CollectionHeader,
  NameContainer,
  ViewMoreButton,
  UserIcon,
  CooperativeIcon,
  Name,
  Status,
  CancelledIcon,
  OngoingIcon,
  FinishedIcon,
  StatusTitle,
  Types,
  TypeText,
  DetailsContainer,
  DescriptionContainer,
  Description,
  AddressContainer,
  Address,
  Options,
  CancelButton,
  FinishButton,
};
