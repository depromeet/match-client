import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: lightgray;
  z-index: 100;
`;

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  width: 460px;
  height: 320px;
  /* BG_black */

  background: #1d212c;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  z-index: 200;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: capitalize;

  /* text_white */

  color: #fbfcff;
`;

export const Button = styled.button`
  width: 160px;
  height: 60px;

  background: #40fff4;
  border-radius: 2px;

  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;

  color: #17181b;
`;

export const ButtonText = styled.div``;
