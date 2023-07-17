import styled from "styled-components";

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 20px;
  border-bottom: 1px solid black;
  border-radius: 3px;
  > input {
    width: 130px;
    border: 0;
    outline: none;
    font-weight: 700;
    text-align: center;
  }
`;
