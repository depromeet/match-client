import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";

export const Container = styled.div`
  display: flex;
`;

export const Logo = styled(LogoIcon)`
  position: fixed;

  right: 20px;
  bottom: 20px;
`;
