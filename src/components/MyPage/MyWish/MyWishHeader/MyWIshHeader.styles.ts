import styled from "@emotion/styled";

export const MyBox = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  width: 60%;
  border-radius: 0.625rem;
  border: 1px solid #e6e6e6;
  background: #fff;
  padding: 3rem 3.12rem;
  box-sizing: border-box;

  margin-top: 2rem;

  cursor: pointer;
  &:hover {
    border: 1px solid #ff5100;
    box-shadow: 0px 0px 20px 0px rgba(255, 81, 0, 0.05);
  }

  @media (max-width: 443px) {
    width: 90%;
  }
`;

export const Content = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

export const Title = styled.div`
  color: #222;
  font-size: 1.75rem;
  font-weight: 400;
  margin-right: 3.5rem;
`;

export const Count = styled.div`
  color: #222;
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 2.625rem;
`;
