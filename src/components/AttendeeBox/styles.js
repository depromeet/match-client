import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  overflow-x: scroll;
  padding: 10px 20px;

  &&::-webkit-scrollbar {
    display: none;
  }
  position: relative;
  left: 3px;
  top: -330px;
`;

export const HorizontalBlur = styled.div`
  position: relative;
  left: 4px;
  top: -403px;
  width: 392px;
  height: 65px;
  background: linear-gradient(180deg, #1d212c 0%, rgba(29, 33, 44, 0.09) 100%);
  transform: rotate(-180deg);
  z-index: 2;
`;
export const VerticalBlur = styled.div`
  position: relative;
  width: 120px;
  height: 80px;
  left: 305px;
  top: -499px;

  background: linear-gradient(180deg, #1d212c 0%, rgba(29, 33, 44, 0.09) 100%);
  transform: rotate(90deg);
  z-index: 2;
`;
