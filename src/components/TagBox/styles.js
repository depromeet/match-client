import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/images/searchIcon.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 260px;
`;

export const Container = styled.div`
  position: absolute;
  height: 52px;
  left: 80px;
  top: 900px;

  background: #1d212c;
  box-shadow: 0px 4px 4px rgba(7, 11, 30, 0.14);

  padding: 0 10px;

  color: #8c8e95;
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 36px;
  /* or 225% */

  display: flex;
  align-items: center;
  letter-spacing: -0.015em;

  /* text_white */

  color: #fbfcff;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  margin: 0 10px;
`;

export const Add = styled(SearchIcon)`
  position: absolute;
  left: 300px;
  top: 15px;
  fill: none;
  transition: all 300ms ease;

  cursor: pointer;
`;

export const FilterList = styled.div`
  height: ${({ showList }) => (showList ? "fit-content" : "0px")};
  opacity: ${({ showList }) => (showList ? 1 : 0)};

  padding: 10px 2px;
  position: fixed;
  width: 248px;

  display: flex;
  flex-wrap: wrap;

  left: 210px;
  bottom: 190px;

  background: #596072;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;

  transition: all 200ms ease;
  z-index: 10;
`;
