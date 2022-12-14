import styled from "styled-components";

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.2rem;

  width: 100%;
  max-width: 700px;

  > button[type="submit"] {
    margin-top: 2rem;
  }
`;
