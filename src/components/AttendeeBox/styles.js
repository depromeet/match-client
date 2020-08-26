import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  overflow-x: scroll;
  padding: 10px 20px;
  position: absolute;
  bottom: 63px;
  &&::-webkit-scrollbar {
    display: none;
  }
`;

export const HorizontalBlur = styled.div`
  position: absolute;
  left: 10px;
  bottom: 70px;
  width: 389px;
  height: 80px;
  background: linear-gradient(180deg, #1d212c 0%, rgba(29, 33, 44, 0.09) 100%);
  transform: rotate(-180deg);
  z-index: 2;
`;
export const VerticalBlur = styled.div`
  position: absolute;
  width: 120px;
  height: 80px;
  left: 318px;
  top: 897px;

  background: linear-gradient(180deg, #1d212c 0%, rgba(29, 33, 44, 0.09) 100%);
  transform: rotate(90deg);
  z-index: 2;
`;
