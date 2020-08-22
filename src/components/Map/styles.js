import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;

  display: relative;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: -100px;

  border: none;
  color: white;
  outline: none;
  padding: 5px 10px;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 5px;

  font-size: 25px;
  font-weight: 700;
  width: 30px;
  height: 30px;
  padding-bottom: 5px;
  background: #070b1e;
  box-shadow: 0px 4px 4px rgba(7, 11, 30, 0.14);
  border-radius: 100%;
`;
