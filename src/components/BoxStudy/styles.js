import styled from "styled-components";
import { ReactComponent as BookmarkIcon } from "../../assets/images/bookmark.svg";

export const Container = styled.div`
  width: 340px;
  height: 120px;

  background: ${(props) => (props.selected ? "#40FFF4" : "#373C4A")};
  color: ${(props) => (props.selected ? "#17181B" : "#FBFCFF")};
  border-radius: 2px;

  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;

  text-decoration: none;

  transition: all 150ms ease;
  position: relative;

  cursor: pointer;
`;

export const Scehdule = styled.div`
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;
`;
export const Title = styled.div`
  text-decoration: none;

  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
`;

export const Bookmark = styled(BookmarkIcon)`
  position: absolute;
  top: 20px;
  right: 25px;

  border-color: ${(props) => (props.selected ? "#17181B" : "#FBFCFF")};
  ${({ marked }) => (marked === 0 ? { fill: "#FBFCFF" } : null)}
`;

export const Paticipant = styled.div`
  display: flex;
  margin-top: auto;

  padding-left: 5px;
`;

export const Profile = styled.img`
  transform: ${(props) => `translateX(-${props.idx * 5}px)`};
  width: 30px;
  height: 30px;

  overflow: hidden;
  border: 1.4px solid rgba(251, 252, 255, 0.7);
  box-sizing: border-box;
  border-radius: 20px;
`;
