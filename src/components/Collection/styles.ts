import {
  CheckCircle,
  DotsThreeCircle,
  Factory,
  User,
  XCircle,
} from "phosphor-react";
import styled, { css } from "styled-components";

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  background-color: var(--surface-secondary);
  box-shadow: 0px 0px 12px rgba(108, 124, 128, 0.2);

  padding: 1rem 0.875rem;

  border-radius: 4px;
`;

export const CollectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: flex-end;

  gap: 1rem;

  padding-bottom: 0.375rem;
  border-bottom: 1px solid rgba(108, 124, 128, 0.2);
`;

const accountIconCSS = css`
  font-size: 2rem;
  color: var(--text-primary);
`;

export const UserIcon = styled(User)`
  ${accountIconCSS}
`;

export const CooperativeIcon = styled(Factory)`
  ${accountIconCSS}
`;

export const Name = styled.span`
  font-size: 1rem;
  color: var(--text-primary);
  font-weight: 500;
`;

export const Status = styled.div`
  display: flex;
  align-items: flex-end;

  gap: 0.6rem;
`;

const statusIconCSS = css`
  font-size: 1.2rem;
`;

export const CancelledIcon = styled(XCircle)`
  ${statusIconCSS}
  fill: #DB282C;
`;

export const OngoingIcon = styled(DotsThreeCircle)`
  ${statusIconCSS}
  fill: #FFC700;
`;

export const FinishedIcon = styled(CheckCircle)`
  ${statusIconCSS}
  fill: #31BB6F;
`;

export const StatusTitle = styled.span`
  font-size: 0.875rem;
  line-height: 1rem;
  color: var(--text-secondary);
`;

export const Types = styled.span`
  color: var(--text-primary);
  font-size: 0.875rem;
  line-height: 1rem;
`;

export const TypeText = styled.span`
  color: var(--text-secondary);
`;

export const Description = styled.p`
  color: var(--text-primary);
  opacity: 0.8;
  font-size: 1rem;
  line-height: 1.1rem;

  text-align: justify;
  text-justify: inter-word;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  align-self: center;

  max-width: 400px;
  width: 200px;

  gap: 1rem;
`;

export const CancelButton = styled.button`
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

export const FinishButton = styled.button`
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
