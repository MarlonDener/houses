import styled from "styled-components";

export const Button = styled.a`
  background: ${({ primary }) => (primary ? "#000d1a" : "#CD853F")};
  white-space: nowrap;
  border: none;
  outline: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  color: #fff;
  display: flex;
  box-shadow: 2px 3px 5px 2px rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#fff" : "#fff")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};

  &:hover {
    transform: translateY(-3px);
    opacity: 0.95;
  }
`;
