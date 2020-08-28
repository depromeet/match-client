import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 120px;
  top: 0;
  bottom: 0;

  height: 100%;
  width: 440px;

  background-color: #1d212c;
  z-index: 1;

  display: flex;
  flex-direction: column;

  /* align-items: center; */
`;
export const FontBlur = styled.div`
  position: fixed;
  left: 100px;
  bottom: 50px;
  height: 20px;
  width: 400px;
  color: linear-gradient(144.69deg, #000000 35.37%, rgba(0, 0, 0, 0.3) 79.27%);
  transform: rotate(-90deg);
  z-index: 10;
`;
