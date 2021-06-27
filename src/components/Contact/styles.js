import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 1000px;
    width: 99%;
    padding: 40px 20px;
    flex-direction: column;
    > h1 {
      margin-top: 20px;
      margin-bottom: 20px;
      color: #000d1a;
      font-size: 44px;
      font-weight: bold;

      @media (max-width: 800px) {
        font-size: 33px;
      }
    }
  `}
`;
export const LineContainer = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 800px) {
      flex-direction: column;
    }
  `}
`;
export const Input = styled.input`
  ${() => css`
    display: flex;
    width: 49%;
    background: #fff;
    outline: none;
    border: 1px solid #000d1a;
    height: 40px;
    padding: 7px;
    font-size: 16px;

    @media (max-width: 800px) {
      width: 100%;
      margin: 7px 0px;
    }
  `}
`;

export const Button = styled.button`
  ${() => css`
    display: block;
    width: 140px;
    background: #000d1a
    color: #fff;
    border:  1px solid #000d1a
    outline: none;
    height: 40px;
    cursor: pointer;
    color #fff;
    cursor: pointer;
    transition: 0.3s opacity ease-in;
    margin-top: 5px;
    &:hover{
        opacity: 0.8;
    }
`}
`;

export const Textarea = styled.textarea`
  ${() => css`
    display: block;
    width: 100%;
    height: 200px;
    margin: 15px 14px;
    background: #fff;
    color: #000d1a;
    border: 1px solid #000d1a;
    outline: none;
    padding: 7px;
    font-size: 19px;
  `}
`;
