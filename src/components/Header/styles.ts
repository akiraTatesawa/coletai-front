import { Recycle, SignOut } from "phosphor-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  *:focus {
    outline-color: var(--brand-outline);
  }
`;

export const Title = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;

  gap: 0.625rem;

  height: 100%;
`;

export const RecycleIcon = styled(Recycle)`
  color: var(--brand);
  font-size: 2rem;

  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;

export const Name = styled.h1`
  font-size: 2rem;
  color: var(--text-primary);
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;

export const Logout = styled.div``;

export const Button = styled.button`
  background-color: unset;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoutIcon = styled(SignOut)`
  color: var(--brand);
  font-size: 2rem;

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
`;
