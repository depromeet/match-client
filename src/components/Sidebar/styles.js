import styled from "styled-components";
import homeIcon from "img/menuHome.png";
import CalIcon from "img/menuCal.png";
import CommentIcon from "img/menuComment.png";
import PlusIcon from "img/menuPlus.png";
import SettingIcon from "img/menuSetting.png";
import MsgIcon from "img/menuMsg.png";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 560px;
  background-color: #1d212c;
  z-index: 1;
`;
export const Menu = styled.div`
  position: fixed;
  left: 35px;
  top: 120px;
  height: 420px;
  width: 74px;
  background-color: #1e222e;
  border-radius: 2px;
  filter: drop-shadow(0 0 0.2em rgba(0, 0, 0, 0.3));
`;
export const HomeBtn = styled.img.attrs({
  src: homeIcon,
})`
  position: fixed;
  left: 55px;
  top: 160px;
`;
export const PlusBtn = styled.img.attrs({
  src: PlusIcon,
})`
  position: fixed;
  left: 55px;
  top: 210px;
`;
export const CalBtn = styled.img.attrs({
  src: CalIcon,
})`
  position: fixed;
  left: 55px;
  top: 280px;
`;
export const MsgBtn = styled.img.attrs({
  src: MsgIcon,
})`
  position: fixed;
  left: 55px;
  top: 340px;
`;
export const CommentBtn = styled.img.attrs({
  src: CommentIcon,
})`
  position: fixed;
  left: 55px;
  top: 400px;
`;
export const SetBtn = styled.img.attrs({
  src: SettingIcon,
})`
  position: fixed;
  left: 55px;
  top: 460px;
`;
