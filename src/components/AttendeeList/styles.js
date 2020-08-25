import styled from "styled-components";

export const Container = styled.div`
  width: 90px;
  height: 110px;
  margin-right: 20px;
  border-radius: 2px;

  padding: 12px;

  display: flex;
  flex-direction: column;
  background: #373c4a;
  border-radius: 2px;
  z-index: 1;
`;

export const ProfileImg = styled.div`
  width: 60px;
  z-index: 3;
`;

export const Username = styled.div`
  color: #fbfcff;
  z-index: 100;
  margin-top: auto;
`;
// export const Gradient = styled.div`
//   position: absolute;
//   width: 389px;
//   height: 40px;
//   left: 20px;
//   top: 940px;
//   background: linear-gradient(180deg, #1d212c 0%, rgba(29, 33, 44, 0.09) 100%);
//   transform: rotate(-180deg);
//   z-index: 3;
// `;
