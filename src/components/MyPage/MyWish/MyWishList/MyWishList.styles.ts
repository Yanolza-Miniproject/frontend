import styled from "@emotion/styled";

export const ListGridItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  width: 60%;
  height: object-fit;

  margin: 2rem 0;

  box-sizing: border-box;

  gap: 1rem;
  overflow: auto;

  @media (max-width: 443px) {
    width: 90%;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
